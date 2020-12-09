export class Level1BankHandler {
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }
    handle(task) {
        if (true) {
            task.getTasks();
        }
        ;
    }
}
//# sourceMappingURL=chain.js.map