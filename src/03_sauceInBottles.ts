namespace Geistdiele {
  type SaucePositionType = "left" | "right";
  export class SauceInBottle extends Ingredient {
    private saucePosition: SaucePositionType;

    constructor(_data: IngredientType, _saucePosition: SaucePositionType, _position: Vector, _size:number) {
      super(_data, _position, _size);
      this.saucePosition = _saucePosition;
    }

    public draw(): void {
      if (this.saucePosition === "left") {
        this.drawLeftSauce();
      } else if (this.saucePosition === "right") {
        this.drawRightSauce();
      }
    }

    public interact(_hitPosition: Vector): boolean {
      if (
        this.saucePosition === "left" &&
        _hitPosition.x >= 1730 &&
        _hitPosition.x <= 1800 &&
        _hitPosition.y >= 890 &&
        _hitPosition.y <= 1050
      ) {
        console.log("hit red");
        return true;
      } else if (
        this.saucePosition === "right" &&
        _hitPosition.x >= 1830 &&
        _hitPosition.x <= 1895 &&
        _hitPosition.y >= 840 &&
        _hitPosition.y <= 1000
      ) {
        console.log("hit green");
        return true;
      }
      return false;
    }

    private drawLeftSauce() {
      crc2.save();

      // #path3-4
      crc2.beginPath();
      crc2.fillStyle = "rgb(132, 37, 38)";
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(132, 37, 38)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 7.11036;
      crc2.miterLimit = 10;
      crc2.moveTo(1731.45, 957.942);
      crc2.bezierCurveTo(1731.45, 955.724, 1749.98, 951.856, 1769.27, 951.526);
      crc2.bezierCurveTo(1788.56, 951.197, 1806.92, 955.941, 1806.92, 957.468);
      crc2.bezierCurveTo(1806.92, 958.995, 1789.77, 963.115, 1770.48, 963.445);
      crc2.bezierCurveTo(1751.19, 963.774, 1731.45, 960.16, 1731.45, 957.942);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();

      //#path
      crc2.beginPath();
      crc2.fillStyle = "rgb(88, 22, 22)";
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(88, 22, 22)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 7.11036;
      crc2.miterLimit = 10;
      crc2.moveTo(1731.45, 956.483);
      crc2.bezierCurveTo(1731.45, 956.483, 1729.02, 1042.83, 1729.02, 1047.43);
      crc2.bezierCurveTo(1729.02, 1053.84, 1749.43, 1059.64, 1769.27, 1059.04);
      crc2.bezierCurveTo(1789.67, 1058.42, 1809.52, 1054.03, 1809.52, 1047.23);
      crc2.bezierCurveTo(1809.52, 1040.43, 1806.92, 955.945, 1806.92, 955.945);
      crc2.bezierCurveTo(1806.92, 955.945, 1788.14, 962.314, 1769.27, 961.949);
      crc2.bezierCurveTo(1750.4, 961.585, 1731.45, 956.483, 1731.45, 956.483);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();
    }

    private drawRightSauce() {
      // #path1-3
      crc2.beginPath();
      crc2.fillStyle = "rgb(89, 183, 58)";
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(89, 183, 58)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 7.11036;
      crc2.miterLimit = 10;
      crc2.moveTo(1829.71, 895.122);
      crc2.bezierCurveTo(1829.71, 892.904, 1848.24, 889.036, 1867.53, 888.707);
      crc2.bezierCurveTo(1886.82, 888.377, 1905.18, 893.122, 1905.18, 894.648);
      crc2.bezierCurveTo(1905.18, 896.175, 1888.03, 900.295, 1868.74, 900.625);
      crc2.bezierCurveTo(1849.45, 900.955, 1829.71, 897.34, 1829.71, 895.122);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();

      crc2.beginPath();
      crc2.fillStyle = "rgb(60, 158, 28)";
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(60, 158, 28)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 7.11036;
      crc2.miterLimit = 10;
      crc2.moveTo(1828.89, 894.668);
      crc2.bezierCurveTo(1828.89, 894.668, 1826.46, 990.532, 1826.46, 995.133);
      crc2.bezierCurveTo(1826.46, 1001.55, 1846.87, 1007.35, 1866.71, 1006.75);
      crc2.bezierCurveTo(1887.11, 1006.13, 1906.96, 1001.73, 1906.96, 994.934);
      crc2.bezierCurveTo(1906.96, 988.135, 1905.18, 892.265, 1905.18, 892.265);
      crc2.bezierCurveTo(1905.18, 892.265, 1886.31, 901.011, 1867.45, 900.646);
      crc2.bezierCurveTo(1848.58, 900.281, 1828.89, 894.668, 1828.89, 894.668);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();
      crc2.restore();
    }
  }
}
