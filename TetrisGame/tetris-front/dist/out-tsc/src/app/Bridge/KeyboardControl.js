import { PieceControl } from './PieceControl';
export class KeyboardControl extends PieceControl {
    rotate(p) {
        p = super.rotate(p);
        console.log("BRIDGE keyboard input control, rotate()");
        return p;
    }
    right(p) {
        super.right(p);
        console.log("BRIDGE keyboard input control, right()");
        return p;
    }
    left(p) {
        super.left(p);
        console.log("BRIDGE keyboard input control, left()");
        return p;
    }
    down(p) {
        super.down(p);
        console.log("BRIDGE keyboard input control, down()");
        return p;
    }
}
//# sourceMappingURL=KeyboardControl.js.map