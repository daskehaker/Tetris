export class Exploder {
    templateMethodSetExploder(event, rect) {
        this.payForExploder();
        this.x = this.mapX(event, rect);
        this.y = this.mapY(event, rect);
        this.logCoordinates(this.x, this.y);
    }
    templateMethodDoExplosion(iterator) {
        this.changeCellValue(iterator);
        this.changeIteratorSide(iterator);
        this.changeIteratoNext(iterator);
    }
    mapX(event, rect) {
        return Math.round((event.clientX - rect.left) / 30);
    }
    mapY(event, rect) {
        return Math.round((event.clientY - rect.top) / 30);
    }
    getIterator(collection) {
        return collection.createIterator(this.x, this.y);
    }
}
//# sourceMappingURL=Exploder.js.map