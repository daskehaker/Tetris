import { BoardComponent } from '../game/board/board.component';
import { OponentBoardComponent } from '../game/oponent-board/oponent-board.component';
import { Piece } from '../models/piece';
import { SpecialPiece } from '../models/SpecialPiece';
import { getRandomPiece } from '../piecesAbstractFactory/abstractFactory';
import { ChatService } from '../services/chat.service';
import { COLORS, SHAPE } from '../shared/constants';
import { Player } from '../user/player';


interface ICommand {
  execute(): void;
  undo(): void;
}


export class changeColor implements ICommand{
  private state: string[] = [];
  piece: Piece;

  constructor(piece : Piece) {
    this.piece = piece;
  }
  private setColor(color: string): void {
    this.piece.color = color;
  }

  public execute(): void {
    this.state.push(this.piece.color);
    console.log(this.state);
    var index = Math.floor(Math.random() * Math.floor(8));
    this.setColor(COLORS[index]);
    
  }

  public undo() {
    var color = this.state[this.state.length-1];
    this.state.pop();
    this.setColor(color);
  }
}

export class changeShape implements ICommand {
  private state: Array<number[][]> = [];
  piece: Piece;

  constructor(piece: Piece) {
    this.piece = piece;
  }

  private setShape(shape: number[][]) {
    this.piece.dto.shape = shape;
    this.piece.shape = this.piece.dto.shape;
    console.log(this.piece.dto);
  }

  public execute() {
    this.state.push(this.piece.shape);
    var index = Math.floor(Math.random() * Math.floor(SHAPE.length));
    console.log(index);
    console.log(SHAPE[index]);
    this.setShape(SHAPE[index]);
    console.log("Shape changed");
  }
  public undo() {
    var shape = this.state[this.state.length - 1];
    this.state.pop();
    this.setShape(shape);
    console.log("Undo");
  }
}
