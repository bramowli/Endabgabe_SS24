namespace Geistdiele {
  export class UI extends Drawable {
    private cashCount: number = 0;

    constructor(_position: Vector) {
      super(_position);
    }

    public draw(): void {
      this.drawCashCounter();
      this.drawText();
      this.drawWorkspace();
      this.drawToppingGlasses();
      this.drawBottles();
      this.drawX();
    }

    public interact(_hitPosition: Vector): boolean {
      if (_hitPosition.x >= 760 && _hitPosition.x <= 795 && _hitPosition.y >= 995 && _hitPosition.y <= 1030) {
        return true;
      }
      return false;
    }

    public increaseCounter() {
      // if ghost has been served
      this.cashCount++;
    }

    private drawWorkspace(): void {
      for (const topping of toppings) {
        new Sprinkles(topping, new Vector(0, 0), 1);
      }
    }

    private drawX() {
      crc2.save();
      crc2.translate(765, 1000);
      crc2.beginPath();
      crc2.strokeStyle = "black";
      crc2.moveTo(0, 0);
      crc2.lineTo(30, 30);
      crc2.moveTo(0, 30);
      crc2.lineTo(30, 0);

      crc2.stroke();
      crc2.restore();
    }

    private drawText() {
      crc2.save();
      crc2.fillStyle = "rgb(158, 125, 72)";
      crc2.font = "50px Times new Roman";
      crc2.fillText(this.cashCount.toString(), 1570, 90);

      crc2.restore();
    }
    private drawCashCounter(): void {
      crc2.save();

      // #Layer-21
      crc2.save();

      // #path1-3
      crc2.beginPath();
      crc2.fillStyle = "rgb(94, 94, 94)";
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 10.0;
      crc2.miterLimit = 10;
      crc2.moveTo(1557.7, -5.20213);
      crc2.bezierCurveTo(1559.17, 25.6299, 1545.52, 43.8882, 1539.16, 66.2044);
      crc2.bezierCurveTo(1532.8, 88.5205, 1552.5, 95.2581, 1552.5, 109.061);
      crc2.bezierCurveTo(1552.5, 122.863, 1539.64, 128.236, 1540.88, 140.927);
      crc2.bezierCurveTo(1542.13, 153.618, 1561.65, 156.05, 1561.65, 156.05);
      crc2.lineTo(1522.55, 203.319);
      crc2.lineTo(1577.39, 167.266);
      crc2.bezierCurveTo(1577.39, 167.266, 1593.6, 185.85, 1603.86, 183.997);
      crc2.bezierCurveTo(1614.13, 182.144, 1625.95, 171.769, 1638.6, 171.213);
      crc2.bezierCurveTo(1651.25, 170.657, 1658.27, 190.95, 1680.9, 190.95);
      crc2.bezierCurveTo(1703.53, 190.95, 1745.3, 170.834, 1782.44, 170.921);
      crc2.bezierCurveTo(1819.58, 171.007, 1929.7, 169.353, 1929.7, 169.353);
      crc2.lineTo(1929.7, 0.0);
      crc2.fill();
      crc2.stroke();
      crc2.restore();
      crc2.restore();

      this.drawSnail();
    }

    private drawToppingGlasses() {
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

    private drawSnail() {
      crc2.save();
      crc2.translate(1750, 10);

      // #Layer-13

      // #path1-6
      crc2.beginPath();
      crc2.fillStyle = "rgb(189, 150, 88)";
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(158, 125, 72)";
      crc2.lineCap = "round";
      crc2.lineJoin = "round";
      crc2.lineWidth = 10.0;
      crc2.miterLimit = 10;
      crc2.moveTo(89.5991, 72.0279);
      crc2.bezierCurveTo(89.5991, 64.206, 85.0752, 62.2736, 78.81, 67.0222);
      crc2.bezierCurveTo(72.5449, 71.7709, 78.81, 85.7775, 89.5991, 85.7775);
      crc2.bezierCurveTo(100.388, 85.7775, 107.898, 78.5738, 105.744, 67.0222);
      crc2.bezierCurveTo(103.589, 55.4706, 99.3952, 49.7034, 89.0357, 45.8201);
      crc2.bezierCurveTo(75.441, 40.7242, 58.3309, 54.3474, 55.8121, 67.0222);
      crc2.bezierCurveTo(53.2933, 79.697, 59.1656, 90.9939, 67.6056, 99.4776);
      crc2.bezierCurveTo(76.0455, 107.961, 102.396, 111.996, 115.592, 98.7312);
      crc2.bezierCurveTo(128.789, 85.4662, 135.956, 62.4, 126.07, 45.8201);
      crc2.bezierCurveTo(116.184, 29.2403, 93.2086, 14.1065, 78.81, 15.0073);
      crc2.bezierCurveTo(62.5488, 16.0245, 32.8813, 21.9442, 24.1524, 59.165);
      crc2.bezierCurveTo(21.927, 68.6539, 19.6794, 91.1661, 24.1524, 95.6623);
      crc2.bezierCurveTo(25.2183, 96.7338, 39.4163, 104.03, 62.4457, 96.2617);
      crc2.fill();
      crc2.stroke();
      crc2.restore();
    }

    private drawBottles() {
      crc2.save();

      // #Layer-22

      // #path1
      crc2.beginPath();
      crc2.fillStyle = "rgb(189, 150, 88)";
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(189, 150, 88)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 7.11036;
      crc2.miterLimit = 10;
      crc2.moveTo(1859.5, 774.041);
      crc2.lineTo(1869.97, 774.041);
      crc2.lineTo(1869.97, 795.598);
      crc2.lineTo(1859.5, 795.598);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();

      // #path2
      crc2.beginPath();
      crc2.fillStyle = "rgb(189, 150, 88)";
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(189, 150, 88)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 7.11036;
      crc2.miterLimit = 10;
      crc2.moveTo(1761.73, 822.248);
      crc2.lineTo(1771.91, 822.248);
      crc2.lineTo(1771.91, 842.929);
      crc2.lineTo(1761.73, 842.929);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();

      // #path3
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(221, 221, 221)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 7.11036;
      crc2.miterLimit = 10;
      crc2.moveTo(1826.46, 997.792);
      crc2.bezierCurveTo(1826.46, 982.172, 1827.65, 888.838, 1827.65, 881.784);
      crc2.bezierCurveTo(1827.65, 874.73, 1850.96, 853.864, 1850.96, 853.864);
      crc2.bezierCurveTo(1850.96, 853.864, 1855.04, 795.758, 1855.04, 788.023);
      crc2.bezierCurveTo(1855.04, 780.288, 1874.55, 781.953, 1874.55, 787.273);
      crc2.bezierCurveTo(1874.55, 792.593, 1880.01, 853.864, 1880.01, 853.864);
      crc2.bezierCurveTo(1880.01, 853.864, 1905.55, 872.68, 1905.55, 880.446);
      crc2.bezierCurveTo(1905.55, 888.213, 1906.96, 982.172, 1906.96, 997.436);
      crc2.bezierCurveTo(1906.96, 1012.7, 1826.46, 1013.41, 1826.46, 997.792);
      crc2.closePath();
      crc2.stroke();

      // #path4
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(221, 221, 221)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 7.11036;
      crc2.miterLimit = 10;
      crc2.moveTo(1729.02, 1047.63);
      crc2.bezierCurveTo(1729.02, 1032.01, 1730.21, 938.68, 1730.21, 931.626);
      crc2.bezierCurveTo(1730.21, 924.572, 1753.51, 903.706, 1753.51, 903.706);
      crc2.bezierCurveTo(1753.51, 903.706, 1757.6, 845.6, 1757.6, 837.865);
      crc2.bezierCurveTo(1757.6, 830.13, 1777.1, 831.795, 1777.1, 837.115);
      crc2.bezierCurveTo(1777.1, 842.435, 1782.57, 903.706, 1782.57, 903.706);
      crc2.bezierCurveTo(1782.57, 903.706, 1808.11, 922.521, 1808.11, 930.288);
      crc2.bezierCurveTo(1808.11, 938.055, 1809.52, 1032.01, 1809.52, 1047.28);
      crc2.bezierCurveTo(1809.52, 1062.54, 1729.02, 1063.25, 1729.02, 1047.63);
      crc2.closePath();
      crc2.stroke();

      // #path5-7
      crc2.beginPath();
      crc2.fillStyle = "rgb(189, 150, 88)";
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(189, 150, 88)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 7.11036;
      crc2.miterLimit = 10;
      crc2.moveTo(1826.46, 914.591);
      crc2.bezierCurveTo(1831.87, 920.0, 1899.97, 919.592, 1906.96, 912.6);
      crc2.lineTo(1906.96, 948.385);
      crc2.bezierCurveTo(1906.96, 958.992, 1826.46, 958.551, 1826.46, 948.385);
      crc2.lineTo(1826.46, 914.591);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();

      // #path6-1
      crc2.beginPath();
      crc2.fillStyle = "rgb(189, 150, 88)";
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(189, 150, 88)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 7.11036;
      crc2.miterLimit = 10;
      crc2.moveTo(1729.02, 972.934);
      crc2.bezierCurveTo(1734.43, 978.344, 1802.53, 977.935, 1809.52, 970.943);
      crc2.lineTo(1809.52, 1006.73);
      crc2.bezierCurveTo(1809.52, 1017.34, 1729.02, 1016.89, 1729.02, 1006.73);
      crc2.lineTo(1729.02, 972.934);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();
      crc2.restore();
    }
  }
}
