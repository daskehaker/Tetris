import { Player } from './../user/player';
export class Board {
  player: Player;
  height: number;
  width: number;
  boradMatrix: number[][];

  constructor(values: Object){
    Object.assign(this, values);
  }
}
