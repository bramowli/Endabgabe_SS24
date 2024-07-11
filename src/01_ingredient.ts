namespace Geistdiele {
  export interface IngredientType {
    name: string;
    colour: string;
    lineColour: string;
    price: number;
  }

  export abstract class Ingredient extends Drawable {
    protected data: IngredientType;

    constructor(_data: IngredientType, _position: Vector) {
      super(_position);
      this.data = _data;
    }
  }
}
