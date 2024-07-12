namespace Geistdiele {
  export const canvas: HTMLCanvasElement | null = document.querySelector("canvas");
  export const crc2: CanvasRenderingContext2D = canvas.getContext("2d");
  const bg = new Background(new Vector(0, 0));
  let seats: Seat[] = [];
  const door: Door = new Door({ x: 137, y: 270 }, false);
  let ghostsBehindWall: Ghost[] = [];
  const icetray = [new Icetray(flavours[0], "left", { x: 0, y: 0 }),
  new Icetray(flavours[1], "middle", { x: 0, y: 0 }),
  new Icetray(flavours[2], "right", { x: 0, y: 0 })]
  const ice = new IceCream({ x: 870, y: 880 }, 1);


  window.addEventListener("load", handleLoad);

  function handleLoad(): void {
    canvas.addEventListener("click", handleClick);
    new Audio("./assets/music.mp3").play();

    addSeats();

    setInterval(loop, 250);
  }

  function handleClick(_event: MouseEvent): void {
    let hit: Vector = {
      x: (_event.offsetX * canvas.width) / canvas.clientWidth, //weil canvas scale anders
      y: (_event.offsetY * canvas.height) / canvas.clientHeight,
    };
    for (const seat of seats) {
      const ghost = seat.getGhost();
      if (!ghost) {
        continue;
      }
      if (ghost.interact(hit)) {
        seat.removeGhost();
        console.log("HIT");
        return;
      }
    }

    if (icetray[1].interact(hit)) {
      //new ball
      ice.addIceBall(flavours[1])
      console.log("purple ball")//not working as intended
    }
  }

  function addSeats() {
    seats.push(new Seat({ x: 200, y: 450 }, false, 1));
    seats.push(new Seat({ x: 500, y: 450 }, true, 1));
    seats.push(new Seat({ x: 800, y: 450 }, false, 1));
    seats.push(new Seat({ x: 1100, y: 450 }, true, 1));
    seats.push(new Seat({ x: 1400, y: 450 }, false, 1));
    seats.push(new Seat({ x: 1700, y: 450 }, true, 1));
  }

  function addWaitingGhosts(_x: number) {
    //immer neue geister kommen und anstehen lassen
    if (_x < canvas.width - 500) {
      ghostsBehindWall.push(new Ghost({ x: _x, y: 200 }, "happy", false));
    }
  }

  function loop() {
    animate();

    const freeSeat: Seat | undefined = seats.find((Seat) => Seat.isFree());
    if (freeSeat) {
      door.open();
      if (ghostsBehindWall.shift()) {
        ghostsBehindWall.forEach((g) => {
          setTimeout(() => g.move(-200, 0), 500);
        });
        freeSeat.addGhost();
      }
    } else {
      door.close();
    }
    if (Math.random() > 0.9) {
      const x = 200 * (ghostsBehindWall.length + 1);
      addWaitingGhosts(x);
    }
  }

  function animate() {
    drawSky();
    for (let i: number = 0; i < ghostsBehindWall.length; i++) {
      ghostsBehindWall[i].draw();
    }
    bg.draw();
    door.draw();
    for (let i: number = 0; i < seats.length; i++) {
      seats[i].draw();
    }
    
    ice.addIceBall(flavours[0]);
    ice.draw();

    icetray[0].draw();
    icetray[1].draw();
    icetray[2].draw();

    new UI({x:0,y:0}).draw()
  }

  function drawSky(): void {
    crc2.fillStyle = "#162032";
    crc2.rect(0, 0, crc2.canvas.width, crc2.canvas.height);
    crc2.fill();
  }
}
