import { Adapter } from './../Adapter/Adapter';
import { INewUser, IUser } from './../shared/interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IAdapter } from '../Adapter/IAdapter';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl = environment.rootUrl + "appusers/"
  adapter: IAdapter;

  constructor(private http: HttpClient, private router: Router) { }

  register(newUser: INewUser){
    this.adapter = new Adapter();
    this.adapter.mapUser(newUser);
    return this.http.post(this.rootUrl + 'register', this.adapter.getUser());
  }

  login(user: IUser){
    return this.http.post(this.rootUrl + 'login', user);
  }

  getUserProfile(){
    var tokenHeader = new HttpHeaders({'Authorization':'Bearer ' + localStorage.getItem('token')});
    return this.http.get(environment.rootUrl + "userprofiles/", {headers: tokenHeader});
  }
}
