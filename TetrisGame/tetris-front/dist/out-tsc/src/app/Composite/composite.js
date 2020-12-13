import { Stopwatch } from "ts-stopwatch";
export class TimeTask {
    constructor(taskName, time) {
        this.isCompleted = false;
        this.stopwatch = new Stopwatch();
        this.taskName = taskName;
        this.time = time;
    }
    setToCompleted() {
        this.isCompleted = true;
    }
    getTaskName() {
        return this.taskName;
    }
    getTime() {
        return this.time;
    }
    checkIfCompleted() {
        return this.isCompleted;
    }
}
export class PositionTask {
    constructor(taskName, count, imgURL) {
        this.isCompleted = false;
        this.taskName = taskName;
        this.count = count;
        this.imgURL = imgURL;
    }
    decreaseCounter() {
        this.count--;
    }
    setToCompleted() {
        this.isCompleted = true;
    }
    getTaskName() {
        return this.taskName;
    }
    getCount() {
        return this.count;
    }
    checkIfCompleted() {
        return this.isCompleted;
    }
}
export class ControlTask {
    constructor(taskName) {
        this.isCompleted = false;
        this.taskName = taskName;
    }
    setButton(button) {
        this.buttonTask = button;
    }
    getButton() {
        return this.buttonTask;
        2;
    }
    setToCompleted() {
        this.isCompleted = true;
    }
    getTaskName() {
        return this.taskName;
    }
    checkIfCompleted() {
        return this.isCompleted;
    }
}
export class TaskBank {
    constructor() {
        this.tasksArray = [];
    }
    addComponent(taskComponent) {
        this.tasksArray.push(taskComponent);
    }
    getNextTaskBank() {
        const nextTaskBank = this.tasksArray[2];
        return nextTaskBank;
    }
    getTasks() {
        return this.tasksArray;
    }
    checkIfCompleted() {
        return this.tasksArray.every(function (element) {
            if (element instanceof PositionTask) {
                return element.checkIfCompleted();
            }
            else if (element instanceof TimeTask) {
                return element.checkIfCompleted();
            }
            else
                return true;
        });
    }
}
//# sourceMappingURL=composite.js.map