import { Player } from '../user/player';
import { PieceDto } from './../Dto/PieceDto';
import { IPiece } from './../shared/interfaces';

export class SpecialPiece implements IPiece {
  x: number;
  y: number;
  color: string;
  shape: number[][];
  power: string;
  speed: number;

  dto = new PieceDto();
    radius: number;
    player: Player;

  constructor() {
    this.spawn();
  }

  move(p: IPiece){
    this.x = this.dto.x = p.x;
    this.y = this.dto.y = p.y;
    this.shape = this.dto.shape = p.shape;
  }

  spawn() {
    this.color = this.dto.color = 'Red';
    this.shape = this.dto.shape = [[0, 0, 0], [0, 2, 0], [0, 0, 0]];

    // Position where the shape spawns.
    this.x = this.dto.x = 3;
    this.y = this.dto.y = 0;

  }

  private ctx: CanvasRenderingContext2D

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
