import { Player } from './../user/player';
import { Oponent } from './Oponent';
import { IGun } from './IGun';

export class ConcreteGun implements IGun{
    public name;
    public damage: string;
    public oponent: Oponent;
    public owner: Player;
    

    constructor(){
        this.oponent = new Oponent({id: "", name: "Not set"})
    }
    
    clone(): this {
        console.log("PROTOTYPE Sukurta shallow kopija");
        return {...this};
    }
}