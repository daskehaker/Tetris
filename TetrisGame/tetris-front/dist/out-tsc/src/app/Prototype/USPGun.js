import { ConcreteGun } from './ConcreteGun';
export class USPGun extends ConcreteGun {
    constructor() {
        super();
        this.name = "USP";
        this.damage = 'Damage from USP to ';
        console.log("PROTOTYPE USP Sukurtas");
    }
    cloneDeep() {
        const clone = Object.assign({}, this);
        clone.oponent = Object.assign({}, this.oponent);
        console.log("PROTOTYPE Sukurta deep kopija");
        return clone;
    }
}
//# sourceMappingURL=USPGun.js.map