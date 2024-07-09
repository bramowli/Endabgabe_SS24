namespace Geistdiele {
  export const canvas: HTMLCanvasElement | null = document.querySelector("canvas");
  export const crc2: CanvasRenderingContext2D = canvas.getContext("2d");
  const bg = new Background(new Vector(0, 0));
  let seats: Seat[] = [];
  const door: Door = new Door({ x: 137, y: 270 }, false);
  let ghostsBehindWall: Ghost[] = [];
  let ghostsInfrontOfWall: Ghost[] = [];

  window.addEventListener("load", handleLoad);

  function handleLoad(): void {
    canvas.addEventListener("click", handleClick);
    new Audio("assets/music.mp3").play(); //not playing?

    addSeats();
    addWaitingGhosts();
    addSittingGhosts();

    setInterval(loop, 40);
  }

  function handleClick(_event: MouseEvent): void {
    let hit: Vector = { x: _event.offsetX, y: _event.offsetY };
  }

  function addSeats() {
    seats.push(new Seat({ x: 200, y: 450 }, true, false, 1));
    seats.push(new Seat({ x: 500, y: 450 }, true, true, 1));
    seats.push(new Seat({ x: 800, y: 450 }, true, false, 1));
    seats.push(new Seat({ x: 1100, y: 450 }, true, true, 1));
    seats.push(new Seat({ x: 1400, y: 450 }, true, false, 1));
    seats.push(new Seat({ x: 1700, y: 450 }, true, true, 1));
  }

  function addWaitingGhosts() {
    ghostsBehindWall.push(new Ghost({ x: 300, y: 200 }, "happy"));
  }

  function addSittingGhosts() {
    ghostsInfrontOfWall.push(new Ghost({ x: 100, y: 400 }, "happy"));
  }

  function loop() {
    drawSky();
    for (let i: number = 0; i < ghostsBehindWall.length; i++) {
      ghostsBehindWall[i].draw();
    }
    bg.draw();
    for (let i: number = 0; i < seats.length; i++) {
      seats[i].draw();
    }
    door.draw();

    for (let i: number = 0; i < ghostsInfrontOfWall.length; i++) {
      ghostsInfrontOfWall[i].draw();
    }

    const freeSeat: Seat | undefined = seats.find((Seat) => Seat.isFree());
    if (freeSeat) {
      //ghost sits on that chair
    }
  }

  function drawSky(): void {
    console.log("draw sky");
    crc2.fillStyle = "#162032";
    crc2.rect(0, 0, crc2.canvas.width, crc2.canvas.height);
    crc2.fill();
  }
}
