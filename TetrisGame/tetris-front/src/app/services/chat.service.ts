import { Bot } from './../models/gameBot';
import { ConnectionService } from './connection.service';
import { MessageDto } from './../Dto/MessageDto';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  readonly POST_URL = environment.rootUrl + "chat/send/"

  private receiveMessageObject: MessageDto = new MessageDto("", "");
  private sharedObj = new Subject<MessageDto>();

  constructor(private http: HttpClient, private connectionService: ConnectionService) {
    this.connectionService.connection.on("ReceiveOne", (user, message) => {
      this.mapReceiveMessage(user, message);
    });
  }

  private mapReceiveMessage(user: string, message: string): void {
    this.receiveMessageObject.user = user;
    this.receiveMessageObject.msgText = message;
    this.sharedObj.next(this.receiveMessageObject);
  }

   /* ****************************** Public Mehods **************************************** */

   //Cals the controller method
   public broadcastMessage(msgDto: any){
    //console.log(msgDto)
    this.http.post(this.POST_URL, msgDto).subscribe();
   }

   public retrieveMapperObject(): Observable<MessageDto> {
     return this.sharedObj.asObservable();
   }
}
