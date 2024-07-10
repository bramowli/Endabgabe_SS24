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
    new Audio("./assets/music.mp3").play();

    addSeats();
    addWaitingGhosts();
    addSittingGhosts();

    setInterval(loop, 40);
  }

  function handleClick(_event: MouseEvent): void {
    let hit: Vector = {
      x: (_event.offsetX * canvas.width) / canvas.clientWidth,  //weil canvas scale anders
      y: (_event.offsetY * canvas.height) / canvas.clientHeight,
    };
    for (let seat of seats) {
      const ghost = seat.getGhost();
      if (!ghost) {
        return;
      }
      if (ghost.interact(hit)) {
        console.log("HIT");
        return;
      }
    }
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
    //solange die Seite geladen ist neue geister kommen und anstehen lassen
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
    door.draw();
    for (let i: number = 0; i < seats.length; i++) {
      seats[i].draw();
    }

    /*for (let i: number = 0; i < ghostsInfrontOfWall.length; i++) {
      ghostsInfrontOfWall[i].draw();
    }*/

    const freeSeat: Seat | undefined = seats.find((Seat) => Seat.isFree());
    if (freeSeat) {
      door.open();
      //ghost sits on that chair
    } else {
      door.close();
    }
    seats.forEach((g) => {
      g.addGhost();
    });
  }

  function drawSky(): void {
    crc2.fillStyle = "#162032";
    crc2.rect(0, 0, crc2.canvas.width, crc2.canvas.height);
    crc2.fill();
  }
}
