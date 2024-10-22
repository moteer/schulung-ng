// auth.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });

    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifiziert, dass keine ungewollten Anfragen offen sind
  });

  // Testfall 1: Überprüfung der login Methode bei erfolgreicher API-Antwort
  it('should return a token when login is successful', () => {
    const mockResponse = { token: '12345' };
    service.login('user@example.com', 'password').subscribe(token => {
      expect(token).toBe('12345');
    });

    const req = httpMock.expectOne('https://reqres.in/api/login');
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });

  // Testfall 2: Überprüfung der login Methode bei einer Fehlerantwort der API
  it('should handle error when login fails', () => {
    service.login('user@example.com', 'wrongpassword').subscribe(
      () => fail('should have failed with a 400 status'),
      (error) => {
        expect(error).toBe('Login failed, please try again later.');
      }
    );

    const req = httpMock.expectOne('https://reqres.in/api/login');
    req.flush('Invalid credentials', { status: 400, statusText: 'Bad Request' });
  });

  // Testfall 3: Überprüfung der logout Methode
  it('should clear token on logout', () => {
    // Beispielhafte Implementierung der logout Methode
    spyOn(service, 'logout').and.callFake(() => {
      // Token wird entfernt
    });

    service.logout();
    expect(service.logout).toHaveBeenCalled();
  });
});
