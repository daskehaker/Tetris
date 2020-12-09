import { PlayingState } from './PlayingState';
export class PausedState {
    constructor() {
        this.text = 'Resume';
    }
    buttonPress() {
        console.log("State: Game Started");
        return new PlayingState();
    }
}
//# sourceMappingURL=PausedState.js.map