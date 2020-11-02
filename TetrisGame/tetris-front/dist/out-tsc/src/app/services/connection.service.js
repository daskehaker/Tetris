import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { environment } from 'src/environments/environment';
let ConnectionService = class ConnectionService {
    constructor(http) {
        this.http = http;
        this.connectoin = new signalR.HubConnectionBuilder().withUrl("https://localhost:44356/tetrissocket", {
            //player1 Token
            accessTokenFactory: () => localStorage.getItem('token')
        }) //mapping to the tetrishus as in startup
            .configureLogging(signalR.LogLevel.Information)
            .build();
        this.POST_URL = environment.rootUrl + "chat/send/";
        this.state = false;
        this.observers = [];
        this.connectoin.onclose(() => __awaiter(this, void 0, void 0, function* () {
            yield this.start();
        }));
        this.start();
    }
    // Observer metodai --------------------------
    add(observer) {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }
        console.log('Subject: Attached an observer.');
        this.observers.push(observer);
    }
    remove(observer) {
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
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.connectoin.start();
                console.log("connected!");
                this.state = true;
                this.notify();
            }
            catch (err) {
                console.log(err);
                console.log("Prisijungti nepavyko");
                setTimeout(() => this.start(), 5000);
            }
        });
    }
    get connection() {
        return this.connectoin;
    }
    getState() {
        return this.state;
    }
};
ConnectionService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ConnectionService);
export { ConnectionService };
//# sourceMappingURL=connection.service.js.map