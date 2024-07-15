namespace Geistdiele {
  export interface IngredientType {
    name: string;
    colour: string;
    lineColour: string;
    price: number;
  }

  export abstract class Ingredient extends Drawable {
    protected data: IngredientType;
    size: number;

    constructor(_data: IngredientType, _position: Vector, _size: number) {
      super(_position);
      this.data = _data;
      this.size = _size;
    }

    public getName(): string {
      return this.data.name;
    }
  }
}
