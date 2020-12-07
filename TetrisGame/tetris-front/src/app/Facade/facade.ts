import { ConcreteGun } from 'src/app/Prototype/ConcreteGun';
import { PlayerSystem } from './playerSystem';
import { Player } from './../user/player';
import { GunsSystem } from './gunsSystem';

export class Facade {
    protected gunsSystem = new GunsSystem();
    private playerSystem: PlayerSystem

    constructor()
    constructor(player: Player)
    constructor(player?: Player){
        if(player){
            this.playerSystem = new PlayerSystem(player);
        }
        else{
            this.playerSystem = new PlayerSystem(new Player({id: "", name: ""}));
        }
    }

    get PlayerSystem(){
        return this.playerSystem;
    }

    get GunsSystem(){
        return this.gunsSystem;
    }

    changePlayerPoints(n: number){
        this.PlayerSystem.changePlayerPoints(n);
    }

    getAK47()
    {
        this.playerSystem.changePlayerPoints(-50);
        this.gunsSystem.createAK47(this.playerSystem.Player);
    }
  
    getUSP(){
        this.playerSystem.changePlayerPoints(-50);
        this.gunsSystem.createUSP(this.playerSystem.Player);
    }
  
    clone(gun: ConcreteGun){
        this.playerSystem.changePlayerPoints(-10);
        this.gunsSystem.clone(gun)
    }
  
    cloneDeep(gun: ConcreteGun){
        this.playerSystem.changePlayerPoints(-15);
        this.gunsSystem.CloneDeep(gun)
    }
  
    setVersus(gun: ConcreteGun, name: string){
      gun.oponent.name = name;
    }
  
    shoot(gun?: ConcreteGun){
      if(gun){
        console.log(gun.damage + gun.oponent.name);
        this.gunsSystem.shootDeepCopy(gun);
      }
      else {
        this.playerSystem.changePlayerPoints(-15);
        this.gunsSystem.shootClones();
      }
    }
}