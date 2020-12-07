import { PlayerSystem } from './playerSystem';
import { Player } from './../user/player';
import { GunsSystem } from './gunsSystem';
export class Facade {
    constructor(player) {
        this.gunsSystem = new GunsSystem();
        if (player) {
            this.playerSystem = new PlayerSystem(player);
        }
        else {
            this.playerSystem = new PlayerSystem(new Player({ id: "", name: "" }));
        }
    }
    get PlayerSystem() {
        return this.playerSystem;
    }
    get GunsSystem() {
        return this.gunsSystem;
    }
    changePlayerPoints(n) {
        this.PlayerSystem.changePlayerPoints(n);
    }
    getAK47() {
        this.playerSystem.changePlayerPoints(-50);
        this.gunsSystem.createAK47(this.playerSystem.Player);
    }
    getUSP() {
        this.playerSystem.changePlayerPoints(-50);
        this.gunsSystem.createUSP(this.playerSystem.Player);
    }
    clone(gun) {
        this.playerSystem.changePlayerPoints(-10);
        this.gunsSystem.clone(gun);
    }
    cloneDeep(gun) {
        this.playerSystem.changePlayerPoints(-15);
        this.gunsSystem.CloneDeep(gun);
    }
    setVersus(gun, name) {
        gun.oponent.name = name;
    }
    shoot(gun) {
        if (gun) {
            console.log(gun.damage + gun.oponent.name);
            this.gunsSystem.shootDeepCopy(gun);
        }
        else {
            this.playerSystem.changePlayerPoints(-15);
            this.gunsSystem.shootClones();
        }
    }
}
//# sourceMappingURL=facade.js.map