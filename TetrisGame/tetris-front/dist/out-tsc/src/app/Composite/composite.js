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
    addTask(task) {
        this.tasksArray.push(task);
    }
    checkIfCompleted() {
        return this.tasksArray.every(function (element) {
            return element.checkIfCompleted();
        });
    }
}
//# sourceMappingURL=composite.js.map