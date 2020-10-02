import { __awaiter, __decorate } from "tslib";
import { Bot } from './../models/gameBot';
import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { environment } from 'src/environments/environment';
let ConnectionService = class ConnectionService {
    constructor(http) {
        this.http = http;
        this.connectoin = new signalR.HubConnectionBuilder().withUrl("https://localhost:44356/tetrissocket") //mapping to the tetrishus as in startup
            .configureLogging(signalR.LogLevel.Information)
            .build();
        this.POST_URL = environment.rootUrl + "chat/send/";
        this.connectoin.onclose(() => __awaiter(this, void 0, void 0, function* () {
            yield this.start();
        }));
        this.start();
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.connectoin.start();
                console.log("connected!");
                this.http.post(this.POST_URL, Bot.getInstance().introRules()).subscribe();
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
};
ConnectionService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ConnectionService);
export { ConnectionService };
//# sourceMappingURL=connection.service.js.map