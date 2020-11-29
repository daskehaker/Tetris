import { KEY } from '../shared/constants';
export class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    defend(player, piece, board) {
        return this.strategy.useDefender(player, piece, board);
    }
}
export class defender1 {
    useDefender(player, piece, board) {
        console.log("defender 1");
        return board.rotate(piece);
    }
}
export class defender2 {
    useDefender(player, piece, board) {
        var temp = KEY.RIGHT;
        KEY.RIGHT = KEY.LEFT;
        KEY.LEFT = temp;
        console.log("defender 2");
        return null;
    }
}
export class defender3 {
    useDefender(player, piece, board) {
        KEY.RIGHT = null;
        KEY.LEFT = null;
        console.log("defender 3");
        return null;
    }
}
export class defender4 {
    useDefender(player, piece, board) {
        if (piece.rotationCount >= 2) {
            KEY.UP = null;
        }
        console.log("defender 4");
        return null;
    }
}
//# sourceMappingURL=strategy.js.map