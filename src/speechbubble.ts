namespace Geistdiele {
  export class Speechbubble extends Drawable {
    content: Drawable;
    mirror: boolean;

    constructor(_position: Vector, _mirror: boolean) {
      super(_position);
      this.mirror = _mirror;
    }

    public draw(): void {}
  }
}
