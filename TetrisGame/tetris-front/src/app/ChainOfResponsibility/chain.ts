
import { Task, TaskBank } from '../Composite/composite';
import { Piece } from '../models/piece';
import { BoardService } from '../services/board.service';
import { IPiece } from '../shared/interfaces';
import { Player } from '../user/player';




interface BankHandler {
  setNext(handler: BankHandler): BankHandler;

  handle(player: Player, prizeMultiplier: boolean[], inARow: number);


}

abstract class AbstractBankHandler implements BankHandler {
  private nextHandler: BankHandler;
  protected taskBank: TaskBank;
  constructor(taskBank: TaskBank) {
    this.taskBank = taskBank;
  }

  public setNext(handler: BankHandler): BankHandler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(player: Player, prizeMultiplier: boolean[], inARow: number) {
    if (this.nextHandler) {
      return this.nextHandler.handle(player, prizeMultiplier, inARow);
    }
    return null;
  }
}



export class Level1BankHandler extends AbstractBankHandler {


  constructor(taskBank: TaskBank) {
    super(taskBank);
  }

  public handle(player: Player, prizeMultiplier: boolean[], inARow: number) {
    if (this.taskBank.checkIfCompleted()) {
      console.log("in");
      if (prizeMultiplier[0] != true) {
        player.points = player.points * 2
        prizeMultiplier[0] = true;
        inARow += 0.5;
      }
      return super.handle(player, prizeMultiplier, inARow);
    } else {
      console.log("out");
      inARow = 1;
      return [player, prizeMultiplier, inARow];
    }
  }

}

export class Level2BankHandler extends AbstractBankHandler {

  constructor(taskBank: TaskBank) {
    super(taskBank);
  }

  public handle(player: Player, prizeMultiplier: boolean[], inARow: number) {
    if (this.taskBank.checkIfCompleted()) {
      if (prizeMultiplier[1] != true) {
        player.points = player.points * 2 * inARow
        prizeMultiplier[1] = true
        inARow+=0.5
      }
      return super.handle(player, prizeMultiplier, inARow);
    } else {
      inARow = 1;
      return [player, prizeMultiplier, inARow];

    }
  }


}

export class Level3BankHandler extends AbstractBankHandler {

  constructor(taskBank: TaskBank) {
    super(taskBank);
  }
  public handle(player: Player, prizeMultiplier: boolean[], inARow: number) {
    if (this.taskBank.checkIfCompleted()) {
      if (prizeMultiplier[2] != true) {
        prizeMultiplier[2] = true
        player.points = player.points * 2 * inARow
        inARow += 0.5
      }
      if (player.level > 0) {
        player.points--;
      }
      return super.handle(player, prizeMultiplier, inARow);
    } else {
      inARow = 1;
      return [player, prizeMultiplier, inARow];
    }
  }
}


export class Level4BankHandler extends AbstractBankHandler {
  constructor(taskBank: TaskBank) {
    super(taskBank);
  }
  public handle(player: Player, prizeMultiplier: boolean[], inARow: number) {
    if (this.taskBank.checkIfCompleted()) {
      if (prizeMultiplier[3] != true) {
        prizeMultiplier[3] = true
        player.points = player.points * 2 * inARow

        inARow += 0.5
      }
      return super.handle(player, prizeMultiplier, inARow);
    } else {
      inARow = 1;
      return [player, prizeMultiplier, inARow];

    }
  }

}
