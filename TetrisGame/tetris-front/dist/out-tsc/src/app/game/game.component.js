import { __decorate } from "tslib";
import { Component } from '@angular/core';
let GameComponent = class GameComponent {
    constructor(bService, uService) {
        this.bService = bService;
        this.uService = uService;
        this.boardService = bService;
        this.userService = uService;
    }
    ngOnInit() {
    }
};
GameComponent = __decorate([
    Component({
        selector: 'app-game',
        templateUrl: './game.component.html',
        styleUrls: ['./game.component.css']
    })
], GameComponent);
export { GameComponent };
//# sourceMappingURL=game.component.js.map