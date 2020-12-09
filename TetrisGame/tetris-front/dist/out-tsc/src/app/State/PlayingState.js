import { PausedState } from './PausedState';
export class PlayingState {
    constructor() {
        this.text = 'Pauze';
    }
    buttonPress() {
        console.log('State: Game is stopped');
        return new PausedState();
    }
}
//# sourceMappingURL=PlayingState.js.map