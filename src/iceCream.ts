namespace Geistdiele {
    export class IceCream extends Drawable {
        type: string;
        scoops: number;
        size: number;

        constructor(_type: string, _position: Vector, _scoops: number, _size: number) {
            super(_position);
            this.type = _type;
            this.scoops = _scoops;
            this.size = _size;
        }

        public draw(): void {
            // draw ice cream
        }

        drawCone(): void {}
    }
}