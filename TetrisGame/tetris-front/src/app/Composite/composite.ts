import { count } from "console";
import { Stopwatch } from "ts-stopwatch";
import { Visitor } from '../Visitor/visitor'


export interface TaskComponent {
  checkIfCompleted(): boolean;
}

interface Task {
  accept(visitor: Visitor): void;
}

export class TimeTask implements TaskComponent, Task {
  private taskName: string;
  private time: number;
  private isCompleted = false;
  public stopwatch = new Stopwatch();

  constructor(taskName) {
    this.taskName = taskName;
    this.stopwatch
  }

  public setTime(number){
    this.time = number;
  }

  public setToCompleted(): void {
    this.isCompleted = true;
  }

  public getTaskName(): string {
    return this.taskName;
  }

  public getTime(): number {
    return this.time;
  }

  public checkIfCompleted(): boolean {
    return this.isCompleted;
  }
  accept(visitor: Visitor): void {
    visitor.visitTimeTask(this);
  }
}

export class PositionTask implements TaskComponent,Task {
  private taskName: string;
  private count: number;
  private isCompleted = false;
  public imgURL: string

  constructor(taskName, imgURL){
    this.taskName = taskName;
    this.imgURL = imgURL;
  }

  public setCount(number){
    this.count = number;
  }

  public decreaseCounter() {
    this.count--;
  }

  public setToCompleted():void {
    this.isCompleted = true;
  }

  public getTaskName(): string {
    return this.taskName;
  }

  public getCount(): number {
    return this.count
  }

  public checkIfCompleted(): boolean {
    return this.isCompleted;
  }
  accept(visitor: Visitor): void {
    visitor.visitPositionTask(this);
  }
}

export class ControlTask implements TaskComponent, Task{
  private taskName: string;
  private isCompleted = false;
  private buttonTask: number;
  private count: number

  constructor(taskName, buttonTask){
    this.taskName = taskName;
    this.buttonTask = buttonTask;
  }

  public setRequired(number){
    this.count = number;
  }

  public getCount() {
    return this.count;
  }

  public decreaseCount() {
    this.count--;
  }

  public getButton() {
    return this.buttonTask;
  }

  public setToCompleted():void {
    this.isCompleted = true;
  }

  public getTaskName(): string {
    return this.taskName;
  }

  public checkIfCompleted(): boolean {
    return this.isCompleted;
  }
  accept(visitor: Visitor): void {
    visitor.visitControlTask(this);
  }
}

export class TaskBank implements TaskComponent {

  private tasksArray: TaskComponent[]=[];

  public addComponent(taskComponent: TaskComponent) {
    this.tasksArray.push(taskComponent);
  }

  public getNextTaskBank(): TaskComponent {
    const nextTaskBank: TaskComponent = this.tasksArray[2];
    return nextTaskBank;
  }

  public getTasks(): TaskComponent[] {
    return this.tasksArray;
  }

  checkIfCompleted(): boolean {
    return this.tasksArray.every(function (element: TaskComponent) {
      if (element instanceof PositionTask) {
        return element.checkIfCompleted();
      } else if (element instanceof TimeTask) {
        return element.checkIfCompleted();
      }else if (element instanceof ControlTask) {
        return element.checkIfCompleted();
      } else return true

    });
    }
}

