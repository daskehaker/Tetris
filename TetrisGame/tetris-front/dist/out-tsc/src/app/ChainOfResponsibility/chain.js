import { Context, defender1 } from '../Strategy/strategy';
export class BlueHandler {
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }
    handle(request, player, piece, board) {
        if (request.toLocaleLowerCase() === "blue") {
            const strategy = new Context(new defender1());
            console.log("Blue Handler");
            return strategy.defend(player, piece, board);
        }
    }
}
//# sourceMappingURL=chain.js.map