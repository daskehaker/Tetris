import { IPiece } from '../shared/interfaces';
export interface IBroadcaster {
    broadcastPiece(piece: IPiece, text?: string)
}