import { UserService } from './../../services/user.service';
import { User } from './../../shared/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model = new User("", "");

  constructor(private service: UserService) {}

  onSubmit() {
    this.service.login(this.model).subscribe((res: any) => localStorage.setItem('token', res.token));
  }
}