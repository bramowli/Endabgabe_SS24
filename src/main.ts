namespace Geistdiele {
  export const canvas: HTMLCanvasElement | null = document.querySelector("canvas");
  export const crc2: CanvasRenderingContext2D = canvas.getContext("2d");

  start();

  function start(): void {
    window.addEventListener("load", handleLoad);
    canvas.addEventListener("click", handleClick);
  }

  function handleLoad(): void {}

  function handleClick(_event: MouseEvent): void {}

  new Background(new Vector(0,0)).draw();
}
