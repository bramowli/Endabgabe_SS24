namespace Geistdiele {
  window.addEventListener("load", handleLoad);
  export const canvas: HTMLCanvasElement | null = document.querySelector("canvas");
  export const crc2: CanvasRenderingContext2D = canvas.getContext("2d");
  canvas.addEventListener("click", handleClick);

  function handleLoad(): void{};

  function handleClick(_event: MouseEvent): void {
  }
}
