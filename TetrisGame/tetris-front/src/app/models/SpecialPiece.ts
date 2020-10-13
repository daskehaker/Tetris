import { Player } from '../user/player';
import { PieceDto } from './../Dto/PieceDto';
import { IPiece } from './../shared/interfaces';

export class SpecialPiece  {
  x: number;
  y: number;
  color: string;
  shape: number[][];
  power: string;
  speed: number;
  radius: number;
  player: Player;

}
