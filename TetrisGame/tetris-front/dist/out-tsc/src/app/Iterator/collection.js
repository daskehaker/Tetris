import { BombIterator } from './BombIterator';
export class Collection {
    constructor(array) {
        this.steps = 3;
        this.array = array;
    }
    createIterator(x, y) {
        this.squreIterator = new BombIterator(this, x, y);
        return this.squreIterator;
    }
}
//# sourceMappingURL=collection.js.map