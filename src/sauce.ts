namespace Geistdiele {
  export class Sauce extends Ingredient {
    constructor(_data: IngredientType, _position: Vector, _size:number) {
      super(_data, _position, _size);
    }

    public draw(): void {
      this.drawSauce();
    }

    private drawSauce() {
      crc2.save();
      crc2.translate(this.position.x, this.position.y);
      crc2.scale(this.size, this.size);

      // #path1
      crc2.beginPath();
      crc2.fillStyle = this.data.colour;
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = this.data.colour;
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 2.55471;
      crc2.miterLimit = 10;
      crc2.moveTo(8.01881, 24.1316);
      crc2.bezierCurveTo(14.6825, 13.1671, 25.6614, 3.20322, 45.9101, 3.92467);
      crc2.bezierCurveTo(66.1587, 4.64612, 76.9988, 18.0778, 82.1327, 26.9933);
      crc2.bezierCurveTo(85.4297, 32.719, 85.4654, 36.5635, 84.8101, 36.372);
      crc2.bezierCurveTo(84.3333, 36.2326, 83.5597, 34.3889, 83.1568, 33.6339);
      crc2.bezierCurveTo(82.6272, 32.6414, 80.8916, 30.9428, 79.0384, 32.8479);
      crc2.bezierCurveTo(78.0275, 33.887, 78.4937, 37.2955, 79.0384, 41.7222);
      crc2.bezierCurveTo(79.5538, 45.9109, 81.6996, 48.613, 79.0384, 49.481);
      crc2.bezierCurveTo(75.8499, 50.5211, 79.6601, 39.6933, 71.5491, 37.6258);
      crc2.bezierCurveTo(68.5455, 36.8603, 68.5102, 34.6377, 63.3267, 34.0311);
      crc2.bezierCurveTo(62.659, 33.9529, 60.5432, 33.024, 58.5162, 35.6509);
      crc2.bezierCurveTo(56.4892, 38.2777, 60.8791, 51.4788, 56.4892, 51.7132);
      crc2.bezierCurveTo(51.7271, 51.9674, 50.3, 48.1105, 50.3, 45.055);
      crc2.bezierCurveTo(50.3, 37.5027, 45.9101, 31.9352, 41.9196, 30.562);
      crc2.bezierCurveTo(38.1462, 29.2635, 36.6485, 27.8942, 30.941, 27.8942);
      crc2.bezierCurveTo(25.2336, 27.8942, 21.714, 35.6509, 19.8726, 35.6509);
      crc2.bezierCurveTo(18.0313, 35.6509, 15.1548, 38.7194, 15.1548, 40.7783);
      crc2.bezierCurveTo(15.1548, 42.8373, 15.9575, 49.481, 12.2243, 49.481);
      crc2.bezierCurveTo(10.0434, 49.481, 11.1563, 45.8716, 10.672, 44.3662);
      crc2.bezierCurveTo(10.4038, 43.5325, 9.72012, 38.6624, 6.96229, 38.6624);
      crc2.bezierCurveTo(4.20446, 38.6624, 3.04126, 40.4659, 3.05781, 39.4294);
      crc2.bezierCurveTo(3.14206, 34.1521, 4.60612, 29.7468, 8.01881, 24.1316);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();
      crc2.restore();
    }
  }
}
