class RedFactory {
    createJShape() {
        return new RedJShape();
    }
    createOShape() {
        return new RedOShape();
    }
    createLShape() {
        return new RedLShape();
    }
    createZShape() {
        return new RedZShape();
    }
    createTShape() {
        return new RedTShape();
    }
    createSShape() {
        return new RedSShape();
    }
}
class BlueFactory {
    createJShape() {
        return new BlueJShape();
    }
    createOShape() {
        return new BlueOShape();
    }
    createLShape() {
        return new BlueLShape();
    }
    createZShape() {
        return new BlueZShape();
    }
    createTShape() {
        return new BlueTShape();
    }
    createSShape() {
        return new BlueSShape();
    }
}
class GreenFactory {
    createJShape() {
        return new GreenJShape();
    }
    createOShape() {
        return new GreenOShape();
    }
    createLShape() {
        return new GreenLShape();
    }
    createZShape() {
        return new GreenZShape();
    }
    createTShape() {
        return new GreenTShape();
    }
    createSShape() {
        return new GreenSShape();
    }
}
class YellowFactory {
    createJShape() {
        return new YellowJShape();
    }
    createOShape() {
        return new YellowOShape();
    }
    createLShape() {
        return new YellowLShape();
    }
    createZShape() {
        return new YellowZShape();
    }
    createTShape() {
        return new YellowTShape();
    }
    createSShape() {
        return new YellowSShape();
    }
}
class JShape {
    constructor() {
        this.shape = [[2, 0, 0], [2, 2, 2], [0, 0, 0]];
    }
}
class RedJShape extends JShape {
    constructor() {
        super();
        this.color = "red";
        console.log("abstract factory created red JShape");
    }
}
class BlueJShape extends JShape {
    constructor() {
        super();
        this.color = "blue";
        console.log("abstract factory created blue JShape");
    }
}
class GreenJShape extends JShape {
    constructor() {
        super();
        this.color = "green";
        console.log("abstract factory created green JShape");
    }
}
class YellowJShape extends JShape {
    constructor() {
        super();
        this.color = "yellow";
        console.log("abstract factory created yellow JShape");
    }
}
class OShape {
    constructor() {
        this.shape = [[2, 2, 0], [2, 2, 0], [0, 0, 0]];
    }
}
class RedOShape extends OShape {
    constructor() {
        super();
        this.color = "red";
        console.log("abstract factory created red OShape");
    }
}
class BlueOShape extends OShape {
    constructor() {
        super();
        this.color = "blue";
        console.log("abstract factory created blue OShape");
    }
}
class GreenOShape extends OShape {
    constructor() {
        super();
        this.color = "green";
        console.log("abstract factory created green OShape");
    }
}
class YellowOShape extends OShape {
    constructor() {
        super();
        this.color = "yellow";
        console.log("abstract factory created yellow OShape");
    }
}
class LShape {
    constructor() {
        this.shape = [[0, 0, 0], [2, 2, 2], [2, 0, 0]];
    }
}
class RedLShape extends LShape {
    constructor() {
        super();
        this.color = "red";
        console.log("abstract factory created red LShape");
    }
}
class BlueLShape extends LShape {
    constructor() {
        super();
        this.color = "blue";
        console.log("abstract factory created blue LShape");
    }
}
class GreenLShape extends LShape {
    constructor() {
        super();
        this.color = "green";
        console.log("abstract factory created green LShape");
    }
}
class YellowLShape extends LShape {
    constructor() {
        super();
        this.color = "yellow";
        console.log("abstract factory created yellow LShape");
    }
}
class ZShape {
    constructor() {
        this.shape = [[0, 0, 0], [2, 2, 0], [0, 2, 2]];
    }
}
class RedZShape extends ZShape {
    constructor() {
        super();
        this.color = "red";
        console.log("abstract factory created red ZShape");
    }
}
class BlueZShape extends ZShape {
    constructor() {
        super();
        this.color = "blue";
        console.log("abstract factory created blue ZShape");
    }
}
class GreenZShape extends ZShape {
    constructor() {
        super();
        this.color = "green";
        console.log("abstract factory created green ZShape");
    }
}
class YellowZShape extends ZShape {
    constructor() {
        super();
        this.color = "yellow";
        console.log("abstract factory created yellow ZShape");
    }
}
class TShape {
    constructor() {
        this.shape = [[2, 2, 2], [0, 2, 0], [0, 0, 0]];
    }
}
class RedTShape extends TShape {
    constructor() {
        super();
        this.color = "red";
        console.log("abstract factory created red TShape");
    }
}
class BlueTShape extends TShape {
    constructor() {
        super();
        this.color = "blue";
        console.log("abstract factory created blue TShape");
    }
}
class GreenTShape extends TShape {
    constructor() {
        super();
        this.color = "green";
        console.log("abstract factory created green TShape");
    }
}
class YellowTShape extends TShape {
    constructor() {
        super();
        this.color = "yellow";
        console.log("abstract factory created yellow TShape");
    }
}
class SShape {
    constructor() {
        this.shape = [[0, 0, 0], [0, 2, 2], [2, 2, 0]];
    }
}
class RedSShape extends SShape {
    constructor() {
        super();
        this.color = "red";
        console.log("abstract factory created red SShape");
    }
}
class BlueSShape extends SShape {
    constructor() {
        super();
        this.color = "blue";
        console.log("abstract factory created blue SShape");
    }
}
class GreenSShape extends SShape {
    constructor() {
        super();
        this.color = "green";
        console.log("abstract factory created green SShape");
    }
}
class YellowSShape extends SShape {
    constructor() {
        super();
        this.color = "yellow";
        console.log("abstract factory created yellow SShape");
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
export function getRandomPiece() {
    var factoryType = getRandomInt(4);
    let factory = null;
    switch (factoryType) {
        case 0: {
            factory = new RedFactory();
            break;
        }
        case 1: {
            factory = new BlueFactory();
            break;
        }
        case 2: {
            factory = new GreenFactory();
            break;
        }
        case 3: {
            factory = new YellowFactory();
            break;
        }
        default: {
            factory = new BlueFactory();
            break;
        }
    }
    var pieceType = getRandomInt(6);
    switch (pieceType) {
        case 0: {
            return factory.createJShape();
            break;
        }
        case 1: {
            return factory.createOShape();
            break;
        }
        case 2: {
            return factory.createLShape();
            break;
        }
        case 3: {
            return factory.createZShape();
            break;
        }
        case 4: {
            return factory.createTShape();
            break;
        }
        case 5: {
            return factory.createSShape();
            break;
        }
        default: {
            return factory.createJShape();
            break;
        }
    }
}
//# sourceMappingURL=abstractFactory.js.map