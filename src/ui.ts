namespace Geistdiele {
  export class UI extends Drawable implements Interactable {
    cashCount: number = 0;

    constructor(_position: Vector) {
      super(_position);
    }

    public draw(): void {
      this.drawCashCounter();
      this.drawWorkspace();
      this.drawToppingGlasses()
    }

    public interact(): void {}

    private drawCashCounter(): void {}

    private drawWorkspace(): void {
      for (const topping of toppings) {
        new Topping(topping, new Vector(0, 0));
      }
    }

    drawToppingGlasses() {
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(221, 221, 221)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 10.0;
      crc2.miterLimit = 10;
      crc2.moveTo(1496.8, 1018.53);
      crc2.bezierCurveTo(1511.91, 1030.24, 1638.24, 1031.61, 1663.84, 1018.53);
      crc2.bezierCurveTo(1663.84, 1018.53, 1691.58, 906.813, 1655.41, 923.312);
      crc2.bezierCurveTo(1619.25, 939.811, 1531.3, 936.31, 1496.8, 922.179);
      crc2.bezierCurveTo(1462.29, 908.049, 1496.8, 1018.53, 1496.8, 1018.53);
      crc2.closePath();
      crc2.stroke();

      // #path2
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(221, 221, 221)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 10.0;
      crc2.miterLimit = 10;
      crc2.moveTo(1280.29, 1021.8);
      crc2.bezierCurveTo(1293.16, 1037.46, 1400.69, 1039.29, 1422.49, 1021.8);
      crc2.bezierCurveTo(1422.49, 1021.8, 1446.5, 882.204, 1415.78, 894.744);
      crc2.bezierCurveTo(1385.06, 907.284, 1313.47, 904.856, 1280.29, 892.977);
      crc2.bezierCurveTo(1247.12, 881.098, 1280.29, 1021.8, 1280.29, 1021.8);
      crc2.closePath();
      crc2.stroke();

      // #path3
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(221, 221, 221)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 10.0;
      crc2.miterLimit = 10;
      crc2.moveTo(1563.66, 876.351);
      crc2.bezierCurveTo(1565.73, 878.42, 1548.89, 861.984, 1555.38, 857.034);
      crc2.bezierCurveTo(1561.88, 852.083, 1586.78, 850.893, 1595.11, 855.844);
      crc2.bezierCurveTo(1603.44, 860.795, 1584.58, 875.483, 1584.58, 875.483);
      crc2.bezierCurveTo(1608.66, 875.483, 1681.4, 905.41, 1676.13, 912.978);
      crc2.bezierCurveTo(1670.85, 920.546, 1627.1, 934.429, 1576.93, 933.189);
      crc2.bezierCurveTo(1526.76, 931.948, 1471.9, 915.278, 1473.92, 909.649);
      crc2.bezierCurveTo(1475.94, 904.02, 1534.56, 876.351, 1563.66, 876.351);
      crc2.closePath();
      crc2.stroke();

      // #path4
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(221, 221, 221)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 10.0;
      crc2.miterLimit = 10;
      crc2.moveTo(1337.21, 831.702);
      crc2.bezierCurveTo(1337.21, 831.702, 1329.69, 818.385, 1329.69, 812.128);
      crc2.bezierCurveTo(1329.69, 805.872, 1364.53, 804.282, 1364.53, 812.128);
      crc2.bezierCurveTo(1364.53, 819.975, 1355.01, 830.541, 1355.01, 830.541);
      crc2.bezierCurveTo(1355.01, 830.541, 1431.82, 855.404, 1431.82, 869.577);
      crc2.bezierCurveTo(1431.82, 880.049, 1422.8, 880.437, 1422.8, 880.437);
      crc2.bezierCurveTo(1422.8, 880.437, 1439.12, 883.435, 1436.94, 885.602);
      crc2.bezierCurveTo(1429.09, 893.413, 1389.08, 902.099, 1346.38, 900.44);
      crc2.bezierCurveTo(1303.67, 898.782, 1267.24, 890.774, 1260.77, 885.602);
      crc2.bezierCurveTo(1259.23, 884.372, 1274.02, 883.435, 1274.02, 883.435);
      crc2.bezierCurveTo(1274.02, 883.435, 1260.77, 874.478, 1260.77, 868.876);
      crc2.bezierCurveTo(1260.77, 851.709, 1337.21, 831.702, 1337.21, 831.702);
      crc2.closePath();
      crc2.stroke();
    }
  }
}
