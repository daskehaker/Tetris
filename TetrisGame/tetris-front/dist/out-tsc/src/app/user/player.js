export class Player {
    constructor(values = {}) {
        this.Id = "";
        this.name = "";
        this.points = 0;
        this.lines = 0;
        this.level = 0;
        Object.assign(this, values);
    }
}
//# sourceMappingURL=player.js.map