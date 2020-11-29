import { SpecialPiece } from '../models/SpecialPiece';
export class PieceBuilder {
    constructor() {
        this.reset();
    }
    reset() {
        this.piece = new SpecialPiece();
    }
    setShape(shape) {
        this.piece.shape = shape;
    }
    setPlayer(player) {
        this.piece.player = player;
    }
    setColor(color) {
        this.piece.color = color;
    }
    getSpecialPiece() {
        const result = this.piece;
        this.reset();
        return result;
    }
}
export class Director {
    setBuilder(builder) {
        this.builder = builder;
    }
    buildBomb() {
        this.builder.setPlayer(this.player);
        this.builder.setColor("Black");
        this.builder.setShape([[0, 0, 0], [0, 1, 0], [0, 0, 0]]);
    }
    BuildLongPiece() {
        this.builder.setPlayer(this.player);
        this.builder.setColor("Blue");
        this.builder.setShape([[0, 1, 0], [0, 1, 0], [0, 1, 0]]);
    }
}
//# sourceMappingURL=builder.js.map