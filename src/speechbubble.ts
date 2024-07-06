namespace Geistdiele {
    export class Speechbubble extends Drawable {
        text: string;
        mirror: boolean;

        constructor(_text: string, _position: Vector, _mirror: boolean) {
            super(_position);
            this.text = _text;
            this.mirror = _mirror;
        }

        public draw(): void {

        }
    }
}