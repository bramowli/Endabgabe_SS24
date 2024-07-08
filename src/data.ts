namespace Geistdiele {
  export interface FlavourData {
    name: string;
    colour: string;
    price: number;
  }

  const flavours: FlavourData[] = [
    {
      name: "Vanilla",
      colour: "white",
      price: 10,
    },
    {
      name: "Chocolate",
      colour: "white",

      price: 15,
    },
    {
      name: "Strawberry",
      colour: "white",

      price: 20,
    },
  ];
  const toppings = [
    {
      name: "Spiderlegs",
      colour: "black",

      price: 5,
    },
    {
      name: "Cherries",
      colour: "white",

      price: 10,
    },
    {
      name: "Chocolate Chips",
      colour: "white",

      price: 15,
    },
  ];
  const sauces = [
    {
      name: "Ectoplasm",
      colour: "#00c400",

      price: 5,
    },
    {
      name: "blood",
      colour: "#680005",

      price: 10,
    },
  ];
}
