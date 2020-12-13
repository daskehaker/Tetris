import { count } from "console";
import { Stopwatch } from "ts-stopwatch";


export interface TaskComponent {
  checkIfCompleted(): boolean;
}


export class TimeTask implements TaskComponent {
  private taskName: string;
  private time: number;
  private isCompleted = false;
  public stopwatch = new Stopwatch();

  constructor(taskName, time) {
    this.taskName = taskName;
    this.time = time;
    this.stopwatch
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
}

export class PositionTask implements TaskComponent {
  private taskName: string;
  private count: number;
  private isCompleted = false;
  public imgURL: string

  constructor(taskName, count, imgURL){
    this.taskName = taskName;
    this.count = count;
    this.imgURL = imgURL;
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
}

export class ControlTask implements TaskComponent{
  private taskName: string;
  private isCompleted = false;
  private buttonTask: number;
  private count: number

  constructor(taskName, buttonTask, requiredCount){
    this.taskName = taskName;
    this.buttonTask = buttonTask;
    this.count = requiredCount;
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

