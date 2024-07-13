namespace Geistdiele {
  export class Sprinkles extends Ingredient {
    constructor(_data: IngredientType, _pos: Vector) {
      super(_data, _pos);
    }

    public draw(): void {
      this.drawSprinkles()
    }

    private drawSprinkles() {
      crc2.save();
      crc2.translate(this.position.x,this.position.y);

      // #Ebene-20
      crc2.save();

      // #path1
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = this.data.colour;
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 2.2566;
      crc2.miterLimit = 10;
      crc2.moveTo(72.1541, 29.3173);
      crc2.lineTo(56.5347, 17.8106);
      crc2.lineTo(50.0178, 25.6246);
      crc2.stroke();

      // #path2
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 2.2566;
      crc2.miterLimit = 10;
      crc2.moveTo(53.144, 8.01145);
      crc2.lineTo(33.9336, 5.30382);
      crc2.lineTo(31.9099, 15.2754);
      crc2.stroke();

      // #path3
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 2.2566;
      crc2.miterLimit = 10;
      crc2.moveTo(38.2192, 23.1026);
      crc2.lineTo(22.5997, 11.5959);
      crc2.lineTo(16.0828, 19.4099);
      crc2.stroke();

      // #path4
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 2.2566;
      crc2.miterLimit = 10;
      crc2.moveTo(63.0027, 45.8994);
      crc2.lineTo(82.1971, 42.6077);
      crc2.lineTo(81.2124, 32.5112);
      crc2.stroke();

      // #path5-7
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 2.2566;
      crc2.miterLimit = 10;
      crc2.moveTo(28.6874, 34.6024);
      crc2.lineTo(47.8819, 31.3107);
      crc2.lineTo(46.8971, 21.2143);
      crc2.stroke();

      // #path6-7
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 2.2566;
      crc2.miterLimit = 10;
      crc2.moveTo(26.091, 43.0846);
      crc2.lineTo(16.0777, 32.4996);
      crc2.lineTo(23.6567, 23.7677);
      crc2.stroke();

      // #path7-0
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 2.2566;
      crc2.miterLimit = 10;
      crc2.moveTo(20.8663, 17.3069);
      crc2.lineTo(12.5358, 18.4296);
      crc2.lineTo(9.24791, 38.9985);
      crc2.stroke();

      // #path8-0
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 2.2566;
      crc2.miterLimit = 10;
      crc2.moveTo(0.0, 23.9168);
      crc2.lineTo(5.31513, 30.4288);
      crc2.lineTo(24.5645, 22.4696);
      crc2.stroke();

      // #path9-3
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 2.2566;
      crc2.miterLimit = 10;
      crc2.moveTo(51.8606, 29.9788);
      crc2.lineTo(57.1757, 36.4908);
      crc2.lineTo(76.4251, 28.5317);
      crc2.stroke();

      // #path10-0
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 2.2566;
      crc2.miterLimit = 10;
      crc2.moveTo(58.1276, 11.5083);
      crc2.lineTo(63.4427, 18.0203);
      crc2.lineTo(82.6921, 10.0612);
      crc2.stroke();

      // #path11-1
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 2.2566;
      crc2.miterLimit = 10;
      crc2.moveTo(60.0934, 29.3173);
      crc2.lineTo(66.2704, 37.4211);
      crc2.lineTo(79.6301, 31.0538);
      crc2.stroke();

      // #path12-5
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 2.2566;
      crc2.miterLimit = 10;
      crc2.moveTo(37.756, 7.71254);
      crc2.lineTo(43.933, 17.3069);
      crc2.lineTo(57.2927, 9.76848);
      crc2.stroke();

      // #path13-8
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 2.2566;
      crc2.miterLimit = 10;
      crc2.moveTo(25.7781, 18.0203);
      crc2.lineTo(31.9552, 26.1241);
      crc2.lineTo(45.3148, 19.7568);
      crc2.stroke();

      // #path14-1
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 2.2566;
      crc2.miterLimit = 10;
      crc2.moveTo(84.5601, 32.6982);
      crc2.lineTo(85.4027, 26.118);
      crc2.lineTo(70.4098, 20.9529);
      crc2.stroke();

      // #path15-1
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 2.2566;
      crc2.miterLimit = 10;
      crc2.moveTo(73.8065, 15.5285);
      crc2.lineTo(72.957, 8.94923);
      crc2.lineTo(57.1452, 7.745);
      crc2.stroke();

      // #path16-1
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 2.2566;
      crc2.miterLimit = 10;
      crc2.moveTo(50.2448, 21.4012);
      crc2.lineTo(51.0874, 14.821);
      crc2.lineTo(36.0946, 9.6559);
      crc2.stroke();
      crc2.restore();
      crc2.restore();
    }
  }
}
