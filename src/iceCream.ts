namespace Geistdiele {
  export class IceCream extends Drawable {
    private iceBalls: IceBall[] = [];
    private sprinkles: Sprinkles[] = [];
    private sauces: Sauce[] = [];
    private size: number;

    constructor(_position: Vector, _size: number) {
      super(_position);
      this.size = _size;
    }

    public addIceBall(_flavour: IngredientType, _size: number): void {
      if (this.iceBalls.length < 3) {
        if (this.iceBalls.length === 0) {
          this.iceBalls.push(
            new IceBall(_flavour, { x: this.position.x + 8 * _size, y: this.position.y - 25 * _size }, _size)
          );
        } else if (this.iceBalls.length === 1) {
          this.iceBalls.push(
            new IceBall(_flavour, { x: this.position.x + 70 * _size, y: this.position.y - 25 * _size }, _size)
          );
        } else if (this.iceBalls.length === 2) {
          this.iceBalls.push(
            new IceBall(_flavour, { x: this.position.x + 45 * _size, y: this.position.y - 70 * _size }, _size)
          );
        }
      }
    }

    public addSauce(_sauces: IngredientType, _size: number) {
      if (this.sauces.length === 0) {
        if (this.iceBalls.length >= 1) {
          this.sauces.push(
            new Sauce(_sauces, { x: this.position.x + 2 * _size, y: this.position.y - 28 * _size }, _size)
          );
        }
        if (this.iceBalls.length >= 2) {
          this.sauces.push(
            new Sauce(_sauces, { x: this.position.x + 65 * _size, y: this.position.y - 28 * _size }, _size)
          );
        }
        if (this.iceBalls.length === 3) {
          this.sauces.push(
            new Sauce(_sauces, { x: this.position.x + 40 * _size, y: this.position.y - 75 * _size }, _size)
          );
        }
      }
    }

    public addTopping(_toppings: IngredientType, _size: number) {
      if (this.sprinkles.length === 0) {
        if (this.iceBalls.length >= 1) {
          this.sprinkles.push(
            new Sprinkles(_toppings, { x: this.position.x + 2 * _size, y: this.position.y - 28 * _size }, _size)
          );
        }
        if (this.iceBalls.length >= 2) {
          this.sprinkles.push(
            new Sprinkles(_toppings, { x: this.position.x + 65 * _size, y: this.position.y - 28 * _size }, _size)
          );
        }
        if (this.iceBalls.length === 3) {
          this.sprinkles.push(
            new Sprinkles(_toppings, { x: this.position.x + 40 * _size, y: this.position.y - 75 * _size }, _size)
          );
        }
      }
    }

    public getIceBalls(): IceBall[] {
      return this.iceBalls;
    }

    public getSauce(): Sauce {
      return this.sauces[0];
    }

    public getSprinkles(): Sprinkles {
      return this.sprinkles[0];
    }

    public draw(): void {
      this.drawCone();
      this.iceBalls[0]?.draw();
      this.iceBalls[1]?.draw();
      this.iceBalls[2]?.draw();
      this.sauces[0]?.draw();
      this.sauces[1]?.draw();
      this.sauces[2]?.draw();
      this.sprinkles[0]?.draw();
      this.sprinkles[1]?.draw();
      this.sprinkles[2]?.draw();
    }

    public equals(_iceCream: IceCream): boolean {
      if (_iceCream.getSauce()?.getName() !== this.getSauce()?.getName()) {
        //? weil es sind ja nicht immer alle da
        return false;
      }
      if (_iceCream.getSprinkles()?.getName() !== this.getSprinkles()?.getName()) {
        return false;
      }
      const iceBalls = _iceCream.getIceBalls();
      for (let i = 0; i < iceBalls.length; i++) {
        if (iceBalls[i]?.getName() !== this.iceBalls[i]?.getName()) {
          return false;
        }
      }
      return true;
    }

    private drawCone(): void {
      crc2.save();
      crc2.translate(this.position.x, this.position.y);
      crc2.scale(this.size, this.size);
      // #Layer-8

      // #path1
      crc2.beginPath();
      crc2.fillStyle = "rgb(208, 172, 107)";
      crc2.globalAlpha = 1.0;
      crc2.lineCap = "round";
      crc2.lineJoin = "round";
      crc2.miterLimit = 10;
      crc2.moveTo(14.1839, 25.3066);
      crc2.lineTo(145.044, 23.499);
      crc2.lineTo(83.3242, 139.608);
      crc2.lineTo(83.3242, 139.608);
      crc2.closePath();
      crc2.fill();

      // #path2
      crc2.beginPath();
      crc2.fillStyle = "rgb(192, 159, 98)";
      crc2.globalAlpha = 1.0;
      crc2.lineCap = "round";
      crc2.lineJoin = "round";
      crc2.miterLimit = 10;
      crc2.moveTo(48.179, 13.1937);
      crc2.lineTo(128.439, 13.5626);
      crc2.lineTo(134.465, 23.499);
      crc2.lineTo(80.2645, 29.734);
      crc2.lineTo(26.1112, 23.499);
      crc2.closePath();
      crc2.fill();

      // #path3
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(185, 153, 94)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 10.0;
      crc2.miterLimit = 10;
      crc2.moveTo(9.67862, 22.7548);
      crc2.bezierCurveTo(9.67862, 22.7548, 44.3211, 30.3672, 79.614, 29.734);
      crc2.bezierCurveTo(114.907, 29.1008, 150.85, 20.222, 150.85, 20.222);
      crc2.bezierCurveTo(150.85, 20.222, 114.907, 8.8838, 79.614, 9.51699);
      crc2.bezierCurveTo(44.3211, 10.1502, 9.67862, 22.7548, 9.67862, 22.7548);
      crc2.closePath();
      crc2.stroke();

      // #path4
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(185, 153, 94)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 10.0;
      crc2.miterLimit = 10;
      crc2.moveTo(9.67862, 21.5276);
      crc2.bezierCurveTo(9.67862, 21.5276, 72.7451, 139.929, 83.3242, 139.607);
      crc2.bezierCurveTo(93.9034, 139.285, 150.85, 19.1398, 150.85, 19.1398);
      crc2.stroke();

      // #path5
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(185, 153, 94)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 4.2599;
      crc2.miterLimit = 10;
      crc2.moveTo(41.0431, 29.734);
      crc2.bezierCurveTo(55.1788, 55.6911, 98.2933, 123.873, 98.2933, 123.873);
      crc2.lineTo(117.834, 85.674);
      crc2.lineTo(80.2881, 29.734);
      crc2.lineTo(117.834, 29.734);
      crc2.lineTo(134.465, 52.6839);
      crc2.lineTo(62.6386, 111.415);
      crc2.lineTo(42.0212, 80.1558);
      crc2.lineTo(112.654, 27.5513);
      crc2.lineTo(71.0968, 29.2047);
      crc2.lineTo(29.4422, 51.549);
      crc2.stroke();
      crc2.restore();
    }
  }
}
