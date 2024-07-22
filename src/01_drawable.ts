namespace Geistdiele {
  // abstract class for all drawable objects
  export abstract class Drawable {
    position: Vector;

    constructor(_position: Vector) {
      this.position = _position;
    }

    public draw() {
      crc2.canvas.width = window.innerWidth;
      crc2.canvas.height = window.innerHeight;
    }
  }
}
