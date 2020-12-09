import { PlayingState } from './PlayingState';
export class PendingState {
    constructor() {
        this.text = 'Play';
    }
    buttonPress() {
        console.log("State: Game Started");
        return new PlayingState();
    }
}
//# sourceMappingURL=PendingState.js.map