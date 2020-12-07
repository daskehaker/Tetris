import { USPGun } from './../Prototype/USPGun';
import { ConcreteGun } from 'src/app/Prototype/ConcreteGun';
import { Player } from './../user/player';
import { AK47Gun } from '../Prototype/AK47Gun';

export class GunsSystem {
    gunsArray: ConcreteGun[] = [];
    gunsDeepCopiesArray: ConcreteGun[] = [];
    gunsShallowCopiesArray: ConcreteGun[] = [];
    
    constructor(){}
    
    createAK47(player: Player){
        const kalasas = new AK47Gun();
        kalasas.owner = player;
        this.pushToGuns(kalasas);
    }
    
    createUSP(player: Player){
        const usp = new USPGun();
        usp.owner = player;
        this.pushToGuns(usp);
    }
    
    clone(gun: ConcreteGun){
        const clone = gun.clone();
        this.pushToShalloCopies(clone);
    }

    CloneDeep(gun: ConcreteGun) {

        this.pushToDeepCopies((gun as USPGun).cloneDeep());
    }

    shootDeepCopy(gun: ConcreteGun){
        let index = this.gunsDeepCopiesArray.indexOf(gun);
        this.gunsDeepCopiesArray.splice(index, 1);
    }

    shootClones(){
        this.gunsShallowCopiesArray.forEach(element => {
            console.log(element.damage + element.oponent.name);
            this.gunsShallowCopiesArray = [];
          });
    }
    
    pushToGuns(gun: ConcreteGun){
        this.gunsArray.push(gun);
    }

    pushToShalloCopies(gun: ConcreteGun){
        this.gunsShallowCopiesArray.push(gun);
    }

    pushToDeepCopies(usp: USPGun){
        this.gunsDeepCopiesArray.push(usp)
    }
}