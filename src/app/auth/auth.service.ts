// auth.service.ts
import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://reqres.in/api/login';

  http: HttpClient = inject(HttpClient)

  //constructor(private http: HttpClient) {}


  login(username: string, password: string): Observable<string> {
    return this.http.post<{ token: string }>(`${this.apiUrl}`, { email: username, password: password })
      .pipe(
        map(response => response.token),
        catchError(error => {
          console.error('Login failed', error);
          return throwError('Login failed, please try again later.');
        })
      );
  }

  logout(): void {
    // Implementiere die Logik zum Abmelden des Benutzers
  }
}
