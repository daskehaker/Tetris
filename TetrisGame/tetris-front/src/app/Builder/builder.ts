import { SpecialPiece } from '../models/SpecialPiece';
import { Player } from '../user/player';


interface Builder {
  setColor(color: string): void;
  setPower(power: string): void;
  setSpeed(speed: number): void;
  setShape(shape: number[][]): void;
  setPlayer(player: Player):void;
  setEffectRadius(radius: number): void;
}

export class PieceBuilder implements Builder {
  private piece: SpecialPiece

  constructor() {
    this.reset();
  }
  public setShape(shape: number[][]): void {
    this.piece.shape = shape;
  }
  public setPlayer(player: Player): void {
    this.piece.player = player;
  }
  public setEffectRadius(radius: number): void {
    this.piece.radius = radius;
  }

  public reset(): void {
    this.piece = new SpecialPiece();
  }

  public setColor(color: string): void {
    this.piece.color = color;
  }

  public setPower(power: string) {
    this.piece.power = power;
  }

  public setSpeed(speed: number) {
    this.piece.speed = speed;
  }

  public getSpecialPiece(): SpecialPiece {
    const result = this.piece;
    this.reset();

    return this.piece;
  }
}

export class Director {
  private builder: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder
  }

  public buildBomb(): void {
    this.builder.setColor("Black");
    this.builder.setEffectRadius(3);
    this.builder.setShape([[0, 0, 0], [0, 1, 0], [0, 0, 0]]);
    this.builder.setPower("Explode");
  }
  public buildInvisiblePiece(): void {
    this.builder.setColor("White");
    this.builder.setShape([[0, 1, 0], [1, 1, 1], [0, 0, 0]]);
  }

}
