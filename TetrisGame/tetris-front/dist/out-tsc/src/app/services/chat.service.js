import { __decorate } from "tslib";
import { MessageDto } from './../Dto/MessageDto';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
let ChatService = class ChatService {
    constructor(http, connectionService) {
        this.http = http;
        this.connectionService = connectionService;
        this.POST_URL = environment.rootUrl + "chat/send/";
        this.receiveMessageObject = new MessageDto("", "");
        this.sharedObj = new Subject();
        this.connectionService.connection.on("ReceiveOne", (user, message) => {
            this.mapReceiveMessage(user, message);
        });
    }
    mapReceiveMessage(user, message) {
        this.receiveMessageObject.user = user;
        this.receiveMessageObject.msgText = message;
        this.sharedObj.next(this.receiveMessageObject);
    }
    /* ****************************** Public Mehods **************************************** */
    //Cals the controller method
    broadcastMessage(msgDto) {
        //console.log(msgDto)
        this.http.post(this.POST_URL, msgDto).subscribe();
    }
    retrieveMapperObject() {
        return this.sharedObj.asObservable();
    }
};
ChatService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ChatService);
export { ChatService };
//# sourceMappingURL=chat.service.js.map