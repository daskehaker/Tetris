import { IPiece } from './../shared/interfaces';

export class PieceDto implements IPiece {
  radius: number;
  power: string;
  x: number = 0;
  y: number = 0;
  color: string = "";
  shape: number[][] = null;
}

