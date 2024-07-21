namespace Geistdiele {
  export const canvas: HTMLCanvasElement | null = document.querySelector("canvas");
  export const crc2: CanvasRenderingContext2D = canvas.getContext("2d");

  const background = new Background(new Vector(0, 0));
  let seats: Seat[] = [];
  const door: Door = new Door({ x: 137, y: 270 }, false);
  let ghostsBehindWall: Ghost[] = [];
  const icetray = [
    new Icetray(flavours[0], "left", { x: 0, y: 0 }, 1),
    new Icetray(flavours[1], "middle", { x: 0, y: 0 }, 1),
    new Icetray(flavours[2], "right", { x: 0, y: 0 }, 1),
  ];
  const sauceInBottle = [
    new SauceInBottle(sauces[0], "left", { x: 0, y: 0 }, 1),
    new SauceInBottle(sauces[1], "right", { x: 0, y: 0 }, 1),
  ];
  const toppingInGlass = [
    new Topping(toppings[0], "left", { x: 0, y: 0 }, 1),
    new Topping(toppings[1], "right", { x: 0, y: 0 }, 1),
  ];
  let ice = new IceCream({ x: 870, y: 880 }, 1);
  const ui = new UI({ x: 0, y: 0 });

  window.addEventListener("load", handleLoad);

  //  gets called once when the window is loaded
  function handleLoad(): void {
    canvas.addEventListener("click", handleClick);
    new Audio("./assets/music.mp3").play(); //background music
    addSeats();

    setInterval(loop, 250);
  }

  // gets called when the canvas is clicked
  function handleClick(_event: MouseEvent): void {
    let hit: Vector = {
      x: (_event.offsetX * canvas.width) / canvas.clientWidth, // scale mouse coordinates to canvas coordinates
      y: (_event.offsetY * canvas.height) / canvas.clientHeight,
    };
    for (const seat of seats) {
      const ghost = seat.getGhost();
      if (ghost?.interact(hit)) {
        // check if made icecream is same as wanted
        const tempIce: IceCream = ghost.getSpeechbubble().getContent() as IceCream; // content of speechbubble is Drawable so I have to convert it to IceCream
        if (tempIce.equals(ice)) {
          seat.removeGhost();
          ice = new IceCream({ x: 870, y: 880 }, 1); // start with empty IceCream again
          ui.increaseCounter();
        }
        // end function after first successful hit
        return;
      }
    }

    // check if hit on icetray
    if (icetray[0].interact(hit)) {
      ice.addIceBall(flavours[0], 1);
    }
    if (icetray[1].interact(hit)) {
      ice.addIceBall(flavours[1], 1);
    }
    if (icetray[2].interact(hit)) {
      ice.addIceBall(flavours[2], 1);
    }

    // check if hit on sauceInBottle
    if (sauceInBottle[0].interact(hit)) {
      ice.addSauce(sauces[0], 1);
    }
    if (sauceInBottle[1].interact(hit)) {
      ice.addSauce(sauces[1], 1);
    }

    // check if hit on toppingInGlass
    if (toppingInGlass[0].interact(hit)) {
      ice.addTopping(toppings[0], 1);
    }
    if (toppingInGlass[1].interact(hit)) {
      ice.addTopping(toppings[1], 1);
    }

    // check if hit on ui
    if (ui.interact(hit)) {
      ice = new IceCream({ x: 870, y: 880 }, 1);
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

  // add new ghosts to the waiting line if there is space
  function addWaitingGhosts(_x: number) {
    if (_x < canvas.width - 500) {
      ghostsBehindWall.push(new Ghost({ x: _x, y: 200 }, "happy", false));
    }
  }

  // main loop of the game that gets called in intervals
  function loop() {
    animate();

    // check if there is a free seat
    const freeSeat: Seat | undefined = seats.find((Seat) => Seat.isFree());
    if (freeSeat) {
      // open door and let ghosts in
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
    // add new ghosts to the waiting line with a small chance
    if (Math.random() > 0.9) {
      const x = 200 * (ghostsBehindWall.length + 1);
      addWaitingGhosts(x);
    }
  }

  // draw all elements on the canvas
  function animate() {
    drawSky();
    for (let i: number = 0; i < ghostsBehindWall.length; i++) {
      ghostsBehindWall[i].draw();
    }
    background.draw();
    door.draw();
    for (let i: number = 0; i < seats.length; i++) {
      seats[i].draw();
    }

    ice.draw();

    icetray[0].draw();
    icetray[1].draw();
    icetray[2].draw();

    toppingInGlass[0].draw();
    toppingInGlass[1].draw();

    sauceInBottle[0].draw();
    sauceInBottle[1].draw();

    ui.draw();
  }

  function drawSky(): void {
    crc2.fillStyle = "#162032";
    crc2.rect(0, 0, crc2.canvas.width, crc2.canvas.height);
    crc2.fill();
  }
}
