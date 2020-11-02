import { IPiece } from 'src/app/shared/interfaces';
import { PieceControl } from './PieceControl';

export class KeyboardControl extends PieceControl{
    
    rotate(p: IPiece){
        console.log("BRIDGE keyboard input control, rotate()");
        return p;
    }
    
    right(p: IPiece){
        console.log("BRIDGE keyboard input control, right()");
        return p;
    }
    
    left(p: IPiece){
        console.log("BRIDGE keyboard input control, left()");
        return p;
    }
    
    down(p: IPiece){
        super.down(p);
        console.log("BRIDGE keyboard input control, down()");
        return p;
    }
}