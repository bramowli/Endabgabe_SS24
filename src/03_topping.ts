namespace Geistdiele {
  // possible positions of the topping
  type ToppingPositionType = "left" | "right";

  export class Topping extends Ingredient {
    private toppingPosition: ToppingPositionType;

    constructor(_data: IngredientType, _icetrayPosition: ToppingPositionType, _position: Vector, _size: number) {
      super(_data, _position, _size);
      this.toppingPosition = _icetrayPosition;
    }

    public draw(): void {
      if (this.toppingPosition === "left") {
        this.drawLeftTopping();
      } else if (this.toppingPosition === "right") {
        this.drawRightTopping();
      }
    }

    public interact(_hitPosition: Vector): boolean {
      if (
        this.toppingPosition === "left" &&
        _hitPosition.x >= 1275 &&
        _hitPosition.x <= 1430 &&
        _hitPosition.y >= 800 &&
        _hitPosition.y <= 1035
      ) {
        // hit cicada
        return true;
      } else if (
        this.toppingPosition === "right" &&
        _hitPosition.x >= 1480 &&
        _hitPosition.x <= 1670 &&
        _hitPosition.y >= 870 &&
        _hitPosition.y <= 1035
      ) {
        // hit spider
        return true;
      }
      return false;
    }

    private drawLeftTopping() {
      crc2.save();
      crc2.transform(1.0, 0.0, 0.0, 1.0, -0.942039, -4.53197);

      // #Layer-19

      // #path1-2
      crc2.beginPath();
      crc2.fillStyle = "rgb(227, 150, 98)";
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(227, 150, 98)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 10.0;
      crc2.miterLimit = 10;
      crc2.moveTo(1272.26, 948.307);
      crc2.bezierCurveTo(1272.26, 948.307, 1309.05, 935.414, 1348.3, 935.13);
      crc2.bezierCurveTo(1387.54, 934.846, 1429.24, 947.171, 1429.24, 947.171);
      crc2.bezierCurveTo(1429.24, 947.171, 1388.1, 964.959, 1348.85, 965.243);
      crc2.bezierCurveTo(1309.61, 965.527, 1272.26, 948.307, 1272.26, 948.307);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();

      // #path2-9
      crc2.beginPath();
      crc2.fillStyle = "rgb(183, 107, 56)";
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 10.0;
      crc2.miterLimit = 10;
      crc2.moveTo(1272.26, 951.74);
      crc2.bezierCurveTo(1299.03, 965.243, 1327.72, 965.243, 1341.93, 965.243);
      crc2.bezierCurveTo(1362.31, 965.243, 1387.16, 965.243, 1429.49, 952.171);
      crc2.bezierCurveTo(1429.49, 956.67, 1422.4, 1016.91, 1415.24, 1019.77);
      crc2.bezierCurveTo(1405.8, 1029.2, 1302.21, 1039.1, 1284.78, 1021.67);
      crc2.bezierCurveTo(1279.01, 1011.34, 1272.26, 963.771, 1272.26, 951.74);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();

      // #path3-5
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1376.41, 951.401);
      crc2.bezierCurveTo(1385.48, 934.777, 1389.58, 928.732, 1389.58, 928.732);
      crc2.lineTo(1375.76, 918.584);
      crc2.stroke();

      // #path4-7
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1308.16, 950.493);
      crc2.bezierCurveTo(1317.23, 933.869, 1321.33, 927.824, 1321.33, 927.824);
      crc2.lineTo(1307.51, 917.676);
      crc2.stroke();

      // #path5
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1360.94, 942.633);
      crc2.lineTo(1339.64, 927.06);
      crc2.lineTo(1330.76, 937.636);
      crc2.stroke();

      // #path6
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1339.77, 981.415);
      crc2.lineTo(1349.27, 956.802);
      crc2.lineTo(1336.75, 950.973);
      crc2.stroke();

      // #path7
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1315.58, 965.485);
      crc2.lineTo(1325.07, 940.872);
      crc2.lineTo(1312.55, 935.043);
      crc2.stroke();

      // #path8
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1359.54, 968.413);
      crc2.lineTo(1369.04, 943.8);
      crc2.lineTo(1356.52, 937.971);
      crc2.stroke();

      // #path9
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1319.48, 983.574);
      crc2.lineTo(1312.78, 965.006);
      crc2.lineTo(1327.03, 958.313);
      crc2.stroke();

      // #path10
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1339.25, 970.572);
      crc2.lineTo(1332.56, 952.005);
      crc2.lineTo(1346.8, 945.312);
      crc2.stroke();

      // #path11
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1377.08, 944.643);
      crc2.lineTo(1384.33, 953.457);
      crc2.lineTo(1410.58, 942.685);
      crc2.stroke();

      // #path12
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1308.83, 943.735);
      crc2.lineTo(1316.08, 952.549);
      crc2.lineTo(1342.32, 941.777);
      crc2.stroke();

      // #path13
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1328.6, 930.734);
      crc2.lineTo(1335.85, 939.547);
      crc2.lineTo(1362.1, 928.775);
      crc2.stroke();

      // #path14
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1385.6, 953.453);
      crc2.lineTo(1395.78, 961.483);
      crc2.stroke();

      // #path15
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1300.01, 932.827);
      crc2.lineTo(1308.43, 943.795);
      crc2.lineTo(1326.65, 935.177);
      crc2.stroke();

      // #path16
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1343.98, 935.755);
      crc2.lineTo(1352.4, 946.723);
      crc2.lineTo(1370.61, 938.105);
      crc2.stroke();

      // #path17
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1275.72, 934.847);
      crc2.lineTo(1284.14, 945.815);
      crc2.lineTo(1302.36, 937.197);
      crc2.stroke();

      // #path18
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1324.29, 949.67);
      crc2.lineTo(1330.76, 961.618);
      crc2.stroke();

      // #path19
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1368.26, 952.598);
      crc2.lineTo(1374.73, 964.546);
      crc2.stroke();

      // #path20
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1300.01, 951.69);
      crc2.lineTo(1306.47, 963.637);
      crc2.stroke();

      // #path21
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1379.13, 946.833);
      crc2.lineTo(1385.1, 938.327);
      crc2.lineTo(1408.19, 949.156);
      crc2.stroke();

      // #path22
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1302.99, 955.111);
      crc2.lineTo(1304.13, 946.205);
      crc2.lineTo(1283.69, 939.215);
      crc2.stroke();

      // #path23
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1377.33, 940.331);
      crc2.lineTo(1378.48, 931.425);
      crc2.lineTo(1358.04, 924.434);
      crc2.stroke();

      // #path24
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(183, 107, 56)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1394.77, 931.168);
      crc2.lineTo(1396.92, 939.885);
      crc2.lineTo(1418.51, 938.999);
      crc2.stroke();
    }

    drawRightTopping() {
      // #Layer-1

      // #path25
      crc2.beginPath();
      crc2.fillStyle = "rgb(94, 94, 94)";
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(94, 94, 94)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 10.0;
      crc2.miterLimit = 10;
      crc2.moveTo(1487.44, 960.11);
      crc2.bezierCurveTo(1487.44, 960.11, 1539.83, 951.256, 1579.28, 950.973);
      crc2.bezierCurveTo(1618.73, 950.689, 1671.76, 958.572, 1671.76, 958.572);
      crc2.bezierCurveTo(1671.76, 958.572, 1612.56, 972.645, 1573.1, 972.929);
      crc2.bezierCurveTo(1533.65, 973.213, 1487.44, 960.11, 1487.44, 960.11);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();

      // #path26
      crc2.beginPath();
      crc2.fillStyle = "rgb(0, 0, 0)";
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 10.0;
      crc2.miterLimit = 10;
      crc2.moveTo(1487.44, 961.483);
      crc2.bezierCurveTo(1514.21, 974.985, 1555.68, 974.181, 1569.9, 974.181);
      crc2.bezierCurveTo(1590.27, 974.181, 1629.43, 972.942, 1671.76, 959.871);
      crc2.bezierCurveTo(1671.76, 964.37, 1668.38, 1012.87, 1661.22, 1015.73);
      crc2.bezierCurveTo(1651.78, 1025.17, 1516.91, 1033.92, 1499.48, 1016.49);
      crc2.bezierCurveTo(1493.71, 1006.17, 1487.44, 973.514, 1487.44, 961.483);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();

      // #path27
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1623.58, 960.124);
      crc2.bezierCurveTo(1640.19, 951.034, 1646.91, 948.163, 1646.91, 948.163);
      crc2.lineTo(1640.76, 932.159);
      crc2.stroke();

      // #path28
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1552.1, 950.835);
      crc2.bezierCurveTo(1534.46, 943.951, 1527.94, 940.65, 1527.94, 940.65);
      crc2.lineTo(1519.63, 955.644);
      crc2.stroke();

      // #path29
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1579.0, 963.535);
      crc2.bezierCurveTo(1570.94, 946.399, 1568.49, 939.518, 1568.49, 939.518);
      crc2.lineTo(1552.14, 944.674);
      crc2.stroke();

      // #path30
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1615.98, 957.34);
      crc2.lineTo(1594.68, 941.766);
      crc2.lineTo(1585.8, 952.342);
      crc2.stroke();

      // #path31
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1594.81, 996.121);
      crc2.lineTo(1604.31, 971.508);
      crc2.lineTo(1591.79, 965.679);
      crc2.stroke();

      // #path32
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1518.49, 966.409);
      crc2.lineTo(1543.05, 976.06);
      crc2.lineTo(1548.95, 963.574);
      crc2.stroke();

      // #path33
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1570.61, 980.191);
      crc2.lineTo(1580.11, 955.578);
      crc2.lineTo(1567.59, 949.749);
      crc2.stroke();

      // #path34
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1614.58, 983.119);
      crc2.lineTo(1624.08, 958.507);
      crc2.lineTo(1611.56, 952.677);
      crc2.stroke();

      // #path35
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1594.29, 985.278);
      crc2.lineTo(1587.6, 966.711);
      crc2.lineTo(1601.84, 960.018);
      crc2.stroke();

      // #path36
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1632.12, 959.35);
      crc2.lineTo(1639.37, 968.163);
      crc2.lineTo(1665.62, 957.391);
      crc2.stroke();

      // #path37
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1518.05, 956.408);
      crc2.lineTo(1525.3, 965.222);
      crc2.lineTo(1551.54, 954.45);
      crc2.stroke();

      // #path38
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1563.87, 958.441);
      crc2.lineTo(1571.12, 967.255);
      crc2.lineTo(1597.36, 956.483);
      crc2.stroke();

      // #path39
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1583.64, 945.44);
      crc2.lineTo(1590.89, 954.253);
      crc2.lineTo(1617.13, 943.481);
      crc2.stroke();

      // #path40
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1640.64, 968.159);
      crc2.lineTo(1650.82, 976.189);
      crc2.stroke();

      // #path41
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1509.23, 945.5);
      crc2.lineTo(1517.65, 956.468);
      crc2.lineTo(1535.87, 947.85);
      crc2.stroke();

      // #path42
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1555.05, 947.533);
      crc2.lineTo(1563.47, 958.501);
      crc2.lineTo(1581.68, 949.883);
      crc2.stroke();

      // #path43
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1599.02, 950.461);
      crc2.lineTo(1607.44, 961.429);
      crc2.lineTo(1625.65, 952.811);
      crc2.stroke();

      // #path44
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1484.94, 947.519);
      crc2.lineTo(1493.37, 958.487);
      crc2.lineTo(1511.58, 949.87);
      crc2.stroke();

      // #path45
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1530.76, 949.553);
      crc2.lineTo(1539.18, 960.521);
      crc2.lineTo(1557.4, 951.903);
      crc2.stroke();

      // #path46
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1579.33, 964.377);
      crc2.lineTo(1585.8, 976.324);
      crc2.stroke();

      // #path47
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1623.3, 967.305);
      crc2.lineTo(1629.77, 979.252);
      crc2.stroke();

      // #path48
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1509.23, 964.363);
      crc2.lineTo(1515.69, 976.31);
      crc2.stroke();

      // #path49
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1555.05, 966.396);
      crc2.lineTo(1561.51, 978.344);
      crc2.stroke();

      // #path50
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1634.17, 961.54);
      crc2.lineTo(1640.14, 953.034);
      crc2.lineTo(1663.23, 963.862);
      crc2.stroke();

      // #path51
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1512.21, 967.784);
      crc2.lineTo(1513.36, 958.878);
      crc2.lineTo(1492.91, 951.887);
      crc2.stroke();

      // #path52
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1558.02, 969.817);
      crc2.lineTo(1559.17, 960.911);
      crc2.lineTo(1538.73, 953.921);
      crc2.stroke();

      // #path53
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1632.37, 955.037);
      crc2.lineTo(1633.52, 946.131);
      crc2.lineTo(1613.08, 939.141);
      crc2.stroke();

      // #path54
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(0, 0, 0)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.87193;
      crc2.miterLimit = 10;
      crc2.moveTo(1649.81, 945.874);
      crc2.lineTo(1651.96, 954.591);
      crc2.lineTo(1673.55, 953.705);
      crc2.stroke();
      crc2.restore();
    }
  }
}
