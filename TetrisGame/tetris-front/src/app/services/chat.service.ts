import { IObserver } from './../shared/interfaces';
import { Bot } from './../Singleton/gameBot';
import { ConnectionService } from './connection.service';
import { MessageDto } from './../Dto/MessageDto';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { displayedMessage } from '../interpreter/interpreter';

@Injectable({
  providedIn: 'root'
})
export class ChatService implements IObserver {
  readonly POST_URL = environment.rootUrl + "chat/send/"

  private receiveMessageObject: MessageDto = new MessageDto("", "");
  private sharedObj = new Subject<MessageDto>();

  constructor(private http: HttpClient, private connectionService: ConnectionService) {
    this.connectionService.connection.on("ReceiveOne", (user, message) => {
      this.mapReceiveMessage(user, message);
    });
    this.connectionService.add(this);
  }

  private mapReceiveMessage(user: string, message: string): void {
    this.receiveMessageObject.user = user;
    this.receiveMessageObject.msgText = displayedMessage(message);
    this.sharedObj.next(this.receiveMessageObject);
  }

   /* ****************************** Public Mehods **************************************** */

   //Cals the controller method
   public broadcastMessage(msgDto: any){
    //console.log(msgDto)
    this.http.post(this.POST_URL, msgDto, {headers : new HttpHeaders({ 'Content-Type': 'application/json' })}).subscribe();
   }

   public retrieveMapperObject(): Observable<MessageDto> {
     return this.sharedObj.asObservable();
   }

   public update(): void {
    if(this.connectionService.getState() == true){
      console.log("Chat Observer reacted to event");
      this.http.post(this.POST_URL, Bot.getInstance().introRules()).subscribe();
    }
  }
}
