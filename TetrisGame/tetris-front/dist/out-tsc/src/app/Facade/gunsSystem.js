import { USPGun } from './../Prototype/USPGun';
import { AK47Gun } from '../Prototype/AK47Gun';
export class GunsSystem {
    constructor() {
        this.gunsArray = [];
        this.gunsDeepCopiesArray = [];
        this.gunsShallowCopiesArray = [];
    }
    createAK47(player) {
        const kalasas = new AK47Gun();
        kalasas.owner = player;
        this.pushToGuns(kalasas);
    }
    createUSP(player) {
        const usp = new USPGun();
        usp.owner = player;
        this.pushToGuns(usp);
    }
    clone(gun) {
        const clone = gun.clone();
        this.pushToShalloCopies(clone);
    }
    CloneDeep(gun) {
        this.pushToDeepCopies(gun.cloneDeep());
    }
    shootDeepCopy(gun) {
        let index = this.gunsDeepCopiesArray.indexOf(gun);
        this.gunsDeepCopiesArray.splice(index, 1);
    }
    shootClones() {
        this.gunsShallowCopiesArray.forEach(element => {
            console.log(element.damage + element.oponent.name);
            this.gunsShallowCopiesArray = [];
        });
    }
    pushToGuns(gun) {
        this.gunsArray.push(gun);
    }
    pushToShalloCopies(gun) {
        this.gunsShallowCopiesArray.push(gun);
    }
    pushToDeepCopies(usp) {
        this.gunsDeepCopiesArray.push(usp);
    }
}
//# sourceMappingURL=gunsSystem.js.map