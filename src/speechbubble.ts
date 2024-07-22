namespace Geistdiele {
  // speechbubble of a ghost
  export class Speechbubble extends Drawable {
    private content: Drawable;
    private SCALE = 0.4; // capitalized because it's a constant

    constructor(_position: Vector) {
      super(_position);
    }

    public draw(): void {
      this.drawSpeechbubble();
      // if there is content, draw it
      if (this.content) {
        this.content.draw();
      }
    }

    // generate and add a random icecream
    public addRandomIcecream() {
      const ice = new IceCream({ x: this.position.x + 45, y: this.position.y + 45 }, this.SCALE);
      // const randomFlavour = Math.floor(Math.random() * flavours.length);
      const randomSauce = Math.floor(Math.random() * sauces.length);
      const randomTopping = Math.floor(Math.random() * toppings.length);

      ice.addIceBall(flavours[Math.floor(Math.random() * flavours.length)], this.SCALE);
      if (Math.random() < 0.7) {
        ice.addIceBall(flavours[Math.floor(Math.random() * flavours.length)], this.SCALE);
        if (Math.random() < 0.3) {
          ice.addIceBall(flavours[Math.floor(Math.random() * flavours.length)], this.SCALE);
        }
      }

      ice.addSauce(sauces[randomSauce], this.SCALE);
      ice.addTopping(toppings[randomTopping], this.SCALE);
      this.content = ice;
    }

    public getContent() {
      return this.content;
    }

    private drawSpeechbubble() {
      crc2.save();
      crc2.translate(this.position.x, this.position.y);

      // #Layer-11

      // #path1-0
      crc2.beginPath();
      crc2.fillStyle = "rgb(255, 255, 255)";
      crc2.globalAlpha = 1.0;
      crc2.strokeStyle = "rgb(175, 175, 174)";
      crc2.lineCap = "butt";
      crc2.lineJoin = "round";
      crc2.lineWidth = 3.85789;
      crc2.miterLimit = 10;
      crc2.moveTo(77.9873, 4.48507);
      crc2.bezierCurveTo(39.3875, 4.48514, 8.08107, 29.12, 8.08107, 59.5163);
      crc2.bezierCurveTo(8.08107, 70.1683, 11.9902, 80.0907, 18.6436, 88.5163);
      crc2.bezierCurveTo(19.0654, 102.506, 4.17476, 116.329, 4.17482, 116.329);
      crc2.bezierCurveTo(4.17482, 116.329, 25.2758, 113.548, 32.5498, 102.298);
      crc2.bezierCurveTo(32.7219, 102.031, 32.8883, 102.018, 32.9419, 101.703);
      crc2.bezierCurveTo(45.1553, 109.928, 60.657, 114.579, 77.9873, 114.579);
      crc2.bezierCurveTo(116.587, 114.579, 147.862, 89.9126, 147.862, 59.5163);
      crc2.bezierCurveTo(147.862, 29.12, 116.587, 4.48507, 77.9873, 4.48507);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();
      crc2.restore();
    }
  }
}
