
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
  private taskBank: TaskBank

  constructor(taskBank: TaskBank) {
    this.taskBank = taskBank
  }

  public setNext(handler: BankHandler): BankHandler {
    this.nextHandler = handler;
    return handler;
  }

  handle(task: TaskBank) {
    this.taskBank.getTasks().forEach(function (task) {
      console.log
    })
  }
}

export class Level2BankHandler implements BankHandler {

  private nextHandler: BankHandler;

  public setNext(handler: BankHandler): BankHandler {
    this.nextHandler = handler;
    return handler;
  }

  handle(task: TaskBank) {
    if (task.checkIfCompleted()) {
      return true;
    }
    return this.nextHandler;
  }

}

export class Level3BankHandler implements BankHandler {

  private nextHandler: BankHandler;

  public setNext(handler: BankHandler): BankHandler {
    this.nextHandler = handler;
    return handler;
  }

  handle(task: TaskBank) {
    if (task.checkIfCompleted()) {
      return true;
    }
    return this.nextHandler;
  }

}

export class Level4BankHandler implements BankHandler {

  private nextHandler: BankHandler;

  public setNext(handler: BankHandler): BankHandler {
    this.nextHandler = handler;
    return handler;
  }

  handle(task: TaskBank) {
    if (task.checkIfCompleted()) {
      return true;
    }
    return this.nextHandler;
  }

}


