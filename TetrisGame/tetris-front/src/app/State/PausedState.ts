import { IState } from './IState';
import { PlayingState } from './PlayingState';
export class PausedState implements IState{
    text = 'Resume';

    constructor(){}

    buttonPress(): IState {
        console.log("State: Game Started");
        return new PlayingState();
    }
}