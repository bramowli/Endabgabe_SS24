namespace Geistdiele {
  type ToppingPositionType = "left" | "right";
  export class Topping extends Ingredient {
    private toppingPosition: ToppingPositionType;

    constructor(_data: IngredientType, _icetrayPosition: ToppingPositionType, _position: Vector) {
      super(_data, _position);
      this.toppingPosition = _icetrayPosition;
    }

    public draw(): void {
      if (this.toppingPosition === "left") {
        this.drawLeftTopping();
      }  else if (this.toppingPosition === "right") {
        this.drawRightTopping();
      }
    }

    public interact(_hitPosition: Vector): boolean {
      console.log(`hit: x: ${_hitPosition.x} y: ${_hitPosition.y}`);
      //console.log(`pos: x: ${this.position.x} y: ${this.position.y}`);
      if (_hitPosition.x >= 1275 && _hitPosition.x <= 1430 && _hitPosition.y >= 800 && _hitPosition.y <= 1035) {
		console.log("hit cicada")
        return true;
      } else if (_hitPosition.x >= 1480 && _hitPosition.x <= 1670 && _hitPosition.y >= 870 && _hitPosition.y <= 1035) {
        console.log("hit spider");
        return false;
      }
	  return false;
    }

    drawLeftTopping(){
      crc2.save();
      crc2.transform(1.000000, 0.000000, 0.000000, 1.000000, -0.942039, -4.531970);
      
    // #Ebene-19
      
    // #path1-2
      crc2.beginPath();
      crc2.fillStyle = 'rgb(227, 150, 98)';
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = 'rgb(227, 150, 98)';
      crc2.lineCap = 'butt';
      crc2.lineJoin = 'round';
      crc2.lineWidth = 10.000000;
      crc2.miterLimit = 10;
      crc2.moveTo(1272.260000, 948.307000);
      crc2.bezierCurveTo(1272.260000, 948.307000, 1309.050000, 935.414000, 1348.300000, 935.130000);
      crc2.bezierCurveTo(1387.540000, 934.846000, 1429.240000, 947.171000, 1429.240000, 947.171000);
      crc2.bezierCurveTo(1429.240000, 947.171000, 1388.100000, 964.959000, 1348.850000, 965.243000);
      crc2.bezierCurveTo(1309.610000, 965.527000, 1272.260000, 948.307000, 1272.260000, 948.307000);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();
      
    // #path2-9
      crc2.beginPath();
      crc2.fillStyle = 'rgb(183, 107, 56)';
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = 'rgb(183, 107, 56)';
      crc2.lineCap = 'butt';
      crc2.lineJoin = 'round';
      crc2.lineWidth = 10.000000;
      crc2.miterLimit = 10;
      crc2.moveTo(1272.260000, 951.740000);
      crc2.bezierCurveTo(1299.030000, 965.243000, 1327.720000, 965.243000, 1341.930000, 965.243000);
      crc2.bezierCurveTo(1362.310000, 965.243000, 1387.160000, 965.243000, 1429.490000, 952.171000);
      crc2.bezierCurveTo(1429.490000, 956.670000, 1422.400000, 1016.910000, 1415.240000, 1019.770000);
      crc2.bezierCurveTo(1405.800000, 1029.200000, 1302.210000, 1039.100000, 1284.780000, 1021.670000);
      crc2.bezierCurveTo(1279.010000, 1011.340000, 1272.260000, 963.771000, 1272.260000, 951.740000);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();
      
    // #path3-5
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = 'rgb(183, 107, 56)';
      crc2.lineCap = 'butt';
      crc2.lineJoin = 'round';
      crc2.lineWidth = 3.871930;
      crc2.miterLimit = 10;
      crc2.moveTo(1376.410000, 951.401000);
      crc2.bezierCurveTo(1385.480000, 934.777000, 1389.580000, 928.732000, 1389.580000, 928.732000);
      crc2.lineTo(1375.760000, 918.584000);
      crc2.stroke();
      
    // #path4-7
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = 'rgb(183, 107, 56)';
      crc2.lineCap = 'butt';
      crc2.lineJoin = 'round';
      crc2.lineWidth = 3.871930;
      crc2.miterLimit = 10;
      crc2.moveTo(1308.160000, 950.493000);
      crc2.bezierCurveTo(1317.230000, 933.869000, 1321.330000, 927.824000, 1321.330000, 927.824000);
      crc2.lineTo(1307.510000, 917.676000);
      crc2.stroke();
      
    // #path5
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = 'rgb(183, 107, 56)';
      crc2.lineCap = 'butt';
      crc2.lineJoin = 'round';
      crc2.lineWidth = 3.871930;
      crc2.miterLimit = 10;
      crc2.moveTo(1360.940000, 942.633000);
      crc2.lineTo(1339.640000, 927.060000);
      crc2.lineTo(1330.760000, 937.636000);
      crc2.stroke();
      
    // #path6
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = 'rgb(183, 107, 56)';
      crc2.lineCap = 'butt';
      crc2.lineJoin = 'round';
      crc2.lineWidth = 3.871930;
      crc2.miterLimit = 10;
      crc2.moveTo(1339.770000, 981.415000);
      crc2.lineTo(1349.270000, 956.802000);
      crc2.lineTo(1336.750000, 950.973000);
      crc2.stroke();
      
    // #path7
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = 'rgb(183, 107, 56)';
      crc2.lineCap = 'butt';
      crc2.lineJoin = 'round';
      crc2.lineWidth = 3.871930;
      crc2.miterLimit = 10;
      crc2.moveTo(1315.580000, 965.485000);
      crc2.lineTo(1325.070000, 940.872000);
      crc2.lineTo(1312.550000, 935.043000);
      crc2.stroke();
      
    // #path8
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = 'rgb(183, 107, 56)';
      crc2.lineCap = 'butt';
      crc2.lineJoin = 'round';
      crc2.lineWidth = 3.871930;
      crc2.miterLimit = 10;
      crc2.moveTo(1359.540000, 968.413000);
      crc2.lineTo(1369.040000, 943.800000);
      crc2.lineTo(1356.520000, 937.971000);
      crc2.stroke();
      
    // #path9
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = 'rgb(183, 107, 56)';
      crc2.lineCap = 'butt';
      crc2.lineJoin = 'round';
      crc2.lineWidth = 3.871930;
      crc2.miterLimit = 10;
      crc2.moveTo(1319.480000, 983.574000);
      crc2.lineTo(1312.780000, 965.006000);
      crc2.lineTo(1327.030000, 958.313000);
      crc2.stroke();
      
    // #path10
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = 'rgb(183, 107, 56)';
      crc2.lineCap = 'butt';
      crc2.lineJoin = 'round';
      crc2.lineWidth = 3.871930;
      crc2.miterLimit = 10;
      crc2.moveTo(1339.250000, 970.572000);
      crc2.lineTo(1332.560000, 952.005000);
      crc2.lineTo(1346.800000, 945.312000);
      crc2.stroke();
      
    // #path11
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = 'rgb(183, 107, 56)';
      crc2.lineCap = 'butt';
      crc2.lineJoin = 'round';
      crc2.lineWidth = 3.871930;
      crc2.miterLimit = 10;
      crc2.moveTo(1377.080000, 944.643000);
      crc2.lineTo(1384.330000, 953.457000);
      crc2.lineTo(1410.580000, 942.685000);
      crc2.stroke();
      
    // #path12
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = 'rgb(183, 107, 56)';
      crc2.lineCap = 'butt';
      crc2.lineJoin = 'round';
      crc2.lineWidth = 3.871930;
      crc2.miterLimit = 10;
      crc2.moveTo(1308.830000, 943.735000);
      crc2.lineTo(1316.080000, 952.549000);
      crc2.lineTo(1342.320000, 941.777000);
      crc2.stroke();
      
    // #path13
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = 'rgb(183, 107, 56)';
      crc2.lineCap = 'butt';
      crc2.lineJoin = 'round';
      crc2.lineWidth = 3.871930;
      crc2.miterLimit = 10;
      crc2.moveTo(1328.600000, 930.734000);
      crc2.lineTo(1335.850000, 939.547000);
      crc2.lineTo(1362.100000, 928.775000);
      crc2.stroke();
      
    // #path14
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = 'rgb(183, 107, 56)';
      crc2.lineCap = 'butt';
      crc2.lineJoin = 'round';
      crc2.lineWidth = 3.871930;
      crc2.miterLimit = 10;
      crc2.moveTo(1385.600000, 953.453000);
      crc2.lineTo(1395.780000, 961.483000);
      crc2.stroke();
      
    // #path15
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = 'rgb(183, 107, 56)';
      crc2.lineCap = 'butt';
      crc2.lineJoin = 'round';
      crc2.lineWidth = 3.871930;
      crc2.miterLimit = 10;
      crc2.moveTo(1300.010000, 932.827000);
      crc2.lineTo(1308.430000, 943.795000);
      crc2.lineTo(1326.650000, 935.177000);
      crc2.stroke();
      
    // #path16
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = 'rgb(183, 107, 56)';
      crc2.lineCap = 'butt';
      crc2.lineJoin = 'round';
      crc2.lineWidth = 3.871930;
      crc2.miterLimit = 10;
      crc2.moveTo(1343.980000, 935.755000);
      crc2.lineTo(1352.400000, 946.723000);
      crc2.lineTo(1370.610000, 938.105000);
      crc2.stroke();
      
    // #path17
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = 'rgb(183, 107, 56)';
      crc2.lineCap = 'butt';
      crc2.lineJoin = 'round';
      crc2.lineWidth = 3.871930;
      crc2.miterLimit = 10;
      crc2.moveTo(1275.720000, 934.847000);
      crc2.lineTo(1284.140000, 945.815000);
      crc2.lineTo(1302.360000, 937.197000);
      crc2.stroke();
      
    // #path18
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = 'rgb(183, 107, 56)';
      crc2.lineCap = 'butt';
      crc2.lineJoin = 'round';
      crc2.lineWidth = 3.871930;
      crc2.miterLimit = 10;
      crc2.moveTo(1324.290000, 949.670000);
      crc2.lineTo(1330.760000, 961.618000);
      crc2.stroke();
      
    // #path19
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = 'rgb(183, 107, 56)';
      crc2.lineCap = 'butt';
      crc2.lineJoin = 'round';
      crc2.lineWidth = 3.871930;
      crc2.miterLimit = 10;
      crc2.moveTo(1368.260000, 952.598000);
      crc2.lineTo(1374.730000, 964.546000);
      crc2.stroke();
      
    // #path20
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = 'rgb(183, 107, 56)';
      crc2.lineCap = 'butt';
      crc2.lineJoin = 'round';
      crc2.lineWidth = 3.871930;
      crc2.miterLimit = 10;
      crc2.moveTo(1300.010000, 951.690000);
      crc2.lineTo(1306.470000, 963.637000);
      crc2.stroke();
      
    // #path21
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = 'rgb(183, 107, 56)';
      crc2.lineCap = 'butt';
      crc2.lineJoin = 'round';
      crc2.lineWidth = 3.871930;
      crc2.miterLimit = 10;
      crc2.moveTo(1379.130000, 946.833000);
      crc2.lineTo(1385.100000, 938.327000);
      crc2.lineTo(1408.190000, 949.156000);
      crc2.stroke();
      
    // #path22
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = 'rgb(183, 107, 56)';
      crc2.lineCap = 'butt';
      crc2.lineJoin = 'round';
      crc2.lineWidth = 3.871930;
      crc2.miterLimit = 10;
      crc2.moveTo(1302.990000, 955.111000);
      crc2.lineTo(1304.130000, 946.205000);
      crc2.lineTo(1283.690000, 939.215000);
      crc2.stroke();
      
    // #path23
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = 'rgb(183, 107, 56)';
      crc2.lineCap = 'butt';
      crc2.lineJoin = 'round';
      crc2.lineWidth = 3.871930;
      crc2.miterLimit = 10;
      crc2.moveTo(1377.330000, 940.331000);
      crc2.lineTo(1378.480000, 931.425000);
      crc2.lineTo(1358.040000, 924.434000);
      crc2.stroke();
      
    // #path24
      crc2.beginPath();
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = 'rgb(183, 107, 56)';
      crc2.lineCap = 'butt';
      crc2.lineJoin = 'round';
      crc2.lineWidth = 3.871930;
      crc2.miterLimit = 10;
      crc2.moveTo(1394.770000, 931.168000);
      crc2.lineTo(1396.920000, 939.885000);
      crc2.lineTo(1418.510000, 938.999000);
      crc2.stroke();
    
    }

    drawRightTopping(){
      // #Ebene-1
	
// #path25
	crc2.beginPath();
	crc2.fillStyle = 'rgb(94, 94, 94)';
	crc2.globalAlpha = 1.0;
	crc2.strokeStyle = 'rgb(94, 94, 94)';
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'round';
	crc2.lineWidth = 10.000000;
	crc2.miterLimit = 10;
	crc2.moveTo(1487.440000, 960.110000);
	crc2.bezierCurveTo(1487.440000, 960.110000, 1539.830000, 951.256000, 1579.280000, 950.973000);
	crc2.bezierCurveTo(1618.730000, 950.689000, 1671.760000, 958.572000, 1671.760000, 958.572000);
	crc2.bezierCurveTo(1671.760000, 958.572000, 1612.560000, 972.645000, 1573.100000, 972.929000);
	crc2.bezierCurveTo(1533.650000, 973.213000, 1487.440000, 960.110000, 1487.440000, 960.110000);
	crc2.closePath();
	crc2.fill();
	crc2.stroke();
	
// #path26
	crc2.beginPath();
	crc2.fillStyle = 'rgb(0, 0, 0)';
	crc2.globalAlpha = 1.0;
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'round';
	crc2.lineWidth = 10.000000;
	crc2.miterLimit = 10;
	crc2.moveTo(1487.440000, 961.483000);
	crc2.bezierCurveTo(1514.210000, 974.985000, 1555.680000, 974.181000, 1569.900000, 974.181000);
	crc2.bezierCurveTo(1590.270000, 974.181000, 1629.430000, 972.942000, 1671.760000, 959.871000);
	crc2.bezierCurveTo(1671.760000, 964.370000, 1668.380000, 1012.870000, 1661.220000, 1015.730000);
	crc2.bezierCurveTo(1651.780000, 1025.170000, 1516.910000, 1033.920000, 1499.480000, 1016.490000);
	crc2.bezierCurveTo(1493.710000, 1006.170000, 1487.440000, 973.514000, 1487.440000, 961.483000);
	crc2.closePath();
	crc2.fill();
	crc2.stroke();
	
// #path27
	crc2.beginPath();
	crc2.globalAlpha = 1.0;
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'round';
	crc2.lineWidth = 3.871930;
	crc2.miterLimit = 10;
	crc2.moveTo(1623.580000, 960.124000);
	crc2.bezierCurveTo(1640.190000, 951.034000, 1646.910000, 948.163000, 1646.910000, 948.163000);
	crc2.lineTo(1640.760000, 932.159000);
	crc2.stroke();
	
// #path28
	crc2.beginPath();
	crc2.globalAlpha = 1.0;
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'round';
	crc2.lineWidth = 3.871930;
	crc2.miterLimit = 10;
	crc2.moveTo(1552.100000, 950.835000);
	crc2.bezierCurveTo(1534.460000, 943.951000, 1527.940000, 940.650000, 1527.940000, 940.650000);
	crc2.lineTo(1519.630000, 955.644000);
	crc2.stroke();
	
// #path29
	crc2.beginPath();
	crc2.globalAlpha = 1.0;
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'round';
	crc2.lineWidth = 3.871930;
	crc2.miterLimit = 10;
	crc2.moveTo(1579.000000, 963.535000);
	crc2.bezierCurveTo(1570.940000, 946.399000, 1568.490000, 939.518000, 1568.490000, 939.518000);
	crc2.lineTo(1552.140000, 944.674000);
	crc2.stroke();
	
// #path30
	crc2.beginPath();
	crc2.globalAlpha = 1.0;
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'round';
	crc2.lineWidth = 3.871930;
	crc2.miterLimit = 10;
	crc2.moveTo(1615.980000, 957.340000);
	crc2.lineTo(1594.680000, 941.766000);
	crc2.lineTo(1585.800000, 952.342000);
	crc2.stroke();
	
// #path31
	crc2.beginPath();
	crc2.globalAlpha = 1.0;
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'round';
	crc2.lineWidth = 3.871930;
	crc2.miterLimit = 10;
	crc2.moveTo(1594.810000, 996.121000);
	crc2.lineTo(1604.310000, 971.508000);
	crc2.lineTo(1591.790000, 965.679000);
	crc2.stroke();
	
// #path32
	crc2.beginPath();
	crc2.globalAlpha = 1.0;
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'round';
	crc2.lineWidth = 3.871930;
	crc2.miterLimit = 10;
	crc2.moveTo(1518.490000, 966.409000);
	crc2.lineTo(1543.050000, 976.060000);
	crc2.lineTo(1548.950000, 963.574000);
	crc2.stroke();
	
// #path33
	crc2.beginPath();
	crc2.globalAlpha = 1.0;
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'round';
	crc2.lineWidth = 3.871930;
	crc2.miterLimit = 10;
	crc2.moveTo(1570.610000, 980.191000);
	crc2.lineTo(1580.110000, 955.578000);
	crc2.lineTo(1567.590000, 949.749000);
	crc2.stroke();
	
// #path34
	crc2.beginPath();
	crc2.globalAlpha = 1.0;
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'round';
	crc2.lineWidth = 3.871930;
	crc2.miterLimit = 10;
	crc2.moveTo(1614.580000, 983.119000);
	crc2.lineTo(1624.080000, 958.507000);
	crc2.lineTo(1611.560000, 952.677000);
	crc2.stroke();
	
// #path35
	crc2.beginPath();
	crc2.globalAlpha = 1.0;
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'round';
	crc2.lineWidth = 3.871930;
	crc2.miterLimit = 10;
	crc2.moveTo(1594.290000, 985.278000);
	crc2.lineTo(1587.600000, 966.711000);
	crc2.lineTo(1601.840000, 960.018000);
	crc2.stroke();
	
// #path36
	crc2.beginPath();
	crc2.globalAlpha = 1.0;
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'round';
	crc2.lineWidth = 3.871930;
	crc2.miterLimit = 10;
	crc2.moveTo(1632.120000, 959.350000);
	crc2.lineTo(1639.370000, 968.163000);
	crc2.lineTo(1665.620000, 957.391000);
	crc2.stroke();
	
// #path37
	crc2.beginPath();
	crc2.globalAlpha = 1.0;
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'round';
	crc2.lineWidth = 3.871930;
	crc2.miterLimit = 10;
	crc2.moveTo(1518.050000, 956.408000);
	crc2.lineTo(1525.300000, 965.222000);
	crc2.lineTo(1551.540000, 954.450000);
	crc2.stroke();
	
// #path38
	crc2.beginPath();
	crc2.globalAlpha = 1.0;
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'round';
	crc2.lineWidth = 3.871930;
	crc2.miterLimit = 10;
	crc2.moveTo(1563.870000, 958.441000);
	crc2.lineTo(1571.120000, 967.255000);
	crc2.lineTo(1597.360000, 956.483000);
	crc2.stroke();
	
// #path39
	crc2.beginPath();
	crc2.globalAlpha = 1.0;
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'round';
	crc2.lineWidth = 3.871930;
	crc2.miterLimit = 10;
	crc2.moveTo(1583.640000, 945.440000);
	crc2.lineTo(1590.890000, 954.253000);
	crc2.lineTo(1617.130000, 943.481000);
	crc2.stroke();
	
// #path40
	crc2.beginPath();
	crc2.globalAlpha = 1.0;
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'round';
	crc2.lineWidth = 3.871930;
	crc2.miterLimit = 10;
	crc2.moveTo(1640.640000, 968.159000);
	crc2.lineTo(1650.820000, 976.189000);
	crc2.stroke();
	
// #path41
	crc2.beginPath();
	crc2.globalAlpha = 1.0;
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'round';
	crc2.lineWidth = 3.871930;
	crc2.miterLimit = 10;
	crc2.moveTo(1509.230000, 945.500000);
	crc2.lineTo(1517.650000, 956.468000);
	crc2.lineTo(1535.870000, 947.850000);
	crc2.stroke();
	
// #path42
	crc2.beginPath();
	crc2.globalAlpha = 1.0;
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'round';
	crc2.lineWidth = 3.871930;
	crc2.miterLimit = 10;
	crc2.moveTo(1555.050000, 947.533000);
	crc2.lineTo(1563.470000, 958.501000);
	crc2.lineTo(1581.680000, 949.883000);
	crc2.stroke();
	
// #path43
	crc2.beginPath();
	crc2.globalAlpha = 1.0;
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'round';
	crc2.lineWidth = 3.871930;
	crc2.miterLimit = 10;
	crc2.moveTo(1599.020000, 950.461000);
	crc2.lineTo(1607.440000, 961.429000);
	crc2.lineTo(1625.650000, 952.811000);
	crc2.stroke();
	
// #path44
	crc2.beginPath();
	crc2.globalAlpha = 1.0;
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'round';
	crc2.lineWidth = 3.871930;
	crc2.miterLimit = 10;
	crc2.moveTo(1484.940000, 947.519000);
	crc2.lineTo(1493.370000, 958.487000);
	crc2.lineTo(1511.580000, 949.870000);
	crc2.stroke();
	
// #path45
	crc2.beginPath();
	crc2.globalAlpha = 1.0;
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'round';
	crc2.lineWidth = 3.871930;
	crc2.miterLimit = 10;
	crc2.moveTo(1530.760000, 949.553000);
	crc2.lineTo(1539.180000, 960.521000);
	crc2.lineTo(1557.400000, 951.903000);
	crc2.stroke();
	
// #path46
	crc2.beginPath();
	crc2.globalAlpha = 1.0;
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'round';
	crc2.lineWidth = 3.871930;
	crc2.miterLimit = 10;
	crc2.moveTo(1579.330000, 964.377000);
	crc2.lineTo(1585.800000, 976.324000);
	crc2.stroke();
	
// #path47
	crc2.beginPath();
	crc2.globalAlpha = 1.0;
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'round';
	crc2.lineWidth = 3.871930;
	crc2.miterLimit = 10;
	crc2.moveTo(1623.300000, 967.305000);
	crc2.lineTo(1629.770000, 979.252000);
	crc2.stroke();
	
// #path48
	crc2.beginPath();
	crc2.globalAlpha = 1.0;
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'round';
	crc2.lineWidth = 3.871930;
	crc2.miterLimit = 10;
	crc2.moveTo(1509.230000, 964.363000);
	crc2.lineTo(1515.690000, 976.310000);
	crc2.stroke();
	
// #path49
	crc2.beginPath();
	crc2.globalAlpha = 1.0;
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'round';
	crc2.lineWidth = 3.871930;
	crc2.miterLimit = 10;
	crc2.moveTo(1555.050000, 966.396000);
	crc2.lineTo(1561.510000, 978.344000);
	crc2.stroke();
	
// #path50
	crc2.beginPath();
	crc2.globalAlpha = 1.0;
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'round';
	crc2.lineWidth = 3.871930;
	crc2.miterLimit = 10;
	crc2.moveTo(1634.170000, 961.540000);
	crc2.lineTo(1640.140000, 953.034000);
	crc2.lineTo(1663.230000, 963.862000);
	crc2.stroke();
	
// #path51
	crc2.beginPath();
	crc2.globalAlpha = 1.0;
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'round';
	crc2.lineWidth = 3.871930;
	crc2.miterLimit = 10;
	crc2.moveTo(1512.210000, 967.784000);
	crc2.lineTo(1513.360000, 958.878000);
	crc2.lineTo(1492.910000, 951.887000);
	crc2.stroke();
	
// #path52
	crc2.beginPath();
	crc2.globalAlpha = 1.0;
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'round';
	crc2.lineWidth = 3.871930;
	crc2.miterLimit = 10;
	crc2.moveTo(1558.020000, 969.817000);
	crc2.lineTo(1559.170000, 960.911000);
	crc2.lineTo(1538.730000, 953.921000);
	crc2.stroke();
	
// #path53
	crc2.beginPath();
	crc2.globalAlpha = 1.0;
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'round';
	crc2.lineWidth = 3.871930;
	crc2.miterLimit = 10;
	crc2.moveTo(1632.370000, 955.037000);
	crc2.lineTo(1633.520000, 946.131000);
	crc2.lineTo(1613.080000, 939.141000);
	crc2.stroke();
	
// #path54
	crc2.beginPath();
	crc2.globalAlpha = 1.0;
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'round';
	crc2.lineWidth = 3.871930;
	crc2.miterLimit = 10;
	crc2.moveTo(1649.810000, 945.874000);
	crc2.lineTo(1651.960000, 954.591000);
	crc2.lineTo(1673.550000, 953.705000);
	crc2.stroke();
	crc2.restore();
    }
  }
}
