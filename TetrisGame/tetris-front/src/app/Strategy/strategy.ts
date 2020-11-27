import { IMessage, IPiece } from './../shared/interfaces';
import { MessageDto } from './../Dto/MessageDto';
import { Player } from './../user/player';
import { ChatService } from '../services/chat.service';
import { Piece } from '../models/piece';
import { BoardService } from '../services/board.service';
import { BoardComponent } from '../game/board/board.component';
import { Key } from 'protractor';
import { KEY } from '../shared/constants';


export class Context {
  private strategy: defenderStrategy;

  constructor(strategy: defenderStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: defenderStrategy) {
    this.strategy = strategy;
  }

  public defend(player: string, piece: Piece, board: BoardService): IPiece {
    return this.strategy.useDefender(player, piece, board);
  }
}

interface defenderStrategy {
  useDefender(player: string, piece: Piece, board: BoardService): IPiece;
}


export class defender1 implements defenderStrategy {
  public useDefender(player: string, piece: Piece, board: BoardService): IPiece {
    console.log("defender 1");
    return board.rotate(piece);
  }
}

export class defender2 implements defenderStrategy {
  public useDefender(player: string, piece: Piece, board: BoardService): IPiece {
    var temp = KEY.RIGHT;
    KEY.RIGHT = KEY.LEFT;
    KEY.LEFT = temp;
    console.log("defender 2");
    return null;
  }
}

export class defender3 implements defenderStrategy {
  public useDefender(player: string, piece: Piece, board: BoardService): IPiece {
    KEY.RIGHT = null;
    KEY.LEFT = null;
    console.log("defender 3");
    return null;
  }
}

export class defender4 implements defenderStrategy {
  public useDefender(player: string, piece: Piece, board: BoardService): IPiece {
    if (piece.rotationCount >= 2) {
      KEY.UP = null;
    }
    console.log("defender 4");
    return null;
  }
}
