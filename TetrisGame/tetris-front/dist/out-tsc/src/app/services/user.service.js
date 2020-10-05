import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
let UserService = class UserService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.rootUrl = environment.rootUrl + "appusers/";
    }
    register(newUser) {
        return this.http.post(this.rootUrl + 'register', newUser);
    }
    login(user) {
        return this.http.post(this.rootUrl + 'login', user);
    }
    getUserProfile() {
        var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
        return this.http.get(environment.rootUrl + "userprofiles/", { headers: tokenHeader });
    }
};
UserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map