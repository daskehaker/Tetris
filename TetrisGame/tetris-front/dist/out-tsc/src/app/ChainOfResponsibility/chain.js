class AbstractBankHandler {
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }
    handle(player, prizeMultiplier, inARow, taskBank) {
        if (this.nextHandler) {
            return this.nextHandler.handle(player, prizeMultiplier, inARow, taskBank);
        }
        return null;
    }
}
export class Level1BankHandler extends AbstractBankHandler {
    handle(player, prizeMultiplier, inARow, taskBank) {
        console.log("Handle1");
        console.log(taskBank.getTasks());
        if (taskBank.checkIfCompleted()) {
            if (prizeMultiplier[0] != true) {
                player.points = player.points * 2;
                prizeMultiplier[0] = true;
                inARow += 0.5;
            }
            return super.handle(player, prizeMultiplier, inARow, taskBank.getNextTaskBank());
        }
        else {
            inARow = 1;
            return "First Link";
        }
    }
}
export class Level2BankHandler extends AbstractBankHandler {
    handle(player, prizeMultiplier, inARow, taskBank) {
        console.log("TaskBank2");
        console.log(taskBank.getTasks());
        if (taskBank.checkIfCompleted()) {
            if (prizeMultiplier[1] != true) {
                player.points = player.points * 2.5 * inARow;
                prizeMultiplier[1] = true;
                inARow += 0.5;
            }
            return super.handle(player, prizeMultiplier, inARow, taskBank.getNextTaskBank());
        }
        else {
            inARow = 1;
            return "Second Link";
        }
    }
}
export class Level3BankHandler extends AbstractBankHandler {
    handle(player, prizeMultiplier, inARow, taskBank) {
        console.log("TaskBank3");
        console.log(taskBank.getTasks());
        if (taskBank.checkIfCompleted()) {
            if (prizeMultiplier[2] != true) {
                prizeMultiplier[2] = true;
                player.points = player.points * 3 * inARow;
                inARow += 1;
            }
            if (player.level > 0) {
                player.level--;
            }
            return super.handle(player, prizeMultiplier, inARow, taskBank.getNextTaskBank());
        }
        else {
            inARow = 1;
            return "Third Link";
        }
    }
}
export class Level4BankHandler extends AbstractBankHandler {
    handle(player, prizeMultiplier, inARow, taskBank) {
        console.log("TaskBank4");
        console.log(taskBank.getTasks());
        if (taskBank.checkIfCompleted()) {
            if (prizeMultiplier[3] != true) {
                prizeMultiplier[3] = true;
                player.points = player.points * 3.5 * inARow;
            }
            return "EndOfChain";
        }
        else {
            inARow = 1;
            return "EndOfChain";
        }
    }
}
//# sourceMappingURL=chain.js.map