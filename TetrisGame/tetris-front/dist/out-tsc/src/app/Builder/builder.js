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
    }

    setEffectRadius(radius) {
        this.piece.radius = radius;
    }
    reset() {
        this.piece = new SpecialPiece();
    }
    setColor(color) {
        this.piece.color = color;
    }
    setPower(power) {
        this.piece.power = power;
    }
    setSpeed(speed) {
        this.piece.speed = speed;
    }
    getSpecialPiece() {
        const result = this.piece;
        this.reset();
        return result;
    }
}
export class Director {
    constructor(player) {
        this.player = player;
    }
    setBuilder(builder) {
        this.builder = builder;
    }
    buildBomb() {
        this.builder.setPlayer(this.player);
        this.builder.setColor("Black");
        this.builder.setEffectRadius(3);
        this.builder.setShape([[0, 0, 0], [0, 1, 0], [0, 0, 0]]);
        this.builder.setPower("Explode");

    }
    BuildLongPiece() {
        this.builder.setPlayer(this.player);
        this.builder.setColor("Blue");
        this.builder.setShape([[0, 1, 0], [0, 1, 0], [0, 1, 0]]);
    }
}
//# sourceMappingURL=builder.js.map
