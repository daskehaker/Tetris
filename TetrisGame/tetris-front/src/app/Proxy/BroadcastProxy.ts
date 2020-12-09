import { IPiece } from '../shared/interfaces';
import { IBroadcaster } from './IBroadcaster';

export class BroadcastProxy implements IBroadcaster {
    service: IBroadcaster

    constructor(service: IBroadcaster){
        this.service = service;
    }
    
    broadcastPiece(piece: IPiece, text: string) {
        if(text === "Resume"){
            console.log('PROXY blocks call to method because game is paused')
        }
        else{
            this.service.broadcastPiece(piece);
        }
    }
    
}