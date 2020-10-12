
import { IPiece } from './../shared/interfaces';

interface AbstractFactory {
  createJShape(): JShape;
  createOShape(): OShape;
  createLShape(): LShape;
  createZShape(): ZShape;
  createTShape(): TShape;
  createSShape(): SShape;
}

class RedFactory implements AbstractFactory {
  public createJShape(): JShape {
      return new RedJShape();
  }
  public createOShape(): OShape {
      return new RedOShape();
  }
  public createLShape(): LShape {
    return new RedLShape();
  }
  public createZShape(): ZShape {
    return new RedZShape();
  }
  public createTShape(): TShape {
    return new RedTShape();
  }
  public createSShape(): SShape {
    return new RedSShape();
  }
}

class BlueFactory implements AbstractFactory {
  public createJShape(): JShape {
      return new BlueJShape();
  }
  public createOShape(): OShape {
      return new BlueOShape();
  }
  public createLShape(): LShape {
    return new BlueLShape();
  }
  public createZShape(): ZShape {
    return new BlueZShape();
  }
  public createTShape(): TShape {
    return new BlueTShape();
  }
  public createSShape(): SShape {
    return new BlueSShape();
  }
}

class GreenFactory implements AbstractFactory {
  public createJShape(): JShape {
      return new GreenJShape();
  }
  public createOShape(): OShape {
      return new GreenOShape();
  }
  public createLShape(): LShape {
    return new GreenLShape();
  }
  public createZShape(): ZShape {
    return new GreenZShape();
  }
  public createTShape(): TShape {
    return new GreenTShape();
  }
  public createSShape(): SShape {
    return new GreenSShape();
  }
}

class YellowFactory implements AbstractFactory {
  public createJShape(): JShape {
      return new YellowJShape();
  }
  public createOShape(): OShape {
      return new YellowOShape();
  }
  public createLShape(): LShape {
    return new YellowLShape();
  }
  public createZShape(): ZShape {
    return new YellowZShape();
  }
  public createTShape(): TShape {
    return new YellowTShape();
  }
  public createSShape(): SShape {
    return new YellowSShape();
  }
}

class JShape implements IPiece{
  x: number;
  y: number;
  color: string;
  shape = [[2, 0, 0], [2, 2, 2], [0, 0, 0]];
}

class RedJShape extends JShape {
  constructor(){
    super();
    this.color = "red";
    console.log("abstract factory created red JShape");
  }
}

class BlueJShape extends JShape {
  constructor(){
    super();
    this.color = "blue";
    console.log("abstract factory created blue JShape");
  }
}

class GreenJShape extends JShape {
  constructor(){
    super();
    this.color = "green";
    console.log("abstract factory created green JShape");
  }
}

class YellowJShape extends JShape {
  constructor(){
    super();
    this.color = "yellow";
    console.log("abstract factory created yellow JShape");
  }
}

class OShape implements IPiece {
  x: number;
  y: number;
  color: string;
  shape = [[2, 2, 0], [2, 2, 0], [0, 0, 0]];
}

class RedOShape extends OShape {
  constructor(){
    super();
    this.color = "red";
    console.log("abstract factory created red OShape");
  }
}

class BlueOShape extends OShape {
  constructor(){
    super();
    this.color = "blue";
    console.log("abstract factory created blue OShape");
  }
}

class GreenOShape extends OShape {
  constructor(){
    super();
    this.color = "green";
    console.log("abstract factory created green OShape");
  }
}

class YellowOShape extends OShape {
  constructor(){
    super();
    this.color = "yellow";
    console.log("abstract factory created yellow OShape");
  }
}

class LShape implements IPiece {
  x: number;
  y: number;
  color: string;
  shape = [[0, 0, 0], [2, 2, 2], [2, 0, 0]];
}

class RedLShape extends LShape {
  constructor(){
    super();
    this.color = "red";
    console.log("abstract factory created red LShape");
  }
}

class BlueLShape extends LShape {
  constructor(){
    super();
    this.color = "blue";
    console.log("abstract factory created blue LShape");
  }
}

class GreenLShape extends LShape {
  constructor(){
    super();
    this.color = "green";
    console.log("abstract factory created green LShape");
  }
}

class YellowLShape extends LShape {
  constructor(){
    super();
    this.color = "yellow";
    console.log("abstract factory created yellow LShape");
  }
}

class ZShape implements IPiece {
  x: number;
  y: number;
  color: string;
  shape = [[0, 0, 0], [2, 2, 0], [0, 2, 2]];
}

class RedZShape extends ZShape {
  constructor(){
    super();
    this.color = "red";
    console.log("abstract factory created red ZShape");
  }
}

class BlueZShape extends ZShape {
  constructor(){
    super();
    this.color = "blue";
    console.log("abstract factory created blue ZShape");
  }
}

class GreenZShape extends ZShape {
  constructor(){
    super();
    this.color = "green";
    console.log("abstract factory created green ZShape");
  }
}

class YellowZShape extends ZShape {
  constructor(){
    super();
    this.color = "yellow";
    console.log("abstract factory created yellow ZShape");
  }
}

class TShape implements IPiece {
  x: number;
  y: number;
  color: string;
  shape = [[2, 2, 2], [0, 2, 0], [0, 0, 0]];
}

class RedTShape extends TShape {
  constructor(){
    super();
    this.color = "red";
    console.log("abstract factory created red TShape");
  }
}

class BlueTShape extends TShape {
  constructor(){
    super();
    this.color = "blue";
    console.log("abstract factory created blue TShape");
  }
}

class GreenTShape extends TShape {
  constructor(){
    super();
    this.color = "green";
    console.log("abstract factory created green TShape");
  }
}

class YellowTShape extends TShape {
  constructor(){
    super();
    this.color = "yellow";
    console.log("abstract factory created yellow TShape");
  }
}

class SShape implements IPiece {
  x: number;
  y: number;
  color: string;
  shape = [[0, 0, 0], [0, 2, 2], [2, 2, 0]];
}

class RedSShape extends SShape {
  constructor(){
    super();
    this.color = "red";
    console.log("abstract factory created red SShape");
  }
}

class BlueSShape extends SShape {
  constructor(){
    super();
    this.color = "blue";
    console.log("abstract factory created blue SShape");
  }
}

class GreenSShape extends SShape {
  constructor(){
    super();
    this.color = "green";
    console.log("abstract factory created green SShape");
  }
}

class YellowSShape extends SShape {
  constructor(){
    super();
    this.color = "yellow";
    console.log("abstract factory created yellow SShape");
  }
}


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function getRandomPiece(){
  var factoryType = getRandomInt(4);
  let factory = null;
  switch(factoryType) {
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
  switch(pieceType) {
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
