namespace Geistdiele {
  export const canvas: HTMLCanvasElement | null = document.querySelector("canvas");
  export const crc2: CanvasRenderingContext2D = canvas.getContext("2d");
  const bg = new Background(new Vector(0, 0));

  window.addEventListener("load", handleLoad);

  function handleLoad(): void {
    canvas.addEventListener("click", handleClick);

    bg.draw();
  }

  function handleClick(_event: MouseEvent): void {
    let hit: Vector = { x: _event.offsetX, y: _event.offsetY };
  }
}
