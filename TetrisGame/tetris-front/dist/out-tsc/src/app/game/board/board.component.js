import { __decorate } from "tslib";
import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { Piece } from 'src/app/models/piece';
import { getSpeed, Time } from 'src/app/models/time';
import { Points } from 'src/app/shared/points';
import { Director, PieceBuilder } from '../../Builder/builder';
import { changeColor, changeShape } from '../../Command/command';
import { BLOCK_SIZE, COLORS, COLS, KEY, LEVEL, ROWS } from '../../shared/constants';
import { Context, defender1, defender2, defender3, defender4 } from '../../Strategy/strategy';
import { OponentBoardComponent } from '../oponent-board/oponent-board.component';
import { Player } from './../../user/player';
let BoardComponent = class BoardComponent {
    //neveikia
    // moves = {
    //   [KEY.LEFT]: (p: IPiece): IPiece => ({ ...p, x: p.x - 1 }),
    //   [KEY.RIGHT]: (p: IPiece): IPiece => ({ ...p, x: p.x + 1 }),
    //   [KEY.DOWN]: (p: IPiece): IPiece => ({ ...p, y: p.y + 1 }),
    //   [KEY.SPACE]: (p: IPiece): IPiece => ({ ...p, y: p.y + 1 }),
    //   [KEY.UP]: (p: IPiece): IPiece => this.boardService.rotate(p)
    // };
    constructor(chatService) {
        this.chatService = chatService;
        this.player = new Player();
        this.time = new Time({ start: 0, elapsed: 0, level: 1000 });
        this.strategy = new Context(new defender1());
        this.pieceCount = 0;
        this.oponentBoard = new OponentBoardComponent;
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
                this.move(p);
                break;
            }
            case KEY.LEFT: {
                p.x--;
                this.move(p);
                break;
            }
            case KEY.DOWN: {
                p.y++;
                this.move(p);
                break;
            }
            case KEY.UP: {
                p = this.boardService.rotate(p);
                this.piece.rotationCount++;
                this.move(p);
                break;
            }
            case KEY.E: {
                if (this.commandShape == null) {
                    this.commandShape = new changeShape(this.piece);
                }
                this.commandShape.execute();
                break;
            }
            case KEY.R: {
                this.commandShape.undo();
                break;
            }
            case KEY.D: {
                if (this.commandColor == null) {
                    this.commandColor = new changeColor(this.piece);
                }
                this.commandColor.execute();
                break;
            }
            case KEY.F: {
                this.commandColor.undo();
                break;
            }
            default: {
                //statements;
                break;
            }
        }
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
    //play() {
    //  this.board = this.boardService.getBoardById(this.player.Id)
    //  this.piece = new Piece(this.ctx);
    //  //this.piece.draw();
    //  this.animate();
    //  this.boardService.broadcastPiece(this.piece.dto);
    //}
    animate(now = 0) {
        // Update elapsed time.
        this.time.elapsed = now - this.time.start;
        // If elapsed time has passed time for current level
        if (this.time.elapsed > this.time.level) {
            // Reset start time
            this.time.start = now;
            this.time = getSpeed(this.time, this.player.level);
            if (this.pieceCount > 0) {
                //=============Strategy Spell=======================
                switch (this.piece.color.toLowerCase()) {
                    case "blue":
                        this.strategy.setStrategy(new defender1());
                        this.move(this.strategy.defend(this.player.name, this.piece, this.boardService));
                        break;
                    case "yellow":
                        this.strategy.setStrategy(new defender4());
                        this.strategy.defend(this.player.name, this.piece, this.boardService);
                        break;
                    default:
                }
                //==================================
            }
            if (!this.drop()) {
                this.gameOver();
                return;
            }
        }
        this.draw();
        this.requestId = requestAnimationFrame(this.animate.bind(this));
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
            this.clearLines();
            this.boardService.broadcastBoard(this.board);
            if (this.piece.y === 0) {
                // Game over
                return false;
            }
            this.piece = new Piece(this.ctx);
            this.pieceCount--;
            //=============Strategy Spell=======================
            if (this.pieceCount > 0) {
                if (this.piece.color.toLowerCase() == "green") {
                    this.strategy.setStrategy(new defender2());
                    this.strategy.defend(this.player.name, this.piece, this.boardService);
                }
                else if (this.piece.color.toLowerCase() == "red") {
                    this.strategy.setStrategy(new defender3());
                    this.strategy.defend(this.player.name, this.piece, this.boardService);
                }
                else {
                    KEY.RIGHT = 39;
                    KEY.LEFT = 37;
                }
            }
            else {
                KEY.RIGHT = 39;
                KEY.LEFT = 37;
            }
            this.piece.rotationCount = 0;
            KEY.UP = 38;
            this.commandColor = null;
            this.commandShape = null;
            /////
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
        //console.table(this.board);
    }
    clearLines() {
        let lines = 0;
        this.board.forEach((row, y) => {
            // If every value is greater than 0.
            if (row.every(value => value > 0)) {
                lines++;
                // Remove the row.
                this.board.splice(y, 1);
                // Add a zero filled at the top.
                this.board.unshift(Array(COLS).fill(0));
            }
        });
        if (lines > 0) {
            // Add points if we cleared some lines
            this.player.points += this.getLineClearPoints(lines, this.player.level);
            this.player.lines += lines;
            // If we have reached the lines per level
            if (this.player.lines >= 1 /*LINES_PER_LEVEL*/) {
                // Goto next level
                this.player.level++;
                // Remove lines so we start working for the next level
                this.player.lines -= 1; //LINES_PER_LEVEL;
                // Increase speed of game.
                this.time.level = LEVEL[this.player.level];
            }
        }
    }
    gameOver() {
        cancelAnimationFrame(this.requestId);
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(1, 3, 8, 1.2);
        this.ctx.font = '1px Arial';
        this.ctx.fillStyle = 'red';
        this.ctx.fillText('GAME OVER', 1.8, 4);
    }
    getLineClearPoints(lines, level) {
        const lineClearPoints = lines === 1 ? Points.SINGLE :
            lines === 2 ? Points.DOUBLE :
                lines === 3 ? Points.TRIPLE :
                    lines === 4 ? Points.TETRIS : 0;
        return (level + 1) * lineClearPoints;
    }
    play() {
        this.board = this.boardService.getBoardById(this.player.Id);
        this.piece = new Piece(this.ctx);
        console.log("play");
        //this.piece.draw();
        this.animate();
        this.boardService.broadcastPiece(this.piece.dto);
    }
    player1() {
        if (this.player.points >= -200) {
            this.player.points -= 200;
            this.pieceCount = 5;
        }
    }
    player2() {
        this.director = new Director(this.player);
        this.builder = new PieceBuilder();
        this.director.setBuilder(this.builder);
        this.director.buildBomb();
        var bomb = this.builder.getSpecialPiece();
        this.piece.color = bomb.color;
        this.piece.shape = bomb.shape;
        this.piece.dto.shape = bomb.shape;
    }
    player3() {
        this.director = new Director(this.player);
        this.builder = new PieceBuilder();
        this.director.setBuilder(this.builder);
        this.director.BuildLongPiece();
        var long = this.builder.getSpecialPiece();
        this.piece.color = long.color;
        this.piece.shape = long.shape;
        this.piece.dto.shape = long.shape;
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