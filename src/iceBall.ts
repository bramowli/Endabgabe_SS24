namespace Geistdiele {
  export class IceBall extends Ingredient {
    constructor(_data: IngredientType, _position: Vector) {
      super(_data, _position);
    }

    public draw(): void {
      this.drawBall();
    }

    public interact(_hitPosition: Vector): boolean {
      return false;
    }

    private drawBall() {
      // #Ebene-9
      crc2.save();
      crc2.translate(this.position.x, this.position.y);

      // #path1-6
      crc2.beginPath();
      crc2.fillStyle = this.data.colour;
      crc2.globalAlpha = 1.0;
      crc2.lineCap = "round";
      crc2.lineJoin = "round";
      crc2.miterLimit = 10;
      crc2.moveTo(0.0, 41.0877);
      crc2.bezierCurveTo(0.0, 18.3956, 18.1723, 0.0, 40.5889, 0.0);
      crc2.bezierCurveTo(63.0055, 0.0, 81.1778, 18.3956, 81.1778, 41.0877);
      crc2.bezierCurveTo(81.1778, 55.7754, 66.7296, 60.8654, 65.7339, 61.1959);
      crc2.bezierCurveTo(61.9305, 62.4584, 52.2729, 62.877, 40.5889, 63.2168);
      crc2.bezierCurveTo(28.9049, 63.5566, 14.6512, 62.3128, 12.0267, 61.1959);
      crc2.bezierCurveTo(10.1787, 60.4095, 0.0, 58.0135, 0.0, 41.0877);
      crc2.closePath();
      crc2.fill();
      crc2.restore();
      crc2.restore();
    }
  }
}
