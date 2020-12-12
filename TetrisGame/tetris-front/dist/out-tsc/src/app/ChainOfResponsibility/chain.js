class AbstractBankHandler {
    constructor(taskBank) {
        this.taskBank = taskBank;
    }
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }
    handle(player, prizeMultiplier, inARow) {
        if (this.nextHandler) {
            return this.nextHandler.handle(player, prizeMultiplier, inARow);
        }
        return null;
    }
}
export class Level1BankHandler extends AbstractBankHandler {
    constructor(taskBank) {
        super(taskBank);
    }
    handle(player, prizeMultiplier, inARow) {
        if (this.taskBank.checkIfCompleted()) {
            console.log("in");
            if (prizeMultiplier[0] != true) {
                player.points = player.points * 2;
                prizeMultiplier[0] = true;
                inARow += 0.5;
                player.level--;
            }
            return super.handle(player, prizeMultiplier, inARow);
        }
        else {
            console.log("out");
            inARow = 1;
            return prizeMultiplier;
        }
    }
}
export class Level2BankHandler extends AbstractBankHandler {
    constructor(taskBank) {
        super(taskBank);
    }
    handle(player, prizeMultiplier, inARow) {
        if (this.taskBank.checkIfCompleted()) {
            if (prizeMultiplier[1] != true) {
                player.points = player.points * 2 * inARow;
                prizeMultiplier[1] = true;
                inARow += 0.5;
            }
            return super.handle(player, prizeMultiplier, inARow);
        }
        else {
            inARow = 1;
            return super.handle(player, prizeMultiplier, inARow);
        }
    }
}
export class Level3BankHandler extends AbstractBankHandler {
    constructor(taskBank) {
        super(taskBank);
    }
    handle(player, prizeMultiplier, inARow) {
        if (this.taskBank.checkIfCompleted()) {
            if (prizeMultiplier[2] != true) {
                prizeMultiplier[2] = true;
                player.points = player.points * 2 * inARow;
                inARow += 0.5;
            }
            return super.handle(player, prizeMultiplier, inARow);
        }
        else {
            inARow = 1;
            return super.handle(player, prizeMultiplier, inARow);
        }
    }
}
export class Level4BankHandler extends AbstractBankHandler {
    constructor(taskBank) {
        super(taskBank);
    }
    handle(player, prizeMultiplier, inARow) {
        if (this.taskBank.checkIfCompleted()) {
            if (prizeMultiplier[3] != true) {
                prizeMultiplier[3] = true;
                player.points = player.points * 2 * inARow;
                inARow += 0.5;
            }
            return super.handle(player, prizeMultiplier, inARow);
        }
        else {
            inARow = 1;
            return super.handle(player, prizeMultiplier, inARow);
        }
    }
}
//# sourceMappingURL=chain.js.map