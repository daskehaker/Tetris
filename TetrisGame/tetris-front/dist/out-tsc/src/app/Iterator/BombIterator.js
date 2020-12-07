export class BombIterator {
    constructor(collection, x, y) {
        this.side = 0;
        this.x = x;
        this.y = y;
        this.collection = collection;
    }
    next() {
        switch (this.side) {
            case 0:
                if (this.validX())
                    this.x++;
                break;
            case 1:
                if (this.validX())
                    this.x--;
                break;
            case 2:
                if (this.validY())
                    this.y++;
                break;
            case 3:
                if (this.validY())
                    this.y--;
                break;
        }
    }
    setSide(n) {
        this.side = n;
    }
    currentX() {
        return this.x;
    }
    currentY() {
        return this.y;
    }
    validX() {
        if (this.x > 0 && this.x < 10) {
            return true;
        }
        return false;
    }
    validY() {
        if (this.y > 0 && this.x < 20) {
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=BombIterator.js.map