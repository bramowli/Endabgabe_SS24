namespace Geistdiele {
  export class Flavour extends Ingredient {
    constructor(_data: IngredientType, _position: Vector) {
      super(_data, _position);
    }

    public draw(): void {
      this.drawIceTrays();
    }

    private drawIceTrays() {
      this.drawLeftIce();
      this.drawMiddleIce();
      this.drawRightIce();
    }

    drawBall() {
      crc2.save();
      crc2.translate(this.position.x, this.position.y);

      // #Ebene-9
      crc2.save();
      crc2.transform(1.0, 0.0, 0.0, 1.0, -868.35, -501.748);

      // #path1-6
      crc2.beginPath();
      crc2.fillStyle = "rgb(66, 0, 83)";
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
    private drawLeftIce() {
      crc2.save();

      // #Ebene-15

      // #path1
      crc2.beginPath();
      crc2.fillStyle = "rgb(80, 213, 238)";
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(65, 179, 201)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 10.0;
      crc2.miterLimit = 10;
      crc2.moveTo(27.9093, 1054.51);
      crc2.bezierCurveTo(15.1939, 1017.87, 39.0161, 938.87, 65.5493, 930.754);
      crc2.bezierCurveTo(92.0824, 922.638, 104.149, 864.246, 106.072, 848.07);
      crc2.bezierCurveTo(107.995, 831.895, 128.42, 810.719, 154.536, 803.108);
      crc2.bezierCurveTo(180.652, 795.497, 207.668, 809.113, 207.668, 809.113);
      crc2.bezierCurveTo(207.668, 809.113, 229.196, 800.177, 249.456, 802.744);
      crc2.bezierCurveTo(269.716, 805.312, 292.165, 812.787, 292.165, 812.787);
      crc2.lineTo(202.784, 1056.3);
      crc2.bezierCurveTo(202.784, 1056.3, 57.9715, 1054.51, 27.9093, 1054.51);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();

      // #path2
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(65, 179, 201)";
      crc2.lineCap = "round";
      crc2.lineJoin = "round";
      crc2.lineWidth = 10.0;
      crc2.miterLimit = 10;
      crc2.moveTo(67.8442, 929.673);
      crc2.bezierCurveTo(88.5005, 931.751, 113.506, 943.388, 132.004, 928.55);
      crc2.stroke();

      // #path3
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(65, 179, 201)";
      crc2.lineCap = "round";
      crc2.lineJoin = "round";
      crc2.lineWidth = 10.0;
      crc2.miterLimit = 10;
      crc2.moveTo(132.004, 868.747);
      crc2.bezierCurveTo(161.659, 852.673, 156.283, 844.828, 164.057, 833.807);
      crc2.bezierCurveTo(171.831, 822.787, 190.907, 836.114, 207.287, 809.691);
      crc2.stroke();

      // #path4
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(65, 179, 201)";
      crc2.lineCap = "round";
      crc2.lineJoin = "round";
      crc2.lineWidth = 10.0;
      crc2.miterLimit = 10;
      crc2.moveTo(118.93, 1019.77);
      crc2.bezierCurveTo(131.633, 1011.21, 132.257, 981.543, 139.447, 971.605);
      crc2.bezierCurveTo(162.044, 940.369, 200.549, 956.542, 223.813, 951.946);
      crc2.stroke();
    }

    private drawMiddleIce() {
      // #Ebene-16

      // #path5
      crc2.beginPath();
      crc2.fillStyle = this.data.colour;
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = this.data.lineColour;
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 10.0;
      crc2.miterLimit = 10;
      crc2.moveTo(251.301, 1056.3);
      crc2.bezierCurveTo(238.585, 1019.66, 237.47, 990.103, 264.902, 956.09);
      crc2.bezierCurveTo(292.335, 922.077, 296.468, 882.955, 303.622, 858.381);
      crc2.bezierCurveTo(310.776, 833.807, 339.137, 815.069, 365.253, 807.458);
      crc2.bezierCurveTo(391.369, 799.847, 408.214, 812.579, 408.214, 812.579);
      crc2.bezierCurveTo(408.214, 812.579, 429.25, 787.94, 449.51, 790.508);
      crc2.bezierCurveTo(469.77, 793.075, 500.27, 812.579, 500.27, 812.579);
      crc2.lineTo(426.917, 1056.3);
      crc2.lineTo(251.301, 1056.3);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();

      // #path6
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(66, 0, 83)";
      crc2.lineCap = "round";
      crc2.lineJoin = "round";
      crc2.lineWidth = 10.0;
      crc2.miterLimit = 10;
      crc2.moveTo(339.825, 878.42);
      crc2.bezierCurveTo(352.96, 852.673, 354.731, 844.828, 374.774, 838.157);
      crc2.bezierCurveTo(394.817, 831.487, 391.834, 839.002, 408.214, 812.579);
      crc2.stroke();

      // #path7
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(66, 0, 83)";
      crc2.lineCap = "round";
      crc2.lineJoin = "round";
      crc2.lineWidth = 10.0;
      crc2.miterLimit = 10;
      crc2.moveTo(276.603, 1028.07);
      crc2.bezierCurveTo(301.359, 1013.09, 287.28, 1005.35, 317.592, 983.574);
      crc2.bezierCurveTo(328.261, 975.908, 353.064, 985.753, 375.815, 985.753);
      crc2.stroke();

      // #path8
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(66, 0, 83)";
      crc2.lineCap = "round";
      crc2.lineJoin = "round";
      crc2.lineWidth = 10.0;
      crc2.miterLimit = 10;
      crc2.moveTo(368.992, 923.456);
      crc2.bezierCurveTo(381.695, 914.896, 405.185, 912.978, 417.452, 912.978);
      crc2.bezierCurveTo(434.281, 912.978, 426.246, 927.908, 449.51, 923.312);
      crc2.stroke();
    }

    private drawRightIce() {
      // #Ebene-17

      // #path9
      crc2.beginPath();
      crc2.fillStyle = "rgb(255, 126, 39)";
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(190, 96, 32)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 10.0;
      crc2.miterLimit = 10;
      crc2.moveTo(474.696, 1056.3);
      crc2.bezierCurveTo(461.981, 1019.66, 473.737, 976.613, 500.27, 968.497);
      crc2.bezierCurveTo(526.803, 960.381, 533.096, 863.395, 535.019, 847.219);
      crc2.bezierCurveTo(536.942, 831.043, 557.367, 809.868, 583.483, 802.257);
      crc2.bezierCurveTo(609.599, 794.646, 612.885, 808.353, 636.615, 808.262);
      crc2.bezierCurveTo(660.345, 808.171, 658.143, 799.326, 678.403, 801.893);
      crc2.bezierCurveTo(698.663, 804.46, 707.692, 809.691, 707.692, 809.691);
      crc2.lineTo(652.76, 1056.3);
      crc2.lineTo(474.696, 1056.3);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();

      // #path10
      crc2.beginPath();
      crc2.fillStyle = "rgb(255, 126, 39)";
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(190, 96, 32)";
      crc2.lineCap = "round";
      crc2.lineJoin = "round";
      crc2.lineWidth = 10.0;
      crc2.miterLimit = 10;
      crc2.moveTo(531.422, 1028.07);
      crc2.bezierCurveTo(531.422, 1004.36, 573.437, 982.236, 585.188, 985.753);
      crc2.bezierCurveTo(611.214, 993.542, 618.081, 1000.42, 641.345, 995.823);
      crc2.fill();
      crc2.stroke();

      // #path11
      crc2.beginPath();
      crc2.fillStyle = "rgb(255, 126, 39)";
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(190, 96, 32)";
      crc2.lineCap = "round";
      crc2.lineJoin = "round";
      crc2.lineWidth = 10.0;
      crc2.miterLimit = 10;
      crc2.moveTo(566.264, 898.14);
      crc2.bezierCurveTo(575.883, 868.747, 603.369, 875.267, 611.143, 864.246);
      crc2.bezierCurveTo(618.916, 853.226, 633.573, 820.947, 661.226, 852.673);
      crc2.fill();
      crc2.stroke();

      // #path12
      crc2.beginPath();
      crc2.fillStyle = "rgb(255, 126, 39)";
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(190, 96, 32)";
      crc2.lineCap = "round";
      crc2.lineJoin = "round";
      crc2.lineWidth = 10.0;
      crc2.miterLimit = 10;
      crc2.moveTo(509.416, 967.162);
      crc2.bezierCurveTo(530.072, 969.24, 526.556, 980.081, 545.053, 965.243);
      crc2.fill();
      crc2.stroke();
      crc2.restore();
    }
  }
}
