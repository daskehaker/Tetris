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
        this.piece = super.rotate(this.piece);
        this.emitPiece.emit(this.piece);
        return this.piece
    }

    right(){
        this.piece = super.right(this.piece);
        this.emitPiece.emit(this.piece);
        return this.piece
    }

    left(){
        this.piece = super.left(this.piece);
        this.emitPiece.emit(this.piece);
        return this.piece
    }

    down(){
        this.piece = super.down(this.piece);
        this.emitPiece.emit(this.piece);
        return this.piece
    }
}