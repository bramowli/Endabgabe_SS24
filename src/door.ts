namespace Geistdiele {
  export class Door {
    state: boolean = false;

    constructor(_state: boolean) {
      this.state = _state;
    }

    public draw(): void {}

    private changeState(): void {}
  }
}
