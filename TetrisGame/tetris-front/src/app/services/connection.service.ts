import { ISubject, IObserver } from './../shared/interfaces';
import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService implements ISubject {
  private connectoin: any = new signalR.HubConnectionBuilder().withUrl("https://localhost:44356/tetrissocket", {
    //player1 Token
    accessTokenFactory: () => localStorage.getItem('token')
  }) //mapping to the tetrishus as in startup
  .configureLogging(signalR.LogLevel.Information)
  .build();

  readonly POST_URL = environment.rootUrl + "chat/send/"

  private state = false;
  private observers: IObserver[] = [];

  constructor(private http: HttpClient) {
    this.connectoin.onclose(async () => {
      await this.start();
    });
    this.start();
  }

  // Observer metodai --------------------------
  add(observer: IObserver) {
    const isExist = this.observers.includes(observer);
    if(isExist){
      return console.log('Subject: Observer has been attached already.');
    }

    console.log('Subject: Attached an observer.');
    this.observers.push(observer);
  }

  remove(observer: IObserver) {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
        return console.log('Subject: Nonexistent observer.');
    }

    this.observers.splice(observerIndex, 1);
    console.log('Subject: Detached an observer.');
  }

  notify() {
    console.log('Subject: Notifying observers...');
    for (const observer of this.observers) {
        observer.update(this);
    }
  }
//----------------------------------------------

  public async start(){
    try {
      await this.connectoin.start();
      console.log("connected!");
      this.state = true;
      this.notify();
    }
    catch (err) {
      console.log(err);
      console.log("Prisijungti nepavyko")
      setTimeout(() => this.start(), 5000);
    }
  }

  get connection() {
    return this.connectoin
  }

  getState() {
    return this.state
  }
}
