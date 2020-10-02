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
        return new MessageDto("Hello I am Singleton Game bot ", "I will Introduce game rules");
    }
}
//# sourceMappingURL=gameBot.js.map