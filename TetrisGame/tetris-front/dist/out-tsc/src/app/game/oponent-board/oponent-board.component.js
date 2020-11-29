import { __decorate } from "tslib";
import { Player } from './../../user/player';
import { Component, ViewChild, Input } from '@angular/core';
import { COLS, BLOCK_SIZE, ROWS, COLORS } from '../../shared/constants';
let OponentBoardComponent = class OponentBoardComponent {
    constructor(subscriberService) {
        this.subscriberService = subscriberService;
        //token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiJmZGU2YTg5Ny0xMmNhLTRjYjEtYTQwZS02ZjYwODk0OWI0ZGUiLCJuYmYiOjE2MDE4ODgzNTQsImV4cCI6MTYxNzYxMzE1NCwiaWF0IjoxNjAxODg4MzU0fQ.Zpv7hvOteKNtd9RGEzxux6ZT4-C9nnmnIKVt4j_kMMM"
        this.player = new Player({ id: "fde6a897-12ca-4cb1-a40e-6f608949b4de", name: "player2" });
    }
    getPlayerName() {
        return null;
    }
    ngOnInit() {
        this.subscriberService.add(this);
        this.initBoard();
        this.boardService.retrieveMapperPiece().subscribe((receivedObj) => {
            this.pieceDto = receivedObj;
            this.draw(receivedObj);
        });
        /*this.boardService.retrieveMapperBoard().subscribe((retrieveObj: number[][]) => {
          this.board = retrieveObj;
          //this.drawBoard()
        })*/
    }
    ngOnDestroy() {
        this.subscriberService.remove(this);
    }
    update(subject) {
        console.log("OBSERVER updates oponent board");
        this.subscriberService.retrieveMapperBoard().subscribe((retrieveObj) => {
            this.board = retrieveObj;
        });
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
    draw(obj) {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.fillStyle = obj.color;
        obj.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    // this.x & this.y = position on the board
                    // x & y position are the positions of the shape
                    this.ctx.fillRect(obj.x + x, obj.y + y, 1, 1);
                }
            });
        });
        this.drawBoard();
    }
    drawBoard() {
        if (this.board != null) {
            this.board.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value > 0) {
                        this.ctx.fillStyle = COLORS[value];
                        this.ctx.fillRect(x, y, 1, 1);
                    }
                });
            });
        }
    }
};
__decorate([
    Input()
], OponentBoardComponent.prototype, "boardService", void 0);
__decorate([
    Input()
], OponentBoardComponent.prototype, "userService", void 0);
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