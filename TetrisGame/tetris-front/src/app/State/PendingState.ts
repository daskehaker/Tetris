import { PlayingState } from './PlayingState';
import { IState } from './IState';
export class PendingState implements IState{
    text = 'Play';

    constructor(){}

    buttonPress(): IState {
        console.log("State: Game Started");
        return new PlayingState();
    }
}