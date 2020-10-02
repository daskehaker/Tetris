import { environment } from './../../environments/environment';
import { IPiece } from './../shared/interfaces';
import { ConnectionService } from './connection.service';
import { PieceDto } from './../Dto/PieceDto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ROWS, COLS } from '../shared/constants';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  readonly rootUrl=environment.rootUrl + "board/"

  private receivePieceObject: PieceDto = new PieceDto();
  private sharedObj = new Subject<PieceDto>();

  constructor(private http: HttpClient, private connectionService:ConnectionService) {
    this.connectionService.connection.on("Spawn", (x, y, color, shape) => {
      this.mapSpawnPiece(x, y, color, shape);
    });
  }

  private mapSpawnPiece(x: number, y: number, color: string, shape: number[][]) {
    this.receivePieceObject.x = x;
    this.receivePieceObject.y = y;
    this.receivePieceObject.color = color;
    this.receivePieceObject.shape = shape;
    this.sharedObj.next(this.receivePieceObject);
  }

  /* ****************************** Public Mehods **************************************** */

  public broadcastPiece(){
    this.http.get(this.rootUrl + 'start').subscribe()
  }

  getEmptyBoard() {
    return this.http.get(this.rootUrl);
  }

  public retrieveMapperObject(): Observable<PieceDto> {
    return this.sharedObj.asObservable();
  }

  MoveDown(piece: PieceDto) {
    return this.http.post(this.rootUrl + 'move/down', piece).subscribe()
  }

  MoveRight(piece: PieceDto) {
    return this.http.post(this.rootUrl + 'move/right', piece).subscribe()
  }

  MoveLeft(piece: PieceDto) {
    return this.http.post(this.rootUrl + 'move/left', piece).subscribe()
  }

  valid(p: IPiece, board: number[][]): boolean {
    return p.shape.every((row, dy) => {
      return row.every((value, dx) => {
        let x = p.x + dx;
        let y = p.y + dy;
        return (
          this.isEmpty(value) ||
          (this.insideWalls(x) &&
            this.aboveFloor(y) )
        );
      });
    });
  }

  isEmpty(value: number): boolean {
    return value === 0;
  }

  insideWalls(x: number): boolean {
    return x >= 0 && x < 9//COLS;
  }

  aboveFloor(y: number): boolean {
    return y <= 18//ROWS;
  }
}
