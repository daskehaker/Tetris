import { Player } from './../user/player';
export class PlayerSystem{
    private player

    constructor(player: Player){
        this.player = player
    }

    get Player(){
        return this.player
    }

    getPlayerLevel(): number{
        return this.player.level;
    }

    changePlayerPoints(point: number) {
        this.player.points += point;
    }

    changePlayerLines(lines: number){
        this.player.lines += lines
    }
    
    changePlayerLevel(level: number){
        this.player.level += level
    }

    getPlayerLines():number{
        return this.player.lines;
    }

    getPlayerPoints():number{
        return this.player.points;
    }

    getPlayerId(): string{
        return this.player.Id;
    }

    getPlayerName(): string {
        return this.player.name;
    }    
}