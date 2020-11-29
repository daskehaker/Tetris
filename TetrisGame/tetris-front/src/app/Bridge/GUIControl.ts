import { BoardService } from './../services/board.service';
import { IPiece } from 'src/app/shared/interfaces';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PieceControl } from './PieceControl';

@Component({
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
export class GUIControl extends PieceControl {
    @Input() piece: IPiece
    @Output() emitPiece = new EventEmitter<IPiece>();

    constructor(private boardService: BoardService){
        super();
    }

    rotate(){
        console.log("BRIDGE GUI method was called rotate()")
        this.piece = super.rotate(this.piece);
        this.emitterFunction()
        return this.piece
    }

    right(){
        console.log("BRIDGE GUI method was called right()")
        this.piece = super.right(this.piece);
        this.emitterFunction()
        return this.piece
    }

    left(){
        console.log("BRIDGE GUI method was called left()")
        this.piece = super.left(this.piece);
        this.emitterFunction()
        return this.piece
    }

    down(){
        console.log("BRIDGE GUI method was called down()")
        this.piece = super.down(this.piece);
        this.emitterFunction()
        return this.piece
    }

    emitterFunction(){
        this.emitPiece.emit(this.piece);
    }
}