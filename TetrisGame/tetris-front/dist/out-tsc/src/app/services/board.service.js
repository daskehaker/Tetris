import { __decorate } from "tslib";
import { environment } from './../../environments/environment';
import { PieceDto } from './../Dto/PieceDto';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
let BoardService = class BoardService {
    constructor(http, connectionService) {
        this.http = http;
        this.connectionService = connectionService;
        this.rootUrl = environment.rootUrl + "board/";
        this.receivePieceObject = new PieceDto();
        this.sharedObj = new Subject();
        this.connectionService.connection.on("Spawn", (x, y, color, shape) => {
            this.mapSpawnPiece(x, y, color, shape);
        });
    }
    mapSpawnPiece(x, y, color, shape) {
        this.receivePieceObject.x = x;
        this.receivePieceObject.y = y;
        this.receivePieceObject.color = color;
        this.receivePieceObject.shape = shape;
        this.sharedObj.next(this.receivePieceObject);
    }
    /* ****************************** Public Mehods **************************************** */
    broadcastPiece() {
        this.http.get(this.rootUrl + 'start').subscribe();
    }
    getEmptyBoard() {
        return this.http.get(this.rootUrl);
    }
    retrieveMapperObject() {
        return this.sharedObj.asObservable();
    }
    MoveDown(piece) {
        return this.http.post(this.rootUrl + 'move/down', piece).subscribe();
    }
    MoveRight(piece) {
        return this.http.post(this.rootUrl + 'move/right', piece).subscribe();
    }
    MoveLeft(piece) {
        return this.http.post(this.rootUrl + 'move/left', piece).subscribe();
    }
    valid(p, board) {
        return p.shape.every((row, dy) => {
            return row.every((value, dx) => {
                let x = p.x + dx;
                let y = p.y + dy;
                return (this.isEmpty(value) ||
                    (this.insideWalls(x) &&
                        this.aboveFloor(y)));
            });
        });
    }
    isEmpty(value) {
        return value === 0;
    }
    insideWalls(x) {
        return x >= 0 && x < 9; //COLS;
    }
    aboveFloor(y) {
        return y <= 18; //ROWS;
    }
};
BoardService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], BoardService);
export { BoardService };
//# sourceMappingURL=board.service.js.map