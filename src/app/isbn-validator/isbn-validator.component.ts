import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-isbn-validator',
    standalone: true,
    imports: [
        FormsModule
    ],
    templateUrl: './isbn-validator.component.html',
    styleUrl: './isbn-validator.component.css'
})
export class IsbnValidatorComponent {
    isbn: string = '';
    message: string = '';

    isValid() {
        this.message = 'isbn ist valide!';
        return this.isbn.length == 10
            || this.isbn.length == 13;
    }
}
