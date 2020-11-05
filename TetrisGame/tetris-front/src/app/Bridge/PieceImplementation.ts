import { IPiece } from 'src/app/shared/interfaces';
export class PieceImplementation {
    move(p: IPiece): IPiece{
        console.log("Piece implementation move method was called");
        return p
    }
}