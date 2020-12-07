export class PlayerSystem {
    constructor(player) {
        this.player = player;
    }
    get Player() {
        return this.player;
    }
    getPlayerLevel() {
        return this.player.level;
    }
    changePlayerPoints(point) {
        this.player.points += point;
    }
    changePlayerLines(lines) {
        this.player.lines += lines;
    }
    changePlayerLevel(level) {
        this.player.level += level;
    }
    getPlayerLines() {
        return this.player.lines;
    }
    getPlayerPoints() {
        return this.player.points;
    }
    getPlayerId() {
        return this.player.Id;
    }
    getPlayerName() {
        return this.player.name;
    }
}
//# sourceMappingURL=playerSystem.js.map