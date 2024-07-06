namespace Geistdiele {
  export class Background extends Drawable {
    constructor(_position: Vector) {
      super(_position);
    }

    public draw(): void {
      console.log("Background");
      crc2.fillStyle = "grey";
      crc2.rect(0, 0, crc2.canvas.width, crc2.canvas.height);
      crc2.fill();
    }
  }
}
