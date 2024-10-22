import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any[] | undefined;
  text =   " 🎉 hello";
  constructor(private service: UserService) {}

  ngOnInit() {
    this.users = this.service.getUsers();
  }
}
