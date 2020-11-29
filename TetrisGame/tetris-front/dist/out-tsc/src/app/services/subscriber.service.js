import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
let SubscriberService = class SubscriberService {
    constructor(connectionService) {
        this.connectionService = connectionService;
        this.sharedBoard = new Subject();
        this.observers = [];
        this.connectionService.connection.on("BroadcastBoard", (board) => {
            this.boardState = board;
            this.sharedBoard.next(board);
            this.notify('Subscriber service Subject: Notifying observers...');
        });
    }
    add(observer) {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subscriber service Subject: Observer has been attached already.');
        }
        console.log('Subscriber service Subject: Attached an observer.');
        this.observers.push(observer);
    }
    remove(observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subscriber service Subject: Nonexistent observer.');
        }
        this.observers.splice(observerIndex, 1);
        console.log('Subscriber service Subject: Detached an observer.');
    }
    notify(line) {
        if (line)
            console.log(line);
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
    retrieveMapperBoard() {
        return this.sharedBoard.asObservable();
    }
};
SubscriberService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SubscriberService);
export { SubscriberService };
//# sourceMappingURL=subscriber.service.js.map