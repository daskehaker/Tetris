import { COLORS, SHAPE } from '../shared/constants';
export class changeColor {
    constructor(piece) {
        this.state = [];
        this.piece = piece;
    }
    setColor(color) {
        this.piece.color = color;
    }
    execute() {
        this.state.push(this.piece.color);
        var index = Math.floor(Math.random() * Math.floor(8));
        this.setColor(COLORS[index]);
    }
    undo() {
        var color = this.state[this.state.length - 1];
        this.state.pop();
        this.setColor(color);
    }
}
export class changeShape {
    constructor(piece) {
        this.state = [];
        this.piece = piece;
    }
    setShape(shape) {
        this.piece.dto.shape = shape;
        this.piece.shape = this.piece.dto.shape;
    }
    execute() {
        this.state.push(this.piece.shape);
        var index = Math.floor(Math.random() * Math.floor(SHAPE.length));
        this.setShape(SHAPE[index]);
    }
    undo() {
        var shape = this.state[this.state.length - 1];
        this.state.pop();
        this.setShape(shape);
    }
}
//# sourceMappingURL=command.js.map