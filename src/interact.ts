namespace Geistdiele {
  export interface Interactable {
    interact(_hitPosition: Vector): boolean;
  }
}
