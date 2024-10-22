import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserComponent} from './user/user.component';
import {IsbnValidatorComponent} from './isbn-validator/isbn-validator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, IsbnValidatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'schulung-ng';
}
