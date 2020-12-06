export class Task {
    constructor(taskName, count) {
        this.isCompleted = false;
        this.taskName = taskName;
        this.count = count;
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
export class TaskBank {
    constructor() {
        this.tasksArray = [];
    }
    addComponent(taskComponent) {
        this.tasksArray.push(taskComponent);
    }
    getTasks() {
        return this.tasksArray;
    }
    checkIfCompleted() {
        return this.tasksArray.every(function (element) {
            return element.checkIfCompleted();
        });
    }
}
//# sourceMappingURL=composite.js.map