import { BombIterator } from './../Iterator/BombIterator';
import { Collection } from 'src/app/Iterator/collection';
export abstract class Exploder {
    x: number;
    y: number;
    
    protected abstract explodeBoard(event: any);
    protected abstract payForExploder()
    protected abstract logCoordinates(x: number, y: number);

    protected abstract changeCellValue(iterator: BombIterator);
    protected abstract changeIteratorSide(iterator: BombIterator);
    protected abstract changeIteratoNext(iterator: BombIterator);

    public templateMethodSetExploder(event: any, rect: DOMRect){
        this.payForExploder();
        this.x = this.mapX(event, rect)
        this.y = this.mapY(event, rect)
        this.logCoordinates(this.x, this.y);
    }

    public templateMethodDoExplosion(iterator: BombIterator){
        this.changeCellValue(iterator);
        this.changeIteratorSide(iterator);
        this.changeIteratoNext(iterator);
    }

    protected mapX(event: any, rect: DOMRect): number{
        return Math.round((event.clientX - rect.left)/30)
    }
    protected mapY(event: any, rect: DOMRect): number{
        return Math.round((event.clientY - rect.top)/30)
    }

    protected getIterator(collection: Collection):BombIterator{
        return collection.createIterator(this.x, this.y);
    }
}