import { MessageDto } from './../Dto/MessageDto';
export class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    defend(chatService, player) {
        this.strategy.useDefender(null, chatService, player);
    }
}
export class defender1 {
    useDefender(data, chatService, player) {
        this.message = new MessageDto(player, "using defender1");
        chatService.broadcastMessage(this.message);
        //console.log("Hello defender1");
        return null;
    }
}
export class defender2 {
    useDefender(data, chatService, player) {
        this.message = new MessageDto(player, "using defender2");
        chatService.broadcastMessage(this.message);
        //console.log("Hello defender2");
        return null;
    }
}
export class defender3 {
    useDefender(data, chatService, player) {
        this.message = new MessageDto("Player ", "used defender3");
        chatService.broadcastMessage(this.message);
        //console.log("Hello defender3");
        return null;
    }
}
//# sourceMappingURL=strategy.js.map