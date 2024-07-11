namespace Geistdiele {
  export class IceCream extends Drawable {
    type: string;
    scoops: number;
    size: number;

    constructor(_type: string, _position: Vector, _scoops: number, _size: number) {
      super(_position);
      this.type = _type;
      this.scoops = _scoops;
      this.size = _size;
    }

    public draw(): void {
      this.drawCone()
        new Sauce(sauces[0],{x:700,y:700}).draw()
        
    }
    

    private drawCone(): void {
      crc2.save();
      crc2.translate(this.position.x, this.position.y);

      // #Ebene-8

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
