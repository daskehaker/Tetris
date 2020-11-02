import { IPiece } from 'src/app/shared/interfaces';
import { PieceImplementation } from './PieceImplementation';

export abstract class PieceControl {
    private pieceImp = new PieceImplementation();

    rotate(piece: IPiece): IPiece {
        let p: IPiece = JSON.parse(JSON.stringify(piece));
        for (let y = 0; y < p.shape.length; ++y) {
          for (let x = 0; x < y; ++x) {
            [p.shape[x][y], p.shape[y][x]] = [p.shape[y][x], p.shape[x][y]];
          }
        }
        p.shape.forEach(row => row.reverse());
        console.log(p);
        
        return this.pieceImp.move(p);
    }

    right(piece: IPiece) {
        //let p: IPiece = JSON.parse(JSON.stringify(piece));
        piece.x++;
        return this.pieceImp.move(piece);
    }

    left(piece: IPiece){
        //let p: IPiece = JSON.parse(JSON.stringify(piece));
        piece.x--;
        return this.pieceImp.move(piece);
    }

    down(piece: IPiece){
        //let p: IPiece = JSON.parse(JSON.stringify(piece));
        piece.y++;
        return this.pieceImp.move(piece);
    }
}