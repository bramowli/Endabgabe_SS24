namespace Geistdiele {
  export class Seat extends Drawable {
    free: boolean = false;
    mirror: boolean = false;

    constructor(_position: Vector, _free: boolean, _mirror: boolean) {
      super(_position);
      this.free = _free;
    }
    public draw(): void {
      // draw seat
    }
    private setFree(_free: boolean): void {
      this.free = _free;
    }
    public isFree(): boolean {
      return this.free;
    }
  }
}
