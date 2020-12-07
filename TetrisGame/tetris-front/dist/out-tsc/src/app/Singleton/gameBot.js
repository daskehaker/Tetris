import { MessageDto } from './../Dto/MessageDto';
export class Bot {
    constructor() {
    }
    static getInstance() {
        if (!Bot.instance) {
            Bot.instance = new Bot();
        }
        return Bot.instance;
    }
    introRules() {
        return new MessageDto("Hello I am Singleton Game bot ", "There is only one instance of me. I will Introduce the game rules");
    }
    gameOverMessage(player) {
        console.log("SINGLETON anounces game result");
        return new MessageDto("Singleton Bot", `${player.name} end game. His result: ${player.points}`);
    }
    CalculateWinner() { }
}
//# sourceMappingURL=gameBot.js.map