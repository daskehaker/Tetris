import { Component } from '@angular/core';
import { User } from 'src/app/shared/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  model = new User("", "");

  constructor(private service: UserService) {}

  onSubmit() {
    this.service.register(this.model).subscribe(res => console.log(res));
  }
}
