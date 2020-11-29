import { Oponent } from './Oponent';
export class ConcreteGun {
    constructor() {
        this.oponent = new Oponent({ id: "", name: "Not set" });
    }
    clone() {
        console.log("PROTOTYPE Sukurta shallow kopija");
        return Object.assign({}, this);
    }
}
//# sourceMappingURL=ConcreteGun.js.map