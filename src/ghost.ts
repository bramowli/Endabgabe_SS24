namespace Geistdiele {
  export class Ghost extends Drawable {
    emotion: string = "happy";

    constructor(_position: Vector, _emotion: string) {
      super(_position);
      this.emotion = _emotion;
    }

    public draw(): void {
      //console.log(`Drawing ghost at position: (${this.position.x}, ${this.position.y})`);
      this.drawGhost();
      this.drawMouth();
    }

    public move(): void {}

    private order(): void {}

    private changeEmotion(): void {}

    public interact(_hitPosition: Vector): boolean {
      //console.log(`hit: x: ${_hitPosition.x} y: ${_hitPosition.y}`);
      //console.log(`pos: x: ${this.position.x} y: ${this.position.y}`);
      if (
        _hitPosition.x >= this.position.x - 57 &&
        _hitPosition.x <= this.position.x + 50 &&
        _hitPosition.y >= this.position.y - 18 &&
        _hitPosition.y <= this.position.y + 12
      ) {
        console.log("hit"); //not working?
        return true;
      }
      return false;
    }

    private drawMouth() {
      //no mouth?
      //console.log("uff")
      crc2.save();
      crc2.translate(this.position.x, this.position.y);
      crc2.strokeStyle = "black";
      if (this.emotion === "happy") {
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.bezierCurveTo(0, 5, 15, 5, 15, 0);
      } else if (this.emotion === "neutral") {
      }

      crc2.closePath();
      crc2.stroke();
      crc2.restore();
    }

    private drawGhost() {
      //?
      crc2.save();
      /*this.position.x, this.position.y * Math.random()*10*/
      crc2.translate(this.position.x, this.position.y);

      // #path1
      crc2.beginPath();
      crc2.fillStyle = "rgb(255, 255, 255)";
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(255, 255, 255)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 2.645833;
      crc2.miterLimit = 10;
      crc2.moveTo(46.8841, 10.4826);
      crc2.bezierCurveTo(103.109, 9.31676, 94.5616, 137.767, 94.5616, 145.635);
      crc2.bezierCurveTo(94.5616, 153.502, 99.531, 196.786, 90.2298, 196.786);
      crc2.bezierCurveTo(80.9287, 196.786, 75.7487, 180.062, 75.7487, 180.062);
      crc2.bezierCurveTo(75.7487, 180.062, 72.6302, 198.011, 66.8104, 198.011);
      crc2.bezierCurveTo(60.9905, 198.011, 53.8097, 180.062, 53.8097, 180.062);
      crc2.bezierCurveTo(53.8097, 180.062, 48.2086, 198.824, 41.7906, 198.824);
      crc2.bezierCurveTo(35.3725, 198.824, 34.5039, 180.893, 34.5039, 180.893);
      crc2.bezierCurveTo(34.5039, 180.893, 29.0742, 198.042, 20.8934, 198.042);
      crc2.bezierCurveTo(12.7126, 198.042, 11.2921, 162.499, 11.2921, 150.767);
      crc2.bezierCurveTo(11.2921, 139.035, -9.34116, 11.6484, 46.8841, 10.4826);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();

      // #Ebene-3

      // #path2
      crc2.beginPath();
      crc2.fillStyle = "rgb(0, 0, 0)";
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 5;
      crc2.miterLimit = 10;
      crc2.moveTo(23.6277, 59.2573);
      crc2.bezierCurveTo(23.6277, 54.2159, 25.7405, 45.3242, 28.9898, 45.1974);
      crc2.bezierCurveTo(32.239, 45.0706, 34.3518, 54.2159, 34.3518, 59.2573);
      crc2.bezierCurveTo(34.3518, 64.2987, 33.0434, 75.2567, 29.0925, 75.0639);
      crc2.bezierCurveTo(25.1416, 74.871, 23.6277, 64.2987, 23.6277, 59.2573);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();

      // #path3
      crc2.beginPath();
      crc2.fillStyle = "rgb(0, 0, 0)";
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 5;
      crc2.miterLimit = 10;
      crc2.moveTo(65.2387, 57.0901);
      crc2.bezierCurveTo(65.2387, 52.0487, 67.3515, 43.157, 70.6007, 43.0302);
      crc2.bezierCurveTo(73.85, 42.9034, 75.9628, 52.0487, 75.9628, 57.0901);
      crc2.bezierCurveTo(75.9628, 62.1315, 74.6544, 73.0895, 70.7035, 72.8966);
      crc2.bezierCurveTo(66.7526, 72.7038, 65.2387, 62.1315, 65.2387, 57.0901);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();
      crc2.restore();
    }
  }
}
