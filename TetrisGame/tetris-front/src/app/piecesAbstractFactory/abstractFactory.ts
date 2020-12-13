
import { Piece } from '../models/piece';
import { IPiece } from './../shared/interfaces';

interface AbstractFactory {
  createJShape(fliesMap): JShape;
  createOShape(fliesMap): OShape;
  createLShape(fliesMap): LShape;
  createZShape(fliesMap): ZShape;
  createTShape(fliesMap): TShape;
  createSShape(fliesMap): SShape;
}

class RedFactory implements AbstractFactory {
  public createJShape(fliesMap): JShape {
    console.log("flyweight used");
    if (fliesMap["RedJShape"] === undefined || null) {
      console.log("create item");
      fliesMap["RedJShape"] = new RedJShape();
    }
    return fliesMap["RedJShape"] as RedJShape;
  }
  public createOShape(fliesMap): OShape {
    console.log("flyweight used");
    if (fliesMap["RedOShape"] === undefined || null) {
      fliesMap["RedOShape"] = new RedOShape();
    }
    return fliesMap["RedOShape"] as RedOShape;
  }
  public createLShape(fliesMap): LShape {
    console.log("flyweight used");
    if (fliesMap["RedLShape"] === undefined || null) {
      fliesMap["RedLShape"] = new RedLShape();
    }
    return fliesMap["RedLShape"] as RedLShape;
  }
  public createZShape(fliesMap): ZShape {
    console.log("flyweight used");
    if (fliesMap["RedZShape"] === undefined || null) {
      fliesMap["RedZShape"] = new RedZShape();
    }
    return fliesMap["RedZShape"] as RedZShape;
  }
  public createTShape(fliesMap): TShape {
    console.log("flyweight used");
    if (fliesMap["RedTShape"] === undefined || null) {
      fliesMap["RedTShape"] = new RedTShape();
    }
    return fliesMap["RedTShape"] as RedTShape;
  }
  public createSShape(fliesMap): SShape {
    console.log("flyweight used");
    if (fliesMap["RedSShape"] === undefined || null) {
      fliesMap["RedSShape"] = new RedSShape();
    }
    return fliesMap["RedSShape"] as RedZShape;
  }
}

class BlueFactory implements AbstractFactory {
  public createJShape(fliesMap): JShape {
    console.log("flyweight used");
    if (fliesMap["BlueJShape"] === undefined || null) {
      const simple = new ConcreteBlueJShape();
      const decorator1 = new SoundDecorator(simple);
      fliesMap["BlueJShape"] = new AlertDecorator(decorator1);
    }
    return fliesMap["BlueJShape"] as BlueJShape;
  }
  public createOShape(fliesMap): OShape {
    console.log("flyweight used");
    if (fliesMap["BlueOShape"] === undefined || null) {
      fliesMap["BlueOShape"] = new BlueOShape();
    }
    return fliesMap["BlueOShape"] as BlueOShape;
  }
  public createLShape(fliesMap): LShape {
    console.log("flyweight used");
    if (fliesMap["BlueLShape"] === undefined || null) {
      fliesMap["BlueLShape"] = new BlueLShape();
    }
    return fliesMap["BlueLShape"] as BlueLShape;
  }
  public createZShape(fliesMap): ZShape {
    console.log("flyweight used");
    if (fliesMap["BlueZShape"] === undefined || null) {
      fliesMap["BlueZShape"] = new BlueZShape();
    }
    return fliesMap["BlueZShape"] as BlueZShape;
  }
  public createTShape(fliesMap): TShape {
    console.log("flyweight used");
    if (fliesMap["BlueTShape"] === undefined || null) {
      fliesMap["BlueTShape"] = new BlueTShape();
    }
    return fliesMap["BlueTShape"] as BlueTShape;
  }
  public createSShape(fliesMap): SShape {
    console.log("flyweight used");
    if (fliesMap["BlueSShape"] === undefined || null) {
      fliesMap["BlueSShape"] = new BlueSShape();
    }
    return fliesMap["BlueSShape"] as BlueZShape;
  }
}

class GreenFactory implements AbstractFactory {
  public createJShape(fliesMap): JShape {
    console.log("flyweight used");
    if (fliesMap["GreenJShape"] === undefined || null) {
      console.log("create item");
      fliesMap["GreenJShape"] = new GreenJShape();
    }
    return fliesMap["GreenJShape"] as GreenJShape;
  }
  public createOShape(fliesMap): OShape {
    console.log("flyweight used");
    if (fliesMap["GreenOShape"] === undefined || null) {
      fliesMap["GreenOShape"] = new GreenOShape();
    }
    return fliesMap["GreenOShape"] as GreenOShape;
  }
  public createLShape(fliesMap): LShape {
    console.log("flyweight used");
    if (fliesMap["GreenLShape"] === undefined || null) {
      fliesMap["GreenLShape"] = new GreenLShape();
    }
    return fliesMap["GreenLShape"] as GreenLShape;
  }
  public createZShape(fliesMap): ZShape {
    console.log("flyweight used");
    if (fliesMap["GreenZShape"] === undefined || null) {
      fliesMap["GreenZShape"] = new GreenZShape();
    }
    return fliesMap["GreenZShape"] as GreenZShape;
  }
  public createTShape(fliesMap): TShape {
    console.log("flyweight used");
    if (fliesMap["GreenTShape"] === undefined || null) {
      fliesMap["GreenTShape"] = new GreenTShape();
    }
    return fliesMap["GreenTShape"] as GreenTShape;
  }
  public createSShape(fliesMap): SShape {
    console.log("flyweight used");
    if (fliesMap["GreenSShape"] === undefined || null) {
      fliesMap["GreenSShape"] = new GreenSShape();
    }
    return fliesMap["GreenSShape"] as GreenZShape;
  }
}

class YellowFactory implements AbstractFactory {
  public createJShape(fliesMap): JShape {
    console.log("flyweight used");
    if (fliesMap["YellowJShape"] === undefined || null) {
      console.log("create item");
      fliesMap["YellowJShape"] = new YellowJShape();
    }
    return fliesMap["YellowJShape"] as YellowJShape;
  }
  public createOShape(fliesMap): OShape {
    console.log("flyweight used");
    if (fliesMap["YellowOShape"] === undefined || null) {
      fliesMap["YellowOShape"] = new YellowOShape();
    }
    return fliesMap["YellowOShape"] as YellowOShape;
  }
  public createLShape(fliesMap): LShape {
    console.log("flyweight used");
    if (fliesMap["YellowLShape"] === undefined || null) {
      fliesMap["YellowLShape"] = new YellowLShape();
    }
    return fliesMap["YellowLShape"] as YellowLShape;
  }
  public createZShape(fliesMap): ZShape {
    console.log("flyweight used");
    if (fliesMap["YellowZShape"] === undefined || null) {
      fliesMap["YellowZShape"] = new YellowZShape();
    }
    return fliesMap["YellowZShape"] as YellowZShape;
  }
  public createTShape(fliesMap): TShape {
    console.log("flyweight used");
    if (fliesMap["YellowTShape"] === undefined || null) {
      fliesMap["YellowTShape"] = new YellowTShape();
    }
    return fliesMap["YellowTShape"] as YellowTShape;
  }
  public createSShape(fliesMap): SShape {
    console.log("flyweight used");
    if (fliesMap["YellowSShape"] === undefined || null) {
      fliesMap["YellowSShape"] = new YellowSShape();
    }
    return fliesMap["YellowSShape"] as YellowZShape;
  }
}

class JShape implements IPiece{
  rotationCount: number;
  radius: number;
  power: string;
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

export abstract class BlueJShape extends JShape {
  constructor(){
    super();
    this.color = "blue";
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
  rotationCount: number;
  radius: number;
  power: string;
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
  rotationCount: number;
  radius: number;
  power: string;
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
  rotationCount: number;
  radius: number;
  power: string;
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
  rotationCount: number;
  radius: number;
  power: string;
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
  rotationCount: number;
  radius: number;
  power: string;
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

let fliesMap: { [s: string]: IPiece; } = <any>{}//{"JShape": undefined};
export function getRandomPiece(){
  console.log("map:")
  console.log(fliesMap);
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
       return factory.createJShape(fliesMap);
       break;
    }
    case 1: {
      return factory.createOShape(fliesMap);
       break;
    }
    case 2: {
      return factory.createLShape(fliesMap);
       break;
    }
    case 3: {
      return factory.createZShape(fliesMap);
       break;
    }
    case 4: {
      return factory.createTShape(fliesMap);
       break;
    }
    case 5: {
      return factory.createSShape(fliesMap);
       break;
    }
    default: {
      return factory.createJShape(fliesMap);
       break;
    }
  }
}

class ConcreteBlueJShape extends BlueJShape {
  constructor() {
    super();
    this.color = "blue";
    console.log("ConcreteBlueJShape created");
  }
  public operation(): string {
      return 'ConcreteComponent';
  }
}

class Decorator extends BlueJShape {
  protected wrapee: BlueJShape;

  constructor(component: BlueJShape) {
    super();
    this.wrapee = component;
  }

  public operation(option){
    if(option !== 1){
      var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");
      snd.play();
    }
    else{
      alert("Decorator alert!");
    }
  }
}

class AlertDecorator extends Decorator {
  constructor(shape:BlueJShape){
    super(shape);
    console.log("using alert decorator");
    this.operation();
  }

  public operation() {
    super.operation(1);
  }
}

class SoundDecorator extends Decorator {
  constructor(shape:BlueJShape){
    super(shape);
    console.log("using sound decorator");
    this.operation();
  }

  public operation() {
    super.operation(2);
  }
}
