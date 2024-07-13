namespace Geistdiele {
  export class UI extends Drawable implements Interactable {
    cashCount: number = 0;

    constructor(_position: Vector) {
      super(_position);
    }

    public draw(): void {
      this.drawCashCounter();
      this.drawWorkspace();
      this.drawToppingGlasses();
      this.drawBottles()
    }

    public interact(): void {}

    private drawWorkspace(): void {
      for (const topping of toppings) {
        new Sprinkles(topping, new Vector(0, 0));
      }
    }

    private drawCashCounter(): void {
      crc2.save();

      // #Ebene-21
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

      // #g7

      // #path2-1
      crc2.beginPath();
      crc2.fillStyle = "rgb(189, 150, 88)";
      crc2.lineCap = "round";
      crc2.lineJoin = "round";
      crc2.miterLimit = 10;
      crc2.moveTo(1590.68, 87.913);
      crc2.bezierCurveTo(1590.76, 89.4256, 1591.12, 90.6539, 1591.75, 91.5978);
      crc2.bezierCurveTo(1592.94, 93.3646, 1595.06, 94.248, 1598.08, 94.248);
      crc2.bezierCurveTo(1599.44, 94.248, 1600.67, 94.0544, 1601.78, 93.6671);
      crc2.bezierCurveTo(1603.94, 92.9168, 1605.02, 91.5736, 1605.02, 89.6374);
      crc2.bezierCurveTo(1605.02, 88.1852, 1604.56, 87.1506, 1603.65, 86.5334);
      crc2.bezierCurveTo(1602.73, 85.9284, 1601.29, 85.402, 1599.33, 84.9542);
      crc2.lineTo(1595.72, 84.1374);
      crc2.bezierCurveTo(1593.36, 83.6049, 1591.69, 83.018, 1590.71, 82.3766);
      crc2.bezierCurveTo(1589.02, 81.2633, 1588.17, 79.5994, 1588.17, 77.3849);
      crc2.bezierCurveTo(1588.17, 74.9888, 1589.0, 73.0224, 1590.66, 71.4855);
      crc2.bezierCurveTo(1592.31, 69.9486, 1594.66, 69.1802, 1597.7, 69.1802);
      crc2.bezierCurveTo(1600.5, 69.1802, 1602.87, 69.8549, 1604.82, 71.2041);
      crc2.bezierCurveTo(1606.78, 72.5534, 1607.76, 74.7105, 1607.76, 77.6753);
      crc2.lineTo(1604.36, 77.6753);
      crc2.bezierCurveTo(1604.18, 76.2473, 1603.79, 75.1522, 1603.2, 74.3898);
      crc2.bezierCurveTo(1602.1, 72.9982, 1600.23, 72.3023, 1597.59, 72.3023);
      crc2.bezierCurveTo(1595.46, 72.3023, 1593.93, 72.7501, 1593.0, 73.6456);
      crc2.bezierCurveTo(1592.07, 74.5411, 1591.6, 75.5818, 1591.6, 76.7677);
      crc2.bezierCurveTo(1591.6, 78.0746, 1592.15, 79.0306, 1593.23, 79.6357);
      crc2.bezierCurveTo(1593.95, 80.0229, 1595.56, 80.507, 1598.08, 81.0879);
      crc2.lineTo(1601.82, 81.941);
      crc2.bezierCurveTo(1603.62, 82.3524, 1605.02, 82.9151, 1606.0, 83.6291);
      crc2.bezierCurveTo(1607.69, 84.8755, 1608.54, 86.6847, 1608.54, 89.0565);
      crc2.bezierCurveTo(1608.54, 92.0092, 1607.46, 94.1209, 1605.31, 95.3915);
      crc2.bezierCurveTo(1603.17, 96.6622, 1600.67, 97.2975, 1597.83, 97.2975);
      crc2.bezierCurveTo(1594.51, 97.2975, 1591.92, 96.4504, 1590.04, 94.7562);
      crc2.bezierCurveTo(1588.16, 93.0742, 1587.24, 90.7931, 1587.28, 87.913);
      crc2.closePath();
      crc2.fill();

      // #path3-7
      crc2.beginPath();
      crc2.fillStyle = "rgb(189, 150, 88)";
      crc2.lineCap = "round";
      crc2.lineJoin = "round";
      crc2.miterLimit = 10;
      crc2.moveTo(1620.39, 94.4113);
      crc2.bezierCurveTo(1622.56, 94.4113, 1624.04, 93.5915, 1624.85, 91.9518);
      crc2.bezierCurveTo(1625.65, 90.312, 1626.05, 88.4878, 1626.05, 86.479);
      crc2.bezierCurveTo(1626.05, 84.6638, 1625.76, 83.1874, 1625.18, 82.0499);
      crc2.bezierCurveTo(1624.26, 80.2589, 1622.68, 79.3634, 1620.43, 79.3634);
      crc2.bezierCurveTo(1618.43, 79.3634, 1616.98, 80.1258, 1616.07, 81.6506);
      crc2.bezierCurveTo(1615.16, 83.1753, 1614.71, 85.0147, 1614.71, 87.1687);
      crc2.bezierCurveTo(1614.71, 89.2381, 1615.16, 90.9625, 1616.07, 92.342);
      crc2.bezierCurveTo(1616.98, 93.7216, 1618.42, 94.4113, 1620.39, 94.4113);
      crc2.closePath();
      crc2.moveTo(1620.52, 76.5136);
      crc2.bezierCurveTo(1623.02, 76.5136, 1625.14, 77.3486, 1626.87, 79.0185);
      crc2.bezierCurveTo(1628.6, 80.6885, 1629.47, 83.1451, 1629.47, 86.3882);
      crc2.bezierCurveTo(1629.47, 89.5224, 1628.7, 92.1121, 1627.18, 94.1572);
      crc2.bezierCurveTo(1625.65, 96.2023, 1623.29, 97.2249, 1620.08, 97.2249);
      crc2.bezierCurveTo(1617.41, 97.2249, 1615.28, 96.3203, 1613.71, 94.5112);
      crc2.bezierCurveTo(1612.14, 92.702, 1611.35, 90.2727, 1611.35, 87.2232);
      crc2.bezierCurveTo(1611.35, 83.9559, 1612.18, 81.3541, 1613.84, 79.4179);
      crc2.bezierCurveTo(1615.49, 77.4817, 1617.72, 76.5136, 1620.52, 76.5136);
      crc2.closePath();
      crc2.fill();

      // #path4-3
      crc2.beginPath();
      crc2.fillStyle = "rgb(189, 150, 88)";
      crc2.lineCap = "round";
      crc2.lineJoin = "round";
      crc2.miterLimit = 10;
      crc2.moveTo(1643.68, 77.0763);
      crc2.lineTo(1646.91, 77.0763);
      crc2.lineTo(1646.91, 79.8354);
      crc2.bezierCurveTo(1647.68, 78.8794, 1648.39, 78.1835, 1649.02, 77.7479);
      crc2.bezierCurveTo(1650.09, 77.0097, 1651.31, 76.6406, 1652.68, 76.6406);
      crc2.bezierCurveTo(1654.23, 76.6406, 1655.48, 77.0218, 1656.42, 77.7842);
      crc2.bezierCurveTo(1656.95, 78.2199, 1657.44, 78.8612, 1657.87, 79.7083);
      crc2.bezierCurveTo(1658.6, 78.6676, 1659.45, 77.8961, 1660.43, 77.3939);
      crc2.bezierCurveTo(1661.41, 76.8917, 1662.51, 76.6406, 1663.74, 76.6406);
      crc2.bezierCurveTo(1666.35, 76.6406, 1668.13, 77.5845, 1669.07, 79.4723);
      crc2.bezierCurveTo(1669.58, 80.4888, 1669.84, 81.8563, 1669.84, 83.5747);
      crc2.lineTo(1669.84, 96.517);
      crc2.lineTo(1666.44, 96.517);
      crc2.lineTo(1666.44, 83.012);
      crc2.bezierCurveTo(1666.44, 81.7171, 1666.12, 80.8277, 1665.47, 80.3436);
      crc2.bezierCurveTo(1664.82, 79.8596, 1664.03, 79.6175, 1663.1, 79.6175);
      crc2.bezierCurveTo(1661.82, 79.6175, 1660.71, 80.0471, 1659.79, 80.9063);
      crc2.bezierCurveTo(1658.86, 81.7655, 1658.4, 83.1995, 1658.4, 85.2083);
      crc2.lineTo(1658.4, 96.517);
      crc2.lineTo(1655.08, 96.517);
      crc2.lineTo(1655.08, 83.8288);
      crc2.bezierCurveTo(1655.08, 82.5098, 1654.92, 81.5477, 1654.61, 80.9426);
      crc2.bezierCurveTo(1654.11, 80.035, 1653.18, 79.5812, 1651.83, 79.5812);
      crc2.bezierCurveTo(1650.59, 79.5812, 1649.47, 80.0592, 1648.46, 81.0152);
      crc2.bezierCurveTo(1647.45, 81.9712, 1646.95, 83.7017, 1646.95, 86.2067);
      crc2.lineTo(1646.95, 96.517);
      crc2.lineTo(1643.68, 96.517);
      crc2.closePath();
      crc2.fill();

      // #path5
      crc2.beginPath();
      crc2.fillStyle = "rgb(189, 150, 88)";
      crc2.lineCap = "round";
      crc2.lineJoin = "round";
      crc2.miterLimit = 10;
      crc2.moveTo(1677.91, 77.0763);
      crc2.lineTo(1677.91, 89.9823);
      crc2.bezierCurveTo(1677.91, 90.9746, 1678.07, 91.7854, 1678.38, 92.4146);
      crc2.bezierCurveTo(1678.97, 93.5764, 1680.05, 94.1572, 1681.63, 94.1572);
      crc2.bezierCurveTo(1683.91, 94.1572, 1685.46, 93.1407, 1686.28, 91.1077);
      crc2.bezierCurveTo(1686.73, 90.0186, 1686.95, 88.5241, 1686.95, 86.6242);
      crc2.lineTo(1686.95, 77.0763);
      crc2.lineTo(1690.22, 77.0763);
      crc2.lineTo(1690.22, 96.517);
      crc2.lineTo(1687.13, 96.517);
      crc2.lineTo(1687.17, 93.649);
      crc2.bezierCurveTo(1686.75, 94.3871, 1686.22, 95.0104, 1685.59, 95.5186);
      crc2.bezierCurveTo(1684.34, 96.5351, 1682.83, 97.0434, 1681.05, 97.0434);
      crc2.bezierCurveTo(1678.28, 97.0434, 1676.39, 96.1176, 1675.39, 94.2661);
      crc2.bezierCurveTo(1674.85, 93.2738, 1674.57, 91.9487, 1674.57, 90.2909);
      crc2.lineTo(1674.57, 77.0763);
      crc2.closePath();
      crc2.fill();

      // #path6
      crc2.beginPath();
      crc2.fillStyle = "rgb(189, 150, 88)";
      crc2.lineCap = "round";
      crc2.lineJoin = "round";
      crc2.miterLimit = 10;
      crc2.moveTo(1702.82, 76.5136);
      crc2.bezierCurveTo(1705.01, 76.5136, 1706.79, 77.046, 1708.16, 78.1109);
      crc2.bezierCurveTo(1709.54, 79.1759, 1710.36, 81.0092, 1710.64, 83.611);
      crc2.lineTo(1707.46, 83.611);
      crc2.bezierCurveTo(1707.27, 82.4129, 1706.83, 81.4176, 1706.14, 80.625);
      crc2.bezierCurveTo(1705.45, 79.8323, 1704.34, 79.436, 1702.82, 79.436);
      crc2.bezierCurveTo(1700.74, 79.436, 1699.25, 80.4525, 1698.35, 82.4855);
      crc2.bezierCurveTo(1697.77, 83.8046, 1697.48, 85.4322, 1697.48, 87.3684);
      crc2.bezierCurveTo(1697.48, 89.3167, 1697.89, 90.9564, 1698.72, 92.2876);
      crc2.bezierCurveTo(1699.54, 93.6187, 1700.83, 94.2843, 1702.6, 94.2843);
      crc2.bezierCurveTo(1703.95, 94.2843, 1705.03, 93.8698, 1705.82, 93.0409);
      crc2.bezierCurveTo(1706.61, 92.2119, 1707.16, 91.0774, 1707.46, 89.6374);
      crc2.lineTo(1710.64, 89.6374);
      crc2.bezierCurveTo(1710.28, 92.215, 1709.37, 94.0997, 1707.92, 95.2917);
      crc2.bezierCurveTo(1706.47, 96.4837, 1704.61, 97.0797, 1702.35, 97.0797);
      crc2.bezierCurveTo(1699.8, 97.0797, 1697.78, 96.1509, 1696.26, 94.2934);
      crc2.bezierCurveTo(1694.75, 92.4358, 1694.0, 90.1154, 1694.0, 87.3321);
      crc2.bezierCurveTo(1694.0, 83.9195, 1694.82, 81.2633, 1696.48, 79.3634);
      crc2.bezierCurveTo(1698.14, 77.4635, 1700.25, 76.5136, 1702.82, 76.5136);
      crc2.closePath();
      crc2.fill();

      // #path7
      crc2.beginPath();
      crc2.fillStyle = "rgb(189, 150, 88)";
      crc2.lineCap = "round";
      crc2.lineJoin = "round";
      crc2.miterLimit = 10;
      crc2.moveTo(1713.91, 69.7611);
      crc2.lineTo(1717.18, 69.7611);
      crc2.lineTo(1717.18, 79.7083);
      crc2.bezierCurveTo(1717.95, 78.7281, 1718.65, 78.0383, 1719.26, 77.639);
      crc2.bezierCurveTo(1720.32, 76.9492, 1721.63, 76.6043, 1723.2, 76.6043);
      crc2.bezierCurveTo(1726.02, 76.6043, 1727.93, 77.5906, 1728.94, 79.5631);
      crc2.bezierCurveTo(1729.48, 80.6401, 1729.75, 82.1346, 1729.75, 84.0466);
      crc2.lineTo(1729.75, 96.517);
      crc2.lineTo(1726.4, 96.517);
      crc2.lineTo(1726.4, 84.2644);
      crc2.bezierCurveTo(1726.4, 82.8365, 1726.22, 81.7897, 1725.85, 81.1242);
      crc2.bezierCurveTo(1725.26, 80.0592, 1724.15, 79.5268, 1722.51, 79.5268);
      crc2.bezierCurveTo(1721.16, 79.5268, 1719.93, 79.9927, 1718.83, 80.9245);
      crc2.bezierCurveTo(1717.73, 81.8563, 1717.18, 83.617, 1717.18, 86.2067);
      crc2.lineTo(1717.18, 96.517);
      crc2.lineTo(1713.91, 96.517);
      crc2.closePath();
      crc2.fill();
      crc2.restore();
      crc2.restore();

      this.drawSnail();
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

    drawSnail() {
      crc2.save();
      crc2.translate(1750, 10);

      // #Ebene-13

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

    drawBottles() {
      crc2.save();
      

      // #Ebene-22

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
