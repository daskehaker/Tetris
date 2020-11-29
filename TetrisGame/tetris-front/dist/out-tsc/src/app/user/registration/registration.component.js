import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { NewUser } from 'src/app/shared/user';
let RegistrationComponent = class RegistrationComponent {
    constructor(service) {
        this.service = service;
        this.model = new NewUser("", "", "");
    }
    onSubmit() {
        this.service.register(this.model).subscribe(res => console.log(res));
    }
};
RegistrationComponent = __decorate([
    Component({
        selector: 'app-registration',
        templateUrl: './registration.component.html',
        styleUrls: ['./registration.component.css']
    })
], RegistrationComponent);
export { RegistrationComponent };
//# sourceMappingURL=registration.component.js.map