import { PausedState } from './PausedState';
import { IState } from './IState';
export class PlayingState implements IState{
    text= 'Pauze';
    constructor(){}

    buttonPress(): IState {
        console.log('State: Game is stopped');
        return new PausedState();
    }
    
}