namespace Geistdiele {
  export class Seat extends Drawable {
    private mirror: boolean = false;
    private size: number;
    private ghost: Ghost;

    constructor(_position: Vector, _mirror: boolean, _size: number) {
      super(_position);
      this.mirror = _mirror;
      this.size = _size;
    }

    public draw(): void {
      this.drawSeat();
      if (this.ghost) {
        //falls noch nicht existiert
        this.ghost.draw();
      }
    }

    public isFree(): boolean {
      return this.ghost === undefined;
    }

    public getGhost() {
      return this.ghost;
    }

    public addGhost() {
      let pos;
      if (this.mirror) {
        pos = new Vector(this.position.x, this.position.y - 70);
      } else {
        pos = new Vector(this.position.x - 100, this.position.y - 70);
      }
      this.ghost = new Ghost(pos, "happy");
    }

    public removeGhost() {
      this.ghost = undefined;
    }

    private drawSeat() {
      crc2.save();
      crc2.translate(this.position.x, this.position.y);
      if (this.mirror == false) {
        crc2.scale(-this.size, this.size); //why no work?
      } else {
        crc2.scale(this.size, this.size);
      }

      // #path1-7
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "round";
      crc2.lineJoin = "round";
      crc2.lineWidth = 5;
      crc2.miterLimit = 10;
      crc2.moveTo(96.705, 143.448);
      crc2.bezierCurveTo(96.705, 152.165, 89.5637, 203.524, 100.574, 203.524);
      crc2.stroke();

      // #path2-5
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "round";
      crc2.lineJoin = "round";
      crc2.lineWidth = 5;
      crc2.miterLimit = 10;
      crc2.moveTo(80.8366, 146.508);
      crc2.bezierCurveTo(80.8366, 166.96, 70.9929, 216.159, 86.0289, 216.159);
      crc2.stroke();

      // #path3-7
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "round";
      crc2.lineJoin = "round";
      crc2.lineWidth = 5;
      crc2.miterLimit = 10;
      crc2.moveTo(47.2991, 137.85);
      crc2.bezierCurveTo(47.2991, 162.509, 47.288, 203.119, 36.2164, 203.119);
      crc2.stroke();

      // #path4-6
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "round";
      crc2.lineJoin = "round";
      crc2.lineWidth = 5;
      crc2.miterLimit = 10;
      crc2.moveTo(20.5934, 145.324);
      crc2.bezierCurveTo(20.5934, 169.984, 19.2905, 216.159, 8.21895, 216.159);
      crc2.stroke();

      // #path5-8
      crc2.beginPath();
      crc2.fillStyle = "rgb(0, 0, 0)";
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 5;
      crc2.miterLimit = 10;
      crc2.moveTo(9.75465, 140.01);
      crc2.bezierCurveTo(9.75465, 135.228, 30.8605, 131.352, 56.8959, 131.352);
      crc2.bezierCurveTo(82.9312, 131.352, 104.037, 135.228, 104.037, 140.01);
      crc2.bezierCurveTo(104.037, 144.791, 82.9312, 148.668, 56.8959, 148.668);
      crc2.bezierCurveTo(30.8605, 148.668, 9.75465, 144.791, 9.75465, 140.01);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();

      // #path6-2
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 5;
      crc2.miterLimit = 10;
      crc2.moveTo(51.5927, 132.032);
      crc2.bezierCurveTo(53.2427, 122.023, 58.6139, 112.521, 56.8186, 80.7449);
      crc2.bezierCurveTo(55.0214, 48.935, 36.3284, 20.5382, 56.8186, 20.5382);
      crc2.bezierCurveTo(70.0709, 20.5382, 73.4717, 30.5941, 76.7447, 30.5941);
      crc2.bezierCurveTo(80.0177, 30.5941, 74.0317, 11.3041, 96.9141, 8.92644);
      crc2.bezierCurveTo(119.796, 6.54874, 116.594, 27.7833, 121.016, 27.7833);
      crc2.bezierCurveTo(125.437, 27.7833, 121.016, 16.81, 132.129, 16.81);
      crc2.bezierCurveTo(143.242, 16.81, 144.715, 41.3442, 134.978, 58.8006);
      crc2.bezierCurveTo(125.24, 76.2571, 101.707, 120.199, 99.6383, 138.641);
      crc2.bezierCurveTo(99.6383, 141.205, 82.0267, 133.75, 85.1919, 133.75);
      crc2.bezierCurveTo(90.0005, 133.75, 93.5268, 119.258, 99.7227, 102.977);
      crc2.bezierCurveTo(104.22, 91.159, 118.55, 65.072, 120.742, 54.0664);
      crc2.bezierCurveTo(124.238, 36.5097, 121.224, 30.8324, 121.224, 26.2674);
      crc2.stroke();

      // #path7-1
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 5;
      crc2.miterLimit = 10;
      crc2.moveTo(76.4099, 29.9129);
      crc2.bezierCurveTo(76.4099, 34.7871, 79.5078, 42.5933, 79.0923, 50.0737);
      crc2.bezierCurveTo(78.5926, 59.0713, 72.5931, 90.2201, 71.0713, 95.9034);
      crc2.bezierCurveTo(68.2844, 106.312, 63.1826, 128.88, 60.7102, 131.352);
      crc2.stroke();

      // #path8-4
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3;
      crc2.miterLimit = 10;
      crc2.moveTo(52.325, 54.137);
      crc2.bezierCurveTo(52.325, 46.0295, 73.0124, 42.6102, 77.6722, 51.2841);
      crc2.bezierCurveTo(79.2176, 54.1607, 86.8672, 43.9005, 97.8961, 43.9005);
      crc2.bezierCurveTo(108.925, 43.9005, 120.742, 57.2999, 120.742, 57.2999);
      crc2.bezierCurveTo(120.742, 57.2999, 124.297, 54.7603, 128.275, 53.9928);
      crc2.bezierCurveTo(131.316, 53.4063, 133.992, 57.0744, 133.992, 60.4257);
      crc2.stroke();

      // #path9-0
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3;
      crc2.miterLimit = 10;
      crc2.moveTo(55.8599, 71.2564);
      crc2.bezierCurveTo(55.8599, 63.1489, 75.8863, 64.4264, 75.8863, 70.9619);
      crc2.bezierCurveTo(75.8863, 74.2273, 83.518, 63.1037, 94.5469, 63.1037);
      crc2.bezierCurveTo(105.576, 63.1037, 111.903, 75.4501, 111.903, 75.4501);
      crc2.bezierCurveTo(111.903, 75.4501, 116.763, 71.471, 120.742, 70.7035);
      crc2.bezierCurveTo(123.782, 70.117, 126.197, 72.0161, 126.197, 75.3674);
      crc2.stroke();

      // #path10-6
      crc2.beginPath();
      crc2.fillStyle = "rgb(32, 32, 32)";
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(32, 32, 32)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 0.620874;
      crc2.miterLimit = 10;
      crc2.moveTo(9.75465, 137.85);
      crc2.bezierCurveTo(9.75465, 133.069, 30.8605, 129.192, 56.8959, 129.192);
      crc2.bezierCurveTo(82.9312, 129.192, 104.037, 133.069, 104.037, 137.85);
      crc2.bezierCurveTo(104.037, 142.632, 82.9312, 146.508, 56.8959, 146.508);
      crc2.bezierCurveTo(30.8605, 146.508, 9.75465, 142.632, 9.75465, 137.85);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();
      crc2.restore();
    }
  }
}
