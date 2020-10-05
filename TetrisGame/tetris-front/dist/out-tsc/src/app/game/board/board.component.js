import { __decorate } from "tslib";
import { Player } from './../../user/player';
import { Component, ViewChild, HostListener, Input } from '@angular/core';
import { BLOCK_SIZE, ROWS, COLS, KEY } from '../../shared/constants';
import { Piece } from 'src/app/models/piece';
let BoardComponent = class BoardComponent {
    //neveikia
    // moves = {
    //   [KEY.LEFT]: (p: IPiece): IPiece => ({ ...p, x: p.x - 1 }),
    //   [KEY.RIGHT]: (p: IPiece): IPiece => ({ ...p, x: p.x + 1 }),
    //   [KEY.DOWN]: (p: IPiece): IPiece => ({ ...p, y: p.y + 1 }),
    //   [KEY.SPACE]: (p: IPiece): IPiece => ({ ...p, y: p.y + 1 }),
    //   [KEY.UP]: (p: IPiece): IPiece => this.boardService.rotate(p)
    // };
    constructor() {
        this.player = new Player();
    }
    ngOnInit() {
        this.userService.getUserProfile().subscribe((res) => {
            this.player = new Player({ id: res.userId, name: res.UserName });
        });
        this.initBoard();
    }
    keyEvent(event) {
        event.preventDefault();
        var p = Object.assign({}, this.piece.dto);
        switch (event.keyCode) {
            case KEY.RIGHT: {
                p.x++;
                break;
            }
            case KEY.LEFT: {
                p.x--;
                break;
            }
            case KEY.DOWN: {
                p.y++;
                break;
            }
            case KEY.UP: {
                p = this.boardService.rotate(p);
            }
            default: {
                //statements;
                break;
            }
        }
        this.move(p);
    }
    move(p) {
        if (this.boardService.valid(p, this.board)) {
            this.piece.move(p);
            this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
            this.piece.draw();
            this.boardService.broadcastPiece(this.piece.dto);
        }
        else
            console.log("not valid", p, this.piece);
    }
    initBoard() {
        // Get the 2D context that we draw on.
        this.ctx = this.canvas.nativeElement.getContext('2d');
        // Calculate size of canvas from constants.
        this.ctx.canvas.width = COLS * BLOCK_SIZE;
        this.ctx.canvas.height = ROWS * BLOCK_SIZE;
        this.ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
        this.boardService.getEmptyBoard();
    }
    play() {
        this.board = this.boardService.getBoardById(this.player.Id);
        this.piece = new Piece(this.ctx);
        this.piece.draw();
        this.boardService.broadcastPiece(this.piece.dto);
    }
};
__decorate([
    Input()
], BoardComponent.prototype, "boardService", void 0);
__decorate([
    Input()
], BoardComponent.prototype, "userService", void 0);
__decorate([
    ViewChild('board', { static: true })
], BoardComponent.prototype, "canvas", void 0);
__decorate([
    HostListener('window:keydown', ['$event'])
], BoardComponent.prototype, "keyEvent", null);
BoardComponent = __decorate([
    Component({
        selector: 'game-board',
        templateUrl: './board.component.html',
        styleUrls: ['./board.component.css']
    })
], BoardComponent);
export { BoardComponent };
//# sourceMappingURL=board.component.js.map