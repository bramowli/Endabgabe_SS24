namespace Geistdiele {
  export class Ghost extends Drawable {
    emotion: string = "happy";

    constructor(_position: Vector, _emotion: string) {
      super(_position);
      this.emotion = _emotion;
    }

    public draw(): void {}

    private move(): void {}

    private order(): void {}

    private changeEmotion(): void {}
  }
}
