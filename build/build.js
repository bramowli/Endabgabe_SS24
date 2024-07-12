"use strict";
var Geistdiele;
(function (Geistdiele) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
    }
    Geistdiele.Vector = Vector;
})(Geistdiele || (Geistdiele = {}));
var Geistdiele;
(function (Geistdiele) {
    class Drawable {
        position;
        constructor(_position) {
            this.position = _position;
        }
        draw() {
            Geistdiele.crc2.canvas.width = window.innerWidth;
            Geistdiele.crc2.canvas.height = window.innerHeight;
        }
    }
    Geistdiele.Drawable = Drawable;
})(Geistdiele || (Geistdiele = {}));
var Geistdiele;
(function (Geistdiele) {
    class Ingredient extends Geistdiele.Drawable {
        data;
        constructor(_data, _position) {
            super(_position);
            this.data = _data;
        }
    }
    Geistdiele.Ingredient = Ingredient;
})(Geistdiele || (Geistdiele = {}));
var Geistdiele;
(function (Geistdiele) {
    class Background extends Geistdiele.Drawable {
        constructor(_position) {
            super(_position);
        }
        draw() {
            this.drawAllLanterns();
            this.drawStoneStuff(this.position);
            this.drawAllTables();
            this.drawCounterBackground();
        }
        drawAllTables() {
            let x = 200;
            for (let i = 0; i <= 2; i++) {
                this.drawTable(x, 450);
                x += 600;
            }
        }
        drawAllLanterns() {
            let x = -20;
            for (let i = 0; i <= 3; i++) {
                //this.drawLight(x,300)
                this.drawLantern(x, 50);
                x += 600;
            }
        }
        // private drawLight(_x: number, _y: number) {
        //   crc2.save();
        //   crc2.translate(0, 0);
        //   let gradient = crc2.createRadialGradient(_x, _y, 70, _x, _y, 130);
        //   gradient.addColorStop(0, "#f2b35a");
        //   gradient.addColorStop(1, "#162032");
        //   crc2.fillStyle = gradient;
        //   crc2.fill();
        // }
        drawLantern(_x, _y) {
            Geistdiele.crc2.save();
            Geistdiele.crc2.translate(_x, _y);
            // #Ebene-7
            // #path4-2
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(173, 132, 57)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(68.8501, 77.1436);
            Geistdiele.crc2.lineTo(127.254, 77.1436);
            Geistdiele.crc2.lineTo(114.503, 135.74);
            Geistdiele.crc2.lineTo(98.6663, 140.633);
            Geistdiele.crc2.lineTo(83.4545, 135.74);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path5-4
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(27, 27, 27)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 4.2599;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(98.6583, 44.274);
            Geistdiele.crc2.lineTo(83.4545, 79.8449);
            Geistdiele.crc2.lineTo(108.202, 79.8449);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path6
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(27, 27, 27)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 4.2599;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(98.6663, 42.6248);
            Geistdiele.crc2.lineTo(68.4468, 77.1436);
            Geistdiele.crc2.lineTo(83.4545, 79.8449);
            Geistdiele.crc2.lineTo(98.6663, 43.648);
            Geistdiele.crc2.lineTo(109.565, 79.8449);
            Geistdiele.crc2.lineTo(125.521, 75.4967);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path7
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 3.11378;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(109.565, 79.8449);
            Geistdiele.crc2.lineTo(83.4545, 79.8449);
            Geistdiele.crc2.lineTo(93.2208, 140.618);
            Geistdiele.crc2.lineTo(103.908, 140.618);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.stroke();
            // #path8
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(27, 27, 27)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 1.8652;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(98.6583, 44.274);
            Geistdiele.crc2.lineTo(83.4396, 78.7115);
            Geistdiele.crc2.lineTo(108.202, 77.7387);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path9
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 4.2599;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(127.851, 77.1436);
            Geistdiele.crc2.lineTo(114.503, 136.749);
            Geistdiele.crc2.lineTo(104.765, 140.611);
            Geistdiele.crc2.lineTo(93.2701, 140.633);
            Geistdiele.crc2.lineTo(83.4545, 136.622);
            Geistdiele.crc2.stroke();
            // #path10
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 4.2599;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(82.9828, 135.74);
            Geistdiele.crc2.lineTo(68.4468, 79.8449);
            Geistdiele.crc2.stroke();
            // #path11
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 4.2599;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(129.289, 74.0783);
            Geistdiele.crc2.lineTo(127.851, 77.1436);
            Geistdiele.crc2.lineTo(124.478, 73.5441);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.stroke();
            // #path12
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 4.2599;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(68.4468, 79.8449);
            Geistdiele.crc2.lineTo(65.5301, 75.3439);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.stroke();
            // #path13
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 4.2599;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(68.8501, 75.3439);
            Geistdiele.crc2.lineTo(65.5249, 75.3439);
            Geistdiele.crc2.stroke();
            // #path14
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 4.2599;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(98.6663, 44.2596);
            Geistdiele.crc2.lineTo(92.0883, 35.8604);
            Geistdiele.crc2.lineTo(105.244, 35.8061);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.stroke();
            // #path15
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 4.2599;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(98.6663, 30.1044);
            Geistdiele.crc2.lineTo(98.6663, 43.648);
            Geistdiele.crc2.stroke();
            // #path16
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 1.8652;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(87.6627, 139.396);
            Geistdiele.crc2.lineTo(94.6859, 145.99);
            Geistdiele.crc2.lineTo(103.385, 145.967);
            Geistdiele.crc2.lineTo(110.265, 139.848);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path17
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 1.8652;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(85.2703, 145.99);
            Geistdiele.crc2.lineTo(112.51, 145.99);
            Geistdiele.crc2.lineTo(103.385, 150.433);
            Geistdiele.crc2.lineTo(94.6859, 150.419);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path18
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 1.8652;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(95.4135, 150.433);
            Geistdiele.crc2.lineTo(87.6627, 342.321);
            Geistdiele.crc2.lineTo(114.503, 342.321);
            Geistdiele.crc2.lineTo(102.64, 150.433);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            Geistdiele.crc2.restore();
        }
        drawStoneStuff(_position) {
            // #Ebene-1
            Geistdiele.crc2.save();
            // #path1
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(2, 33, 67)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(1920.0, 540.0);
            Geistdiele.crc2.lineTo(1971.96, 540.0);
            Geistdiele.crc2.lineTo(1971.96, 540.0);
            Geistdiele.crc2.lineTo(1920.0, 540.0);
            Geistdiele.crc2.lineTo(1920.0, 540.0);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path2
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(111, 115, 119)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(-35.6515, 390.578);
            Geistdiele.crc2.lineTo(1920.0, 390.578);
            Geistdiele.crc2.lineTo(1920.0, 1080.0);
            Geistdiele.crc2.lineTo(-35.6515, 1080.0);
            Geistdiele.crc2.lineTo(-35.6515, 390.578);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path3
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(139.811, 427.279);
            Geistdiele.crc2.bezierCurveTo(146.965, 421.382, 245.755, 419.933, 257.026, 426.497);
            Geistdiele.crc2.bezierCurveTo(268.297, 433.062, 245.791, 482.3, 237.092, 485.975);
            Geistdiele.crc2.bezierCurveTo(228.393, 489.651, 125.549, 493.975, 115.664, 485.975);
            Geistdiele.crc2.bezierCurveTo(105.779, 477.975, 132.656, 433.177, 139.811, 427.279);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path4
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(109.282, 775.786);
            Geistdiele.crc2.bezierCurveTo(116.436, 769.889, 215.226, 768.44, 226.497, 775.004);
            Geistdiele.crc2.bezierCurveTo(237.768, 781.569, 215.262, 830.807, 206.563, 834.482);
            Geistdiele.crc2.bezierCurveTo(197.864, 838.158, 95.02, 842.482, 85.1348, 834.482);
            Geistdiele.crc2.bezierCurveTo(75.2496, 826.482, 102.127, 781.684, 109.282, 775.786);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path5
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(-37.4376, 693.134);
            Geistdiele.crc2.bezierCurveTo(-30.2832, 687.237, 68.5065, 685.787, 79.7774, 692.352);
            Geistdiele.crc2.bezierCurveTo(91.0484, 698.916, 68.5425, 748.154, 59.8435, 751.83);
            Geistdiele.crc2.bezierCurveTo(51.1446, 755.505, -51.6991, 759.83, -61.5844, 751.83);
            Geistdiele.crc2.bezierCurveTo(-71.4696, 743.83, -44.5919, 699.031, -37.4376, 693.134);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path6
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(256.62, 596.65);
            Geistdiele.crc2.bezierCurveTo(263.775, 590.753, 362.564, 589.304, 373.835, 595.868);
            Geistdiele.crc2.bezierCurveTo(385.106, 602.433, 362.6, 651.671, 353.901, 655.346);
            Geistdiele.crc2.bezierCurveTo(345.203, 659.022, 242.359, 663.346, 232.474, 655.346);
            Geistdiele.crc2.bezierCurveTo(222.588, 647.346, 249.466, 602.548, 256.62, 596.65);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path7
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(291.207, 408.506);
            Geistdiele.crc2.bezierCurveTo(298.361, 402.608, 397.151, 401.159, 408.422, 407.724);
            Geistdiele.crc2.bezierCurveTo(419.693, 414.288, 397.187, 463.526, 388.488, 467.202);
            Geistdiele.crc2.bezierCurveTo(379.789, 470.877, 276.945, 475.201, 267.06, 467.202);
            Geistdiele.crc2.bezierCurveTo(257.175, 459.202, 284.053, 414.403, 291.207, 408.506);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path8
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(-87.6704, 501.612);
            Geistdiele.crc2.bezierCurveTo(-80.516, 495.714, 18.2737, 494.265, 29.5447, 500.83);
            Geistdiele.crc2.bezierCurveTo(40.8156, 507.394, 18.3097, 556.632, 9.61074, 560.308);
            Geistdiele.crc2.bezierCurveTo(0.911803, 563.983, -101.932, 568.307, -111.817, 560.308);
            Geistdiele.crc2.bezierCurveTo(-121.702, 552.308, -94.8247, 507.509, -87.6704, 501.612);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path9
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(263.774, 775.786);
            Geistdiele.crc2.bezierCurveTo(270.929, 769.889, 369.718, 768.44, 380.989, 775.004);
            Geistdiele.crc2.bezierCurveTo(392.26, 781.569, 369.754, 830.807, 361.055, 834.482);
            Geistdiele.crc2.bezierCurveTo(352.356, 838.158, 249.513, 842.482, 239.628, 834.482);
            Geistdiele.crc2.bezierCurveTo(229.742, 826.482, 256.62, 781.684, 263.774, 775.786);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path10
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(117.055, 693.134);
            Geistdiele.crc2.bezierCurveTo(124.21, 687.237, 222.999, 685.787, 234.27, 692.352);
            Geistdiele.crc2.bezierCurveTo(245.541, 698.916, 223.035, 748.154, 214.336, 751.83);
            Geistdiele.crc2.bezierCurveTo(205.637, 755.505, 102.794, 759.83, 92.9084, 751.83);
            Geistdiele.crc2.bezierCurveTo(83.0232, 743.83, 109.901, 699.031, 117.055, 693.134);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path11
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(411.113, 596.65);
            Geistdiele.crc2.bezierCurveTo(418.268, 590.753, 517.057, 589.304, 528.328, 595.868);
            Geistdiele.crc2.bezierCurveTo(539.599, 602.433, 517.093, 651.671, 508.394, 655.346);
            Geistdiele.crc2.bezierCurveTo(499.695, 659.022, 396.852, 663.346, 386.966, 655.346);
            Geistdiele.crc2.bezierCurveTo(377.081, 647.346, 403.959, 602.548, 411.113, 596.65);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path12
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(433.037, 427.279);
            Geistdiele.crc2.bezierCurveTo(440.191, 421.382, 538.981, 419.933, 550.252, 426.497);
            Geistdiele.crc2.bezierCurveTo(561.523, 433.062, 539.017, 482.3, 530.318, 485.975);
            Geistdiele.crc2.bezierCurveTo(521.619, 489.651, 418.775, 493.975, 408.89, 485.975);
            Geistdiele.crc2.bezierCurveTo(399.005, 477.975, 425.883, 433.177, 433.037, 427.279);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path13
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(51.0633, 501.612);
            Geistdiele.crc2.bezierCurveTo(58.2177, 495.714, 157.007, 494.265, 168.278, 500.83);
            Geistdiele.crc2.bezierCurveTo(179.549, 507.394, 157.043, 556.632, 148.344, 560.308);
            Geistdiele.crc2.bezierCurveTo(139.645, 563.983, 36.8017, 568.307, 26.9165, 560.308);
            Geistdiele.crc2.bezierCurveTo(17.0313, 552.308, 43.9089, 507.509, 51.0633, 501.612);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path14
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(402.508, 775.786);
            Geistdiele.crc2.bezierCurveTo(409.662, 769.889, 508.452, 768.44, 519.723, 775.004);
            Geistdiele.crc2.bezierCurveTo(530.994, 781.569, 508.488, 830.807, 499.789, 834.482);
            Geistdiele.crc2.bezierCurveTo(491.09, 838.158, 388.246, 842.482, 378.361, 834.482);
            Geistdiele.crc2.bezierCurveTo(368.476, 826.482, 395.354, 781.684, 402.508, 775.786);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path15
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(255.789, 693.134);
            Geistdiele.crc2.bezierCurveTo(262.943, 687.237, 361.733, 685.787, 373.004, 692.352);
            Geistdiele.crc2.bezierCurveTo(384.275, 698.916, 361.769, 748.154, 353.07, 751.83);
            Geistdiele.crc2.bezierCurveTo(344.371, 755.505, 241.527, 759.83, 231.642, 751.83);
            Geistdiele.crc2.bezierCurveTo(221.757, 743.83, 248.634, 699.031, 255.789, 693.134);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path16
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(574.694, 581.447);
            Geistdiele.crc2.bezierCurveTo(581.848, 575.55, 680.638, 574.101, 691.909, 580.665);
            Geistdiele.crc2.bezierCurveTo(703.18, 587.229, 680.674, 636.467, 671.975, 640.143);
            Geistdiele.crc2.bezierCurveTo(663.276, 643.818, 560.432, 648.143, 550.547, 640.143);
            Geistdiele.crc2.bezierCurveTo(540.662, 632.143, 567.54, 587.344, 574.694, 581.447);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path17
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(750.252, 419.08);
            Geistdiele.crc2.bezierCurveTo(757.406, 413.183, 856.196, 411.733, 867.467, 418.298);
            Geistdiele.crc2.bezierCurveTo(878.738, 424.862, 856.232, 474.1, 847.533, 477.776);
            Geistdiele.crc2.bezierCurveTo(838.834, 481.451, 735.99, 485.776, 726.105, 477.776);
            Geistdiele.crc2.bezierCurveTo(716.22, 469.776, 743.097, 424.977, 750.252, 419.08);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path18
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(364.514, 510.943);
            Geistdiele.crc2.bezierCurveTo(371.668, 505.046, 470.458, 503.597, 481.729, 510.161);
            Geistdiele.crc2.bezierCurveTo(493.0, 516.725, 470.494, 565.963, 461.795, 569.639);
            Geistdiele.crc2.bezierCurveTo(453.096, 573.314, 350.252, 577.639, 340.367, 569.639);
            Geistdiele.crc2.bezierCurveTo(330.482, 561.639, 357.359, 516.84, 364.514, 510.943);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path19
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(728.596, 761.451);
            Geistdiele.crc2.bezierCurveTo(735.75, 755.553, 834.54, 754.104, 845.811, 760.669);
            Geistdiele.crc2.bezierCurveTo(857.082, 767.233, 834.576, 816.471, 825.877, 820.146);
            Geistdiele.crc2.bezierCurveTo(817.178, 823.822, 714.334, 828.146, 704.449, 820.146);
            Geistdiele.crc2.bezierCurveTo(694.564, 812.147, 721.442, 767.348, 728.596, 761.451);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path20
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(581.151, 677.931);
            Geistdiele.crc2.bezierCurveTo(588.306, 672.033, 687.095, 670.584, 698.366, 677.149);
            Geistdiele.crc2.bezierCurveTo(709.637, 683.713, 687.131, 732.951, 678.432, 736.627);
            Geistdiele.crc2.bezierCurveTo(669.733, 740.302, 566.89, 744.626, 557.004, 736.627);
            Geistdiele.crc2.bezierCurveTo(547.119, 728.627, 573.997, 683.828, 581.151, 677.931);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path21
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(865.344, 596.65);
            Geistdiele.crc2.bezierCurveTo(872.499, 590.753, 971.288, 589.304, 982.559, 595.868);
            Geistdiele.crc2.bezierCurveTo(993.83, 602.433, 971.324, 651.671, 962.625, 655.346);
            Geistdiele.crc2.bezierCurveTo(953.926, 659.022, 851.083, 663.346, 841.197, 655.346);
            Geistdiele.crc2.bezierCurveTo(831.312, 647.346, 858.19, 602.548, 865.344, 596.65);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path22
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(-85.6002, 596.65);
            Geistdiele.crc2.bezierCurveTo(-78.4458, 590.753, 20.3439, 589.304, 31.6149, 595.868);
            Geistdiele.crc2.bezierCurveTo(42.8858, 602.433, 20.3799, 651.671, 11.6809, 655.346);
            Geistdiele.crc2.bezierCurveTo(2.982, 659.022, -99.8617, 663.346, -109.747, 655.346);
            Geistdiele.crc2.bezierCurveTo(-119.632, 647.346, -92.7545, 602.548, -85.6002, 596.65);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path23
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(1926.42, 510.753);
            Geistdiele.crc2.bezierCurveTo(1933.57, 504.856, 2032.36, 503.407, 2043.64, 509.971);
            Geistdiele.crc2.bezierCurveTo(2054.91, 516.536, 2032.4, 565.774, 2023.7, 569.449);
            Geistdiele.crc2.bezierCurveTo(2015.0, 573.125, 1912.16, 577.449, 1902.27, 569.449);
            Geistdiele.crc2.bezierCurveTo(1892.39, 561.449, 1919.27, 516.651, 1926.42, 510.753);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path24
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(1782.71, 510.753);
            Geistdiele.crc2.bezierCurveTo(1789.86, 504.856, 1888.65, 503.407, 1899.93, 509.971);
            Geistdiele.crc2.bezierCurveTo(1911.2, 516.536, 1888.69, 565.774, 1879.99, 569.449);
            Geistdiele.crc2.bezierCurveTo(1871.29, 573.125, 1768.45, 577.449, 1758.56, 569.449);
            Geistdiele.crc2.bezierCurveTo(1748.68, 561.449, 1775.56, 516.651, 1782.71, 510.753);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path25
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(1607.32, 510.753);
            Geistdiele.crc2.bezierCurveTo(1614.47, 504.856, 1713.26, 503.407, 1724.53, 509.971);
            Geistdiele.crc2.bezierCurveTo(1735.8, 516.536, 1713.3, 565.774, 1704.6, 569.449);
            Geistdiele.crc2.bezierCurveTo(1695.9, 573.125, 1593.06, 577.449, 1583.17, 569.449);
            Geistdiele.crc2.bezierCurveTo(1573.28, 561.449, 1600.16, 516.651, 1607.32, 510.753);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path26
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(1818.02, 687.072);
            Geistdiele.crc2.bezierCurveTo(1825.17, 681.175, 1923.96, 679.726, 1935.23, 686.29);
            Geistdiele.crc2.bezierCurveTo(1946.5, 692.855, 1924.0, 742.093, 1915.3, 745.768);
            Geistdiele.crc2.bezierCurveTo(1906.6, 749.444, 1803.76, 753.768, 1793.87, 745.768);
            Geistdiele.crc2.bezierCurveTo(1783.99, 737.768, 1810.86, 692.97, 1818.02, 687.072);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path27
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(1827.62, 436.421);
            Geistdiele.crc2.bezierCurveTo(1834.78, 430.524, 1933.57, 429.074, 1944.84, 435.639);
            Geistdiele.crc2.bezierCurveTo(1956.11, 442.203, 1933.6, 491.441, 1924.9, 495.117);
            Geistdiele.crc2.bezierCurveTo(1916.21, 498.792, 1813.36, 503.117, 1803.48, 495.117);
            Geistdiele.crc2.bezierCurveTo(1793.59, 487.117, 1820.47, 442.318, 1827.62, 436.421);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path28
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(1445.65, 510.753);
            Geistdiele.crc2.bezierCurveTo(1452.8, 504.856, 1551.59, 503.407, 1562.86, 509.971);
            Geistdiele.crc2.bezierCurveTo(1574.14, 516.536, 1551.63, 565.774, 1542.93, 569.449);
            Geistdiele.crc2.bezierCurveTo(1534.23, 573.125, 1431.39, 577.449, 1421.5, 569.449);
            Geistdiele.crc2.bezierCurveTo(1411.62, 561.449, 1438.49, 516.651, 1445.65, 510.753);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path29
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(1803.8, 770.592);
            Geistdiele.crc2.bezierCurveTo(1810.95, 764.695, 1909.74, 763.246, 1921.01, 769.81);
            Geistdiele.crc2.bezierCurveTo(1932.28, 776.375, 1909.78, 825.613, 1901.08, 829.288);
            Geistdiele.crc2.bezierCurveTo(1892.38, 832.964, 1789.53, 837.288, 1779.65, 829.288);
            Geistdiele.crc2.bezierCurveTo(1769.76, 821.288, 1796.64, 776.489, 1803.8, 770.592);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path30
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(1656.35, 687.072);
            Geistdiele.crc2.bezierCurveTo(1663.51, 681.175, 1762.29, 679.726, 1773.57, 686.29);
            Geistdiele.crc2.bezierCurveTo(1784.84, 692.855, 1762.33, 742.093, 1753.63, 745.768);
            Geistdiele.crc2.bezierCurveTo(1744.93, 749.444, 1642.09, 753.768, 1632.2, 745.768);
            Geistdiele.crc2.bezierCurveTo(1622.32, 737.768, 1649.2, 692.97, 1656.35, 687.072);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path31
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(1950.41, 590.589);
            Geistdiele.crc2.bezierCurveTo(1957.56, 584.691, 2056.35, 583.242, 2067.62, 589.807);
            Geistdiele.crc2.bezierCurveTo(2078.89, 596.371, 2056.39, 645.609, 2047.69, 649.284);
            Geistdiele.crc2.bezierCurveTo(2038.99, 652.96, 1936.15, 657.284, 1926.26, 649.284);
            Geistdiele.crc2.bezierCurveTo(1916.38, 641.285, 1943.25, 596.486, 1950.41, 590.589);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path32
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(1689.93, 436.421);
            Geistdiele.crc2.bezierCurveTo(1697.08, 430.524, 1795.87, 429.074, 1807.14, 435.639);
            Geistdiele.crc2.bezierCurveTo(1818.41, 442.203, 1795.91, 491.441, 1787.21, 495.117);
            Geistdiele.crc2.bezierCurveTo(1778.51, 498.792, 1675.67, 503.117, 1665.78, 495.117);
            Geistdiele.crc2.bezierCurveTo(1655.9, 487.117, 1682.77, 442.318, 1689.93, 436.421);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path33
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(1294.93, 501.612);
            Geistdiele.crc2.bezierCurveTo(1302.09, 495.714, 1400.88, 494.265, 1412.15, 500.83);
            Geistdiele.crc2.bezierCurveTo(1423.42, 507.394, 1400.91, 556.632, 1392.21, 560.308);
            Geistdiele.crc2.bezierCurveTo(1383.51, 563.983, 1280.67, 568.307, 1270.79, 560.308);
            Geistdiele.crc2.bezierCurveTo(1260.9, 552.308, 1287.78, 507.509, 1294.93, 501.612);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path34
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(1666.1, 770.592);
            Geistdiele.crc2.bezierCurveTo(1673.25, 764.695, 1772.04, 763.246, 1783.31, 769.81);
            Geistdiele.crc2.bezierCurveTo(1794.59, 776.375, 1772.08, 825.613, 1763.38, 829.288);
            Geistdiele.crc2.bezierCurveTo(1754.68, 832.964, 1651.84, 837.288, 1641.95, 829.288);
            Geistdiele.crc2.bezierCurveTo(1632.07, 821.288, 1658.95, 776.489, 1666.1, 770.592);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path35
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(1491.63, 687.072);
            Geistdiele.crc2.bezierCurveTo(1498.79, 681.175, 1597.58, 679.726, 1608.85, 686.29);
            Geistdiele.crc2.bezierCurveTo(1620.12, 692.855, 1597.61, 742.093, 1588.91, 745.768);
            Geistdiele.crc2.bezierCurveTo(1580.21, 749.444, 1477.37, 753.768, 1467.48, 745.768);
            Geistdiele.crc2.bezierCurveTo(1457.6, 737.768, 1484.48, 692.97, 1491.63, 687.072);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path36
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(1812.71, 590.589);
            Geistdiele.crc2.bezierCurveTo(1819.87, 584.691, 1918.66, 583.242, 1929.93, 589.807);
            Geistdiele.crc2.bezierCurveTo(1941.2, 596.371, 1918.69, 645.609, 1909.99, 649.284);
            Geistdiele.crc2.bezierCurveTo(1901.29, 652.96, 1798.45, 657.284, 1788.57, 649.284);
            Geistdiele.crc2.bezierCurveTo(1778.68, 641.285, 1805.56, 596.486, 1812.71, 590.589);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path37
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(1518.47, 436.421);
            Geistdiele.crc2.bezierCurveTo(1525.63, 430.524, 1624.42, 429.074, 1635.69, 435.639);
            Geistdiele.crc2.bezierCurveTo(1646.96, 442.203, 1624.45, 491.441, 1615.75, 495.117);
            Geistdiele.crc2.bezierCurveTo(1607.06, 498.792, 1504.21, 503.117, 1494.33, 495.117);
            Geistdiele.crc2.bezierCurveTo(1484.44, 487.117, 1511.32, 442.318, 1518.47, 436.421);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path38
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(1123.48, 501.612);
            Geistdiele.crc2.bezierCurveTo(1130.63, 495.714, 1229.42, 494.265, 1240.69, 500.83);
            Geistdiele.crc2.bezierCurveTo(1251.96, 507.394, 1229.46, 556.632, 1220.76, 560.308);
            Geistdiele.crc2.bezierCurveTo(1212.06, 563.983, 1109.22, 568.307, 1099.33, 560.308);
            Geistdiele.crc2.bezierCurveTo(1089.45, 552.308, 1116.32, 507.509, 1123.48, 501.612);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path39
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(1494.65, 770.592);
            Geistdiele.crc2.bezierCurveTo(1501.8, 764.695, 1600.59, 763.246, 1611.86, 769.81);
            Geistdiele.crc2.bezierCurveTo(1623.13, 776.375, 1600.63, 825.613, 1591.93, 829.288);
            Geistdiele.crc2.bezierCurveTo(1583.23, 832.964, 1480.38, 837.288, 1470.5, 829.288);
            Geistdiele.crc2.bezierCurveTo(1460.61, 821.288, 1487.49, 776.489, 1494.65, 770.592);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path40
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(1334.18, 677.931);
            Geistdiele.crc2.bezierCurveTo(1341.33, 672.033, 1440.12, 670.584, 1451.39, 677.149);
            Geistdiele.crc2.bezierCurveTo(1462.67, 683.713, 1440.16, 732.951, 1431.46, 736.627);
            Geistdiele.crc2.bezierCurveTo(1422.76, 740.302, 1319.92, 744.626, 1310.03, 736.627);
            Geistdiele.crc2.bezierCurveTo(1300.15, 728.627, 1327.03, 683.828, 1334.18, 677.931);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path41
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(1641.26, 590.589);
            Geistdiele.crc2.bezierCurveTo(1648.41, 584.691, 1747.2, 583.242, 1758.47, 589.807);
            Geistdiele.crc2.bezierCurveTo(1769.74, 596.371, 1747.24, 645.609, 1738.54, 649.284);
            Geistdiele.crc2.bezierCurveTo(1729.84, 652.96, 1627.0, 657.284, 1617.11, 649.284);
            Geistdiele.crc2.bezierCurveTo(1607.23, 641.285, 1634.1, 596.486, 1641.26, 590.589);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path42
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(1367.13, 419.08);
            Geistdiele.crc2.bezierCurveTo(1374.28, 413.183, 1473.07, 411.733, 1484.35, 418.298);
            Geistdiele.crc2.bezierCurveTo(1495.62, 424.862, 1473.11, 474.1, 1464.41, 477.776);
            Geistdiele.crc2.bezierCurveTo(1455.71, 481.451, 1352.87, 485.776, 1342.98, 477.776);
            Geistdiele.crc2.bezierCurveTo(1333.1, 469.776, 1359.98, 424.977, 1367.13, 419.08);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path43
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(974.498, 501.612);
            Geistdiele.crc2.bezierCurveTo(981.652, 495.714, 1080.44, 494.265, 1091.71, 500.83);
            Geistdiele.crc2.bezierCurveTo(1102.98, 507.394, 1080.48, 556.632, 1071.78, 560.308);
            Geistdiele.crc2.bezierCurveTo(1063.08, 563.983, 960.236, 568.307, 950.351, 560.308);
            Geistdiele.crc2.bezierCurveTo(940.466, 552.308, 967.343, 507.509, 974.498, 501.612);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path44
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(1332.64, 761.451);
            Geistdiele.crc2.bezierCurveTo(1339.8, 755.553, 1438.59, 754.104, 1449.86, 760.669);
            Geistdiele.crc2.bezierCurveTo(1461.13, 767.233, 1438.62, 816.471, 1429.93, 820.146);
            Geistdiele.crc2.bezierCurveTo(1421.23, 823.822, 1318.38, 828.146, 1308.5, 820.146);
            Geistdiele.crc2.bezierCurveTo(1298.61, 812.147, 1325.49, 767.348, 1332.64, 761.451);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path45
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(1185.2, 677.931);
            Geistdiele.crc2.bezierCurveTo(1192.35, 672.033, 1291.14, 670.584, 1302.41, 677.149);
            Geistdiele.crc2.bezierCurveTo(1313.69, 683.713, 1291.18, 732.951, 1282.48, 736.627);
            Geistdiele.crc2.bezierCurveTo(1273.78, 740.302, 1170.94, 744.626, 1161.05, 736.627);
            Geistdiele.crc2.bezierCurveTo(1151.17, 728.627, 1178.04, 683.828, 1185.2, 677.931);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path46
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(1492.28, 590.589);
            Geistdiele.crc2.bezierCurveTo(1499.43, 584.691, 1598.22, 583.242, 1609.49, 589.807);
            Geistdiele.crc2.bezierCurveTo(1620.76, 596.371, 1598.26, 645.609, 1589.56, 649.284);
            Geistdiele.crc2.bezierCurveTo(1580.86, 652.96, 1478.02, 657.284, 1468.13, 649.284);
            Geistdiele.crc2.bezierCurveTo(1458.25, 641.285, 1485.12, 596.486, 1492.28, 590.589);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path47
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(1220.52, 427.279);
            Geistdiele.crc2.bezierCurveTo(1227.67, 421.382, 1326.46, 419.933, 1337.73, 426.497);
            Geistdiele.crc2.bezierCurveTo(1349.0, 433.062, 1326.5, 482.3, 1317.8, 485.975);
            Geistdiele.crc2.bezierCurveTo(1309.1, 489.651, 1206.26, 493.975, 1196.37, 485.975);
            Geistdiele.crc2.bezierCurveTo(1186.49, 477.975, 1213.36, 433.177, 1220.52, 427.279);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path48
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(823.067, 513.13);
            Geistdiele.crc2.bezierCurveTo(830.222, 507.233, 929.011, 505.784, 940.282, 512.348);
            Geistdiele.crc2.bezierCurveTo(951.553, 518.913, 929.047, 568.151, 920.348, 571.826);
            Geistdiele.crc2.bezierCurveTo(911.649, 575.502, 808.806, 579.826, 798.921, 571.826);
            Geistdiele.crc2.bezierCurveTo(789.035, 563.826, 815.913, 519.028, 823.067, 513.13);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path49
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(1196.69, 761.451);
            Geistdiele.crc2.bezierCurveTo(1203.84, 755.553, 1302.63, 754.104, 1313.9, 760.669);
            Geistdiele.crc2.bezierCurveTo(1325.18, 767.233, 1302.67, 816.471, 1293.97, 820.146);
            Geistdiele.crc2.bezierCurveTo(1285.27, 823.822, 1182.43, 828.146, 1172.54, 820.146);
            Geistdiele.crc2.bezierCurveTo(1162.66, 812.147, 1189.54, 767.348, 1196.69, 761.451);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path50
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(1049.25, 677.931);
            Geistdiele.crc2.bezierCurveTo(1056.4, 672.033, 1155.19, 670.584, 1166.46, 677.149);
            Geistdiele.crc2.bezierCurveTo(1177.73, 683.713, 1155.23, 732.951, 1146.53, 736.627);
            Geistdiele.crc2.bezierCurveTo(1137.83, 740.302, 1034.98, 744.626, 1025.1, 736.627);
            Geistdiele.crc2.bezierCurveTo(1015.21, 728.627, 1042.09, 683.828, 1049.25, 677.931);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path51
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(1343.51, 586.188);
            Geistdiele.crc2.bezierCurveTo(1350.67, 580.29, 1449.46, 578.841, 1460.73, 585.406);
            Geistdiele.crc2.bezierCurveTo(1472.0, 591.97, 1449.49, 641.208, 1440.79, 644.884);
            Geistdiele.crc2.bezierCurveTo(1432.09, 648.559, 1329.25, 652.883, 1319.37, 644.884);
            Geistdiele.crc2.bezierCurveTo(1309.48, 636.884, 1336.36, 592.085, 1343.51, 586.188);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path52
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(1064.59, 427.279);
            Geistdiele.crc2.bezierCurveTo(1071.75, 421.382, 1170.54, 419.933, 1181.81, 426.497);
            Geistdiele.crc2.bezierCurveTo(1193.08, 433.062, 1170.57, 482.3, 1161.87, 485.975);
            Geistdiele.crc2.bezierCurveTo(1153.17, 489.651, 1050.33, 493.975, 1040.45, 485.975);
            Geistdiele.crc2.bezierCurveTo(1030.56, 477.975, 1057.44, 433.177, 1064.59, 427.279);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path53
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(682.618, 504.737);
            Geistdiele.crc2.bezierCurveTo(689.773, 498.84, 788.562, 497.391, 799.833, 503.955);
            Geistdiele.crc2.bezierCurveTo(811.104, 510.52, 788.598, 559.758, 779.9, 563.433);
            Geistdiele.crc2.bezierCurveTo(771.201, 567.109, 668.357, 571.433, 658.472, 563.433);
            Geistdiele.crc2.bezierCurveTo(648.586, 555.433, 675.464, 510.635, 682.618, 504.737);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path54
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(1040.76, 761.451);
            Geistdiele.crc2.bezierCurveTo(1047.92, 755.553, 1146.71, 754.104, 1157.98, 760.669);
            Geistdiele.crc2.bezierCurveTo(1169.25, 767.233, 1146.74, 816.471, 1138.05, 820.146);
            Geistdiele.crc2.bezierCurveTo(1129.35, 823.822, 1026.5, 828.146, 1016.62, 820.146);
            Geistdiele.crc2.bezierCurveTo(1006.73, 812.147, 1033.61, 767.348, 1040.76, 761.451);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path55
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(893.32, 677.931);
            Geistdiele.crc2.bezierCurveTo(900.474, 672.033, 999.264, 670.584, 1010.54, 677.149);
            Geistdiele.crc2.bezierCurveTo(1021.81, 683.713, 999.3, 732.951, 990.601, 736.627);
            Geistdiele.crc2.bezierCurveTo(981.902, 740.302, 879.058, 744.626, 869.173, 736.627);
            Geistdiele.crc2.bezierCurveTo(859.288, 728.627, 886.166, 683.828, 893.32, 677.931);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path56
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(1187.38, 581.447);
            Geistdiele.crc2.bezierCurveTo(1194.53, 575.55, 1293.32, 574.101, 1304.59, 580.665);
            Geistdiele.crc2.bezierCurveTo(1315.86, 587.229, 1293.36, 636.467, 1284.66, 640.143);
            Geistdiele.crc2.bezierCurveTo(1275.96, 643.818, 1173.12, 648.143, 1163.23, 640.143);
            Geistdiele.crc2.bezierCurveTo(1153.35, 632.143, 1180.22, 587.344, 1187.38, 581.447);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path57
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(894.647, 433.295);
            Geistdiele.crc2.bezierCurveTo(901.801, 427.398, 1000.59, 425.949, 1011.86, 432.513);
            Geistdiele.crc2.bezierCurveTo(1023.13, 439.077, 1000.63, 488.315, 991.928, 491.991);
            Geistdiele.crc2.bezierCurveTo(983.229, 495.666, 880.385, 499.991, 870.5, 491.991);
            Geistdiele.crc2.bezierCurveTo(860.615, 483.991, 887.492, 439.192, 894.647, 433.295);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path58
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(517.063, 501.612);
            Geistdiele.crc2.bezierCurveTo(524.217, 495.714, 623.007, 494.265, 634.278, 500.83);
            Geistdiele.crc2.bezierCurveTo(645.549, 507.394, 623.043, 556.632, 614.344, 560.308);
            Geistdiele.crc2.bezierCurveTo(605.645, 563.983, 502.801, 568.307, 492.916, 560.308);
            Geistdiele.crc2.bezierCurveTo(483.031, 552.308, 509.908, 507.509, 517.063, 501.612);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path59
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(875.209, 761.451);
            Geistdiele.crc2.bezierCurveTo(882.363, 755.553, 981.153, 754.104, 992.424, 760.669);
            Geistdiele.crc2.bezierCurveTo(1003.7, 767.233, 981.189, 816.471, 972.49, 820.146);
            Geistdiele.crc2.bezierCurveTo(963.791, 823.822, 860.948, 828.146, 851.062, 820.146);
            Geistdiele.crc2.bezierCurveTo(841.177, 812.147, 868.055, 767.348, 875.209, 761.451);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path60
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(727.764, 677.931);
            Geistdiele.crc2.bezierCurveTo(734.919, 672.033, 833.708, 670.584, 844.979, 677.149);
            Geistdiele.crc2.bezierCurveTo(856.25, 683.713, 833.744, 732.951, 825.045, 736.627);
            Geistdiele.crc2.bezierCurveTo(816.347, 740.302, 713.503, 744.626, 703.618, 736.627);
            Geistdiele.crc2.bezierCurveTo(693.732, 728.627, 720.61, 683.828, 727.764, 677.931);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path61
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(1011.96, 596.65);
            Geistdiele.crc2.bezierCurveTo(1019.11, 590.753, 1117.9, 589.304, 1129.17, 595.868);
            Geistdiele.crc2.bezierCurveTo(1140.44, 602.433, 1117.94, 651.671, 1109.24, 655.346);
            Geistdiele.crc2.bezierCurveTo(1100.54, 659.022, 997.696, 663.346, 987.811, 655.346);
            Geistdiele.crc2.bezierCurveTo(977.925, 647.346, 1004.8, 602.548, 1011.96, 596.65);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path62
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(614.224, 419.08);
            Geistdiele.crc2.bezierCurveTo(621.379, 413.183, 720.168, 411.733, 731.439, 418.298);
            Geistdiele.crc2.bezierCurveTo(742.71, 424.862, 720.204, 474.1, 711.505, 477.776);
            Geistdiele.crc2.bezierCurveTo(702.806, 481.451, 599.963, 485.776, 590.077, 477.776);
            Geistdiele.crc2.bezierCurveTo(580.192, 469.776, 607.07, 424.977, 614.224, 419.08);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path63
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(224.093, 510.943);
            Geistdiele.crc2.bezierCurveTo(231.248, 505.046, 330.037, 503.597, 341.308, 510.161);
            Geistdiele.crc2.bezierCurveTo(352.579, 516.725, 330.073, 565.963, 321.374, 569.639);
            Geistdiele.crc2.bezierCurveTo(312.675, 573.314, 209.832, 577.639, 199.946, 569.639);
            Geistdiele.crc2.bezierCurveTo(190.061, 561.639, 216.939, 516.84, 224.093, 510.943);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path64
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(585.867, 775.786);
            Geistdiele.crc2.bezierCurveTo(593.021, 769.889, 691.811, 768.44, 703.082, 775.004);
            Geistdiele.crc2.bezierCurveTo(714.353, 781.569, 691.847, 830.807, 683.148, 834.482);
            Geistdiele.crc2.bezierCurveTo(674.449, 838.158, 571.605, 842.482, 561.72, 834.482);
            Geistdiele.crc2.bezierCurveTo(551.835, 826.482, 578.712, 781.684, 585.867, 775.786);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path65
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(423.411, 693.134);
            Geistdiele.crc2.bezierCurveTo(430.565, 687.237, 529.355, 685.787, 540.626, 692.352);
            Geistdiele.crc2.bezierCurveTo(551.897, 698.916, 529.391, 748.154, 520.692, 751.83);
            Geistdiele.crc2.bezierCurveTo(511.993, 755.505, 409.149, 759.83, 399.264, 751.83);
            Geistdiele.crc2.bezierCurveTo(389.379, 743.83, 416.257, 699.031, 423.411, 693.134);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path66
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(729.317, 596.65);
            Geistdiele.crc2.bezierCurveTo(736.471, 590.753, 835.261, 589.304, 846.532, 595.868);
            Geistdiele.crc2.bezierCurveTo(857.803, 602.433, 835.297, 651.671, 826.598, 655.346);
            Geistdiele.crc2.bezierCurveTo(817.899, 659.022, 715.055, 663.346, 705.17, 655.346);
            Geistdiele.crc2.bezierCurveTo(695.285, 647.346, 722.162, 602.548, 729.317, 596.65);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path67
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(-31.808, 427.279);
            Geistdiele.crc2.bezierCurveTo(-24.6536, 421.382, 74.1361, 419.933, 85.407, 426.497);
            Geistdiele.crc2.bezierCurveTo(96.678, 433.062, 74.172, 482.3, 65.4731, 485.975);
            Geistdiele.crc2.bezierCurveTo(56.7742, 489.651, -46.0696, 493.975, -55.9548, 485.975);
            Geistdiele.crc2.bezierCurveTo(-65.84, 477.975, -38.9624, 433.177, -31.808, 427.279);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path68
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(-62.337, 775.786);
            Geistdiele.crc2.bezierCurveTo(-55.1827, 769.889, 43.607, 768.44, 54.878, 775.004);
            Geistdiele.crc2.bezierCurveTo(66.1489, 781.569, 43.643, 830.807, 34.9441, 834.482);
            Geistdiele.crc2.bezierCurveTo(26.2451, 838.158, -76.5986, 842.482, -86.4838, 834.482);
            Geistdiele.crc2.bezierCurveTo(-96.369, 826.482, -69.4914, 781.684, -62.337, 775.786);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path69
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 91, 94)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(85.0018, 596.65);
            Geistdiele.crc2.bezierCurveTo(92.1561, 590.753, 190.946, 589.304, 202.217, 595.868);
            Geistdiele.crc2.bezierCurveTo(213.488, 602.433, 190.982, 651.671, 182.283, 655.346);
            Geistdiele.crc2.bezierCurveTo(173.584, 659.022, 70.7402, 663.346, 60.855, 655.346);
            Geistdiele.crc2.bezierCurveTo(50.9698, 647.346, 77.8474, 602.548, 85.0018, 596.65);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.restore();
            // #Ebene-3
            Geistdiele.crc2.save();
            // #path70
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(63, 57, 55)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(-16.556, 317.199);
            Geistdiele.crc2.bezierCurveTo(-16.556, 317.199, 135.286, 315.543, 138.543, 319.102);
            Geistdiele.crc2.bezierCurveTo(141.799, 322.661, 144.071, 405.868, 137.475, 411.483);
            Geistdiele.crc2.bezierCurveTo(130.878, 417.098, -16.556, 411.483, -16.556, 411.483);
            Geistdiele.crc2.lineTo(-16.556, 317.199);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path71
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(63, 57, 55)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(322.166, 319.102);
            Geistdiele.crc2.bezierCurveTo(330.877, 308.782, 1929.7, 317.585, 1929.7, 317.585);
            Geistdiele.crc2.lineTo(1929.7, 412.462);
            Geistdiele.crc2.bezierCurveTo(1929.7, 412.462, 329.249, 417.134, 321.876, 410.078);
            Geistdiele.crc2.bezierCurveTo(314.503, 403.021, 318.031, 323.238, 322.166, 319.102);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path72
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 80, 76)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(0.0, 308.167);
            Geistdiele.crc2.lineTo(126.378, 308.167);
            Geistdiele.crc2.bezierCurveTo(130.389, 308.167, 138.543, 319.102, 138.543, 319.102);
            Geistdiele.crc2.lineTo(0.0, 319.102);
            Geistdiele.crc2.lineTo(0.0, 308.167);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path73
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(89, 80, 76)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.moveTo(332.851, 308.167);
            Geistdiele.crc2.bezierCurveTo(336.5, 308.167, 2057.7, 297.232, 2057.7, 297.232);
            Geistdiele.crc2.lineTo(2057.7, 319.102);
            Geistdiele.crc2.lineTo(322.166, 319.102);
            Geistdiele.crc2.bezierCurveTo(322.166, 319.102, 329.203, 308.167, 332.851, 308.167);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path74
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1104.42, 352.874);
            Geistdiele.crc2.bezierCurveTo(1106.21, 350.977, 1130.75, 350.636, 1132.07, 352.874);
            Geistdiele.crc2.bezierCurveTo(1133.38, 355.113, 1133.11, 376.671, 1131.59, 377.698);
            Geistdiele.crc2.bezierCurveTo(1130.06, 378.724, 1106.16, 374.795, 1104.42, 373.621);
            Geistdiele.crc2.bezierCurveTo(1102.68, 372.447, 1102.64, 354.772, 1104.42, 352.874);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path75
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(-3.08678, 351.322);
            Geistdiele.crc2.bezierCurveTo(-1.30202, 349.425, 23.2449, 349.083, 24.5583, 351.322);
            Geistdiele.crc2.bezierCurveTo(25.8717, 353.56, 25.6062, 375.119, 24.0771, 376.145);
            Geistdiele.crc2.bezierCurveTo(22.548, 377.171, -1.34693, 373.242, -3.08678, 372.069);
            Geistdiele.crc2.bezierCurveTo(-4.82664, 370.895, -4.87155, 353.219, -3.08678, 351.322);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path76
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(398.428, 352.313);
            Geistdiele.crc2.bezierCurveTo(400.213, 350.416, 424.76, 350.075, 426.073, 352.313);
            Geistdiele.crc2.bezierCurveTo(427.386, 354.551, 427.121, 376.11, 425.592, 377.136);
            Geistdiele.crc2.bezierCurveTo(424.063, 378.162, 400.168, 374.234, 398.428, 373.06);
            Geistdiele.crc2.bezierCurveTo(396.688, 371.886, 396.643, 354.21, 398.428, 352.313);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path77
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1845.89, 324.738);
            Geistdiele.crc2.bezierCurveTo(1847.68, 322.841, 1872.22, 322.499, 1873.54, 324.738);
            Geistdiele.crc2.bezierCurveTo(1874.85, 326.976, 1874.58, 348.535, 1873.06, 349.561);
            Geistdiele.crc2.bezierCurveTo(1871.53, 350.587, 1847.63, 346.658, 1845.89, 345.485);
            Geistdiele.crc2.bezierCurveTo(1844.15, 344.311, 1844.11, 326.635, 1845.89, 324.738);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path78
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1647.64, 324.738);
            Geistdiele.crc2.bezierCurveTo(1649.42, 322.841, 1673.97, 322.499, 1675.28, 324.738);
            Geistdiele.crc2.bezierCurveTo(1676.6, 326.976, 1676.33, 348.535, 1674.8, 349.561);
            Geistdiele.crc2.bezierCurveTo(1673.27, 350.587, 1649.38, 346.658, 1647.64, 345.485);
            Geistdiele.crc2.bezierCurveTo(1645.9, 344.311, 1645.85, 326.635, 1647.64, 324.738);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path79
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(941.644, 324.176);
            Geistdiele.crc2.bezierCurveTo(943.428, 322.279, 967.975, 321.938, 969.289, 324.176);
            Geistdiele.crc2.bezierCurveTo(970.602, 326.415, 970.337, 347.974, 968.808, 349.0);
            Geistdiele.crc2.bezierCurveTo(967.278, 350.026, 943.384, 346.097, 941.644, 344.923);
            Geistdiele.crc2.bezierCurveTo(939.904, 343.75, 939.859, 326.074, 941.644, 324.176);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path80
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1865.57, 356.096);
            Geistdiele.crc2.bezierCurveTo(1867.35, 354.199, 1891.9, 353.858, 1893.21, 356.096);
            Geistdiele.crc2.bezierCurveTo(1894.53, 358.335, 1894.26, 379.894, 1892.73, 380.92);
            Geistdiele.crc2.bezierCurveTo(1891.2, 381.946, 1867.31, 378.017, 1865.57, 376.843);
            Geistdiele.crc2.bezierCurveTo(1863.83, 375.67, 1863.78, 357.994, 1865.57, 356.096);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path81
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1667.32, 356.096);
            Geistdiele.crc2.bezierCurveTo(1669.1, 354.199, 1693.65, 353.858, 1694.96, 356.096);
            Geistdiele.crc2.bezierCurveTo(1696.27, 358.335, 1696.01, 379.894, 1694.48, 380.92);
            Geistdiele.crc2.bezierCurveTo(1692.95, 381.946, 1669.06, 378.017, 1667.32, 376.843);
            Geistdiele.crc2.bezierCurveTo(1665.58, 375.67, 1665.53, 357.994, 1667.32, 356.096);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path82
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(961.322, 355.535);
            Geistdiele.crc2.bezierCurveTo(963.107, 353.638, 987.654, 353.297, 988.967, 355.535);
            Geistdiele.crc2.bezierCurveTo(990.28, 357.774, 990.015, 379.332, 988.486, 380.358);
            Geistdiele.crc2.bezierCurveTo(986.957, 381.384, 963.062, 377.456, 961.322, 376.282);
            Geistdiele.crc2.bezierCurveTo(959.582, 375.108, 959.537, 357.432, 961.322, 355.535);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path83
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1738.74, 350.271);
            Geistdiele.crc2.bezierCurveTo(1740.52, 348.176, 1765.07, 347.8, 1766.38, 350.271);
            Geistdiele.crc2.bezierCurveTo(1767.7, 352.743, 1767.43, 376.547, 1765.9, 377.68);
            Geistdiele.crc2.bezierCurveTo(1764.37, 378.813, 1740.48, 374.475, 1738.74, 373.179);
            Geistdiele.crc2.bezierCurveTo(1737.0, 371.883, 1736.95, 352.366, 1738.74, 350.271);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path84
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1540.48, 350.109);
            Geistdiele.crc2.bezierCurveTo(1542.27, 348.212, 1566.81, 347.871, 1568.13, 350.109);
            Geistdiele.crc2.bezierCurveTo(1569.44, 352.348, 1569.18, 373.907, 1567.65, 374.933);
            Geistdiele.crc2.bezierCurveTo(1566.12, 375.959, 1542.22, 372.03, 1540.48, 370.856);
            Geistdiele.crc2.bezierCurveTo(1538.74, 369.682, 1538.7, 352.007, 1540.48, 350.109);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path85
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(834.489, 349.548);
            Geistdiele.crc2.bezierCurveTo(836.274, 347.651, 860.821, 347.31, 862.135, 349.548);
            Geistdiele.crc2.bezierCurveTo(863.448, 351.787, 863.182, 373.345, 861.653, 374.371);
            Geistdiele.crc2.bezierCurveTo(860.124, 375.397, 836.229, 371.469, 834.489, 370.295);
            Geistdiele.crc2.bezierCurveTo(832.75, 369.121, 832.705, 351.445, 834.489, 349.548);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path86
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1444.02, 358.861);
            Geistdiele.crc2.bezierCurveTo(1445.8, 356.964, 1470.35, 356.623, 1471.66, 358.861);
            Geistdiele.crc2.bezierCurveTo(1472.98, 361.1, 1472.71, 382.658, 1471.18, 383.685);
            Geistdiele.crc2.bezierCurveTo(1469.65, 384.711, 1445.76, 380.782, 1444.02, 379.608);
            Geistdiele.crc2.bezierCurveTo(1442.28, 378.434, 1442.24, 360.759, 1444.02, 358.861);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path87
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(738.026, 358.3);
            Geistdiele.crc2.bezierCurveTo(739.811, 356.403, 764.358, 356.062, 765.671, 358.3);
            Geistdiele.crc2.bezierCurveTo(766.985, 360.539, 766.719, 382.097, 765.19, 383.123);
            Geistdiele.crc2.bezierCurveTo(763.661, 384.149, 739.766, 380.221, 738.026, 379.047);
            Geistdiele.crc2.bezierCurveTo(736.286, 377.873, 736.241, 360.197, 738.026, 358.3);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path88
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1355.81, 328.163);
            Geistdiele.crc2.bezierCurveTo(1357.59, 326.266, 1382.14, 325.925, 1383.45, 328.163);
            Geistdiele.crc2.bezierCurveTo(1384.77, 330.402, 1384.5, 351.961, 1382.97, 352.987);
            Geistdiele.crc2.bezierCurveTo(1381.44, 354.013, 1357.55, 350.084, 1355.81, 348.91);
            Geistdiele.crc2.bezierCurveTo(1354.07, 347.737, 1354.02, 330.061, 1355.81, 328.163);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path89
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(649.814, 327.602);
            Geistdiele.crc2.bezierCurveTo(651.599, 325.705, 676.146, 325.364, 677.459, 327.602);
            Geistdiele.crc2.bezierCurveTo(678.773, 329.841, 678.507, 351.399, 676.978, 352.425);
            Geistdiele.crc2.bezierCurveTo(675.449, 353.451, 651.554, 349.523, 649.814, 348.349);
            Geistdiele.crc2.bezierCurveTo(648.074, 347.175, 648.029, 329.499, 649.814, 327.602);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path90
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1407.13, 378.973);
            Geistdiele.crc2.bezierCurveTo(1408.91, 377.076, 1433.46, 376.735, 1434.77, 378.973);
            Geistdiele.crc2.bezierCurveTo(1436.08, 381.212, 1435.82, 402.77, 1434.29, 403.797);
            Geistdiele.crc2.bezierCurveTo(1432.76, 404.823, 1408.87, 400.894, 1407.13, 399.72);
            Geistdiele.crc2.bezierCurveTo(1405.39, 398.546, 1405.34, 380.871, 1407.13, 378.973);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path91
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(701.132, 378.412);
            Geistdiele.crc2.bezierCurveTo(702.916, 376.515, 727.463, 376.174, 728.777, 378.412);
            Geistdiele.crc2.bezierCurveTo(730.09, 380.651, 729.825, 402.209, 728.296, 403.235);
            Geistdiele.crc2.bezierCurveTo(726.766, 404.261, 702.871, 400.333, 701.132, 399.159);
            Geistdiele.crc2.bezierCurveTo(699.392, 397.985, 699.347, 380.309, 701.132, 378.412);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path92
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1280.33, 349.541);
            Geistdiele.crc2.bezierCurveTo(1282.11, 347.644, 1306.66, 347.303, 1307.97, 349.541);
            Geistdiele.crc2.bezierCurveTo(1309.29, 351.78, 1309.02, 373.338, 1307.49, 374.364);
            Geistdiele.crc2.bezierCurveTo(1305.96, 375.391, 1282.07, 371.462, 1280.33, 370.288);
            Geistdiele.crc2.bezierCurveTo(1278.59, 369.114, 1278.54, 351.438, 1280.33, 349.541);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path93
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(574.336, 348.98);
            Geistdiele.crc2.bezierCurveTo(576.121, 347.083, 600.668, 346.741, 601.981, 348.98);
            Geistdiele.crc2.bezierCurveTo(603.294, 351.218, 603.029, 372.777, 601.5, 373.803);
            Geistdiele.crc2.bezierCurveTo(599.971, 374.829, 576.076, 370.9, 574.336, 369.727);
            Geistdiele.crc2.bezierCurveTo(572.596, 368.553, 572.551, 350.877, 574.336, 348.98);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path94
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1495.34, 328.155);
            Geistdiele.crc2.bezierCurveTo(1497.12, 326.258, 1521.67, 325.917, 1522.98, 328.155);
            Geistdiele.crc2.bezierCurveTo(1524.3, 330.394, 1524.03, 351.952, 1522.5, 352.979);
            Geistdiele.crc2.bezierCurveTo(1520.97, 354.005, 1497.08, 350.076, 1495.34, 348.902);
            Geistdiele.crc2.bezierCurveTo(1493.6, 347.728, 1493.55, 330.053, 1495.34, 328.155);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path95
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(789.343, 327.594);
            Geistdiele.crc2.bezierCurveTo(791.128, 325.697, 815.675, 325.356, 816.989, 327.594);
            Geistdiele.crc2.bezierCurveTo(818.302, 329.832, 818.036, 351.391, 816.507, 352.417);
            Geistdiele.crc2.bezierCurveTo(814.978, 353.443, 791.083, 349.515, 789.343, 348.341);
            Geistdiele.crc2.bezierCurveTo(787.604, 347.167, 787.559, 329.491, 789.343, 327.594);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path96
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1340.9, 384.398);
            Geistdiele.crc2.bezierCurveTo(1342.69, 382.501, 1367.23, 382.16, 1368.55, 384.398);
            Geistdiele.crc2.bezierCurveTo(1369.86, 386.637, 1369.6, 408.195, 1368.07, 409.222);
            Geistdiele.crc2.bezierCurveTo(1366.54, 410.248, 1342.64, 406.319, 1340.9, 405.145);
            Geistdiele.crc2.bezierCurveTo(1339.16, 403.971, 1339.12, 386.296, 1340.9, 384.398);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path97
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(634.909, 383.837);
            Geistdiele.crc2.bezierCurveTo(636.694, 381.94, 661.241, 381.599, 662.554, 383.837);
            Geistdiele.crc2.bezierCurveTo(663.867, 386.075, 663.602, 407.634, 662.073, 408.66);
            Geistdiele.crc2.bezierCurveTo(660.544, 409.686, 636.649, 405.758, 634.909, 404.584);
            Geistdiele.crc2.bezierCurveTo(633.169, 403.41, 633.124, 385.734, 634.909, 383.837);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path98
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1214.9, 384.206);
            Geistdiele.crc2.bezierCurveTo(1216.69, 382.308, 1241.23, 381.967, 1242.55, 384.206);
            Geistdiele.crc2.bezierCurveTo(1243.86, 386.444, 1243.6, 408.003, 1242.07, 409.029);
            Geistdiele.crc2.bezierCurveTo(1240.54, 410.055, 1216.64, 406.126, 1214.9, 404.952);
            Geistdiele.crc2.bezierCurveTo(1213.16, 403.779, 1213.12, 386.103, 1214.9, 384.206);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path99
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(107.394, 382.653);
            Geistdiele.crc2.bezierCurveTo(109.179, 380.756, 133.726, 380.415, 135.039, 382.653);
            Geistdiele.crc2.bezierCurveTo(136.353, 384.892, 136.087, 406.45, 134.558, 407.476);
            Geistdiele.crc2.bezierCurveTo(133.029, 408.502, 109.134, 404.574, 107.394, 403.4);
            Geistdiele.crc2.bezierCurveTo(105.654, 402.226, 105.609, 384.55, 107.394, 382.653);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path100
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(508.909, 383.644);
            Geistdiele.crc2.bezierCurveTo(510.694, 381.747, 535.241, 381.406, 536.554, 383.644);
            Geistdiele.crc2.bezierCurveTo(537.867, 385.883, 537.602, 407.441, 536.073, 408.468);
            Geistdiele.crc2.bezierCurveTo(534.544, 409.494, 510.649, 405.565, 508.909, 404.391);
            Geistdiele.crc2.bezierCurveTo(507.169, 403.217, 507.124, 385.542, 508.909, 383.644);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path101
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1198.07, 328.163);
            Geistdiele.crc2.bezierCurveTo(1199.86, 326.266, 1224.41, 325.925, 1225.72, 328.163);
            Geistdiele.crc2.bezierCurveTo(1227.03, 330.402, 1226.77, 351.961, 1225.24, 352.987);
            Geistdiele.crc2.bezierCurveTo(1223.71, 354.013, 1199.81, 350.084, 1198.07, 348.91);
            Geistdiele.crc2.bezierCurveTo(1196.33, 347.737, 1196.29, 330.061, 1198.07, 328.163);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path102
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(90.5651, 326.611);
            Geistdiele.crc2.bezierCurveTo(92.3499, 324.714, 116.897, 324.373, 118.21, 326.611);
            Geistdiele.crc2.bezierCurveTo(119.524, 328.849, 119.258, 350.408, 117.729, 351.434);
            Geistdiele.crc2.bezierCurveTo(116.2, 352.46, 92.305, 348.532, 90.5651, 347.358);
            Geistdiele.crc2.bezierCurveTo(88.8253, 346.184, 88.7804, 328.508, 90.5651, 326.611);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path103
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(492.08, 327.602);
            Geistdiele.crc2.bezierCurveTo(493.865, 325.705, 518.412, 325.364, 519.725, 327.602);
            Geistdiele.crc2.bezierCurveTo(521.038, 329.841, 520.773, 351.399, 519.244, 352.425);
            Geistdiele.crc2.bezierCurveTo(517.715, 353.451, 493.82, 349.523, 492.08, 348.349);
            Geistdiele.crc2.bezierCurveTo(490.34, 347.175, 490.295, 329.499, 492.08, 327.602);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path104
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1141.6, 386.971);
            Geistdiele.crc2.bezierCurveTo(1143.38, 385.073, 1167.93, 384.732, 1169.24, 386.971);
            Geistdiele.crc2.bezierCurveTo(1170.55, 389.209, 1170.29, 410.768, 1168.76, 411.794);
            Geistdiele.crc2.bezierCurveTo(1167.23, 412.82, 1143.34, 408.891, 1141.6, 407.717);
            Geistdiele.crc2.bezierCurveTo(1139.86, 406.544, 1139.81, 388.868, 1141.6, 386.971);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path105
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(34.0875, 385.418);
            Geistdiele.crc2.bezierCurveTo(35.8723, 383.521, 60.4193, 383.18, 61.7326, 385.418);
            Geistdiele.crc2.bezierCurveTo(63.046, 387.657, 62.7805, 409.215, 61.2514, 410.241);
            Geistdiele.crc2.bezierCurveTo(59.7223, 411.267, 35.8274, 407.339, 34.0875, 406.165);
            Geistdiele.crc2.bezierCurveTo(32.3477, 404.991, 32.3028, 387.315, 34.0875, 385.418);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path106
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(435.602, 386.409);
            Geistdiele.crc2.bezierCurveTo(437.387, 384.512, 461.934, 384.171, 463.247, 386.409);
            Geistdiele.crc2.bezierCurveTo(464.561, 388.648, 464.295, 410.206, 462.766, 411.232);
            Geistdiele.crc2.bezierCurveTo(461.237, 412.259, 437.342, 408.33, 435.602, 407.156);
            Geistdiele.crc2.bezierCurveTo(433.862, 405.982, 433.818, 388.306, 435.602, 386.409);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path107
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1032.24, 366.147);
            Geistdiele.crc2.bezierCurveTo(1034.02, 364.25, 1058.57, 363.909, 1059.88, 366.147);
            Geistdiele.crc2.bezierCurveTo(1061.19, 368.386, 1060.93, 389.944, 1059.4, 390.97);
            Geistdiele.crc2.bezierCurveTo(1057.87, 391.997, 1033.98, 388.068, 1032.24, 386.894);
            Geistdiele.crc2.bezierCurveTo(1030.5, 385.72, 1030.45, 368.044, 1032.24, 366.147);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path108
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(326.242, 361.452);
            Geistdiele.crc2.bezierCurveTo(328.027, 359.241, 352.574, 358.844, 353.887, 361.452);
            Geistdiele.crc2.bezierCurveTo(355.2, 364.061, 354.935, 389.185, 353.406, 390.381);
            Geistdiele.crc2.bezierCurveTo(351.877, 391.577, 327.982, 386.998, 326.242, 385.631);
            Geistdiele.crc2.bezierCurveTo(324.502, 384.263, 324.457, 363.663, 326.242, 361.452);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path109
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1845.92, 376.48);
            Geistdiele.crc2.bezierCurveTo(1847.7, 374.755, 1861.71, 378.14, 1863.02, 380.174);
            Geistdiele.crc2.bezierCurveTo(1864.33, 382.209, 1864.83, 404.655, 1863.31, 405.587);
            Geistdiele.crc2.bezierCurveTo(1861.78, 406.52, 1845.47, 406.526, 1843.73, 405.459);
            Geistdiele.crc2.bezierCurveTo(1842.0, 404.392, 1844.14, 378.204, 1845.92, 376.48);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path110
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1647.66, 376.48);
            Geistdiele.crc2.bezierCurveTo(1649.44, 374.755, 1663.46, 378.14, 1664.77, 380.174);
            Geistdiele.crc2.bezierCurveTo(1666.08, 382.209, 1666.58, 404.655, 1665.05, 405.587);
            Geistdiele.crc2.bezierCurveTo(1663.53, 406.52, 1647.21, 406.526, 1645.48, 405.459);
            Geistdiele.crc2.bezierCurveTo(1643.74, 404.392, 1645.88, 378.204, 1647.66, 376.48);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path111
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(941.668, 375.918);
            Geistdiele.crc2.bezierCurveTo(943.447, 374.194, 957.466, 377.579, 958.775, 379.613);
            Geistdiele.crc2.bezierCurveTo(960.085, 381.647, 960.584, 404.093, 959.06, 405.026);
            Geistdiele.crc2.bezierCurveTo(957.536, 405.958, 941.217, 405.964, 939.483, 404.898);
            Geistdiele.crc2.bezierCurveTo(937.749, 403.831, 939.889, 377.642, 941.668, 375.918);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path112
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1904.51, 327.084);
            Geistdiele.crc2.bezierCurveTo(1906.29, 325.36, 1920.31, 328.744, 1921.61, 330.779);
            Geistdiele.crc2.bezierCurveTo(1922.92, 332.813, 1923.42, 355.259, 1921.9, 356.191);
            Geistdiele.crc2.bezierCurveTo(1920.37, 357.124, 1904.06, 357.13, 1902.32, 356.063);
            Geistdiele.crc2.bezierCurveTo(1900.59, 354.997, 1902.73, 328.808, 1904.51, 327.084);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path113
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1706.25, 327.084);
            Geistdiele.crc2.bezierCurveTo(1708.03, 325.36, 1722.05, 328.744, 1723.36, 330.779);
            Geistdiele.crc2.bezierCurveTo(1724.67, 332.813, 1725.17, 355.259, 1723.64, 356.191);
            Geistdiele.crc2.bezierCurveTo(1722.12, 357.124, 1705.8, 357.13, 1704.07, 356.063);
            Geistdiele.crc2.bezierCurveTo(1702.33, 354.997, 1704.47, 328.808, 1706.25, 327.084);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path114
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1000.26, 326.522);
            Geistdiele.crc2.bezierCurveTo(1002.04, 324.798, 1016.06, 328.183, 1017.37, 330.217);
            Geistdiele.crc2.bezierCurveTo(1018.68, 332.252, 1019.18, 354.698, 1017.65, 355.63);
            Geistdiele.crc2.bezierCurveTo(1016.13, 356.562, 999.809, 356.569, 998.075, 355.502);
            Geistdiele.crc2.bezierCurveTo(996.34, 354.435, 998.481, 328.247, 1000.26, 326.522);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path115
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1779.81, 379.597);
            Geistdiele.crc2.bezierCurveTo(1781.59, 377.873, 1795.6, 381.257, 1796.91, 383.292);
            Geistdiele.crc2.bezierCurveTo(1798.22, 385.326, 1798.72, 407.772, 1797.2, 408.704);
            Geistdiele.crc2.bezierCurveTo(1795.67, 409.637, 1779.36, 409.643, 1777.62, 408.576);
            Geistdiele.crc2.bezierCurveTo(1775.89, 407.51, 1778.03, 381.321, 1779.81, 379.597);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path116
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1581.55, 379.597);
            Geistdiele.crc2.bezierCurveTo(1583.33, 377.873, 1597.35, 381.257, 1598.66, 383.292);
            Geistdiele.crc2.bezierCurveTo(1599.97, 385.326, 1600.47, 407.772, 1598.94, 408.704);
            Geistdiele.crc2.bezierCurveTo(1597.42, 409.637, 1581.1, 409.643, 1579.37, 408.576);
            Geistdiele.crc2.bezierCurveTo(1577.63, 407.51, 1579.77, 381.321, 1581.55, 379.597);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path117
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(875.558, 379.035);
            Geistdiele.crc2.bezierCurveTo(877.337, 377.311, 891.357, 380.696, 892.666, 382.73);
            Geistdiele.crc2.bezierCurveTo(893.975, 384.765, 894.474, 407.211, 892.95, 408.143);
            Geistdiele.crc2.bezierCurveTo(891.426, 409.075, 875.108, 409.082, 873.373, 408.015);
            Geistdiele.crc2.bezierCurveTo(871.639, 406.948, 873.779, 380.76, 875.558, 379.035);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path118
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1484.42, 352.699);
            Geistdiele.crc2.bezierCurveTo(1486.2, 350.975, 1500.22, 354.359, 1501.53, 356.393);
            Geistdiele.crc2.bezierCurveTo(1502.84, 358.428, 1503.34, 380.874, 1501.82, 381.806);
            Geistdiele.crc2.bezierCurveTo(1500.29, 382.739, 1483.97, 382.745, 1482.24, 381.678);
            Geistdiele.crc2.bezierCurveTo(1480.51, 380.612, 1482.65, 354.423, 1484.42, 352.699);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path119
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(778.431, 352.137);
            Geistdiele.crc2.bezierCurveTo(780.21, 350.413, 794.229, 353.798, 795.538, 355.832);
            Geistdiele.crc2.bezierCurveTo(796.847, 357.866, 797.346, 380.312, 795.822, 381.245);
            Geistdiele.crc2.bezierCurveTo(794.298, 382.177, 777.98, 382.184, 776.246, 381.117);
            Geistdiele.crc2.bezierCurveTo(774.511, 380.05, 776.652, 353.861, 778.431, 352.137);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path120
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1380.1, 379.597);
            Geistdiele.crc2.bezierCurveTo(1381.88, 377.873, 1395.9, 381.257, 1397.21, 383.292);
            Geistdiele.crc2.bezierCurveTo(1398.52, 385.326, 1399.02, 407.772, 1397.49, 408.704);
            Geistdiele.crc2.bezierCurveTo(1395.97, 409.637, 1379.65, 409.643, 1377.92, 408.576);
            Geistdiele.crc2.bezierCurveTo(1376.18, 407.51, 1378.32, 381.321, 1380.1, 379.597);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path121
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(674.109, 379.035);
            Geistdiele.crc2.bezierCurveTo(675.888, 377.311, 689.907, 380.696, 691.217, 382.73);
            Geistdiele.crc2.bezierCurveTo(692.526, 384.765, 693.025, 407.211, 691.501, 408.143);
            Geistdiele.crc2.bezierCurveTo(689.977, 409.075, 673.658, 409.082, 671.924, 408.015);
            Geistdiele.crc2.bezierCurveTo(670.19, 406.948, 672.33, 380.76, 674.109, 379.035);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path122
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1434.95, 325.215);
            Geistdiele.crc2.bezierCurveTo(1436.72, 323.491, 1450.74, 326.875, 1452.05, 328.91);
            Geistdiele.crc2.bezierCurveTo(1453.36, 330.944, 1453.86, 353.39, 1452.34, 354.322);
            Geistdiele.crc2.bezierCurveTo(1450.81, 355.255, 1434.49, 355.261, 1432.76, 354.194);
            Geistdiele.crc2.bezierCurveTo(1431.03, 353.128, 1433.17, 326.939, 1434.95, 325.215);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path123
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(728.952, 324.653);
            Geistdiele.crc2.bezierCurveTo(730.731, 322.929, 744.75, 326.314, 746.059, 328.348);
            Geistdiele.crc2.bezierCurveTo(747.368, 330.382, 747.867, 352.828, 746.343, 353.761);
            Geistdiele.crc2.bezierCurveTo(744.819, 354.693, 728.501, 354.7, 726.767, 353.633);
            Geistdiele.crc2.bezierCurveTo(725.032, 352.566, 727.173, 326.377, 728.952, 324.653);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path124
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1319.96, 353.156);
            Geistdiele.crc2.bezierCurveTo(1321.74, 351.432, 1335.76, 354.816, 1337.07, 356.851);
            Geistdiele.crc2.bezierCurveTo(1338.38, 358.885, 1338.88, 381.331, 1337.35, 382.263);
            Geistdiele.crc2.bezierCurveTo(1335.83, 383.196, 1319.51, 383.202, 1317.78, 382.135);
            Geistdiele.crc2.bezierCurveTo(1316.04, 381.069, 1318.18, 354.88, 1319.96, 353.156);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path125
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(613.969, 352.594);
            Geistdiele.crc2.bezierCurveTo(615.748, 350.87, 629.767, 354.255, 631.076, 356.289);
            Geistdiele.crc2.bezierCurveTo(632.386, 358.324, 632.885, 380.77, 631.361, 381.702);
            Geistdiele.crc2.bezierCurveTo(629.836, 382.634, 613.518, 382.641, 611.784, 381.574);
            Geistdiele.crc2.bezierCurveTo(610.05, 380.507, 612.19, 354.319, 613.969, 352.594);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path126
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1881.78, 325.769);
            Geistdiele.crc2.bezierCurveTo(1883.56, 324.045, 1897.39, 326.982, 1898.7, 329.016);
            Geistdiele.crc2.bezierCurveTo(1900.01, 331.05, 1900.23, 346.937, 1898.7, 347.87);
            Geistdiele.crc2.bezierCurveTo(1897.18, 348.802, 1880.86, 348.808, 1879.12, 347.742);
            Geistdiele.crc2.bezierCurveTo(1877.39, 346.675, 1880.0, 327.493, 1881.78, 325.769);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path127
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1683.53, 325.769);
            Geistdiele.crc2.bezierCurveTo(1685.31, 324.045, 1699.14, 326.982, 1700.45, 329.016);
            Geistdiele.crc2.bezierCurveTo(1701.76, 331.05, 1701.97, 346.937, 1700.45, 347.87);
            Geistdiele.crc2.bezierCurveTo(1698.92, 348.802, 1682.61, 348.808, 1680.87, 347.742);
            Geistdiele.crc2.bezierCurveTo(1679.14, 346.675, 1681.75, 327.493, 1683.53, 325.769);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path128
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1022.94, 326.61);
            Geistdiele.crc2.bezierCurveTo(1024.22, 324.407, 1035.07, 324.664, 1036.01, 327.262);
            Geistdiele.crc2.bezierCurveTo(1036.95, 329.861, 1037.11, 350.157, 1036.01, 351.348);
            Geistdiele.crc2.bezierCurveTo(1034.91, 352.539, 1023.16, 352.547, 1021.91, 351.185);
            Geistdiele.crc2.bezierCurveTo(1020.66, 349.822, 1021.66, 328.812, 1022.94, 326.61);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path129
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(977.536, 325.208);
            Geistdiele.crc2.bezierCurveTo(979.315, 323.484, 993.144, 326.42, 994.454, 328.454);
            Geistdiele.crc2.bezierCurveTo(995.763, 330.489, 995.978, 346.376, 994.454, 347.308);
            Geistdiele.crc2.bezierCurveTo(992.929, 348.241, 976.611, 348.247, 974.877, 347.18);
            Geistdiele.crc2.bezierCurveTo(973.143, 346.114, 975.757, 326.932, 977.536, 325.208);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path130
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1819.08, 323.705);
            Geistdiele.crc2.bezierCurveTo(1820.86, 321.981, 1834.69, 324.918, 1836.0, 326.952);
            Geistdiele.crc2.bezierCurveTo(1837.31, 328.986, 1837.52, 344.873, 1836.0, 345.806);
            Geistdiele.crc2.bezierCurveTo(1834.48, 346.738, 1818.16, 346.745, 1816.42, 345.678);
            Geistdiele.crc2.bezierCurveTo(1814.69, 344.611, 1817.3, 325.429, 1819.08, 323.705);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path131
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1620.83, 323.705);
            Geistdiele.crc2.bezierCurveTo(1622.61, 321.981, 1636.44, 324.918, 1637.75, 326.952);
            Geistdiele.crc2.bezierCurveTo(1639.05, 328.986, 1639.27, 344.873, 1637.75, 345.806);
            Geistdiele.crc2.bezierCurveTo(1636.22, 346.738, 1619.9, 346.745, 1618.17, 345.678);
            Geistdiele.crc2.bezierCurveTo(1616.43, 344.611, 1619.05, 325.429, 1620.83, 323.705);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path132
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(914.834, 323.144);
            Geistdiele.crc2.bezierCurveTo(916.613, 321.42, 930.443, 324.357, 931.752, 326.391);
            Geistdiele.crc2.bezierCurveTo(933.061, 328.425, 933.276, 344.312, 931.752, 345.245);
            Geistdiele.crc2.bezierCurveTo(930.228, 346.177, 913.91, 346.183, 912.176, 345.117);
            Geistdiele.crc2.bezierCurveTo(910.441, 344.05, 913.055, 324.868, 914.834, 323.144);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path133
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1516.58, 359.706);
            Geistdiele.crc2.bezierCurveTo(1518.36, 357.982, 1532.19, 360.918, 1533.49, 362.952);
            Geistdiele.crc2.bezierCurveTo(1534.8, 364.987, 1535.02, 380.874, 1533.49, 381.806);
            Geistdiele.crc2.bezierCurveTo(1531.97, 382.739, 1515.65, 382.745, 1513.92, 381.678);
            Geistdiele.crc2.bezierCurveTo(1512.18, 380.612, 1514.8, 361.43, 1516.58, 359.706);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path134
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(810.583, 359.144);
            Geistdiele.crc2.bezierCurveTo(812.362, 357.42, 826.192, 360.357, 827.501, 362.391);
            Geistdiele.crc2.bezierCurveTo(828.81, 364.425, 829.025, 380.312, 827.501, 381.245);
            Geistdiele.crc2.bezierCurveTo(825.977, 382.177, 809.659, 382.184, 807.924, 381.117);
            Geistdiele.crc2.bezierCurveTo(806.19, 380.05, 808.804, 360.868, 810.583, 359.144);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path135
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1330.92, 325.262);
            Geistdiele.crc2.bezierCurveTo(1332.7, 323.538, 1346.53, 326.475, 1347.84, 328.509);
            Geistdiele.crc2.bezierCurveTo(1349.14, 330.543, 1349.36, 346.43, 1347.84, 347.362);
            Geistdiele.crc2.bezierCurveTo(1346.31, 348.295, 1329.99, 348.301, 1328.26, 347.235);
            Geistdiele.crc2.bezierCurveTo(1326.52, 346.168, 1329.14, 326.986, 1330.92, 325.262);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path136
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(624.924, 324.701);
            Geistdiele.crc2.bezierCurveTo(626.703, 322.977, 640.533, 325.913, 641.842, 327.947);
            Geistdiele.crc2.bezierCurveTo(643.151, 329.982, 643.366, 345.869, 641.842, 346.801);
            Geistdiele.crc2.bezierCurveTo(640.318, 347.734, 624.0, 347.74, 622.265, 346.673);
            Geistdiele.crc2.bezierCurveTo(620.531, 345.607, 623.145, 326.425, 624.924, 324.701);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path137
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1254.28, 348.509);
            Geistdiele.crc2.bezierCurveTo(1256.05, 346.785, 1269.88, 349.721, 1271.19, 351.756);
            Geistdiele.crc2.bezierCurveTo(1272.5, 353.79, 1272.72, 369.677, 1271.19, 370.609);
            Geistdiele.crc2.bezierCurveTo(1269.67, 371.542, 1253.35, 371.548, 1251.62, 370.481);
            Geistdiele.crc2.bezierCurveTo(1249.88, 369.415, 1252.5, 350.233, 1254.28, 348.509);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path138
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(548.282, 347.948);
            Geistdiele.crc2.bezierCurveTo(550.061, 346.223, 563.89, 349.16, 565.2, 351.194);
            Geistdiele.crc2.bezierCurveTo(566.509, 353.228, 566.724, 369.116, 565.2, 370.048);
            Geistdiele.crc2.bezierCurveTo(563.675, 370.98, 547.357, 370.987, 545.623, 369.92);
            Geistdiele.crc2.bezierCurveTo(543.889, 368.853, 546.503, 349.672, 548.282, 347.948);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path139
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1173.31, 332.661);
            Geistdiele.crc2.bezierCurveTo(1175.09, 330.937, 1188.92, 333.873, 1190.23, 335.908);
            Geistdiele.crc2.bezierCurveTo(1191.54, 337.942, 1191.76, 353.829, 1190.23, 354.761);
            Geistdiele.crc2.bezierCurveTo(1188.71, 355.694, 1172.39, 355.7, 1170.65, 354.633);
            Geistdiele.crc2.bezierCurveTo(1168.92, 353.567, 1171.53, 334.385, 1173.31, 332.661);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path140
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(65.8046, 331.108);
            Geistdiele.crc2.bezierCurveTo(67.5837, 329.384, 81.4133, 332.321, 82.7225, 334.355);
            Geistdiele.crc2.bezierCurveTo(84.0316, 336.389, 84.2466, 352.276, 82.7225, 353.209);
            Geistdiele.crc2.bezierCurveTo(81.1983, 354.141, 64.8802, 354.148, 63.1459, 353.081);
            Geistdiele.crc2.bezierCurveTo(61.4116, 352.014, 64.0256, 332.833, 65.8046, 331.108);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path141
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(467.319, 332.1);
            Geistdiele.crc2.bezierCurveTo(469.098, 330.376, 482.928, 333.312, 484.237, 335.346);
            Geistdiele.crc2.bezierCurveTo(485.546, 337.381, 485.761, 353.268, 484.237, 354.2);
            Geistdiele.crc2.bezierCurveTo(482.713, 355.133, 466.395, 355.139, 464.661, 354.072);
            Geistdiele.crc2.bezierCurveTo(462.926, 353.005, 465.54, 333.824, 467.319, 332.1);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path142
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1117.44, 381.179);
            Geistdiele.crc2.bezierCurveTo(1119.21, 379.455, 1133.04, 382.391, 1134.35, 384.426);
            Geistdiele.crc2.bezierCurveTo(1135.66, 386.46, 1135.88, 402.347, 1134.35, 403.279);
            Geistdiele.crc2.bezierCurveTo(1132.83, 404.212, 1116.51, 404.218, 1114.78, 403.151);
            Geistdiele.crc2.bezierCurveTo(1113.04, 402.085, 1115.66, 382.903, 1117.44, 381.179);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path143
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(9.92741, 379.626);
            Geistdiele.crc2.bezierCurveTo(11.7065, 377.902, 25.5361, 380.839, 26.8453, 382.873);
            Geistdiele.crc2.bezierCurveTo(28.1544, 384.907, 28.3694, 400.794, 26.8453, 401.727);
            Geistdiele.crc2.bezierCurveTo(25.3211, 402.659, 9.00299, 402.666, 7.2687, 401.599);
            Geistdiele.crc2.bezierCurveTo(5.53442, 400.532, 8.14836, 381.351, 9.92741, 379.626);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path144
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(411.442, 380.618);
            Geistdiele.crc2.bezierCurveTo(413.221, 378.893, 427.051, 381.83, 428.36, 383.864);
            Geistdiele.crc2.bezierCurveTo(429.669, 385.898, 429.884, 401.786, 428.36, 402.718);
            Geistdiele.crc2.bezierCurveTo(426.836, 403.65, 410.518, 403.657, 408.783, 402.59);
            Geistdiele.crc2.bezierCurveTo(407.049, 401.523, 409.663, 382.342, 411.442, 380.618);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path145
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1297.4, 389.786);
            Geistdiele.crc2.bezierCurveTo(1299.18, 388.062, 1323.65, 387.752, 1324.96, 389.786);
            Geistdiele.crc2.bezierCurveTo(1326.27, 391.821, 1326.48, 407.708, 1324.96, 408.64);
            Geistdiele.crc2.bezierCurveTo(1323.43, 409.573, 1299.14, 409.707, 1297.4, 408.64);
            Geistdiele.crc2.bezierCurveTo(1295.67, 407.574, 1295.62, 391.511, 1297.4, 389.786);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path146
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(591.409, 389.225);
            Geistdiele.crc2.bezierCurveTo(593.188, 387.501, 617.656, 387.191, 618.965, 389.225);
            Geistdiele.crc2.bezierCurveTo(620.274, 391.259, 620.489, 407.146, 618.965, 408.079);
            Geistdiele.crc2.bezierCurveTo(617.441, 409.011, 593.143, 409.145, 591.409, 408.079);
            Geistdiele.crc2.bezierCurveTo(589.674, 407.012, 589.63, 390.949, 591.409, 389.225);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path147
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1177.64, 384.361);
            Geistdiele.crc2.bezierCurveTo(1179.42, 382.637, 1203.89, 382.327, 1205.2, 384.361);
            Geistdiele.crc2.bezierCurveTo(1206.51, 386.396, 1206.72, 402.283, 1205.2, 403.215);
            Geistdiele.crc2.bezierCurveTo(1203.68, 404.148, 1179.38, 404.282, 1177.64, 403.215);
            Geistdiele.crc2.bezierCurveTo(1175.91, 402.149, 1175.86, 386.086, 1177.64, 384.361);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path148
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(70.135, 382.809);
            Geistdiele.crc2.bezierCurveTo(71.914, 381.085, 96.3823, 380.775, 97.6915, 382.809);
            Geistdiele.crc2.bezierCurveTo(99.0007, 384.843, 99.2157, 400.73, 97.6915, 401.663);
            Geistdiele.crc2.bezierCurveTo(96.1673, 402.595, 71.8693, 402.729, 70.135, 401.663);
            Geistdiele.crc2.bezierCurveTo(68.4007, 400.596, 68.3559, 384.533, 70.135, 382.809);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path149
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(471.65, 383.8);
            Geistdiele.crc2.bezierCurveTo(473.429, 382.076, 497.897, 381.766, 499.206, 383.8);
            Geistdiele.crc2.bezierCurveTo(500.515, 385.834, 500.73, 401.721, 499.206, 402.654);
            Geistdiele.crc2.bezierCurveTo(497.682, 403.586, 473.384, 403.721, 471.65, 402.654);
            Geistdiele.crc2.bezierCurveTo(469.915, 401.587, 469.871, 385.524, 471.65, 383.8);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path150
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1068.16, 361.053);
            Geistdiele.crc2.bezierCurveTo(1069.94, 359.329, 1094.4, 359.019, 1095.71, 361.053);
            Geistdiele.crc2.bezierCurveTo(1097.02, 363.088, 1097.24, 378.975, 1095.71, 379.907);
            Geistdiele.crc2.bezierCurveTo(1094.19, 380.84, 1069.89, 380.974, 1068.16, 379.907);
            Geistdiele.crc2.bezierCurveTo(1066.42, 378.841, 1066.38, 362.778, 1068.16, 361.053);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path151
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(362.164, 360.492);
            Geistdiele.crc2.bezierCurveTo(363.943, 358.768, 388.411, 358.458, 389.72, 360.492);
            Geistdiele.crc2.bezierCurveTo(391.03, 362.526, 391.245, 378.413, 389.72, 379.346);
            Geistdiele.crc2.bezierCurveTo(388.196, 380.278, 363.898, 380.413, 362.164, 379.346);
            Geistdiele.crc2.bezierCurveTo(360.43, 378.279, 360.385, 362.216, 362.164, 360.492);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path152
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1394.63, 326.153);
            Geistdiele.crc2.bezierCurveTo(1396.41, 324.429, 1420.88, 324.118, 1422.19, 326.153);
            Geistdiele.crc2.bezierCurveTo(1423.5, 328.187, 1423.71, 344.074, 1422.19, 345.006);
            Geistdiele.crc2.bezierCurveTo(1420.67, 345.939, 1396.37, 346.073, 1394.63, 345.006);
            Geistdiele.crc2.bezierCurveTo(1392.9, 343.94, 1392.85, 327.877, 1394.63, 326.153);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path153
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(688.64, 325.591);
            Geistdiele.crc2.bezierCurveTo(690.419, 323.867, 714.887, 323.557, 716.196, 325.591);
            Geistdiele.crc2.bezierCurveTo(717.505, 327.626, 717.72, 343.513, 716.196, 344.445);
            Geistdiele.crc2.bezierCurveTo(714.672, 345.378, 690.374, 345.512, 688.64, 344.445);
            Geistdiele.crc2.bezierCurveTo(686.905, 343.378, 686.861, 327.315, 688.64, 325.591);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path154
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1901.08, 362.672);
            Geistdiele.crc2.bezierCurveTo(1902.86, 360.948, 1927.33, 360.638, 1928.64, 362.672);
            Geistdiele.crc2.bezierCurveTo(1929.95, 364.707, 1930.16, 380.594, 1928.64, 381.526);
            Geistdiele.crc2.bezierCurveTo(1927.12, 382.459, 1902.82, 382.593, 1901.08, 381.526);
            Geistdiele.crc2.bezierCurveTo(1899.35, 380.46, 1899.3, 364.397, 1901.08, 362.672);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path155
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1702.83, 362.672);
            Geistdiele.crc2.bezierCurveTo(1704.61, 360.948, 1729.08, 360.638, 1730.39, 362.672);
            Geistdiele.crc2.bezierCurveTo(1731.69, 364.707, 1731.91, 380.594, 1730.39, 381.526);
            Geistdiele.crc2.bezierCurveTo(1728.86, 382.459, 1704.56, 382.593, 1702.83, 381.526);
            Geistdiele.crc2.bezierCurveTo(1701.09, 380.46, 1701.05, 364.397, 1702.83, 362.672);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path156
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(996.835, 362.111);
            Geistdiele.crc2.bezierCurveTo(998.614, 360.387, 1023.08, 360.077, 1024.39, 362.111);
            Geistdiele.crc2.bezierCurveTo(1025.7, 364.145, 1025.92, 380.032, 1024.39, 380.965);
            Geistdiele.crc2.bezierCurveTo(1022.87, 381.897, 998.569, 382.031, 996.835, 380.965);
            Geistdiele.crc2.bezierCurveTo(995.101, 379.898, 995.056, 363.835, 996.835, 362.111);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path157
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1778.3, 331.717);
            Geistdiele.crc2.bezierCurveTo(1780.08, 329.992, 1804.54, 329.682, 1805.85, 331.717);
            Geistdiele.crc2.bezierCurveTo(1807.16, 333.751, 1807.38, 349.638, 1805.85, 350.57);
            Geistdiele.crc2.bezierCurveTo(1804.33, 351.503, 1780.03, 351.637, 1778.3, 350.57);
            Geistdiele.crc2.bezierCurveTo(1776.56, 349.504, 1776.52, 333.441, 1778.3, 331.717);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path158
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1580.04, 331.717);
            Geistdiele.crc2.bezierCurveTo(1581.82, 329.992, 1606.29, 329.682, 1607.6, 331.717);
            Geistdiele.crc2.bezierCurveTo(1608.91, 333.751, 1609.12, 349.638, 1607.6, 350.57);
            Geistdiele.crc2.bezierCurveTo(1606.08, 351.503, 1581.78, 351.637, 1580.04, 350.57);
            Geistdiele.crc2.bezierCurveTo(1578.31, 349.504, 1578.26, 333.441, 1580.04, 331.717);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path159
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(874.049, 331.155);
            Geistdiele.crc2.bezierCurveTo(875.828, 329.431, 900.297, 329.121, 901.606, 331.155);
            Geistdiele.crc2.bezierCurveTo(902.915, 333.189, 903.13, 349.077, 901.606, 350.009);
            Geistdiele.crc2.bezierCurveTo(900.082, 350.941, 875.784, 351.076, 874.049, 350.009);
            Geistdiele.crc2.bezierCurveTo(872.315, 348.942, 872.27, 332.879, 874.049, 331.155);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path160
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1773.91, 356.861);
            Geistdiele.crc2.bezierCurveTo(1775.69, 355.137, 1800.15, 354.827, 1801.46, 356.861);
            Geistdiele.crc2.bezierCurveTo(1802.77, 358.896, 1802.99, 374.783, 1801.46, 375.715);
            Geistdiele.crc2.bezierCurveTo(1799.94, 376.648, 1775.64, 376.782, 1773.91, 375.715);
            Geistdiele.crc2.bezierCurveTo(1772.17, 374.649, 1772.13, 358.586, 1773.91, 356.861);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path161
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1575.65, 356.861);
            Geistdiele.crc2.bezierCurveTo(1577.43, 355.137, 1601.9, 354.827, 1603.21, 356.861);
            Geistdiele.crc2.bezierCurveTo(1604.52, 358.896, 1604.73, 374.783, 1603.21, 375.715);
            Geistdiele.crc2.bezierCurveTo(1601.69, 376.648, 1577.39, 376.782, 1575.65, 375.715);
            Geistdiele.crc2.bezierCurveTo(1573.92, 374.649, 1573.87, 358.586, 1575.65, 356.861);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path162
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(869.66, 356.3);
            Geistdiele.crc2.bezierCurveTo(871.439, 354.576, 895.907, 354.266, 897.216, 356.3);
            Geistdiele.crc2.bezierCurveTo(898.525, 358.334, 898.74, 374.221, 897.216, 375.154);
            Geistdiele.crc2.bezierCurveTo(895.692, 376.086, 871.394, 376.22, 869.66, 375.154);
            Geistdiele.crc2.bezierCurveTo(867.925, 374.087, 867.88, 358.024, 869.66, 356.3);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path163
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1458.92, 326.153);
            Geistdiele.crc2.bezierCurveTo(1460.7, 324.429, 1485.17, 324.118, 1486.48, 326.153);
            Geistdiele.crc2.bezierCurveTo(1487.79, 328.187, 1488.0, 344.074, 1486.48, 345.006);
            Geistdiele.crc2.bezierCurveTo(1484.95, 345.939, 1460.66, 346.073, 1458.92, 345.006);
            Geistdiele.crc2.bezierCurveTo(1457.19, 343.94, 1457.14, 327.877, 1458.92, 326.153);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path164
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(752.927, 325.591);
            Geistdiele.crc2.bezierCurveTo(754.706, 323.867, 779.174, 323.557, 780.484, 325.591);
            Geistdiele.crc2.bezierCurveTo(781.793, 327.626, 782.008, 343.513, 780.484, 344.445);
            Geistdiele.crc2.bezierCurveTo(778.959, 345.378, 754.661, 345.512, 752.927, 344.445);
            Geistdiele.crc2.bezierCurveTo(751.193, 343.378, 751.148, 327.315, 752.927, 325.591);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path165
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1808.24, 379.203);
            Geistdiele.crc2.bezierCurveTo(1810.01, 377.025, 1834.48, 376.634, 1835.79, 379.203);
            Geistdiele.crc2.bezierCurveTo(1837.1, 381.773, 1837.32, 401.84, 1835.79, 403.018);
            Geistdiele.crc2.bezierCurveTo(1834.27, 404.196, 1809.97, 404.365, 1808.24, 403.018);
            Geistdiele.crc2.bezierCurveTo(1806.5, 401.67, 1806.46, 381.381, 1808.24, 379.203);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path166
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1609.98, 379.203);
            Geistdiele.crc2.bezierCurveTo(1611.76, 377.025, 1636.23, 376.634, 1637.54, 379.203);
            Geistdiele.crc2.bezierCurveTo(1638.85, 381.773, 1639.06, 401.84, 1637.54, 403.018);
            Geistdiele.crc2.bezierCurveTo(1636.01, 404.196, 1611.72, 404.365, 1609.98, 403.018);
            Geistdiele.crc2.bezierCurveTo(1608.25, 401.67, 1608.2, 381.381, 1609.98, 379.203);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path167
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(903.987, 378.642);
            Geistdiele.crc2.bezierCurveTo(905.767, 376.464, 930.235, 376.072, 931.544, 378.642);
            Geistdiele.crc2.bezierCurveTo(932.853, 381.211, 933.068, 401.279, 931.544, 402.456);
            Geistdiele.crc2.bezierCurveTo(930.02, 403.634, 905.722, 403.804, 903.987, 402.456);
            Geistdiele.crc2.bezierCurveTo(902.253, 401.109, 902.208, 380.82, 903.987, 378.642);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path168
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1495.33, 387.022);
            Geistdiele.crc2.bezierCurveTo(1497.11, 385.297, 1521.58, 384.987, 1522.89, 387.022);
            Geistdiele.crc2.bezierCurveTo(1524.2, 389.056, 1524.41, 404.943, 1522.89, 405.875);
            Geistdiele.crc2.bezierCurveTo(1521.37, 406.808, 1497.07, 406.942, 1495.33, 405.875);
            Geistdiele.crc2.bezierCurveTo(1493.6, 404.809, 1493.55, 388.746, 1495.33, 387.022);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path169
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(789.339, 386.46);
            Geistdiele.crc2.bezierCurveTo(791.118, 384.736, 815.587, 384.426, 816.896, 386.46);
            Geistdiele.crc2.bezierCurveTo(818.205, 388.494, 818.42, 404.381, 816.896, 405.314);
            Geistdiele.crc2.bezierCurveTo(815.372, 406.246, 791.074, 406.381, 789.339, 405.314);
            Geistdiele.crc2.bezierCurveTo(787.605, 404.247, 787.56, 388.184, 789.339, 386.46);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path170
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1348.66, 358.72);
            Geistdiele.crc2.bezierCurveTo(1350.43, 356.996, 1374.9, 356.685, 1376.21, 358.72);
            Geistdiele.crc2.bezierCurveTo(1377.52, 360.754, 1377.74, 376.641, 1376.21, 377.573);
            Geistdiele.crc2.bezierCurveTo(1374.69, 378.506, 1350.39, 378.64, 1348.66, 377.573);
            Geistdiele.crc2.bezierCurveTo(1346.92, 376.507, 1346.88, 360.444, 1348.66, 358.72);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path171
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(642.662, 358.158);
            Geistdiele.crc2.bezierCurveTo(644.441, 356.434, 668.91, 356.124, 670.219, 358.158);
            Geistdiele.crc2.bezierCurveTo(671.528, 360.193, 671.743, 376.08, 670.219, 377.012);
            Geistdiele.crc2.bezierCurveTo(668.695, 377.945, 644.397, 378.079, 642.662, 377.012);
            Geistdiele.crc2.bezierCurveTo(640.928, 375.945, 640.883, 359.882, 642.662, 358.158);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path172
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1236.83, 324.596);
            Geistdiele.crc2.bezierCurveTo(1238.61, 322.872, 1263.08, 322.562, 1264.39, 324.596);
            Geistdiele.crc2.bezierCurveTo(1265.7, 326.63, 1265.91, 342.517, 1264.39, 343.45);
            Geistdiele.crc2.bezierCurveTo(1262.86, 344.382, 1238.56, 344.516, 1236.83, 343.45);
            Geistdiele.crc2.bezierCurveTo(1235.1, 342.383, 1235.05, 326.32, 1236.83, 324.596);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path173
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(530.836, 324.035);
            Geistdiele.crc2.bezierCurveTo(532.615, 322.311, 557.083, 322.0, 558.392, 324.035);
            Geistdiele.crc2.bezierCurveTo(559.701, 326.069, 559.916, 341.956, 558.392, 342.888);
            Geistdiele.crc2.bezierCurveTo(556.868, 343.821, 532.57, 343.955, 530.836, 342.888);
            Geistdiele.crc2.bezierCurveTo(529.101, 341.822, 529.057, 325.759, 530.836, 324.035);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path174
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1089.38, 327.299);
            Geistdiele.crc2.bezierCurveTo(1091.16, 325.575, 1115.63, 325.264, 1116.94, 327.299);
            Geistdiele.crc2.bezierCurveTo(1118.25, 329.333, 1118.47, 345.22, 1116.94, 346.152);
            Geistdiele.crc2.bezierCurveTo(1115.42, 347.085, 1091.12, 347.219, 1089.38, 346.152);
            Geistdiele.crc2.bezierCurveTo(1087.65, 345.086, 1087.61, 329.023, 1089.38, 327.299);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path175
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(-18.1239, 325.746);
            Geistdiele.crc2.bezierCurveTo(-16.3448, 324.022, 8.12349, 323.712, 9.43265, 325.746);
            Geistdiele.crc2.bezierCurveTo(10.7418, 327.78, 10.9568, 343.667, 9.43265, 344.6);
            Geistdiele.crc2.bezierCurveTo(7.90848, 345.532, -16.3896, 345.667, -18.1239, 344.6);
            Geistdiele.crc2.bezierCurveTo(-19.8581, 343.533, -19.9029, 327.47, -18.1239, 325.746);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path176
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(383.391, 326.737);
            Geistdiele.crc2.bezierCurveTo(385.17, 325.013, 409.638, 324.703, 410.947, 326.737);
            Geistdiele.crc2.bezierCurveTo(412.257, 328.772, 412.472, 344.659, 410.947, 345.591);
            Geistdiele.crc2.bezierCurveTo(409.423, 346.524, 385.125, 346.658, 383.391, 345.591);
            Geistdiele.crc2.bezierCurveTo(381.657, 344.524, 381.612, 328.461, 383.391, 326.737);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path177
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1250.79, 379.278);
            Geistdiele.crc2.bezierCurveTo(1253.3, 377.554, 1287.83, 377.244, 1289.68, 379.278);
            Geistdiele.crc2.bezierCurveTo(1291.53, 381.313, 1291.83, 397.2, 1289.68, 398.132);
            Geistdiele.crc2.bezierCurveTo(1287.53, 399.065, 1253.24, 399.199, 1250.79, 398.132);
            Geistdiele.crc2.bezierCurveTo(1248.35, 397.066, 1248.28, 381.003, 1250.79, 379.278);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path178
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(544.801, 378.717);
            Geistdiele.crc2.bezierCurveTo(547.311, 376.993, 581.839, 376.683, 583.687, 378.717);
            Geistdiele.crc2.bezierCurveTo(585.534, 380.751, 585.837, 396.638, 583.687, 397.571);
            Geistdiele.crc2.bezierCurveTo(581.536, 398.503, 547.248, 398.637, 544.801, 397.571);
            Geistdiele.crc2.bezierCurveTo(542.353, 396.504, 542.29, 380.441, 544.801, 378.717);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path179
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1146.43, 361.053);
            Geistdiele.crc2.bezierCurveTo(1148.94, 359.329, 1183.47, 359.019, 1185.31, 361.053);
            Geistdiele.crc2.bezierCurveTo(1187.16, 363.088, 1187.46, 378.975, 1185.31, 379.907);
            Geistdiele.crc2.bezierCurveTo(1183.16, 380.84, 1148.88, 380.974, 1146.43, 379.907);
            Geistdiele.crc2.bezierCurveTo(1143.98, 378.841, 1143.92, 362.778, 1146.43, 361.053);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path180
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(38.9193, 359.501);
            Geistdiele.crc2.bezierCurveTo(41.4297, 357.777, 75.9577, 357.467, 77.8051, 359.501);
            Geistdiele.crc2.bezierCurveTo(79.6525, 361.535, 79.9559, 377.422, 77.8051, 378.355);
            Geistdiele.crc2.bezierCurveTo(75.6543, 379.287, 41.3666, 379.421, 38.9193, 378.355);
            Geistdiele.crc2.bezierCurveTo(36.472, 377.288, 36.4088, 361.225, 38.9193, 359.501);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path181
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(440.434, 360.492);
            Geistdiele.crc2.bezierCurveTo(442.945, 358.768, 477.473, 358.458, 479.32, 360.492);
            Geistdiele.crc2.bezierCurveTo(481.167, 362.526, 481.471, 378.413, 479.32, 379.346);
            Geistdiele.crc2.bezierCurveTo(477.169, 380.278, 442.881, 380.413, 440.434, 379.346);
            Geistdiele.crc2.bezierCurveTo(437.987, 378.279, 437.924, 362.216, 440.434, 360.492);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path182
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1068.7, 386.829);
            Geistdiele.crc2.bezierCurveTo(1071.21, 385.105, 1105.74, 384.795, 1107.59, 386.829);
            Geistdiele.crc2.bezierCurveTo(1109.43, 388.863, 1109.74, 404.75, 1107.59, 405.683);
            Geistdiele.crc2.bezierCurveTo(1105.43, 406.615, 1071.15, 406.749, 1068.7, 405.683);
            Geistdiele.crc2.bezierCurveTo(1066.25, 404.616, 1066.19, 388.553, 1068.7, 386.829);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path183
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(-38.8092, 385.276);
            Geistdiele.crc2.bezierCurveTo(-36.2987, 383.552, -1.77076, 383.242, 0.076635, 385.276);
            Geistdiele.crc2.bezierCurveTo(1.92403, 387.311, 2.22744, 403.198, 0.076635, 404.13);
            Geistdiele.crc2.bezierCurveTo(-2.07417, 405.063, -36.3619, 405.197, -38.8092, 404.13);
            Geistdiele.crc2.bezierCurveTo(-41.2565, 403.063, -41.3197, 387.0, -38.8092, 385.276);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path184
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(362.706, 386.268);
            Geistdiele.crc2.bezierCurveTo(365.216, 384.543, 399.744, 384.233, 401.591, 386.268);
            Geistdiele.crc2.bezierCurveTo(403.439, 388.302, 403.742, 404.189, 401.591, 405.121);
            Geistdiele.crc2.bezierCurveTo(399.441, 406.054, 365.153, 406.188, 362.706, 405.121);
            Geistdiele.crc2.bezierCurveTo(360.258, 404.055, 360.195, 387.992, 362.706, 386.268);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path185
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1444.56, 389.786);
            Geistdiele.crc2.bezierCurveTo(1447.07, 388.062, 1481.6, 387.752, 1483.44, 389.786);
            Geistdiele.crc2.bezierCurveTo(1485.29, 391.821, 1485.59, 407.708, 1483.44, 408.64);
            Geistdiele.crc2.bezierCurveTo(1481.29, 409.573, 1447.0, 409.707, 1444.56, 408.64);
            Geistdiele.crc2.bezierCurveTo(1442.11, 407.574, 1442.05, 391.511, 1444.56, 389.786);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path186
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(738.564, 389.225);
            Geistdiele.crc2.bezierCurveTo(741.074, 387.501, 775.602, 387.191, 777.449, 389.225);
            Geistdiele.crc2.bezierCurveTo(779.297, 391.259, 779.6, 407.146, 777.449, 408.079);
            Geistdiele.crc2.bezierCurveTo(775.299, 409.011, 741.011, 409.145, 738.564, 408.079);
            Geistdiele.crc2.bezierCurveTo(736.116, 407.012, 736.053, 390.949, 738.564, 389.225);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path187
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1730.88, 324.596);
            Geistdiele.crc2.bezierCurveTo(1733.39, 322.872, 1767.91, 322.562, 1769.76, 324.596);
            Geistdiele.crc2.bezierCurveTo(1771.61, 326.63, 1771.91, 342.517, 1769.76, 343.45);
            Geistdiele.crc2.bezierCurveTo(1767.61, 344.382, 1733.32, 344.516, 1730.88, 343.45);
            Geistdiele.crc2.bezierCurveTo(1728.43, 342.383, 1728.37, 326.32, 1730.88, 324.596);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path188
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1532.62, 324.596);
            Geistdiele.crc2.bezierCurveTo(1535.13, 322.872, 1569.66, 322.562, 1571.51, 324.596);
            Geistdiele.crc2.bezierCurveTo(1573.35, 326.63, 1573.66, 342.517, 1571.51, 343.45);
            Geistdiele.crc2.bezierCurveTo(1569.36, 344.382, 1535.07, 344.516, 1532.62, 343.45);
            Geistdiele.crc2.bezierCurveTo(1530.17, 342.383, 1530.11, 326.32, 1532.62, 324.596);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path189
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(826.628, 324.035);
            Geistdiele.crc2.bezierCurveTo(829.138, 322.311, 863.666, 322.0, 865.514, 324.035);
            Geistdiele.crc2.bezierCurveTo(867.361, 326.069, 867.665, 341.956, 865.514, 342.888);
            Geistdiele.crc2.bezierCurveTo(863.363, 343.821, 829.075, 343.955, 826.628, 342.888);
            Geistdiele.crc2.bezierCurveTo(824.181, 341.822, 824.117, 325.759, 826.628, 324.035);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path190
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1812.05, 350.977);
            Geistdiele.crc2.bezierCurveTo(1814.56, 349.252, 1849.09, 348.942, 1850.94, 350.977);
            Geistdiele.crc2.bezierCurveTo(1852.79, 353.011, 1853.09, 368.898, 1850.94, 369.83);
            Geistdiele.crc2.bezierCurveTo(1848.79, 370.763, 1814.5, 370.897, 1812.05, 369.83);
            Geistdiele.crc2.bezierCurveTo(1809.61, 368.764, 1809.54, 352.701, 1812.05, 350.977);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path191
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1613.8, 350.977);
            Geistdiele.crc2.bezierCurveTo(1616.31, 349.252, 1650.84, 348.942, 1652.69, 350.977);
            Geistdiele.crc2.bezierCurveTo(1654.53, 353.011, 1654.84, 368.898, 1652.69, 369.83);
            Geistdiele.crc2.bezierCurveTo(1650.53, 370.763, 1616.25, 370.897, 1613.8, 369.83);
            Geistdiele.crc2.bezierCurveTo(1611.35, 368.764, 1611.29, 352.701, 1613.8, 350.977);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path192
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(907.806, 350.415);
            Geistdiele.crc2.bezierCurveTo(910.316, 348.691, 944.844, 348.381, 946.692, 350.415);
            Geistdiele.crc2.bezierCurveTo(948.539, 352.449, 948.842, 368.336, 946.692, 369.269);
            Geistdiele.crc2.bezierCurveTo(944.541, 370.201, 910.253, 370.336, 907.806, 369.269);
            Geistdiele.crc2.bezierCurveTo(905.358, 368.202, 905.295, 352.139, 907.806, 350.415);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path193
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1871.87, 387.022);
            Geistdiele.crc2.bezierCurveTo(1874.38, 385.297, 1908.91, 384.987, 1910.76, 387.022);
            Geistdiele.crc2.bezierCurveTo(1912.61, 389.056, 1912.91, 404.943, 1910.76, 405.875);
            Geistdiele.crc2.bezierCurveTo(1908.61, 406.808, 1874.32, 406.942, 1871.87, 405.875);
            Geistdiele.crc2.bezierCurveTo(1869.43, 404.809, 1869.36, 388.746, 1871.87, 387.022);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path194
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1673.62, 387.022);
            Geistdiele.crc2.bezierCurveTo(1676.13, 385.297, 1710.66, 384.987, 1712.5, 387.022);
            Geistdiele.crc2.bezierCurveTo(1714.35, 389.056, 1714.66, 404.943, 1712.5, 405.875);
            Geistdiele.crc2.bezierCurveTo(1710.35, 406.808, 1676.07, 406.942, 1673.62, 405.875);
            Geistdiele.crc2.bezierCurveTo(1671.17, 404.809, 1671.11, 388.746, 1673.62, 387.022);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path195
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1016.32, 395.125);
            Geistdiele.crc2.bezierCurveTo(1018.83, 393.87, 1053.36, 393.644, 1055.21, 395.125);
            Geistdiele.crc2.bezierCurveTo(1057.05, 396.605, 1057.36, 408.166, 1055.21, 408.845);
            Geistdiele.crc2.bezierCurveTo(1053.05, 409.523, 1018.77, 409.621, 1016.32, 408.845);
            Geistdiele.crc2.bezierCurveTo(1013.87, 408.068, 1013.81, 396.379, 1016.32, 395.125);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path196
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(967.625, 386.46);
            Geistdiele.crc2.bezierCurveTo(970.135, 384.736, 1004.66, 384.426, 1006.51, 386.46);
            Geistdiele.crc2.bezierCurveTo(1008.36, 388.494, 1008.66, 404.381, 1006.51, 405.314);
            Geistdiele.crc2.bezierCurveTo(1004.36, 406.246, 970.072, 406.381, 967.625, 405.314);
            Geistdiele.crc2.bezierCurveTo(965.178, 404.247, 965.114, 388.184, 967.625, 386.46);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path197
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1725.77, 389.032);
            Geistdiele.crc2.bezierCurveTo(1728.28, 387.308, 1762.81, 386.998, 1764.65, 389.032);
            Geistdiele.crc2.bezierCurveTo(1766.5, 391.067, 1766.8, 406.954, 1764.65, 407.886);
            Geistdiele.crc2.bezierCurveTo(1762.5, 408.819, 1728.21, 408.953, 1725.77, 407.886);
            Geistdiele.crc2.bezierCurveTo(1723.32, 406.82, 1723.26, 390.757, 1725.77, 389.032);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path198
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1532.62, 389.786);
            Geistdiele.crc2.bezierCurveTo(1535.13, 388.062, 1569.66, 387.752, 1571.51, 389.786);
            Geistdiele.crc2.bezierCurveTo(1573.35, 391.821, 1573.66, 407.708, 1571.51, 408.64);
            Geistdiele.crc2.bezierCurveTo(1569.36, 409.573, 1535.07, 409.707, 1532.62, 408.64);
            Geistdiele.crc2.bezierCurveTo(1530.17, 407.574, 1530.11, 391.511, 1532.62, 389.786);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path199
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(826.628, 389.225);
            Geistdiele.crc2.bezierCurveTo(829.138, 387.501, 863.666, 387.191, 865.514, 389.225);
            Geistdiele.crc2.bezierCurveTo(867.361, 391.259, 867.665, 407.146, 865.514, 408.079);
            Geistdiele.crc2.bezierCurveTo(863.363, 409.011, 829.075, 409.145, 826.628, 408.079);
            Geistdiele.crc2.bezierCurveTo(824.181, 407.012, 824.117, 390.949, 826.628, 389.225);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path200
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1389.02, 352.733);
            Geistdiele.crc2.bezierCurveTo(1391.53, 351.008, 1426.06, 350.698, 1427.91, 352.733);
            Geistdiele.crc2.bezierCurveTo(1429.75, 354.767, 1430.06, 370.654, 1427.91, 371.586);
            Geistdiele.crc2.bezierCurveTo(1425.76, 372.519, 1391.47, 372.653, 1389.02, 371.586);
            Geistdiele.crc2.bezierCurveTo(1386.57, 370.52, 1386.51, 354.457, 1389.02, 352.733);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path201
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(683.027, 352.171);
            Geistdiele.crc2.bezierCurveTo(685.538, 350.447, 720.066, 350.137, 721.913, 352.171);
            Geistdiele.crc2.bezierCurveTo(723.76, 354.205, 724.064, 370.093, 721.913, 371.025);
            Geistdiele.crc2.bezierCurveTo(719.762, 371.957, 685.474, 372.092, 683.027, 371.025);
            Geistdiele.crc2.bezierCurveTo(680.58, 369.958, 680.517, 353.895, 683.027, 352.171);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path202
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1276.82, 323.044);
            Geistdiele.crc2.bezierCurveTo(1279.33, 321.319, 1313.86, 321.009, 1315.71, 323.044);
            Geistdiele.crc2.bezierCurveTo(1317.55, 325.078, 1317.86, 340.965, 1315.71, 341.897);
            Geistdiele.crc2.bezierCurveTo(1313.56, 342.83, 1279.27, 342.964, 1276.82, 341.897);
            Geistdiele.crc2.bezierCurveTo(1274.37, 340.831, 1274.31, 324.768, 1276.82, 323.044);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path203
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(570.827, 322.482);
            Geistdiele.crc2.bezierCurveTo(573.338, 320.758, 607.866, 320.448, 609.713, 322.482);
            Geistdiele.crc2.bezierCurveTo(611.56, 324.516, 611.864, 340.404, 609.713, 341.336);
            Geistdiele.crc2.bezierCurveTo(607.562, 342.268, 573.274, 342.403, 570.827, 341.336);
            Geistdiele.crc2.bezierCurveTo(568.38, 340.269, 568.317, 324.206, 570.827, 322.482);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path204
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1203.0, 358.262);
            Geistdiele.crc2.bezierCurveTo(1205.51, 356.538, 1240.04, 356.228, 1241.89, 358.262);
            Geistdiele.crc2.bezierCurveTo(1243.74, 360.297, 1244.04, 376.184, 1241.89, 377.116);
            Geistdiele.crc2.bezierCurveTo(1239.74, 378.049, 1205.45, 378.183, 1203.0, 377.116);
            Geistdiele.crc2.bezierCurveTo(1200.56, 376.05, 1200.49, 359.987, 1203.0, 358.262);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path205
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(95.4955, 356.71);
            Geistdiele.crc2.bezierCurveTo(98.006, 354.986, 132.534, 354.676, 134.381, 356.71);
            Geistdiele.crc2.bezierCurveTo(136.229, 358.744, 136.532, 374.631, 134.381, 375.564);
            Geistdiele.crc2.bezierCurveTo(132.231, 376.496, 97.9428, 376.63, 95.4955, 375.564);
            Geistdiele.crc2.bezierCurveTo(93.0482, 374.497, 92.9851, 358.434, 95.4955, 356.71);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path206
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(497.01, 357.701);
            Geistdiele.crc2.bezierCurveTo(499.521, 355.977, 534.049, 355.667, 535.896, 357.701);
            Geistdiele.crc2.bezierCurveTo(537.744, 359.735, 538.047, 375.622, 535.896, 376.555);
            Geistdiele.crc2.bezierCurveTo(533.745, 377.487, 499.458, 377.621, 497.01, 376.555);
            Geistdiele.crc2.bezierCurveTo(494.563, 375.488, 494.5, 359.425, 497.01, 357.701);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path207
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1125.3, 324.596);
            Geistdiele.crc2.bezierCurveTo(1127.81, 322.872, 1162.34, 322.562, 1164.19, 324.596);
            Geistdiele.crc2.bezierCurveTo(1166.04, 326.63, 1166.34, 342.517, 1164.19, 343.45);
            Geistdiele.crc2.bezierCurveTo(1162.04, 344.382, 1127.75, 344.516, 1125.3, 343.45);
            Geistdiele.crc2.bezierCurveTo(1122.86, 342.383, 1122.79, 326.32, 1125.3, 324.596);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path208
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(17.796, 323.044);
            Geistdiele.crc2.bezierCurveTo(20.3064, 321.319, 54.8344, 321.009, 56.6818, 323.044);
            Geistdiele.crc2.bezierCurveTo(58.5292, 325.078, 58.8326, 340.965, 56.6818, 341.897);
            Geistdiele.crc2.bezierCurveTo(54.531, 342.83, 20.2433, 342.964, 17.796, 341.897);
            Geistdiele.crc2.bezierCurveTo(15.3487, 340.831, 15.2855, 324.768, 17.796, 323.044);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path209
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(419.311, 324.035);
            Geistdiele.crc2.bezierCurveTo(421.821, 322.311, 456.349, 322.0, 458.197, 324.035);
            Geistdiele.crc2.bezierCurveTo(460.044, 326.069, 460.347, 341.956, 458.197, 342.888);
            Geistdiele.crc2.bezierCurveTo(456.046, 343.821, 421.758, 343.955, 419.311, 342.888);
            Geistdiele.crc2.bezierCurveTo(416.863, 341.822, 416.8, 325.759, 419.311, 324.035);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path210
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1040.96, 333.552);
            Geistdiele.crc2.bezierCurveTo(1043.47, 331.827, 1077.99, 331.517, 1079.84, 333.552);
            Geistdiele.crc2.bezierCurveTo(1081.69, 335.586, 1081.99, 351.473, 1079.84, 352.405);
            Geistdiele.crc2.bezierCurveTo(1077.69, 353.338, 1043.4, 353.472, 1040.96, 352.405);
            Geistdiele.crc2.bezierCurveTo(1038.51, 351.339, 1038.45, 335.276, 1040.96, 333.552);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path211
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(48, 43, 40)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(56, 57, 57)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.01;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(334.962, 332.99);
            Geistdiele.crc2.bezierCurveTo(337.472, 331.266, 372.0, 330.956, 373.848, 332.99);
            Geistdiele.crc2.bezierCurveTo(375.695, 335.024, 375.999, 350.912, 373.848, 351.844);
            Geistdiele.crc2.bezierCurveTo(371.697, 352.776, 337.409, 352.911, 334.962, 351.844);
            Geistdiele.crc2.bezierCurveTo(332.515, 350.777, 332.451, 334.714, 334.962, 332.99);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            Geistdiele.crc2.restore();
            // #Ebene-2
            Geistdiele.crc2.save();
            // #path212
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(159, 163, 167)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(190, 190, 190)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 7.05651;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(-40.6685, 792.964);
            Geistdiele.crc2.lineTo(1998.61, 770.685);
            Geistdiele.crc2.lineTo(1998.61, 1118.33);
            Geistdiele.crc2.lineTo(-40.6685, 1118.33);
            Geistdiele.crc2.lineTo(-40.6685, 792.964);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            Geistdiele.crc2.restore();
        }
        drawTable(_x, _y) {
            Geistdiele.crc2.save();
            Geistdiele.crc2.translate(_x, _y);
            // #path1
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 5;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(136.87, 63.1995);
            Geistdiele.crc2.bezierCurveTo(136.87, 84.3699, 151.754, 164.133, 99.937, 165.204);
            Geistdiele.crc2.bezierCurveTo(76.0823, 165.394, 66.702, 187.874, 66.702, 198.459);
            Geistdiele.crc2.stroke();
            // #path2
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 5;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(163.907, 66.7761);
            Geistdiele.crc2.bezierCurveTo(163.907, 82.5823, 145.147, 165.169, 198.532, 166.541);
            Geistdiele.crc2.bezierCurveTo(219.618, 166.541, 234.949, 177.489, 234.949, 196.444);
            Geistdiele.crc2.stroke();
            // #path3
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 5;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(150.125, 65.3365);
            Geistdiele.crc2.bezierCurveTo(150.544, 82.3023, 148.997, 169.948, 148.997, 177.489);
            Geistdiele.crc2.stroke();
            // #path4
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 5;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(139.402, 119.204);
            Geistdiele.crc2.bezierCurveTo(148.919, 119.204, 160.064, 118.897, 160.064, 118.897);
            Geistdiele.crc2.stroke();
            // #Ebene-5-kopieren
            // #path5
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 2.645833;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(7.38854, 52.7385);
            Geistdiele.crc2.bezierCurveTo(7.38854, 41.6447, 72.3716, 32.6515, 152.532, 32.6515);
            Geistdiele.crc2.bezierCurveTo(232.693, 32.6515, 297.676, 41.6447, 297.676, 52.7385);
            Geistdiele.crc2.bezierCurveTo(297.676, 63.8323, 232.693, 72.8256, 152.532, 72.8256);
            Geistdiele.crc2.bezierCurveTo(72.3716, 72.8256, 7.38854, 63.8323, 7.38854, 52.7385);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path6
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 2.645833;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(8.13914, 55.7018);
            Geistdiele.crc2.bezierCurveTo(8.13914, 54.1274, 5.83142, 49.6773, 5.83142, 48.3238);
            Geistdiele.crc2.stroke();
            // #path7
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 2.645833;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(297.676, 52.7385);
            Geistdiele.crc2.lineTo(297.676, 47.8088);
            Geistdiele.crc2.stroke();
            // #Ebene-5
            // #path8
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(32, 32, 32)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(32, 32, 32)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 2.645833;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(5.83142, 47.8088);
            Geistdiele.crc2.bezierCurveTo(5.83142, 36.7151, 71.1631, 27.7218, 151.754, 27.7218);
            Geistdiele.crc2.bezierCurveTo(232.344, 27.7218, 297.676, 36.7151, 297.676, 47.8088);
            Geistdiele.crc2.bezierCurveTo(297.676, 58.9026, 232.344, 67.8959, 151.754, 67.8959);
            Geistdiele.crc2.bezierCurveTo(71.1631, 67.8959, 5.83142, 58.9026, 5.83142, 47.8088);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #Ebene-7
            // #path9
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(184, 93, 29)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(162, 79, 20)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.620874;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(137.815, 28.9006);
            Geistdiele.crc2.bezierCurveTo(137.815, 22.0333, 137.741, 12.2256, 147.277, 12.2256);
            Geistdiele.crc2.bezierCurveTo(156.812, 12.2256, 156.739, 22.0333, 156.739, 28.9006);
            Geistdiele.crc2.bezierCurveTo(156.739, 35.7678, 153.52, 47.05, 147.204, 47.05);
            Geistdiele.crc2.bezierCurveTo(140.887, 47.05, 137.815, 35.7678, 137.815, 28.9006);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path10
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(184, 93, 29)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(162, 79, 20)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.594225;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(160.719, 33.0963);
            Geistdiele.crc2.bezierCurveTo(160.719, 24.4286, 147.277, 13.6663, 152.532, 13.0525);
            Geistdiele.crc2.bezierCurveTo(160.929, 13.0525, 171.065, 21.0654, 171.065, 30.6395);
            Geistdiele.crc2.bezierCurveTo(171.065, 40.2135, 167.347, 47.5676, 163.711, 47.7435);
            Geistdiele.crc2.bezierCurveTo(160.074, 47.9193, 160.719, 41.7639, 160.719, 33.0963);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path11
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(184, 93, 29)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(162, 79, 20)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.594225;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(150.584, 35.913);
            Geistdiele.crc2.bezierCurveTo(150.584, 27.2453, 148.844, 17.3698, 152.74, 17.3698);
            Geistdiele.crc2.bezierCurveTo(156.636, 17.3698, 163.929, 26.446, 163.929, 36.02);
            Geistdiele.crc2.bezierCurveTo(163.929, 45.5941, 159.169, 50.3807, 155.532, 50.5565);
            Geistdiele.crc2.bezierCurveTo(151.896, 50.7323, 150.584, 44.5806, 150.584, 35.913);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path12
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(184, 93, 29)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(162, 79, 20)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.568164;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(122.796, 30.6343);
            Geistdiele.crc2.bezierCurveTo(122.796, 21.9666, 129.575, 13.0525, 140.519, 13.0525);
            Geistdiele.crc2.bezierCurveTo(146.538, 13.2639, 135.654, 24.96, 135.654, 34.5341);
            Geistdiele.crc2.bezierCurveTo(135.654, 44.1082, 136.404, 47.5687, 132.767, 47.7445);
            Geistdiele.crc2.bezierCurveTo(129.131, 47.9203, 122.796, 39.3021, 122.796, 30.6343);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path13
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(184, 93, 29)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(162, 79, 20)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.568164;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(129.575, 33.4492);
            Geistdiele.crc2.bezierCurveTo(129.575, 24.7815, 136.907, 16.5737, 140.803, 16.5737);
            Geistdiele.crc2.bezierCurveTo(144.699, 16.5737, 144.565, 25.5393, 144.565, 35.1134);
            Geistdiele.crc2.bezierCurveTo(144.565, 44.6875, 142.723, 49.5818, 139.086, 49.7576);
            Geistdiele.crc2.bezierCurveTo(135.45, 49.9334, 129.575, 42.1169, 129.575, 33.4492);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path14
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(184, 93, 29)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(162, 79, 20)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.620874;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(137.815, 34.589);
            Geistdiele.crc2.bezierCurveTo(137.815, 27.7218, 141.875, 18.7409, 147.204, 18.7409);
            Geistdiele.crc2.bezierCurveTo(152.532, 18.7409, 156.739, 27.7218, 156.739, 34.589);
            Geistdiele.crc2.bezierCurveTo(156.739, 41.4563, 154.908, 52.0128, 147.277, 52.0128);
            Geistdiele.crc2.bezierCurveTo(139.645, 52.0128, 137.815, 41.4563, 137.815, 34.589);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #Ebene-8
            // #path15
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(52, 74, 0)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(35, 49, 2)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.620874;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(144.964, 16.955);
            Geistdiele.crc2.bezierCurveTo(144.964, 16.955, 149.733, 10.3808, 149.733, 3.80581);
            Geistdiele.crc2.bezierCurveTo(149.733, 0.306864, 153.797, 3.80581, 155.591, 3.80581);
            Geistdiele.crc2.bezierCurveTo(157.385, 3.80581, 148.997, 16.5737, 148.997, 16.5737);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            Geistdiele.crc2.restore();
        }
        drawCounterBackground() {
            Geistdiele.crc2.save();
            // #Ebene-14
            // #path1
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(122, 122, 122)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(203, 203, 203)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 10.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(141.717, 804.843);
            Geistdiele.crc2.lineTo(303.622, 805.146);
            Geistdiele.crc2.lineTo(206.684, 1063.33);
            Geistdiele.crc2.lineTo(19.4702, 1063.33);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path2
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(122, 122, 122)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(203, 203, 203)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 10.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(346.101, 805.146);
            Geistdiele.crc2.lineTo(509.416, 805.146);
            Geistdiele.crc2.lineTo(431.656, 1063.63);
            Geistdiele.crc2.lineTo(244.442, 1063.63);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path3
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(122, 122, 122)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(203, 203, 203)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 10.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(553.346, 804.843);
            Geistdiele.crc2.lineTo(714.715, 804.843);
            Geistdiele.crc2.lineTo(659.871, 1063.63);
            Geistdiele.crc2.lineTo(472.657, 1063.63);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path4
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(122, 122, 122)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(203, 203, 203)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 10.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(766.579, 804.843);
            Geistdiele.crc2.lineTo(1180.69, 799.649);
            Geistdiele.crc2.lineTo(1222.27, 1063.63);
            Geistdiele.crc2.lineTo(707.692, 1063.63);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            Geistdiele.crc2.restore();
        }
    }
    Geistdiele.Background = Background;
})(Geistdiele || (Geistdiele = {}));
var Geistdiele;
(function (Geistdiele) {
    class Check extends Geistdiele.Drawable {
        constructor(_position) {
            super(_position);
        }
        draw() {
        }
    }
    Geistdiele.Check = Check;
})(Geistdiele || (Geistdiele = {}));
var Geistdiele;
(function (Geistdiele) {
    Geistdiele.flavours = [
        {
            name: "Souls of the Innocent",
            colour: "rgb(80, 213, 238)",
            lineColour: "rgb(65, 179, 201)",
            price: 10,
        },
        {
            name: "pure Magic",
            colour: "rgb(115, 25, 107)",
            lineColour: "rgb(66, 0, 83)",
            price: 15,
        },
        {
            name: "just Pumpkin",
            colour: "rgb(255, 126, 39)",
            lineColour: "rgb(190, 96, 32)",
            price: 20,
        },
    ];
    Geistdiele.toppings = [
        {
            name: "Spiderlegs",
            colour: "black",
            lineColour: "green",
            price: 5,
        },
        {
            name: "Eyeballs",
            colour: "white",
            lineColour: "green",
            price: 10,
        },
        {
            name: "Chocolate Chips",
            colour: "white",
            lineColour: "green",
            price: 15,
        },
    ];
    Geistdiele.sauces = [
        {
            name: "Ectoplasm",
            colour: "#00c400",
            lineColour: "green",
            price: 5,
        },
        {
            name: "blood",
            colour: "#680005",
            lineColour: "green",
            price: 10,
        },
    ];
})(Geistdiele || (Geistdiele = {}));
var Geistdiele;
(function (Geistdiele) {
    class Door extends Geistdiele.Drawable {
        isOpen = false;
        constructor(_position, _open) {
            super(_position);
            this.isOpen = _open;
        }
        draw() {
            if (this.isOpen === true) {
                this.drawOpenDoor(this.position);
            }
            else {
                this.drawClosedDoor(this.position);
            }
        }
        open() {
            this.isOpen = true;
        }
        close() {
            this.isOpen = false;
        }
        isOpened() {
            return this.isOpen;
        }
        drawOpenDoor(_position) {
            Geistdiele.crc2.save();
            Geistdiele.crc2.translate(this.position.x - 90, this.position.y);
            // #Ebene-10-0
            Geistdiele.crc2.save();
            // #path1-8
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 5;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(91.4509, 52.448);
            Geistdiele.crc2.bezierCurveTo(91.4509, 45.1997, 75.5628, 25.6647, 49.0945, 25.6647);
            Geistdiele.crc2.bezierCurveTo(22.6262, 25.6647, 0.0, 10.8679, 0.0, 1.13315);
            Geistdiele.crc2.bezierCurveTo(0.0, -1.60545, 0.072616, 8.34435, 0.17699, 24.0602);
            Geistdiele.crc2.bezierCurveTo(0.443627, 64.2084, 0.917525, 141.987, 0.917525, 141.987);
            Geistdiele.crc2.lineTo(94.4328, 142.184);
            Geistdiele.crc2.bezierCurveTo(94.4328, 142.184, 91.4509, 59.6963, 91.4509, 52.448);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.stroke();
            // #path2-1
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 5;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(277.04, 51.7673);
            Geistdiele.crc2.bezierCurveTo(277.04, 44.519, 292.928, 24.984, 319.396, 24.984);
            Geistdiele.crc2.bezierCurveTo(345.864, 24.984, 368.491, 10.1872, 368.491, 0.452425);
            Geistdiele.crc2.bezierCurveTo(368.491, -2.28618, 368.418, 7.66363, 368.314, 23.3795);
            Geistdiele.crc2.bezierCurveTo(368.047, 63.5277, 367.573, 141.306, 367.573, 141.306);
            Geistdiele.crc2.lineTo(274.058, 141.503);
            Geistdiele.crc2.bezierCurveTo(274.058, 141.503, 277.04, 59.0155, 277.04, 51.7673);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.stroke();
            // #path3-2
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 5;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(92.4919, 86.8728);
            Geistdiele.crc2.bezierCurveTo(92.4919, 73.7853, 69.3918, 47.5218, 47.2164, 47.5218);
            Geistdiele.crc2.bezierCurveTo(25.041, 47.5218, 0.195023, 37.6718, 0.195023, 24.064);
            Geistdiele.crc2.stroke();
            // #path4-2
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 5;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(275.999, 86.192);
            Geistdiele.crc2.bezierCurveTo(275.999, 73.1046, 299.099, 46.8411, 321.274, 46.8411);
            Geistdiele.crc2.bezierCurveTo(343.449, 46.8411, 368.296, 36.9911, 368.296, 23.3832);
            Geistdiele.crc2.stroke();
            // #path5-3
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 3;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(22.2945, 22);
            Geistdiele.crc2.lineTo(21.914, 140.902);
            Geistdiele.crc2.stroke();
            // #path6-7
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 3;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(346.196, 22);
            Geistdiele.crc2.lineTo(346.577, 140);
            Geistdiele.crc2.stroke();
            // #path7-5
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 3;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(38.2943, 27.5927);
            Geistdiele.crc2.lineTo(37.7476, 138.826);
            Geistdiele.crc2.stroke();
            // #path8-3
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 3;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(330.196, 25);
            Geistdiele.crc2.lineTo(330.743, 138.145);
            Geistdiele.crc2.stroke();
            // #path9-4
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 3;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(55.604, 30.3143);
            Geistdiele.crc2.lineTo(55.0573, 141.548);
            Geistdiele.crc2.stroke();
            // #path10-1
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 3;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(312.887, 27);
            Geistdiele.crc2.lineTo(313.433, 140.867);
            Geistdiele.crc2.stroke();
            // #path11-2
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 3;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(72.5188, 30.2696);
            Geistdiele.crc2.lineTo(71.9721, 141.503);
            Geistdiele.crc2.stroke();
            // #path12-8
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 3;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(295.972, 29.5889);
            Geistdiele.crc2.lineTo(296.518, 140.822);
            Geistdiele.crc2.stroke();
            Geistdiele.crc2.restore();
            Geistdiele.crc2.restore();
        }
        drawClosedDoor(_position) {
            Geistdiele.crc2.save();
            Geistdiele.crc2.translate(this.position.x, this.position.y);
            // #Ebene-10
            Geistdiele.crc2.save();
            // #path1
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 5;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(185.689, 51.8003);
            Geistdiele.crc2.bezierCurveTo(185.689, 44.552, 169.801, 25.017, 143.332, 25.017);
            Geistdiele.crc2.bezierCurveTo(116.864, 25.017, 94.2378, 10.2202, 94.2378, 0.485425);
            Geistdiele.crc2.bezierCurveTo(94.2378, -2.25318, 94.3104, 7.69663, 94.4148, 23.4125);
            Geistdiele.crc2.bezierCurveTo(94.6814, 63.5607, 95.1553, 141.339, 95.1553, 141.339);
            Geistdiele.crc2.lineTo(188.671, 141.536);
            Geistdiele.crc2.bezierCurveTo(188.671, 141.536, 185.689, 59.0485, 185.689, 51.8003);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.stroke();
            // #path2
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 5; //2.645833;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(2.98192, 51.7673);
            Geistdiele.crc2.bezierCurveTo(2.98192, 44.519, 18.87, 24.984, 45.3383, 24.984);
            Geistdiele.crc2.bezierCurveTo(71.8066, 24.984, 94.4328, 10.1872, 94.4328, 0.452425);
            Geistdiele.crc2.bezierCurveTo(94.4328, -2.28618, 94.3602, 7.66363, 94.2558, 23.3795);
            Geistdiele.crc2.bezierCurveTo(93.9892, 63.5277, 93.5153, 141.306, 93.5153, 141.306);
            Geistdiele.crc2.lineTo(0.0, 141.503);
            Geistdiele.crc2.bezierCurveTo(0.0, 141.503, 2.98192, 59.0155, 2.98192, 51.7673);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.stroke();
            // #path3
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 2.645833;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(186.73, 86.225);
            Geistdiele.crc2.bezierCurveTo(186.73, 73.1376, 163.63, 46.8741, 141.454, 46.8741);
            Geistdiele.crc2.bezierCurveTo(119.279, 46.8741, 94.4328, 37.0241, 94.4328, 23.4162);
            Geistdiele.crc2.stroke();
            // #path4
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 2.645833;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1.94089, 86.192);
            Geistdiele.crc2.bezierCurveTo(1.94089, 73.1046, 25.041, 46.8411, 47.2164, 46.8411);
            Geistdiele.crc2.bezierCurveTo(69.3918, 46.8411, 94.2378, 36.9911, 94.2378, 23.3832);
            Geistdiele.crc2.stroke();
            // #path5
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 1.127099;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(116.532, 23.4162);
            Geistdiele.crc2.lineTo(116.152, 137.254);
            Geistdiele.crc2.stroke();
            // #path6
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 1.127099;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(72.1383, 23.3832);
            Geistdiele.crc2.lineTo(72.5188, 137.221);
            Geistdiele.crc2.stroke();
            // #path7
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 1.127099;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(132.532, 26.9449);
            Geistdiele.crc2.lineTo(131.985, 138.178);
            Geistdiele.crc2.stroke();
            // #path8
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 1.127099;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(56.1385, 26.9119);
            Geistdiele.crc2.lineTo(56.6852, 138.145);
            Geistdiele.crc2.stroke();
            // #path9
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 1.127099;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(149.842, 29.6665);
            Geistdiele.crc2.lineTo(149.295, 140.9);
            Geistdiele.crc2.stroke();
            // #path10
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 1.127099;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(38.8288, 29.6335);
            Geistdiele.crc2.lineTo(39.3755, 140.867);
            Geistdiele.crc2.stroke();
            // #path11
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 1.127099;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(166.757, 29.6219);
            Geistdiele.crc2.lineTo(166.21, 140.855);
            Geistdiele.crc2.stroke();
            // #path12
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 1.127099;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(21.914, 29.5889);
            Geistdiele.crc2.lineTo(22.4607, 140.822);
            Geistdiele.crc2.stroke();
            Geistdiele.crc2.restore();
            Geistdiele.crc2.restore();
        }
    }
    Geistdiele.Door = Door;
})(Geistdiele || (Geistdiele = {}));
var Geistdiele;
(function (Geistdiele) {
    class Ghost extends Geistdiele.Drawable {
        emotion;
        timer;
        speechbubble;
        activateSpeechbubble;
        constructor(_position, _emotion, _activateSpeechbubble) {
            super(_position);
            this.emotion = _emotion;
            this.timer = 0;
            this.activateSpeechbubble = _activateSpeechbubble;
            setInterval(this.updateTimer.bind(this), 1000);
        }
        draw() {
            //console.log(`Drawing ghost at position: (${this.position.x}, ${this.position.y})`);
            this.drawGhost();
            this.drawMouth();
            if (this.speechbubble) {
                this.speechbubble.draw();
            }
        }
        move(_x, _y) {
            this.position.x += _x;
            this.position.y += _y;
        }
        order() { }
        changeEmotion() { }
        interact(_hitPosition) {
            //console.log(`hit: x: ${_hitPosition.x} y: ${_hitPosition.y}`);
            //console.log(`pos: x: ${this.position.x} y: ${this.position.y}`);
            if (_hitPosition.x >= this.position.x &&
                _hitPosition.x <= this.position.x + 100 &&
                _hitPosition.y >= this.position.y &&
                _hitPosition.y <= this.position.y + 200) {
                console.log("hit");
                return true;
            }
            return false;
        }
        updateTimer() {
            //kann ich den auch aus der main benutzen?
            this.timer++;
            if (this.timer === 3) {
                console.log("10 seconds have passed!");
                this.addSpeechbubble();
            }
            if (this.timer === 40) {
                console.log("20 seconds have passed!");
                this.emotion = "neutral";
            }
            if (this.timer === 70) {
                console.log("20 seconds have passed!");
                this.emotion = "unhappy";
            }
        }
        addSpeechbubble() {
            if (this.activateSpeechbubble === true) {
                const pos = new Geistdiele.Vector(this.position.x + 95, this.position.y - 80);
                this.speechbubble = new Geistdiele.Speechbubble(pos, true);
            }
        }
        drawMouth() {
            //console.log("uff")
            Geistdiele.crc2.save();
            Geistdiele.crc2.translate(this.position.x + 32, this.position.y + 90);
            Geistdiele.crc2.strokeStyle = "black";
            Geistdiele.crc2.lineWidth = 4;
            if (this.emotion === "happy") {
                Geistdiele.crc2.beginPath();
                Geistdiele.crc2.moveTo(0, 0);
                Geistdiele.crc2.bezierCurveTo(0, 10, 35, 10, 35, 0);
                Geistdiele.crc2.moveTo(0, 0);
            }
            else if (this.emotion === "neutral") {
            }
            else if (this.emotion === "unhappy") {
                Geistdiele.crc2.beginPath();
                Geistdiele.crc2.moveTo(0, 0);
                Geistdiele.crc2.bezierCurveTo(0, -10, 35, -10, 35, 0);
                // crc2.moveTo(0,0)
            }
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.stroke();
            Geistdiele.crc2.restore();
        }
        drawGhost() {
            //?
            Geistdiele.crc2.save();
            /*this.position.x, this.position.y * Math.random()*0.05*/
            Geistdiele.crc2.translate(this.position.x, this.position.y);
            // #path1
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(255, 255, 255)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(255, 255, 255)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 2.645833;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(46.8841, 10.4826);
            Geistdiele.crc2.bezierCurveTo(103.109, 9.31676, 94.5616, 137.767, 94.5616, 145.635);
            Geistdiele.crc2.bezierCurveTo(94.5616, 153.502, 99.531, 196.786, 90.2298, 196.786);
            Geistdiele.crc2.bezierCurveTo(80.9287, 196.786, 75.7487, 180.062, 75.7487, 180.062);
            Geistdiele.crc2.bezierCurveTo(75.7487, 180.062, 72.6302, 198.011, 66.8104, 198.011);
            Geistdiele.crc2.bezierCurveTo(60.9905, 198.011, 53.8097, 180.062, 53.8097, 180.062);
            Geistdiele.crc2.bezierCurveTo(53.8097, 180.062, 48.2086, 198.824, 41.7906, 198.824);
            Geistdiele.crc2.bezierCurveTo(35.3725, 198.824, 34.5039, 180.893, 34.5039, 180.893);
            Geistdiele.crc2.bezierCurveTo(34.5039, 180.893, 29.0742, 198.042, 20.8934, 198.042);
            Geistdiele.crc2.bezierCurveTo(12.7126, 198.042, 11.2921, 162.499, 11.2921, 150.767);
            Geistdiele.crc2.bezierCurveTo(11.2921, 139.035, -9.34116, 11.6484, 46.8841, 10.4826);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #Ebene-3
            // #path2
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 5;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(23.6277, 59.2573);
            Geistdiele.crc2.bezierCurveTo(23.6277, 54.2159, 25.7405, 45.3242, 28.9898, 45.1974);
            Geistdiele.crc2.bezierCurveTo(32.239, 45.0706, 34.3518, 54.2159, 34.3518, 59.2573);
            Geistdiele.crc2.bezierCurveTo(34.3518, 64.2987, 33.0434, 75.2567, 29.0925, 75.0639);
            Geistdiele.crc2.bezierCurveTo(25.1416, 74.871, 23.6277, 64.2987, 23.6277, 59.2573);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path3
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 5;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(65.2387, 57.0901);
            Geistdiele.crc2.bezierCurveTo(65.2387, 52.0487, 67.3515, 43.157, 70.6007, 43.0302);
            Geistdiele.crc2.bezierCurveTo(73.85, 42.9034, 75.9628, 52.0487, 75.9628, 57.0901);
            Geistdiele.crc2.bezierCurveTo(75.9628, 62.1315, 74.6544, 73.0895, 70.7035, 72.8966);
            Geistdiele.crc2.bezierCurveTo(66.7526, 72.7038, 65.2387, 62.1315, 65.2387, 57.0901);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            Geistdiele.crc2.restore();
        }
    }
    Geistdiele.Ghost = Ghost;
})(Geistdiele || (Geistdiele = {}));
var Geistdiele;
(function (Geistdiele) {
    class IceBall extends Geistdiele.Ingredient {
        constructor(_data, _position) {
            super(_data, _position);
        }
        draw() {
            this.drawBall();
        }
        interact(_hitPosition) {
            return false;
        }
        drawBall() {
            // #Ebene-9
            Geistdiele.crc2.save();
            Geistdiele.crc2.translate(this.position.x, this.position.y);
            // #path1-6
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = this.data.colour;
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(0.0, 41.0877);
            Geistdiele.crc2.bezierCurveTo(0.0, 18.3956, 18.1723, 0.0, 40.5889, 0.0);
            Geistdiele.crc2.bezierCurveTo(63.0055, 0.0, 81.1778, 18.3956, 81.1778, 41.0877);
            Geistdiele.crc2.bezierCurveTo(81.1778, 55.7754, 66.7296, 60.8654, 65.7339, 61.1959);
            Geistdiele.crc2.bezierCurveTo(61.9305, 62.4584, 52.2729, 62.877, 40.5889, 63.2168);
            Geistdiele.crc2.bezierCurveTo(28.9049, 63.5566, 14.6512, 62.3128, 12.0267, 61.1959);
            Geistdiele.crc2.bezierCurveTo(10.1787, 60.4095, 0.0, 58.0135, 0.0, 41.0877);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.restore();
            Geistdiele.crc2.restore();
        }
    }
    Geistdiele.IceBall = IceBall;
})(Geistdiele || (Geistdiele = {}));
var Geistdiele;
(function (Geistdiele) {
    class IceCream extends Geistdiele.Drawable {
        iceBalls = [];
        topping;
        sauce;
        size;
        constructor(_position, _size) {
            super(_position);
            this.size = _size;
        }
        addIceBall(_flavour) {
            if (this.iceBalls.length < 3) {
                this.iceBalls.push(new Geistdiele.IceBall(_flavour, { x: this.position.x + 8, y: this.position.y - 25 }));
            }
        }
        addSauce(_flavour) {
            this.sauce = new Geistdiele.Sauce(_flavour, { x: this.position.x, y: this.position.y });
        }
        addTopping(_flavour) {
            this.topping = new Geistdiele.Topping(_flavour, { x: this.position.x, y: this.position.y });
        }
        draw() {
            this.drawCone();
            this.sauce?.draw();
            this.topping?.draw();
            this.iceBalls[0]?.draw();
        }
        drawCone() {
            Geistdiele.crc2.save();
            Geistdiele.crc2.translate(this.position.x, this.position.y);
            // #Ebene-8
            // #path1
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(208, 172, 107)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(14.1839, 25.3066);
            Geistdiele.crc2.lineTo(145.044, 23.499);
            Geistdiele.crc2.lineTo(83.3242, 139.608);
            Geistdiele.crc2.lineTo(83.3242, 139.608);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path2
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(192, 159, 98)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(48.179, 13.1937);
            Geistdiele.crc2.lineTo(128.439, 13.5626);
            Geistdiele.crc2.lineTo(134.465, 23.499);
            Geistdiele.crc2.lineTo(80.2645, 29.734);
            Geistdiele.crc2.lineTo(26.1112, 23.499);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            // #path3
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(185, 153, 94)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 10.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(9.67862, 22.7548);
            Geistdiele.crc2.bezierCurveTo(9.67862, 22.7548, 44.3211, 30.3672, 79.614, 29.734);
            Geistdiele.crc2.bezierCurveTo(114.907, 29.1008, 150.85, 20.222, 150.85, 20.222);
            Geistdiele.crc2.bezierCurveTo(150.85, 20.222, 114.907, 8.8838, 79.614, 9.51699);
            Geistdiele.crc2.bezierCurveTo(44.3211, 10.1502, 9.67862, 22.7548, 9.67862, 22.7548);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.stroke();
            // #path4
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(185, 153, 94)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 10.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(9.67862, 21.5276);
            Geistdiele.crc2.bezierCurveTo(9.67862, 21.5276, 72.7451, 139.929, 83.3242, 139.607);
            Geistdiele.crc2.bezierCurveTo(93.9034, 139.285, 150.85, 19.1398, 150.85, 19.1398);
            Geistdiele.crc2.stroke();
            // #path5
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(185, 153, 94)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 4.2599;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(41.0431, 29.734);
            Geistdiele.crc2.bezierCurveTo(55.1788, 55.6911, 98.2933, 123.873, 98.2933, 123.873);
            Geistdiele.crc2.lineTo(117.834, 85.674);
            Geistdiele.crc2.lineTo(80.2881, 29.734);
            Geistdiele.crc2.lineTo(117.834, 29.734);
            Geistdiele.crc2.lineTo(134.465, 52.6839);
            Geistdiele.crc2.lineTo(62.6386, 111.415);
            Geistdiele.crc2.lineTo(42.0212, 80.1558);
            Geistdiele.crc2.lineTo(112.654, 27.5513);
            Geistdiele.crc2.lineTo(71.0968, 29.2047);
            Geistdiele.crc2.lineTo(29.4422, 51.549);
            Geistdiele.crc2.stroke();
            Geistdiele.crc2.restore();
        }
    }
    Geistdiele.IceCream = IceCream;
})(Geistdiele || (Geistdiele = {}));
var Geistdiele;
(function (Geistdiele) {
    class Icetray extends Geistdiele.Ingredient {
        icetrayPosition;
        constructor(_data, _icetrayPosition, _position) {
            super(_data, _position);
            this.icetrayPosition = _icetrayPosition;
        }
        draw() {
            if (this.icetrayPosition === "left") {
                this.drawLeftIce();
            }
            else if (this.icetrayPosition === "middle") {
                this.drawMiddleIce();
            }
            else if (this.icetrayPosition === "right") {
                this.drawRightIce();
            }
        }
        interact(_hitPosition) {
            console.log(`hit: x: ${_hitPosition.x} y: ${_hitPosition.y}`);
            //console.log(`pos: x: ${this.position.x} y: ${this.position.y}`);
            if (_hitPosition.x >= 120 && _hitPosition.x <= 280 && _hitPosition.y >= 800 && _hitPosition.y <= 1050) {
                console.log("hit blue");
                return true;
            }
            else if (_hitPosition.x >= 310 && _hitPosition.x <= 490 && _hitPosition.y >= 800 && _hitPosition.y <= 1050) {
                console.log("hit purple");
            }
            else if (_hitPosition.x >= 530 && _hitPosition.x <= 695 && _hitPosition.y >= 800 && _hitPosition.y <= 1050) {
                console.log("hit orange");
                return false;
            }
        }
        drawLeftIce() {
            Geistdiele.crc2.save();
            // #Ebene-15
            // #path1
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(80, 213, 238)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(65, 179, 201)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 10.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(27.9093, 1054.51);
            Geistdiele.crc2.bezierCurveTo(15.1939, 1017.87, 39.0161, 938.87, 65.5493, 930.754);
            Geistdiele.crc2.bezierCurveTo(92.0824, 922.638, 104.149, 864.246, 106.072, 848.07);
            Geistdiele.crc2.bezierCurveTo(107.995, 831.895, 128.42, 810.719, 154.536, 803.108);
            Geistdiele.crc2.bezierCurveTo(180.652, 795.497, 207.668, 809.113, 207.668, 809.113);
            Geistdiele.crc2.bezierCurveTo(207.668, 809.113, 229.196, 800.177, 249.456, 802.744);
            Geistdiele.crc2.bezierCurveTo(269.716, 805.312, 292.165, 812.787, 292.165, 812.787);
            Geistdiele.crc2.lineTo(202.784, 1056.3);
            Geistdiele.crc2.bezierCurveTo(202.784, 1056.3, 57.9715, 1054.51, 27.9093, 1054.51);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path2
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(65, 179, 201)";
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 10.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(67.8442, 929.673);
            Geistdiele.crc2.bezierCurveTo(88.5005, 931.751, 113.506, 943.388, 132.004, 928.55);
            Geistdiele.crc2.stroke();
            // #path3
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(65, 179, 201)";
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 10.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(132.004, 868.747);
            Geistdiele.crc2.bezierCurveTo(161.659, 852.673, 156.283, 844.828, 164.057, 833.807);
            Geistdiele.crc2.bezierCurveTo(171.831, 822.787, 190.907, 836.114, 207.287, 809.691);
            Geistdiele.crc2.stroke();
            // #path4
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(65, 179, 201)";
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 10.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(118.93, 1019.77);
            Geistdiele.crc2.bezierCurveTo(131.633, 1011.21, 132.257, 981.543, 139.447, 971.605);
            Geistdiele.crc2.bezierCurveTo(162.044, 940.369, 200.549, 956.542, 223.813, 951.946);
            Geistdiele.crc2.stroke();
        }
        drawMiddleIce() {
            // #Ebene-16
            // #path5
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = this.data.colour;
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = this.data.lineColour;
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 10.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(251.301, 1056.3);
            Geistdiele.crc2.bezierCurveTo(238.585, 1019.66, 237.47, 990.103, 264.902, 956.09);
            Geistdiele.crc2.bezierCurveTo(292.335, 922.077, 296.468, 882.955, 303.622, 858.381);
            Geistdiele.crc2.bezierCurveTo(310.776, 833.807, 339.137, 815.069, 365.253, 807.458);
            Geistdiele.crc2.bezierCurveTo(391.369, 799.847, 408.214, 812.579, 408.214, 812.579);
            Geistdiele.crc2.bezierCurveTo(408.214, 812.579, 429.25, 787.94, 449.51, 790.508);
            Geistdiele.crc2.bezierCurveTo(469.77, 793.075, 500.27, 812.579, 500.27, 812.579);
            Geistdiele.crc2.lineTo(426.917, 1056.3);
            Geistdiele.crc2.lineTo(251.301, 1056.3);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path6
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(66, 0, 83)";
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 10.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(339.825, 878.42);
            Geistdiele.crc2.bezierCurveTo(352.96, 852.673, 354.731, 844.828, 374.774, 838.157);
            Geistdiele.crc2.bezierCurveTo(394.817, 831.487, 391.834, 839.002, 408.214, 812.579);
            Geistdiele.crc2.stroke();
            // #path7
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(66, 0, 83)";
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 10.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(276.603, 1028.07);
            Geistdiele.crc2.bezierCurveTo(301.359, 1013.09, 287.28, 1005.35, 317.592, 983.574);
            Geistdiele.crc2.bezierCurveTo(328.261, 975.908, 353.064, 985.753, 375.815, 985.753);
            Geistdiele.crc2.stroke();
            // #path8
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(66, 0, 83)";
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 10.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(368.992, 923.456);
            Geistdiele.crc2.bezierCurveTo(381.695, 914.896, 405.185, 912.978, 417.452, 912.978);
            Geistdiele.crc2.bezierCurveTo(434.281, 912.978, 426.246, 927.908, 449.51, 923.312);
            Geistdiele.crc2.stroke();
        }
        drawRightIce() {
            // #Ebene-17
            // #path9
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(255, 126, 39)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(190, 96, 32)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 10.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(474.696, 1056.3);
            Geistdiele.crc2.bezierCurveTo(461.981, 1019.66, 473.737, 976.613, 500.27, 968.497);
            Geistdiele.crc2.bezierCurveTo(526.803, 960.381, 533.096, 863.395, 535.019, 847.219);
            Geistdiele.crc2.bezierCurveTo(536.942, 831.043, 557.367, 809.868, 583.483, 802.257);
            Geistdiele.crc2.bezierCurveTo(609.599, 794.646, 612.885, 808.353, 636.615, 808.262);
            Geistdiele.crc2.bezierCurveTo(660.345, 808.171, 658.143, 799.326, 678.403, 801.893);
            Geistdiele.crc2.bezierCurveTo(698.663, 804.46, 707.692, 809.691, 707.692, 809.691);
            Geistdiele.crc2.lineTo(652.76, 1056.3);
            Geistdiele.crc2.lineTo(474.696, 1056.3);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path10
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(255, 126, 39)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(190, 96, 32)";
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 10.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(531.422, 1028.07);
            Geistdiele.crc2.bezierCurveTo(531.422, 1004.36, 573.437, 982.236, 585.188, 985.753);
            Geistdiele.crc2.bezierCurveTo(611.214, 993.542, 618.081, 1000.42, 641.345, 995.823);
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path11
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(255, 126, 39)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(190, 96, 32)";
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 10.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(566.264, 898.14);
            Geistdiele.crc2.bezierCurveTo(575.883, 868.747, 603.369, 875.267, 611.143, 864.246);
            Geistdiele.crc2.bezierCurveTo(618.916, 853.226, 633.573, 820.947, 661.226, 852.673);
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path12
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(255, 126, 39)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(190, 96, 32)";
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 10.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(509.416, 967.162);
            Geistdiele.crc2.bezierCurveTo(530.072, 969.24, 526.556, 980.081, 545.053, 965.243);
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            Geistdiele.crc2.restore();
        }
    }
    Geistdiele.Icetray = Icetray;
})(Geistdiele || (Geistdiele = {}));
var Geistdiele;
(function (Geistdiele) {
    Geistdiele.canvas = document.querySelector("canvas");
    Geistdiele.crc2 = Geistdiele.canvas.getContext("2d");
    const bg = new Geistdiele.Background(new Geistdiele.Vector(0, 0));
    let seats = [];
    const door = new Geistdiele.Door({ x: 137, y: 270 }, false);
    let ghostsBehindWall = [];
    const icetray = [new Geistdiele.Icetray(Geistdiele.flavours[0], "left", { x: 0, y: 0 }),
        new Geistdiele.Icetray(Geistdiele.flavours[1], "middle", { x: 0, y: 0 }),
        new Geistdiele.Icetray(Geistdiele.flavours[2], "right", { x: 0, y: 0 })];
    const ice = new Geistdiele.IceCream({ x: 870, y: 880 }, 1);
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        Geistdiele.canvas.addEventListener("click", handleClick);
        new Audio("./assets/music.mp3").play();
        addSeats();
        setInterval(loop, 250);
    }
    function handleClick(_event) {
        let hit = {
            x: (_event.offsetX * Geistdiele.canvas.width) / Geistdiele.canvas.clientWidth, //weil canvas scale anders
            y: (_event.offsetY * Geistdiele.canvas.height) / Geistdiele.canvas.clientHeight,
        };
        for (const seat of seats) {
            const ghost = seat.getGhost();
            if (!ghost) {
                continue;
            }
            if (ghost.interact(hit)) {
                seat.removeGhost();
                console.log("HIT");
                return;
            }
        }
        if (icetray[1].interact(hit)) {
            //new ball
            ice.addIceBall(Geistdiele.flavours[1]);
            console.log("purple ball"); //not working as intended
        }
    }
    function addSeats() {
        seats.push(new Geistdiele.Seat({ x: 200, y: 450 }, false, 1));
        seats.push(new Geistdiele.Seat({ x: 500, y: 450 }, true, 1));
        seats.push(new Geistdiele.Seat({ x: 800, y: 450 }, false, 1));
        seats.push(new Geistdiele.Seat({ x: 1100, y: 450 }, true, 1));
        seats.push(new Geistdiele.Seat({ x: 1400, y: 450 }, false, 1));
        seats.push(new Geistdiele.Seat({ x: 1700, y: 450 }, true, 1));
    }
    function addWaitingGhosts(_x) {
        //immer neue geister kommen und anstehen lassen
        if (_x < Geistdiele.canvas.width - 500) {
            ghostsBehindWall.push(new Geistdiele.Ghost({ x: _x, y: 200 }, "happy", false));
        }
    }
    function loop() {
        animate();
        const freeSeat = seats.find((Seat) => Seat.isFree());
        if (freeSeat) {
            door.open();
            if (ghostsBehindWall.shift()) {
                ghostsBehindWall.forEach((g) => {
                    setTimeout(() => g.move(-200, 0), 500);
                });
                freeSeat.addGhost();
            }
        }
        else {
            door.close();
        }
        if (Math.random() > 0.9) {
            const x = 200 * (ghostsBehindWall.length + 1);
            addWaitingGhosts(x);
        }
    }
    function animate() {
        drawSky();
        for (let i = 0; i < ghostsBehindWall.length; i++) {
            ghostsBehindWall[i].draw();
        }
        bg.draw();
        door.draw();
        for (let i = 0; i < seats.length; i++) {
            seats[i].draw();
        }
        ice.addIceBall(Geistdiele.flavours[0]);
        ice.draw();
        icetray[0].draw();
        icetray[1].draw();
        icetray[2].draw();
        new Geistdiele.UI({ x: 0, y: 0 }).draw();
    }
    function drawSky() {
        Geistdiele.crc2.fillStyle = "#162032";
        Geistdiele.crc2.rect(0, 0, Geistdiele.crc2.canvas.width, Geistdiele.crc2.canvas.height);
        Geistdiele.crc2.fill();
    }
})(Geistdiele || (Geistdiele = {}));
var Geistdiele;
(function (Geistdiele) {
    class Sauce extends Geistdiele.Ingredient {
        constructor(_data, _position) {
            super(_data, _position);
        }
        draw() {
            this.drawSauce();
        }
        drawSauce() {
            Geistdiele.crc2.save();
            Geistdiele.crc2.translate(this.position.x, this.position.y);
            // #path1
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = this.data.colour;
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(149, 255, 51)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 2.55471;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(8.01881, 24.1316);
            Geistdiele.crc2.bezierCurveTo(14.6825, 13.1671, 25.6614, 3.20322, 45.9101, 3.92467);
            Geistdiele.crc2.bezierCurveTo(66.1587, 4.64612, 76.9988, 18.0778, 82.1327, 26.9933);
            Geistdiele.crc2.bezierCurveTo(85.4297, 32.719, 85.4654, 36.5635, 84.8101, 36.372);
            Geistdiele.crc2.bezierCurveTo(84.3333, 36.2326, 83.5597, 34.3889, 83.1568, 33.6339);
            Geistdiele.crc2.bezierCurveTo(82.6272, 32.6414, 80.8916, 30.9428, 79.0384, 32.8479);
            Geistdiele.crc2.bezierCurveTo(78.0275, 33.887, 78.4937, 37.2955, 79.0384, 41.7222);
            Geistdiele.crc2.bezierCurveTo(79.5538, 45.9109, 81.6996, 48.613, 79.0384, 49.481);
            Geistdiele.crc2.bezierCurveTo(75.8499, 50.5211, 79.6601, 39.6933, 71.5491, 37.6258);
            Geistdiele.crc2.bezierCurveTo(68.5455, 36.8603, 68.5102, 34.6377, 63.3267, 34.0311);
            Geistdiele.crc2.bezierCurveTo(62.659, 33.9529, 60.5432, 33.024, 58.5162, 35.6509);
            Geistdiele.crc2.bezierCurveTo(56.4892, 38.2777, 60.8791, 51.4788, 56.4892, 51.7132);
            Geistdiele.crc2.bezierCurveTo(51.7271, 51.9674, 50.3, 48.1105, 50.3, 45.055);
            Geistdiele.crc2.bezierCurveTo(50.3, 37.5027, 45.9101, 31.9352, 41.9196, 30.562);
            Geistdiele.crc2.bezierCurveTo(38.1462, 29.2635, 36.6485, 27.8942, 30.941, 27.8942);
            Geistdiele.crc2.bezierCurveTo(25.2336, 27.8942, 21.714, 35.6509, 19.8726, 35.6509);
            Geistdiele.crc2.bezierCurveTo(18.0313, 35.6509, 15.1548, 38.7194, 15.1548, 40.7783);
            Geistdiele.crc2.bezierCurveTo(15.1548, 42.8373, 15.9575, 49.481, 12.2243, 49.481);
            Geistdiele.crc2.bezierCurveTo(10.0434, 49.481, 11.1563, 45.8716, 10.672, 44.3662);
            Geistdiele.crc2.bezierCurveTo(10.4038, 43.5325, 9.72012, 38.6624, 6.96229, 38.6624);
            Geistdiele.crc2.bezierCurveTo(4.20446, 38.6624, 3.04126, 40.4659, 3.05781, 39.4294);
            Geistdiele.crc2.bezierCurveTo(3.14206, 34.1521, 4.60612, 29.7468, 8.01881, 24.1316);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            Geistdiele.crc2.restore();
        }
    }
    Geistdiele.Sauce = Sauce;
})(Geistdiele || (Geistdiele = {}));
var Geistdiele;
(function (Geistdiele) {
    class Seat extends Geistdiele.Drawable {
        mirror = false;
        size;
        ghost;
        constructor(_position, _mirror, _size) {
            super(_position);
            this.mirror = _mirror;
            this.size = _size;
        }
        draw() {
            this.drawSeat();
            if (this.ghost) {
                //falls noch nicht existiert
                this.ghost.draw();
            }
        }
        isFree() {
            return this.ghost === undefined;
        }
        getGhost() {
            return this.ghost;
        }
        addGhost() {
            let pos;
            if (this.mirror) {
                pos = new Geistdiele.Vector(this.position.x, this.position.y - 70);
            }
            else {
                pos = new Geistdiele.Vector(this.position.x - 100, this.position.y - 70);
            }
            this.ghost = new Geistdiele.Ghost(pos, "happy", true);
        }
        removeGhost() {
            this.ghost = undefined;
        }
        drawSeat() {
            Geistdiele.crc2.save();
            Geistdiele.crc2.translate(this.position.x, this.position.y);
            if (this.mirror == false) {
                Geistdiele.crc2.scale(-this.size, this.size);
            }
            else {
                Geistdiele.crc2.scale(this.size, this.size);
            }
            // #path1-7
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 5;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(96.705, 143.448);
            Geistdiele.crc2.bezierCurveTo(96.705, 152.165, 89.5637, 203.524, 100.574, 203.524);
            Geistdiele.crc2.stroke();
            // #path2-5
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 5;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(80.8366, 146.508);
            Geistdiele.crc2.bezierCurveTo(80.8366, 166.96, 70.9929, 216.159, 86.0289, 216.159);
            Geistdiele.crc2.stroke();
            // #path3-7
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 5;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(47.2991, 137.85);
            Geistdiele.crc2.bezierCurveTo(47.2991, 162.509, 47.288, 203.119, 36.2164, 203.119);
            Geistdiele.crc2.stroke();
            // #path4-6
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "round";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 5;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(20.5934, 145.324);
            Geistdiele.crc2.bezierCurveTo(20.5934, 169.984, 19.2905, 216.159, 8.21895, 216.159);
            Geistdiele.crc2.stroke();
            // #path5-8
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 5;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(9.75465, 140.01);
            Geistdiele.crc2.bezierCurveTo(9.75465, 135.228, 30.8605, 131.352, 56.8959, 131.352);
            Geistdiele.crc2.bezierCurveTo(82.9312, 131.352, 104.037, 135.228, 104.037, 140.01);
            Geistdiele.crc2.bezierCurveTo(104.037, 144.791, 82.9312, 148.668, 56.8959, 148.668);
            Geistdiele.crc2.bezierCurveTo(30.8605, 148.668, 9.75465, 144.791, 9.75465, 140.01);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            // #path6-2
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 5;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(51.5927, 132.032);
            Geistdiele.crc2.bezierCurveTo(53.2427, 122.023, 58.6139, 112.521, 56.8186, 80.7449);
            Geistdiele.crc2.bezierCurveTo(55.0214, 48.935, 36.3284, 20.5382, 56.8186, 20.5382);
            Geistdiele.crc2.bezierCurveTo(70.0709, 20.5382, 73.4717, 30.5941, 76.7447, 30.5941);
            Geistdiele.crc2.bezierCurveTo(80.0177, 30.5941, 74.0317, 11.3041, 96.9141, 8.92644);
            Geistdiele.crc2.bezierCurveTo(119.796, 6.54874, 116.594, 27.7833, 121.016, 27.7833);
            Geistdiele.crc2.bezierCurveTo(125.437, 27.7833, 121.016, 16.81, 132.129, 16.81);
            Geistdiele.crc2.bezierCurveTo(143.242, 16.81, 144.715, 41.3442, 134.978, 58.8006);
            Geistdiele.crc2.bezierCurveTo(125.24, 76.2571, 101.707, 120.199, 99.6383, 138.641);
            Geistdiele.crc2.bezierCurveTo(99.6383, 141.205, 82.0267, 133.75, 85.1919, 133.75);
            Geistdiele.crc2.bezierCurveTo(90.0005, 133.75, 93.5268, 119.258, 99.7227, 102.977);
            Geistdiele.crc2.bezierCurveTo(104.22, 91.159, 118.55, 65.072, 120.742, 54.0664);
            Geistdiele.crc2.bezierCurveTo(124.238, 36.5097, 121.224, 30.8324, 121.224, 26.2674);
            Geistdiele.crc2.stroke();
            // #path7-1
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 5;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(76.4099, 29.9129);
            Geistdiele.crc2.bezierCurveTo(76.4099, 34.7871, 79.5078, 42.5933, 79.0923, 50.0737);
            Geistdiele.crc2.bezierCurveTo(78.5926, 59.0713, 72.5931, 90.2201, 71.0713, 95.9034);
            Geistdiele.crc2.bezierCurveTo(68.2844, 106.312, 63.1826, 128.88, 60.7102, 131.352);
            Geistdiele.crc2.stroke();
            // #path8-4
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 3;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(52.325, 54.137);
            Geistdiele.crc2.bezierCurveTo(52.325, 46.0295, 73.0124, 42.6102, 77.6722, 51.2841);
            Geistdiele.crc2.bezierCurveTo(79.2176, 54.1607, 86.8672, 43.9005, 97.8961, 43.9005);
            Geistdiele.crc2.bezierCurveTo(108.925, 43.9005, 120.742, 57.2999, 120.742, 57.2999);
            Geistdiele.crc2.bezierCurveTo(120.742, 57.2999, 124.297, 54.7603, 128.275, 53.9928);
            Geistdiele.crc2.bezierCurveTo(131.316, 53.4063, 133.992, 57.0744, 133.992, 60.4257);
            Geistdiele.crc2.stroke();
            // #path9-0
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(0, 0, 0)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 3;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(55.8599, 71.2564);
            Geistdiele.crc2.bezierCurveTo(55.8599, 63.1489, 75.8863, 64.4264, 75.8863, 70.9619);
            Geistdiele.crc2.bezierCurveTo(75.8863, 74.2273, 83.518, 63.1037, 94.5469, 63.1037);
            Geistdiele.crc2.bezierCurveTo(105.576, 63.1037, 111.903, 75.4501, 111.903, 75.4501);
            Geistdiele.crc2.bezierCurveTo(111.903, 75.4501, 116.763, 71.471, 120.742, 70.7035);
            Geistdiele.crc2.bezierCurveTo(123.782, 70.117, 126.197, 72.0161, 126.197, 75.3674);
            Geistdiele.crc2.stroke();
            // #path10-6
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(32, 32, 32)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(32, 32, 32)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 0.620874;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(9.75465, 137.85);
            Geistdiele.crc2.bezierCurveTo(9.75465, 133.069, 30.8605, 129.192, 56.8959, 129.192);
            Geistdiele.crc2.bezierCurveTo(82.9312, 129.192, 104.037, 133.069, 104.037, 137.85);
            Geistdiele.crc2.bezierCurveTo(104.037, 142.632, 82.9312, 146.508, 56.8959, 146.508);
            Geistdiele.crc2.bezierCurveTo(30.8605, 146.508, 9.75465, 142.632, 9.75465, 137.85);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            Geistdiele.crc2.restore();
        }
    }
    Geistdiele.Seat = Seat;
})(Geistdiele || (Geistdiele = {}));
var Geistdiele;
(function (Geistdiele) {
    class Speechbubble extends Geistdiele.Drawable {
        content;
        mirror;
        constructor(_position, _mirror) {
            super(_position);
            this.mirror = _mirror;
        }
        draw() {
            this.drawSpeechbubble();
        }
        drawSpeechbubble() {
            Geistdiele.crc2.save();
            Geistdiele.crc2.translate(this.position.x, this.position.y);
            // #Ebene-11
            // #path1-0
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.fillStyle = "rgb(255, 255, 255)";
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(175, 175, 174)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 3.85789;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(77.9873, 4.48507);
            Geistdiele.crc2.bezierCurveTo(39.3875, 4.48514, 8.08107, 29.12, 8.08107, 59.5163);
            Geistdiele.crc2.bezierCurveTo(8.08107, 70.1683, 11.9902, 80.0907, 18.6436, 88.5163);
            Geistdiele.crc2.bezierCurveTo(19.0654, 102.506, 4.17476, 116.329, 4.17482, 116.329);
            Geistdiele.crc2.bezierCurveTo(4.17482, 116.329, 25.2758, 113.548, 32.5498, 102.298);
            Geistdiele.crc2.bezierCurveTo(32.7219, 102.031, 32.8883, 102.018, 32.9419, 101.703);
            Geistdiele.crc2.bezierCurveTo(45.1553, 109.928, 60.657, 114.579, 77.9873, 114.579);
            Geistdiele.crc2.bezierCurveTo(116.587, 114.579, 147.862, 89.9126, 147.862, 59.5163);
            Geistdiele.crc2.bezierCurveTo(147.862, 29.12, 116.587, 4.48507, 77.9873, 4.48507);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.fill();
            Geistdiele.crc2.stroke();
            Geistdiele.crc2.restore();
        }
    }
    Geistdiele.Speechbubble = Speechbubble;
})(Geistdiele || (Geistdiele = {}));
var Geistdiele;
(function (Geistdiele) {
    class Topping extends Geistdiele.Ingredient {
        constructor(_data, _pos) {
            super(_data, _pos);
        }
        draw() {
            Geistdiele.crc2.strokeStyle = this.data.colour;
        }
    }
    Geistdiele.Topping = Topping;
})(Geistdiele || (Geistdiele = {}));
var Geistdiele;
(function (Geistdiele) {
    class UI extends Geistdiele.Drawable {
        cashCount = 0;
        constructor(_position) {
            super(_position);
        }
        draw() {
            this.drawCashCounter();
            this.drawWorkspace();
            this.drawToppingGlasses();
        }
        interact() { }
        drawCashCounter() { }
        drawWorkspace() {
            for (const topping of Geistdiele.toppings) {
                new Geistdiele.Topping(topping, new Geistdiele.Vector(0, 0));
            }
        }
        drawToppingGlasses() {
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(221, 221, 221)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 10.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1496.8, 1018.53);
            Geistdiele.crc2.bezierCurveTo(1511.91, 1030.24, 1638.24, 1031.61, 1663.84, 1018.53);
            Geistdiele.crc2.bezierCurveTo(1663.84, 1018.53, 1691.58, 906.813, 1655.41, 923.312);
            Geistdiele.crc2.bezierCurveTo(1619.25, 939.811, 1531.3, 936.31, 1496.8, 922.179);
            Geistdiele.crc2.bezierCurveTo(1462.29, 908.049, 1496.8, 1018.53, 1496.8, 1018.53);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.stroke();
            // #path2
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(221, 221, 221)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 10.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1280.29, 1021.8);
            Geistdiele.crc2.bezierCurveTo(1293.16, 1037.46, 1400.69, 1039.29, 1422.49, 1021.8);
            Geistdiele.crc2.bezierCurveTo(1422.49, 1021.8, 1446.5, 882.204, 1415.78, 894.744);
            Geistdiele.crc2.bezierCurveTo(1385.06, 907.284, 1313.47, 904.856, 1280.29, 892.977);
            Geistdiele.crc2.bezierCurveTo(1247.12, 881.098, 1280.29, 1021.8, 1280.29, 1021.8);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.stroke();
            // #path3
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(221, 221, 221)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 10.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1563.66, 876.351);
            Geistdiele.crc2.bezierCurveTo(1565.73, 878.42, 1548.89, 861.984, 1555.38, 857.034);
            Geistdiele.crc2.bezierCurveTo(1561.88, 852.083, 1586.78, 850.893, 1595.11, 855.844);
            Geistdiele.crc2.bezierCurveTo(1603.44, 860.795, 1584.58, 875.483, 1584.58, 875.483);
            Geistdiele.crc2.bezierCurveTo(1608.66, 875.483, 1681.4, 905.41, 1676.13, 912.978);
            Geistdiele.crc2.bezierCurveTo(1670.85, 920.546, 1627.1, 934.429, 1576.93, 933.189);
            Geistdiele.crc2.bezierCurveTo(1526.76, 931.948, 1471.9, 915.278, 1473.92, 909.649);
            Geistdiele.crc2.bezierCurveTo(1475.94, 904.02, 1534.56, 876.351, 1563.66, 876.351);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.stroke();
            // #path4
            Geistdiele.crc2.beginPath();
            Geistdiele.crc2.globalAlpha = 1.0;
            Geistdiele.crc2.strokeStyle = "rgb(221, 221, 221)";
            Geistdiele.crc2.lineCap = "butt";
            Geistdiele.crc2.lineJoin = "round";
            Geistdiele.crc2.lineWidth = 10.0;
            Geistdiele.crc2.miterLimit = 10;
            Geistdiele.crc2.moveTo(1337.21, 831.702);
            Geistdiele.crc2.bezierCurveTo(1337.21, 831.702, 1329.69, 818.385, 1329.69, 812.128);
            Geistdiele.crc2.bezierCurveTo(1329.69, 805.872, 1364.53, 804.282, 1364.53, 812.128);
            Geistdiele.crc2.bezierCurveTo(1364.53, 819.975, 1355.01, 830.541, 1355.01, 830.541);
            Geistdiele.crc2.bezierCurveTo(1355.01, 830.541, 1431.82, 855.404, 1431.82, 869.577);
            Geistdiele.crc2.bezierCurveTo(1431.82, 880.049, 1422.8, 880.437, 1422.8, 880.437);
            Geistdiele.crc2.bezierCurveTo(1422.8, 880.437, 1439.12, 883.435, 1436.94, 885.602);
            Geistdiele.crc2.bezierCurveTo(1429.09, 893.413, 1389.08, 902.099, 1346.38, 900.44);
            Geistdiele.crc2.bezierCurveTo(1303.67, 898.782, 1267.24, 890.774, 1260.77, 885.602);
            Geistdiele.crc2.bezierCurveTo(1259.23, 884.372, 1274.02, 883.435, 1274.02, 883.435);
            Geistdiele.crc2.bezierCurveTo(1274.02, 883.435, 1260.77, 874.478, 1260.77, 868.876);
            Geistdiele.crc2.bezierCurveTo(1260.77, 851.709, 1337.21, 831.702, 1337.21, 831.702);
            Geistdiele.crc2.closePath();
            Geistdiele.crc2.stroke();
        }
    }
    Geistdiele.UI = UI;
})(Geistdiele || (Geistdiele = {}));
//# sourceMappingURL=build.js.map