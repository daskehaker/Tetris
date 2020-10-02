import { IUser } from './../shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl = environment.rootUrl + "appusers/"

  constructor(private http: HttpClient, private router: Router) { }

  register(newUser: IUser){
    return this.http.post(this.rootUrl + 'register', newUser);
  }

  login(user: IUser){
    return this.http.post(this.rootUrl + 'login', user);
  }
}
