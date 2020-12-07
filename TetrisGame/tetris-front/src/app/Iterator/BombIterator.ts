import { Collection } from './collection';
import { Iterator } from './Iterator';
export class BombIterator implements Iterator {

    private collection: Collection;
    private x: number
    private y: number

    private side: number = 0;

    constructor(collection: Collection, x: number, y: number){
        this.x = x;
        this.y = y;
        this.collection = collection;
    }

    next() {
        switch(this.side){
            case 0: 
                if(this.validX()) this.x++
                break;
            case 1: 
                if(this.validX()) this.x--;
                break;
            case 2: 
                if(this.validY()) this.y++;
                break;
            case 3: 
                if(this.validY()) this.y--;
                break;
        }
    }
    
    setSide(n: number){
        this.side = n;
    }

    public currentX(): number {
        return this.x;
    }

    public currentY(): number {
        return this.y;
    }

    validX(): boolean {
        if(this.x > 0 && this.x<10){
            return true
        }
        return false
    }

    validY(): boolean {
        if(this.y > 0 && this.x<20){
            return true
        }
        return false
    }
}