import { useState, useEffect } from "react";
import { Box, Flex, Text, SimpleGrid } from "@chakra-ui/react";

import DatabaseService from "../services/database";
import Runes from "../components/inventory/Rune";
import SideMenu from "../components/SideMenu";
import Craftable from "../components/inventory/Craftable";

const craftable = [];
// const catagories = [];

export default function Inventory() {
  const [runes, setRunes] = useState();
  const [runewords, setRunewords] = useState();
  const [filter, setFilter] = useState();

  // default inventory (has Jah, Ber, Ith)
  const [state, setState] = useState({
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
  });

  useEffect(() => {
    retrieveRunewords();
    retrieveRunes();
  }, []);

  const retrieveRunewords = () => {
    DatabaseService.getRunewords()
      .then((response) => {
        setRunewords(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const retrieveRunes = () => {
    DatabaseService.getRunes()
      .then((response) => {
        setFilter(Object.keys(response.data)[0]);
        setRunes(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkCraftable = () => {
    for (const property in runewords) {
      runewords[property].forEach((runeword) => {
        const recipe = runeword.recipe;

        recipe.forEach((rune) => {
          const req_reqired = recipe.length;
          let req_met = 0;

          if (state[rune].quantity >= 1 && !craftable.includes(runeword.name)) {
            //check if recipe req are met
            recipe.forEach((rune) => {
              if (state[rune].quantity >= 1) {
                req_met++;
              }
            });

            // if recipe are met and rune isn't already in craftable array
            if (req_reqired === req_met) {
              craftable.push(runeword.name);
            }
          } else if (
            state[rune].quantity === 0 &&
            craftable.includes(runeword.name)
          ) {
            craftable.splice(runeword.name, 1);
          }
        });
      });
    }
  };
  checkCraftable();

  const addRune = (rune) => {
    setState((prevState) => {
      state[rune].quantity += 1;
      return {
        ...prevState,
      };
    });
    checkCraftable();
  };

  const minusRune = (rune) => {
    setState((prevState) => {
      state[rune].quantity -= 1;
      return {
        ...prevState,
      };
    });
    checkCraftable();
  };

  return (
    <Flex flexDir="row" mt={8}>
      <Box color="white">
        <Text mb={4} fontFamily="exocet" fontSize={24}>
          Inventory
        </Text>
        <SideMenu DATA={runes} setFilter={setFilter} currentFilter={filter}>
          <SimpleGrid columns={3}>
            {runes ? (
              runes[filter].map((rune, index) => {
                return (
                  <Runes
                    key={index}
                    rune={rune}
                    inventory={state}
                    addRune={addRune}
                    minusRune={minusRune}
                  />
                );
              })
            ) : (
              <div />
            )}
          </SimpleGrid>
        </SideMenu>
      </Box>

      <Box width="400px" color="white" ml={4}>
        <Text fontFamily="exocet" mb={4} fontSize={24} textAlign="center">
          Craftable Runewords
        </Text>

        <Box bg="#1D1D1D" p={1} mt={6}>
          {runewords ? (
            <Craftable craftable={craftable} runewords={runewords} />
          ) : (
            <div />
          )}
        </Box>
      </Box>
    </Flex>
  );
}
