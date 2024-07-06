namespace Geistdiele {
  export class Topping extends Ingredient {
    constructor(_type: string, _position: Vector) {
      super(_type, _position);
    }

    public draw(): void {}
  }
}
