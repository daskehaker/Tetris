import { BombIterator } from './BombIterator';
import { IterableCollection } from './IterableCollection';
import { Iterator } from './Iterator';

export class Collection implements IterableCollection {
    array: number[][]
    steps: number = 3;
    squreIterator: BombIterator;

    constructor(array: number[][]){
        this.array = array;
    }

    createIterator(x: number, y: number): BombIterator {
        this.squreIterator = new BombIterator(this, x, y)
        return this.squreIterator
    }
}