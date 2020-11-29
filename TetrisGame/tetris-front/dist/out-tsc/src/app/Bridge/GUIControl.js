import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PieceControl } from './PieceControl';
let GUIControl = class GUIControl extends PieceControl {
    constructor(boardService) {
        super();
        this.boardService = boardService;
        this.emitPiece = new EventEmitter();
    }
    rotate() {
        console.log("BRIDGE GUI method was called rotate()");
        this.piece = super.rotate(this.piece);
        this.emitterFunction();
        return this.piece;
    }
    right() {
        console.log("BRIDGE GUI method was called right()");
        this.piece = super.right(this.piece);
        this.emitterFunction();
        return this.piece;
    }
    left() {
        console.log("BRIDGE GUI method was called left()");
        this.piece = super.left(this.piece);
        this.emitterFunction();
        return this.piece;
    }
    down() {
        console.log("BRIDGE GUI method was called down()");
        this.piece = super.down(this.piece);
        this.emitterFunction();
        return this.piece;
    }
    emitterFunction() {
        this.emitPiece.emit(this.piece);
    }
};
__decorate([
    Input()
], GUIControl.prototype, "piece", void 0);
__decorate([
    Output()
], GUIControl.prototype, "emitPiece", void 0);
GUIControl = __decorate([
    Component({
        selector: 'gui-movement',
        template: `
    <button (click)="rotate()">Rotate</button>
    <br>
    <button (click)="right()">Right</button>
    <br>
    <button (click)="left()">Left</button>
    <br>
    <button (click)="down()">Down</button>
    `
    })
], GUIControl);
export { GUIControl };
//# sourceMappingURL=GUIControl.js.map