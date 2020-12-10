export class Level1BankHandler {
    constructor(taskBank) {
        this.taskBank = taskBank;
    }
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }
    handle(task) {
        this.taskBank.getTasks().forEach(function (task) {
            console.log;
        });
    }
}
export class Level2BankHandler {
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }
    handle(task) {
        if (task.checkIfCompleted()) {
            return true;
        }
        return this.nextHandler;
    }
}
export class Level3BankHandler {
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }
    handle(task) {
        if (task.checkIfCompleted()) {
            return true;
        }
        return this.nextHandler;
    }
}
export class Level4BankHandler {
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }
    handle(task) {
        if (task.checkIfCompleted()) {
            return true;
        }
        return this.nextHandler;
    }
}
//# sourceMappingURL=chain.js.map