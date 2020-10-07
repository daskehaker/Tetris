import { __decorate } from "tslib";
import { Player } from './../user/player';
import { environment } from './../../environments/environment';
import { PieceDto } from './../Dto/PieceDto';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { COLS, ROWS } from '../shared/constants';
import { Board } from '../models/board';
let BoardService = class BoardService {
    constructor(http, connectionService) {
        this.http = http;
        this.connectionService = connectionService;
        this.rootUrl = environment.rootUrl + "board/";
        this.boards = [];
        this.receivePieceObject = new PieceDto();
        this.sharedPiece = new Subject();
        this.sharedBoard = new Subject();
        this.connectionService.connection.on("Spawn", (x, y, color, shape) => {
            this.mapSpawnPiece(x, y, color, shape);
        });
        this.connectionService.connection.on("BroadcastBoard", (board) => {
            this.sharedBoard.next(board);
        });
        this.connectionService.add(this);
    }
    mapSpawnPiece(x, y, color, shape) {
        this.receivePieceObject.x = x;
        this.receivePieceObject.y = y;
        this.receivePieceObject.color = color;
        this.receivePieceObject.shape = shape;
        this.sharedPiece.next(this.receivePieceObject);
    }
    /* ****************************** Public Mehods **************************************** */
    update() {
        if (this.connectionService.getState() == true) {
            console.log("Board Observer reacted to event");
        }
    }
    broadcastBoard(board) {
        var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
        this.http.post(this.rootUrl + 'start', board, { headers: tokenHeader }).subscribe();
    }
    broadcastPiece(piece) {
        var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
        this.http.post(this.rootUrl + 'broadcarst/board', piece, { headers: tokenHeader }).subscribe();
    }
    getEmptyBoard() {
        var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
        this.http.get(this.rootUrl, { headers: tokenHeader }).subscribe((res) => {
            let board = new Board({
                player: new Player({ id: res.Player }),
                height: res.Height,
                width: res.Width,
                boradMatrix: res.BoardMatrix
            });
            this.boards.push(board);
        });
    }
    getBoards() {
        return this.boards;
    }
    getBoardById(id) {
        return this.boards.find(b => b.player.Id === id).boradMatrix;
    }
    retrieveMapperPiece() {
        return this.sharedPiece.asObservable();
    }
    retrieveMapperBoard() {
        return this.sharedBoard.asObservable();
    }
    // -------------- GAME LOGIC --------------------
    valid(p, board) {
        return p.shape.every((row, dy) => {
            return row.every((value, dx) => {
                let x = p.x + dx;
                let y = p.y + dy;
                return (this.isEmpty(value) ||
                    (this.insideWalls(x) &&
                        this.aboveFloor(y) &&
                        this.notOccupied(board, x, y)));
            });
        });
    }
    isEmpty(value) {
        return value === 0;
    }
    insideWalls(x) {
        return x >= 0 && x < COLS;
    }
    aboveFloor(y) {
        return y <= ROWS;
    }
    notOccupied(board, x, y) {
        return board[y] && board[y][x] === 0;
    }
    rotate(piece) {
        let p = JSON.parse(JSON.stringify(piece));
        for (let y = 0; y < p.shape.length; ++y) {
            for (let x = 0; x < y; ++x) {
                [p.shape[x][y], p.shape[y][x]] = [p.shape[y][x], p.shape[x][y]];
            }
        }
        p.shape.forEach(row => row.reverse());
        return p;
    }
};
BoardService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], BoardService);
export { BoardService };
//# sourceMappingURL=board.service.js.map