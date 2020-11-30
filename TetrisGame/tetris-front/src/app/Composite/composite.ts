

export interface TaskComponent {
  checkIfCompleted(): boolean;
}




export class Task implements TaskComponent {
  private taskName: string;
  private count: number;
  private isCompleted = false;

  constructor(taskName, count) {
    this.taskName = taskName;
    this.count = count;
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

  public getTasks(): TaskComponent[] {
    return this.tasksArray;
  }

  checkIfCompleted(): boolean {
    return this.tasksArray.every(function (element: Task) {
      return element.checkIfCompleted();
    });
    }


}

