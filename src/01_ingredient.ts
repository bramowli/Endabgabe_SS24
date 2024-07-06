namespace Geistdiele {
  export class Ingredient extends Drawable {
    type: string;

    constructor(_type: string, _position: Vector) {
      super(_position);
      this.type = _type;
    }

    public draw(): void {}
  }
}
