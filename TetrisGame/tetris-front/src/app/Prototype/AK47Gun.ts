import { Player } from './../user/player';
import { ConcreteGun } from './ConcreteGun';

export class AK47Gun extends ConcreteGun{
    constructor(){
        super();
        this.name="AK47";
        this.damage = 'Damage from AK47 to ';
        console.log("PROTOTYPE AK47 Sukurtas")
    }
}