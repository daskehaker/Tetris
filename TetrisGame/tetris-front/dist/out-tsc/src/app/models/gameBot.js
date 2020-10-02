export class Bot {
    constructor() { }
    static getInstance() {
        if (!Bot.instance) {
            Bot.instance = new Bot();
            Bot.introMsg.user = "I am Game Bot, I was immplemented using Singleton pattern";
            Bot.introMsg.msgText = "This is the game rules. Please play according to them.";
        }
        return Bot.instance;
    }
    get introMsg() {
        return this.introMsg;
    }
}
//# sourceMappingURL=gameBot.js.map