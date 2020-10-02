import { Bot } from './../models/gameBot';
import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  private connectoin: any = new signalR.HubConnectionBuilder().withUrl("https://localhost:44356/tetrissocket") //mapping to the tetrishus as in startup
  .configureLogging(signalR.LogLevel.Information)
  .build();

  readonly POST_URL = environment.rootUrl + "chat/send/"

  constructor(private http: HttpClient) {
    this.connectoin.onclose(async () => {
      await this.start();
    });
    this.start();
  }

  public async start(){
    try {
      await this.connectoin.start();
      console.log("connected!")
      this.http.post(this.POST_URL, Bot.getInstance().introRules()).subscribe();
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
}
