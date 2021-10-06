import { Box } from "@chakra-ui/react";

import RUNEWORD_DATA from "../data/runewords.json";

const inventory = [
  { name: "jah", quantity: 4 },
  { name: "ith", quantity: 3 },
  { name: "ber", quantity: 1 },
];

export default function Inventory() {
  const runewords = RUNEWORD_DATA;

  const enigma = runewords.chest_armor.find((runeword) => {
    return runeword.name === "Enigma";
  });

  const test = runewords.entries()
  console.log(test);



  

  return <Box></Box>;
}
