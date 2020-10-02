import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { COLS, BLOCK_SIZE, ROWS } from '../../shared/constants';
let OponentBoardComponent = class OponentBoardComponent {
    constructor() { }
    ngOnInit() {
        this.initBoard();
    }
    initBoard() {
        // Get the 2D context that we draw on.
        this.ctx = this.canvas.nativeElement.getContext('2d');
        // Calculate size of canvas from constants.
        this.ctx.canvas.width = COLS * BLOCK_SIZE;
        this.ctx.canvas.height = ROWS * BLOCK_SIZE;
        this.ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
    }
};
__decorate([
    ViewChild('board', { static: true })
], OponentBoardComponent.prototype, "canvas", void 0);
OponentBoardComponent = __decorate([
    Component({
        selector: 'oponent-board',
        templateUrl: './oponent-board.component.html',
        styleUrls: ['./oponent-board.component.css']
    })
], OponentBoardComponent);
export { OponentBoardComponent };
//# sourceMappingURL=oponent-board.component.js.map