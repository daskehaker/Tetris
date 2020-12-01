
import { Piece } from '../models/piece';
import { BoardService } from '../services/board.service';
import { IPiece } from '../shared/interfaces';
import { Context, defender1 } from '../Strategy/strategy'



interface ColorHandler{
  setNext(handler: ColorHandler): ColorHandler;

  handle(request: string, player: string, piece: Piece, board: BoardService): IPiece;
}


export class BlueHandler implements ColorHandler {
  private nextHandler: ColorHandler;
  public setNext(handler: ColorHandler): ColorHandler {
    this.nextHandler = handler;
    return handler;
  }

  handle(request: string, player: string, piece: Piece, board: BoardService ): IPiece {
    if (request.toLocaleLowerCase() === "blue") {
      const strategy = new Context(new defender1());
      console.log("Blue Handler");
      return strategy.defend(player, piece, board);
    };
  }

}
