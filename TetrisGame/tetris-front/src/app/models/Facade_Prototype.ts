

/**
 * The Facade class provides a simple interface to the complex logic of one or
 * several subsystems. The Facade delegates the client requests to the
 * appropriate objects within the subsystem. The Facade is also responsible for
 * managing their lifecycle. All of this shields the client from the undesired
 * complexity of the subsystem.
 */
export class Facade {
    protected subsystem1: AK47;

    protected subsystem2: USP;

    /**
     * Depending on your application's needs, you can provide the Facade with
     * existing subsystem objects or force the Facade to create them on its own.
     */
    constructor(subsystem1: AK47 = null, subsystem2: USP = null) {
        this.subsystem1 = subsystem1 || new AK47();
        this.subsystem2 = subsystem2 || new USP();
    }

    /**
     * The Facade's methods are convenient shortcuts to the sophisticated
     * functionality of the subsystems. However, clients get only to a fraction
     * of a subsystem's capabilities.
     */
    public operation(): string {
        let result = 'Paruošiam ginklus:\n';
        result += this.subsystem1.GetReady();
        result += this.subsystem2.Ready();
        
        result += 'Šaunam:\n';
        result += this.subsystem1.Shoot();
        result += this.subsystem2.Fire();

        return result;
    }
}

export class Gun {
    public x: any;
    public y: any;
    public AK47ref: AK47;
    public USPref: USP;

    public cloneAK(): this {
        const clone = Object.create(this);

       // clone.component = Object.create(this.component);

        // Cloning an object that has a nested object with backreference
        // requires special treatment. After the cloning is completed, the
        // nested object should point to the cloned object, instead of the
        // original object. Spread operator can be handy for this case.
        clone.AK47ref= {
            ...this.AK47ref,
            prototype: { ...this },
        };

        return clone;

    }

    public cloneUSP(): this {
        const clone = Object.create(this);

       // clone.component = Object.create(this.component);

        // Cloning an object that has a nested object with backreference
        // requires special treatment. After the cloning is completed, the
        // nested object should point to the cloned object, instead of the
        // original object. Spread operator can be handy for this case.
        clone.USPref= {
            ...this.USPref,
            prototype: { ...this },
        };

        return clone;

    }
}


export class AK47 extends Gun{

    public ilgis: any;
    public plotis: any;

    public prototype;

    constructor()
    constructor(prototype: Gun)
    constructor(prototype?: Gun) {
        super();
        this.prototype = prototype;
    }

    public GetReady(): string {
        return 'AK47: Ready!\n';
    }

    // ...

    public Shoot(): string {
        return 'AK47: Go!\n';
    }
}

/**
 * Some facades can work with multiple subsystems at the same time.
 */
export class USP extends Gun {

    public perimetras: any;
    public prototype;
    
    constructor()
    constructor(prototype: Gun)
    constructor(prototype?: Gun) {
        super();
        this.prototype = prototype;
    }

    public Ready(): string {
        return 'USP: Get ready!\n';
    }

    // ...

    public Fire(): string {
        return 'USP: Fire!';
    }
}



/**
 * The client code may have some of the subsystem's objects already created. In
 * this case, it might be worthwhile to initialize the Facade with these objects
 * instead of letting the Facade create new instances.
 */
