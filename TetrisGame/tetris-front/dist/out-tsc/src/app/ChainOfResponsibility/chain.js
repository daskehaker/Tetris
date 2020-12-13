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
        console.log(taskBank.getNextTaskBank());
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
            return [player, prizeMultiplier, inARow];
        }
    }
}
export class Level2BankHandler extends AbstractBankHandler {
    handle(player, prizeMultiplier, inARow, taskBank) {
        console.log("TaskBank2");
        console.log(taskBank);
        console.log(taskBank.getNextTaskBank());
        if (taskBank.checkIfCompleted()) {
            if (prizeMultiplier[1] != true) {
                player.points = player.points * 2 * inARow;
                prizeMultiplier[1] = true;
                inARow += 0.5;
            }
            return super.handle(player, prizeMultiplier, inARow, taskBank.getNextTaskBank());
        }
        else {
            inARow = 1;
            return [player, prizeMultiplier, inARow];
        }
    }
}
export class Level3BankHandler extends AbstractBankHandler {
    handle(player, prizeMultiplier, inARow, taskBank) {
        console.log(taskBank);
        console.log(taskBank.getNextTaskBank());
        console.log("TaskBank3");
        if (taskBank.checkIfCompleted()) {
            if (prizeMultiplier[2] != true) {
                prizeMultiplier[2] = true;
                player.points = player.points * 2 * inARow;
                inARow += 0.5;
            }
            if (player.level > 0) {
                player.level--;
            }
            return super.handle(player, prizeMultiplier, inARow, taskBank.getNextTaskBank());
        }
        else {
            inARow = 1;
            return [player, prizeMultiplier, inARow];
        }
    }
}
export class Level4BankHandler extends AbstractBankHandler {
    handle(player, prizeMultiplier, inARow, taskBank) {
        console.log("TaskBank4");
        console.log(taskBank);
        console.log(taskBank.getNextTaskBank());
        if (taskBank.checkIfCompleted()) {
            if (prizeMultiplier[3] != true) {
                prizeMultiplier[3] = true;
                player.points = player.points * 2 * inARow;
                inARow += 0.5;
            }
            return [player, prizeMultiplier, inARow];
        }
        else {
            inARow = 1;
            return [player, prizeMultiplier, inARow];
        }
    }
}
//# sourceMappingURL=chain.js.map