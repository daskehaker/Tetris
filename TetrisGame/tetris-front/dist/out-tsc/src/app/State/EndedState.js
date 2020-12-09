import { PendingState } from './PendingState';
export class EndedState {
    constructor() {
        this.text = 'Restart';
    }
    buttonPress() {
        console.log('State: Game is Ended');
        location.reload();
        return new PendingState();
    }
}
//# sourceMappingURL=EndedState.js.map