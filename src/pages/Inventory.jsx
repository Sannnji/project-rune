import { Box, Flex, Text, SimpleGrid } from "@chakra-ui/react";

import RUNEWORD_DATA from "../data/runewords.json";
import RUNE_DATA from "../data/runes.json";

import Runes from "../components/inventory/Runes";

const inventory = {
  El: { quantity: 0 },
  Eld: { quantity: 0 },
  Tir: { quantity: 0 },
  Nef: { quantity: 0 },
  Eth: { quantity: 0 },
  Ith: { quantity: 3 },
  Tal: { quantity: 0 },
  Ral: { quantity: 0 },
  Ort: { quantity: 0 },
  Thul: { quantity: 0 },
  Amn: { quantity: 0 },
  Sol: { quantity: 0 },
  Shael: { quantity: 0 },
  Dol: { quantity: 0 },
  Hel: { quantity: 0 },
  Io: { quantity: 0 },
  Lum: { quantity: 0 },
  Ko: { quantity: 0 },
  Fal: { quantity: 0 },
  Lem: { quantity: 0 },
  Pul: { quantity: 0 },
  Um: { quantity: 0 },
  Mal: { quantity: 0 },
  Ist: { quantity: 0 },
  Gul: { quantity: 0 },
  Vex: { quantity: 0 },
  Ohm: { quantity: 0 },
  Lo: { quantity: 0 },
  Sur: { quantity: 0 },
  Ber: { quantity: 1 },
  Jah: { quantity: 4 },
  Cham: { quantity: 0 },
  Zod: { quantity: 0 },
};
const craftable = [];
const catagories = [];

for (const tier in RUNE_DATA) {
  catagories.push(tier);
}

export default function Inventory() {
  const runewords = RUNEWORD_DATA;

  for (const property in runewords) {
    runewords[property].forEach((runeword) => {
      const recipe = runeword.recipe;
      recipe.forEach((rune) => {
        if (
          inventory[rune] &&
          !craftable.includes(runeword.name) &&
          inventory[rune].quantity >= 1
        ) {
          console.log(runeword);
          const req_reqired = runeword.recipe.length;
          let req_met = 0;

          //check if recipe req are met
          runeword.recipe.forEach((rune) => {
            if (inventory[rune] && inventory[rune].quantity >= 1) {
              req_met++;
            }
          });

          // if recipe are met and rune isn't already in craftable array
          if (req_reqired === req_met && !craftable.includes(runeword.name)) {
            craftable.push(runeword.name);
            console.log(`You can craft ${runeword.name}`);
          }
        }
      });
    });
  }

  return (
    <Flex flexDir="row" justifyContent="space-evenly">
      <Box color="white" align="center" mt={8}>
        <Text mb={4}>Inventory</Text>
        {catagories.map((catagory) => {
          return (
            <>
              <Text>{catagory}</Text>
              <SimpleGrid columns={3} spacing={4}>
                {RUNE_DATA[catagory].map((rune) => {
                  return <Runes rune={rune} inventory={inventory} />;
                })}
              </SimpleGrid>
            </>
          );
        })}
      </Box>
      <Box bg="grey" width="400px" height="200px" align="center" mt={8}>
        <Text fontFamily="exocet">Craftable Runewords</Text>
        {craftable.map((runeword) => {
          return <Text>{runeword}</Text>;
        })}
      </Box>
    </Flex>
  );
}
