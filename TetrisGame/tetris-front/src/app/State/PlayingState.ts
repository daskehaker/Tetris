import { PendingState } from './PendingState';
import { IState } from './IState';
export class PlayingState implements IState{
    text= 'Stop';
    constructor(){}

    buttonPress(): IState {
        console.log('State: Game is stopped');
        return new PendingState();
    }
    
}