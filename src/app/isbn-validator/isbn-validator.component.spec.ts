import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsbnValidatorComponent } from './isbn-validator.component';

fdescribe('IsbnValidatorComponent', () => {
  let isbnValidatorComponent: IsbnValidatorComponent;
  let fixture: ComponentFixture<IsbnValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsbnValidatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsbnValidatorComponent);
    isbnValidatorComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(isbnValidatorComponent).toBeTruthy();
  });

  // 10 ziffern oder 13 ziffern
  it('isbn should be valid with 10 or 13 digits', () => {
    isbnValidatorComponent.isbn = '1234567890';
    expect(isbnValidatorComponent.isValid()).toBeTrue();

    isbnValidatorComponent.isbn = '1234567891123';  // 13 digits
    expect(isbnValidatorComponent.isValid()).toBeTrue();
  })

  it('isbn should not be valid with other than 10 or 13 digits', () => {
    isbnValidatorComponent.isbn = '123456789';  // 9 digits
    expect(isbnValidatorComponent.isValid()).toBeFalse();

    isbnValidatorComponent.isbn = '12345678911';  // 11 digits
    expect(isbnValidatorComponent.isValid()).toBeFalse();
  })

  it('should display message for valid isbn', () => {
    // <p id="isbnValid">isbn ist valide!</p>
    isbnValidatorComponent.isbn = '1234567891123';  // 13 digits
    isbnValidatorComponent.isValid();
    expect(isbnValidatorComponent.message).toEqual('isbn ist valide!');

    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#isbnValid')
        .textContent).toContain('isbn ist valide!');

  })


  });
