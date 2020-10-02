import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
let ConnectionService = class ConnectionService {
    constructor() {
        this.connectoin = new signalR.HubConnectionBuilder().withUrl("https://localhost:44356/tetrissocket") //mapping to the tetrishus as in startup
            .configureLogging(signalR.LogLevel.Information)
            .build();
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