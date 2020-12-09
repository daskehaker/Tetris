
import { Task, TaskBank } from '../Composite/composite';
import { Piece } from '../models/piece';
import { BoardService } from '../services/board.service';
import { IPiece } from '../shared/interfaces';




interface BankHandler{
  setNext(handler: BankHandler): BankHandler;

  handle(task: TaskBank);
}


export class Level1BankHandler implements BankHandler {

  private nextHandler: BankHandler;

  public setNext(handler: BankHandler): BankHandler {
    this.nextHandler = handler;
    return handler;
  }

  handle(task: TaskBank) {
    if (true) {
      task.getTasks();
    };

  }

}


