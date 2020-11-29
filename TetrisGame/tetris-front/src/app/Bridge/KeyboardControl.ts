import { IPiece } from 'src/app/shared/interfaces';
import { PieceControl } from './PieceControl';

export class KeyboardControl extends PieceControl{
    
    rotate(p: IPiece){
        p=super.rotate(p);
        console.log("BRIDGE keyboard input control, rotate()");
        return p;
    }
    
    right(p: IPiece){
        super.right(p);
        console.log("BRIDGE keyboard input control, right()");
        return p;
    }
    
    left(p: IPiece){
        super.left(p);
        console.log("BRIDGE keyboard input control, left()");
        return p;
    }
    
    down(p: IPiece){
        super.down(p);
        console.log("BRIDGE keyboard input control, down()");
        return p;
    }
}