namespace Geistdiele {
  export class Door extends Drawable {
    open: boolean = false;

    constructor(_position: Vector, _open: boolean) {
      super(_position);
      this.open = _open;
    }

    public draw(): void {
      if (this.open === true) {
        this.drawOpenDoor(this.position);
      } else {
        this.drawClosedDoor(this.position);
      }
    }

    private openDoor(_open: boolean): void {
      this.open = _open;
    }
    public isOpened(): boolean {
      return this.open;
    }

    drawOpenDoor(_position: Vector) {
      crc2.save();
      crc2.translate(this.position.x, this.position.y);

      // #Ebene-10-0
      crc2.save();

      // #path1-8
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 2.645833;
      crc2.miterLimit = 10;
      crc2.moveTo(91.4509, 52.448);
      crc2.bezierCurveTo(91.4509, 45.1997, 75.5628, 25.6647, 49.0945, 25.6647);
      crc2.bezierCurveTo(22.6262, 25.6647, 0.0, 10.8679, 0.0, 1.13315);
      crc2.bezierCurveTo(0.0, -1.60545, 0.072616, 8.34435, 0.17699, 24.0602);
      crc2.bezierCurveTo(0.443627, 64.2084, 0.917525, 141.987, 0.917525, 141.987);
      crc2.lineTo(94.4328, 142.184);
      crc2.bezierCurveTo(94.4328, 142.184, 91.4509, 59.6963, 91.4509, 52.448);
      crc2.closePath();
      crc2.stroke();

      // #path2-1
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 2.645833;
      crc2.miterLimit = 10;
      crc2.moveTo(277.04, 51.7673);
      crc2.bezierCurveTo(277.04, 44.519, 292.928, 24.984, 319.396, 24.984);
      crc2.bezierCurveTo(345.864, 24.984, 368.491, 10.1872, 368.491, 0.452425);
      crc2.bezierCurveTo(368.491, -2.28618, 368.418, 7.66363, 368.314, 23.3795);
      crc2.bezierCurveTo(368.047, 63.5277, 367.573, 141.306, 367.573, 141.306);
      crc2.lineTo(274.058, 141.503);
      crc2.bezierCurveTo(274.058, 141.503, 277.04, 59.0155, 277.04, 51.7673);
      crc2.closePath();
      crc2.stroke();

      // #path3-2
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 2.645833;
      crc2.miterLimit = 10;
      crc2.moveTo(92.4919, 86.8728);
      crc2.bezierCurveTo(92.4919, 73.7853, 69.3918, 47.5218, 47.2164, 47.5218);
      crc2.bezierCurveTo(25.041, 47.5218, 0.195023, 37.6718, 0.195023, 24.064);
      crc2.stroke();

      // #path4-2
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 2.645833;
      crc2.miterLimit = 10;
      crc2.moveTo(275.999, 86.192);
      crc2.bezierCurveTo(275.999, 73.1046, 299.099, 46.8411, 321.274, 46.8411);
      crc2.bezierCurveTo(343.449, 46.8411, 368.296, 36.9911, 368.296, 23.3832);
      crc2.stroke();

      // #path5-3
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 1.127099;
      crc2.miterLimit = 10;
      crc2.moveTo(22.2945, 24.064);
      crc2.lineTo(21.914, 137.902);
      crc2.stroke();

      // #path6-7
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 1.127099;
      crc2.miterLimit = 10;
      crc2.moveTo(346.196, 23.3832);
      crc2.lineTo(346.577, 137.221);
      crc2.stroke();

      // #path7-5
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 1.127099;
      crc2.miterLimit = 10;
      crc2.moveTo(38.2943, 27.5927);
      crc2.lineTo(37.7476, 138.826);
      crc2.stroke();

      // #path8-3
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 1.127099;
      crc2.miterLimit = 10;
      crc2.moveTo(330.196, 26.9119);
      crc2.lineTo(330.743, 138.145);
      crc2.stroke();

      // #path9-4
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 1.127099;
      crc2.miterLimit = 10;
      crc2.moveTo(55.604, 30.3143);
      crc2.lineTo(55.0573, 141.548);
      crc2.stroke();

      // #path10-1
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 1.127099;
      crc2.miterLimit = 10;
      crc2.moveTo(312.887, 29.6335);
      crc2.lineTo(313.433, 140.867);
      crc2.stroke();

      // #path11-2
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 1.127099;
      crc2.miterLimit = 10;
      crc2.moveTo(72.5188, 30.2696);
      crc2.lineTo(71.9721, 141.503);
      crc2.stroke();

      // #path12-8
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 1.127099;
      crc2.miterLimit = 10;
      crc2.moveTo(295.972, 29.5889);
      crc2.lineTo(296.518, 140.822);
      crc2.stroke();
      crc2.restore();
      crc2.restore();
    }

    drawClosedDoor(_position: Vector) {
      crc2.save();
      crc2.translate(this.position.x, this.position.y);

      // #Ebene-10
      crc2.save();

      // #path1
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 5;
      crc2.miterLimit = 10;
      crc2.moveTo(185.689, 51.8003);
      crc2.bezierCurveTo(185.689, 44.552, 169.801, 25.017, 143.332, 25.017);
      crc2.bezierCurveTo(116.864, 25.017, 94.2378, 10.2202, 94.2378, 0.485425);
      crc2.bezierCurveTo(94.2378, -2.25318, 94.3104, 7.69663, 94.4148, 23.4125);
      crc2.bezierCurveTo(94.6814, 63.5607, 95.1553, 141.339, 95.1553, 141.339);
      crc2.lineTo(188.671, 141.536);
      crc2.bezierCurveTo(188.671, 141.536, 185.689, 59.0485, 185.689, 51.8003);
      crc2.closePath();
      crc2.stroke();

      // #path2
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 5//2.645833;
      crc2.miterLimit = 10;
      crc2.moveTo(2.98192, 51.7673);
      crc2.bezierCurveTo(2.98192, 44.519, 18.87, 24.984, 45.3383, 24.984);
      crc2.bezierCurveTo(71.8066, 24.984, 94.4328, 10.1872, 94.4328, 0.452425);
      crc2.bezierCurveTo(94.4328, -2.28618, 94.3602, 7.66363, 94.2558, 23.3795);
      crc2.bezierCurveTo(93.9892, 63.5277, 93.5153, 141.306, 93.5153, 141.306);
      crc2.lineTo(0.0, 141.503);
      crc2.bezierCurveTo(0.0, 141.503, 2.98192, 59.0155, 2.98192, 51.7673);
      crc2.closePath();
      crc2.stroke();

      // #path3
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 2.645833;
      crc2.miterLimit = 10;
      crc2.moveTo(186.73, 86.225);
      crc2.bezierCurveTo(186.73, 73.1376, 163.63, 46.8741, 141.454, 46.8741);
      crc2.bezierCurveTo(119.279, 46.8741, 94.4328, 37.0241, 94.4328, 23.4162);
      crc2.stroke();

      // #path4
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 2.645833;
      crc2.miterLimit = 10;
      crc2.moveTo(1.94089, 86.192);
      crc2.bezierCurveTo(1.94089, 73.1046, 25.041, 46.8411, 47.2164, 46.8411);
      crc2.bezierCurveTo(69.3918, 46.8411, 94.2378, 36.9911, 94.2378, 23.3832);
      crc2.stroke();

      // #path5
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 1.127099;
      crc2.miterLimit = 10;
      crc2.moveTo(116.532, 23.4162);
      crc2.lineTo(116.152, 137.254);
      crc2.stroke();

      // #path6
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 1.127099;
      crc2.miterLimit = 10;
      crc2.moveTo(72.1383, 23.3832);
      crc2.lineTo(72.5188, 137.221);
      crc2.stroke();

      // #path7
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 1.127099;
      crc2.miterLimit = 10;
      crc2.moveTo(132.532, 26.9449);
      crc2.lineTo(131.985, 138.178);
      crc2.stroke();

      // #path8
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 1.127099;
      crc2.miterLimit = 10;
      crc2.moveTo(56.1385, 26.9119);
      crc2.lineTo(56.6852, 138.145);
      crc2.stroke();

      // #path9
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 1.127099;
      crc2.miterLimit = 10;
      crc2.moveTo(149.842, 29.6665);
      crc2.lineTo(149.295, 140.9);
      crc2.stroke();

      // #path10
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 1.127099;
      crc2.miterLimit = 10;
      crc2.moveTo(38.8288, 29.6335);
      crc2.lineTo(39.3755, 140.867);
      crc2.stroke();

      // #path11
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 1.127099;
      crc2.miterLimit = 10;
      crc2.moveTo(166.757, 29.6219);
      crc2.lineTo(166.21, 140.855);
      crc2.stroke();

      // #path12
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 1.127099;
      crc2.miterLimit = 10;
      crc2.moveTo(21.914, 29.5889);
      crc2.lineTo(22.4607, 140.822);
      crc2.stroke();
      crc2.restore();
      crc2.restore();
    }
  }
}
