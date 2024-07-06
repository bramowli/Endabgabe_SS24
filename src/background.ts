namespace Geistdiele {
    export class Background extends Drawable {
        type: string;

        constructor(_type: string, _position: Vector) {
            super(_position);
            this.type = _type;
        }

        public draw(): void {
            crc2.fillStyle = "grey";
            crc2.rect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }
    }
}