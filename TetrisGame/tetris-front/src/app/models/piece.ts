import { PieceDto } from './../Dto/PieceDto';
import { IPiece } from './../shared/interfaces';
import { getRandomPiece } from './../piecesAbstractFactory/abstractFactory';

export class Piece implements IPiece {
  x: number;
  y: number;
  color: string;
  shape: number[][];
  dto = new PieceDto();

  constructor(private ctx: CanvasRenderingContext2D) {
    this.spawn();
  }

  move(p: IPiece){
    this.x = this.dto.x = p.x;
    this.y = this.dto.y = p.y;
    this.shape = this.dto.shape = p.shape;
  }

  spawn() {
    this.dto = getRandomPiece();
    this.color = this.dto.color;
    this.shape = this.dto.shape;

    // Position where the shape spawns.
    this.x = this.dto.x = 3;
    this.y = this.dto.y = 0;

  }


  draw() {
    this.ctx.fillStyle = this.color;
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          // this.x & this.y = position on the board
          // x & y position are the positions of the shape
          this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
        }
      });
    });
  }
}
