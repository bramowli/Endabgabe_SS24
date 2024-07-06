namespace Geistdiele {
    export abstract class Drawable {
        position: Vector;

        constructor(_position: Vector) {
            this.position = _position;
        }

        public abstract draw(): void;
    }
}