import { PieceImplementation } from './PieceImplementation';
export class PieceControl {
    constructor() {
        this.pieceImp = new PieceImplementation();
    }
    rotate(piece) {
        let p = JSON.parse(JSON.stringify(piece));
        for (let y = 0; y < p.shape.length; ++y) {
            for (let x = 0; x < y; ++x) {
                [p.shape[x][y], p.shape[y][x]] = [p.shape[y][x], p.shape[x][y]];
            }
        }
        p.shape.forEach(row => row.reverse());
        return this.pieceImp.move(p);
    }
    right(piece) {
        //let p: IPiece = JSON.parse(JSON.stringify(piece));
        piece.x++;
        return this.pieceImp.move(piece);
    }
    left(piece) {
        //let p: IPiece = JSON.parse(JSON.stringify(piece));
        piece.x--;
        return this.pieceImp.move(piece);
    }
    down(piece) {
        //let p: IPiece = JSON.parse(JSON.stringify(piece));
        piece.y++;
        return this.pieceImp.move(piece);
    }
}
//# sourceMappingURL=PieceControl.js.map