import { __decorate } from "tslib";
import { Player } from './../../user/player';
import { Component, ViewChild, HostListener, Input } from '@angular/core';
import { BLOCK_SIZE, ROWS, COLS, KEY, COLORS } from '../../shared/constants';
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
        this.time = { start: 0, elapsed: 0, level: 1000 };
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
        //this.piece.draw();
        this.animate();
        this.boardService.broadcastPiece(this.piece.dto);
    }
    animate(now = 0) {
        // Update elapsed time.
        this.time.elapsed = now - this.time.start;
        // If elapsed time has passed time for current level
        if (this.time.elapsed > this.time.level) {
            // Reset start time
            this.time.start = now;
            this.drop();
        }
        this.draw();
        requestAnimationFrame(this.animate.bind(this));
    }
    move(p) {
        if (this.boardService.valid(p, this.board)) {
            this.piece.move(p);
            this.boardService.broadcastPiece(this.piece.dto);
        }
        else
            console.log("not valid", p, this.piece);
    }
    drop() {
        var p = Object.assign({}, this.piece.dto);
        p.y++;
        if (this.boardService.valid(p, this.board)) {
            this.piece.move(p);
            this.boardService.broadcastPiece(this.piece.dto);
        }
        else {
            this.freeze();
            //this.clearLines();
            if (this.piece.y === 0) {
                // Game over
                return false;
            }
            this.piece = new Piece(this.ctx);
            //this.piece = this.next;
            //this.next = new Piece(this.ctx);
            //this.next.drawNext(this.ctxNext);
        }
        return true;
    }
    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.piece.draw();
        this.drawBoard();
    }
    drawBoard() {
        this.board.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    this.ctx.fillStyle = COLORS[value];
                    this.ctx.fillRect(x, y, 1, 1);
                }
            });
        });
    }
    ///when piece cannot move anymore
    freeze() {
        this.piece.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    this.board[y + this.piece.y][x + this.piece.x] = value;
                }
            });
        });
        this.boardService.broadcastBoard(this.board);
        //console.table(this.board);
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