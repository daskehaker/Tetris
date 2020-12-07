import { Piece } from 'src/app/models/piece';
import { Player } from './../user/player';
import { environment } from './../../environments/environment';
import { IPiece, IObserver } from './../shared/interfaces';
import { ConnectionService } from './connection.service';
import { PieceDto } from './../Dto/PieceDto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { COLS, ROWS } from '../shared/constants';
import { Board } from '../models/board';
import { SpecialPiece } from '../models/SpecialPiece';
import { IAdapter } from '../Adapter/IAdapter';
import { Adapter } from '../Adapter/Adapter';

@Injectable({
  providedIn: 'root'
})
export class BoardService implements IObserver {

  readonly rootUrl=environment.rootUrl + "board/"
  boards: Board[] = [];

  private sharedPiece = new Subject<PieceDto>();
  private sharedBoard = new Subject<number[][]>();
  private adapter: IAdapter;

  constructor(private http: HttpClient, private connectionService:ConnectionService) {
    this.adapter = new Adapter();
    this.connectionService.connection.on("Spawn", (x, y, color, shape) => {
      this.adapter.mapSpawnPiece(x, y, color, shape)
      this.sharedPiece.next(this.adapter.getPiece());
    });
    this.connectionService.connection.on("BroadcastBoard", (board) => {
      this.sharedBoard.next(board)
    });
    this.connectionService.add(this);
  }

  /* ****************************** Public Mehods **************************************** */

  public update(): void {
    if(this.connectionService.getState() == true){
      console.log("Board Observer reacted to event");
    }
  }

  public broadcastBoard(board: number[][]) {
    var tokenHeader = new HttpHeaders({'Authorization':'Bearer ' + localStorage.getItem('token')});
    this.http.post(this.rootUrl + 'broadcarst/board', board, {headers: tokenHeader}).subscribe()
  }

  public broadcastPiece(piece: IPiece){
    var tokenHeader = new HttpHeaders({'Authorization':'Bearer ' + localStorage.getItem('token')});
    this.http.post(this.rootUrl + 'start', piece, {headers: tokenHeader}).subscribe()
  }

  public broadcastPieceBuilder(piece: SpecialPiece) {
    var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    this.http.post(this.rootUrl + 'start', piece, { headers: tokenHeader }).subscribe()
  }

  getEmptyBoard() {
    var tokenHeader = new HttpHeaders({'Authorization':'Bearer ' + localStorage.getItem('token')})
    this.http.get(this.rootUrl, {headers: tokenHeader}).subscribe((res: any) => {
      let board = new Board({
        player : new Player({id: res.Player}),
        height: res.Height,
        width: res.Width,
        boradMatrix: res.BoardMatrix
      })
      this.boards.push(board);
    })
  }

  getBoards(): Board[] {
    return this.boards;
  }

  getBoardById(id: string){
    return this.boards.find(b => b.player.Id === id).boradMatrix;
  }

  public retrieveMapperPiece(): Observable<PieceDto> {
    return this.sharedPiece.asObservable();
  }

  public retrieveMapperBoard(): Observable<number[][]> {
    return this.sharedBoard.asObservable();
  }


  // -------------- GAME LOGIC --------------------
  valid(p: IPiece, board: number[][]): boolean {
    return p.shape.every((row, dy) => {
      return row.every((value, dx) => {
        let x = p.x + dx;
        let y = p.y + dy;
        return (
          this.isEmpty(value) ||
          (this.insideWalls(x) &&
            this.aboveFloor(y) &&
            this.notOccupied(board, x, y))
        );
      });
    });
  }

  isEmpty(value: number): boolean {
    return value === 0;
  }

  insideWalls(x: number): boolean {
    return x >= 0 && x < COLS;
  }

  aboveFloor(y: number): boolean {
    return y <= ROWS;
  }

  notOccupied(board: number[][], x: number, y: number): boolean {
    return board[y] && board[y][x] === 0;
  }

  rotate(piece: IPiece): IPiece {
    let p: IPiece = JSON.parse(JSON.stringify(piece));
    for (let y = 0; y < p.shape.length; ++y) {
      for (let x = 0; x < y; ++x) {
        [p.shape[x][y], p.shape[y][x]] = [p.shape[y][x], p.shape[x][y]];
      }
    }
    p.shape.forEach(row => row.reverse());
    return p;
  }

}
