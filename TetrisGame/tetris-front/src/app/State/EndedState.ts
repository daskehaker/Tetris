import { PendingState } from './PendingState';
import { IState } from './IState';
export class EndedState implements IState{
    constructor(){}
    text = 'Restart';

    buttonPress(): IState {
        console.log('State: Game is Ended');
        location.reload();
        return new PendingState();
    }
}