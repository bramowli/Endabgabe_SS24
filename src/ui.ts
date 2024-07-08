namespace Geistdiele {
  export class UI extends Drawable implements Interactable {
    cashCount: number = 0;

    constructor(_position: Vector) {
      super(_position);
    }

    public draw(): void {
      this.drawCashCounter();
      this.drawWorkspace();
    }

    public interact(): void {}

    private drawCashCounter(): void {}

    private drawWorkspace(): void {}
  }
}
