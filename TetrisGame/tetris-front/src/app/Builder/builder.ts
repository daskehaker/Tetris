import { BoardComponent } from '../game/board/board.component';
import { OponentBoardComponent } from '../game/oponent-board/oponent-board.component';
import { SpecialPiece } from '../models/SpecialPiece';
import { ChatService } from '../services/chat.service';
import { Player } from '../user/player';


interface Builder {
  setColor(color: string): void;
  setShape(shape: number[][]): void;
  setPlayer(player: Player):void;
}

export class PieceBuilder implements Builder {
  public piece: SpecialPiece

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.piece = new SpecialPiece();
  }

  public setShape(shape: number[][]): void {
    this.piece.shape = shape;
  }
  public setPlayer(player: Player): void {
    this.piece.player = player;
  }

  public setColor(color: string): void {
    this.piece.color =color;
  }

  public getSpecialPiece(): SpecialPiece {
    const result = this.piece;
    this.reset();

    return result;
  }
}

export class Director {
  private builder: Builder;
  private player: Player;
  public setBuilder(builder: Builder): void {
    this.builder = builder
  }

  playerBoard: BoardComponent;
  public buildBomb(): void {
    this.builder.setPlayer(this.player);
    this.builder.setColor("Black");
    this.builder.setShape([[0, 0, 0], [0, 1, 0], [0, 0, 0]]);
  }

  public BuildLongPiece():void{
    this.builder.setPlayer(this.player);
    this.builder.setColor("Blue");
    this.builder.setShape([[0, 1, 0], [0, 1, 0], [0, 1, 0]]);
  }

}
