import { __decorate } from "tslib";
import { User } from './../../shared/user';
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(service) {
        this.service = service;
        this.model = new User("", "");
    }
    onSubmit() {
        this.service.login(this.model).subscribe(res => console.log(res));
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map