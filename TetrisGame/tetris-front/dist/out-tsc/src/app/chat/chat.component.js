import { __decorate } from "tslib";
import { Bot } from './../models/gameBot';
import { MessageDto } from './../Dto/MessageDto';
import { Component } from '@angular/core';
let ChatComponent = class ChatComponent {
    constructor(chatService) {
        this.chatService = chatService;
        this.msgDto = new MessageDto();
        this.msgInboxArray = [];
    }
    ngOnInit() {
        this.chatService.retrieveMapperObject().subscribe((receivedObj) => {
            this.addToInbox(receivedObj);
        });
    }
    //Creates Game Bot Singleton instance and itroduces rules to players
    introduceRules() {
        const s1 = Bot.getInstance();
        const s2 = Bot.getInstance();
        if (s1 === s2) {
            console.log('Singleton works, both variables contain the same instance.');
        }
        else {
            console.log('Singleton failed, variables contain different instances.');
        }
    }
    // calls the service method to get the new messages sent
    addToInbox(obj) {
        let newObj = new MessageDto();
        newObj.user = obj.user;
        newObj.msgText = obj.msgText;
        this.msgInboxArray.push(newObj);
    }
    //sends the message via service
    send() {
        if (this.msgDto) {
            if (this.msgDto.user.length == 0 || this.msgDto.msgText.length == 0) {
                window.alert("Both fields are required. ");
                return;
            }
            else {
                this.chatService.broadcastMessage(this.msgDto);
            }
        }
    }
};
ChatComponent = __decorate([
    Component({
        selector: 'chat',
        templateUrl: './chat.component.html',
        styleUrls: ['./chat.component.css']
    })
], ChatComponent);
export { ChatComponent };
//# sourceMappingURL=chat.component.js.map