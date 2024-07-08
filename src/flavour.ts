namespace Geistdiele {
  export class Flavour extends Ingredient {
    data: FlavourData;

    constructor(_type: string, _position: Vector, _data: FlavourData) {
      super(_type, _position);
      this.data = _data;
    }

    public draw(): void {
    
    }
  }
}
