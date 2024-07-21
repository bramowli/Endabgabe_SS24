namespace Geistdiele {
  // abstract class for all ingredients
  export abstract class Ingredient extends Drawable {
    protected data: IngredientType;
    protected size: number;

    constructor(_data: IngredientType, _position: Vector, _size: number) {
      super(_position);
      this.data = _data;
      this.size = _size;
    }

    // returns the name defined in the data object
    public getName(): string {
      return this.data.name;
    }
  }
}
