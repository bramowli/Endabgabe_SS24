namespace Geistdiele {
  export const canvas: HTMLCanvasElement | null = document.querySelector("canvas");
  export const crc2: CanvasRenderingContext2D = canvas.getContext("2d");
  const bg = new Background(new Vector(0, 0));
  let seats: Seat[] = [];
  const door: Door = new Door({ x: 137, y: 270 }, false);
  let ghostsBehindWall: Ghost[] = [];
  const icetray = [
    new Icetray(flavours[0], "left", { x: 0, y: 0 },1),
    new Icetray(flavours[1], "middle", { x: 0, y: 0 },1),
    new Icetray(flavours[2], "right", { x: 0, y: 0 },1),
  ];
  const sauceInBottle = [
    new SauceInBottle(sauces[0], "left", { x: 0, y: 0 },1),
    new SauceInBottle(sauces[1], "right", { x: 0, y: 0 },1),
  ];
  const toppingInGlass = [
    new Topping(toppings[0], "left", { x: 0, y: 0 },1),
    new Topping(toppings[1], "right", { x: 0, y: 0 },1),
  ];
  let ice = new IceCream({ x: 870, y: 880 }, 1);
  const ui = new UI({ x: 0, y: 0 });

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
        //check if made icecream is same as wanted
        seat.removeGhost();
        console.log("HIT");
        return;
      }
    }

    if (icetray[0].interact(hit)) {
      //new ball
      ice.addIceBall(flavours[0]);
      console.log("left");
    }
    if (icetray[1].interact(hit)) {
      //new ball
      console.log("middle");
      ice.addIceBall(flavours[1]);
    }
    if (icetray[2].interact(hit)) {
      //new ball
      ice.addIceBall(flavours[2]);
      console.log("right");
    }

    if (sauceInBottle[0].interact(hit)) {
      //new sauce
      ice.addSauce(sauces[0]);
      console.log("drizzle");
    }
    if (sauceInBottle[1].interact(hit)) {
      //new sauce
      ice.addSauce(sauces[1]);
      console.log("drizzle");
    }

    if (toppingInGlass[0].interact(hit)) {
      //new topping
      ice.addTopping(toppings[0]);
      console.log("sprinkles");
    }
    if (toppingInGlass[1].interact(hit)) {
      //warum geht die nicht?
      //new topping
      ice.addTopping(toppings[1]);
      console.log("sprinkles");
    }

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
    // ice.addTopping(toppings[0]);
    // ice.addIceBall(flavours[0]); //warum vor den anderen?
    // ice.addSauce(sauces[0]);
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
