

export interface TaskComponent {
  checkIfCompleted(): boolean;
}


export class TimerTask implements TaskComponent {
  private taskName: string;
  private count: number;
  private isCompleted = false;

  constructor(taskName, count) {
    this.taskName = taskName;
    this.count = count;
  }

  public setToCompleted(): void {
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

export class Task implements TaskComponent {
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
    return this.tasksArray.every(function (element: Task) {
      return element.checkIfCompleted();
    });
    }


}

