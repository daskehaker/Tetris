import { Bot } from './../Singleton/gameBot';
import { MessageDto } from './../Dto/MessageDto';
import { ChatService } from './../services/chat.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  msgDto: MessageDto = new MessageDto("", "");
  msgInboxArray: MessageDto[] = [];

  constructor(private chatService: ChatService) {
  }

  ngOnInit(): void {
    this.chatService.retrieveMapperObject().subscribe((receivedObj: MessageDto) => {
      this.addToInbox(receivedObj);
    });
  }

  //Creates Game Bot Singleton instance and itroduces rules to players
  introduceRules(){
    const s1=Bot.getInstance();
    const s2=Bot.getInstance();

    if (s1 === s2) {
      console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
    console.log("Singletone sent message to chat")
    this.chatService.broadcastMessage(s1.introRules());
  }

  // calls the service method to get the new messages sent
  addToInbox(obj: MessageDto) {
    let newObj = new MessageDto(obj.user, obj.msgText);
    this.msgInboxArray.push(newObj);
  }

  //sends the message via service
  send(): void {
    if(this.msgDto) {
      if(this.msgDto.user.length == 0 || this.msgDto.msgText.length == 0){
        window.alert("Both fields are required. ");
        return ;
      } else {
        this.chatService.broadcastMessage(this.msgDto);
      }
    }
  }

}
