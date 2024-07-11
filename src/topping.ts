namespace Geistdiele {
  export class Topping extends Ingredient {
    constructor(_data: IngredientType, _pos: Vector) {
      super(_data, _pos);
    }

    public draw(): void {
      crc2.strokeStyle = this.data.colour;
    }
  }
}
