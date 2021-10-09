import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import RUNEWORD_DATA from "../data/runewords.json";
import RUNE_DATA from "../data/runes.json";

import Runes from "../components/inventory/Rune";
import SideMenu from "../components/SideMenu";

const craftable = [];
const catagories = [];

for (const tier in RUNE_DATA) {
  catagories.push(tier);
}

export default function Inventory() {
  // user inventory (has only Jah Ber Ith)
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

  const [filter, setFilter] = useState(Object.keys(RUNE_DATA)[0]);

  const checkCraftable = () => {
    for (const property in RUNEWORD_DATA) {
      RUNEWORD_DATA[property].forEach((runeword) => {
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
        <SideMenu DATA={RUNE_DATA} setFilter={setFilter} currentFilter={filter}>
          <SimpleGrid columns={3}>
            {RUNE_DATA[filter].map((rune) => {
              return (
                <Runes
                  rune={rune}
                  inventory={state}
                  addRune={addRune}
                  minusRune={minusRune}
                />
              );
            })}
          </SimpleGrid>
        </SideMenu>
      </Box>

      <Box width="400px" color="white" ml={4}>
        <Text fontFamily="exocet" mb={4} fontSize={24} textAlign="center">
          Craftable Runewords
        </Text>
        <Box bg="#1D1D1D" p={1} mt={6}>
          <Accordion allowToggle>
            {craftable.map((runeword, index) => {
              return (
                <>
                  <AccordionItem key={index} border="none" bg="#090909" m={4}>
                    <AccordionButton
                      _focus={{ outline: "none", boxShadow: "none" }}
                      position="relative"
                    >
                      <Box flex="1" textAlign="center" color="#C7B377">
                        {runeword}
                      </Box>
                      <AccordionIcon position="absolute" right={4} />
                    </AccordionButton>

                    <AccordionPanel textAlign="center" mt={-2}>
                      {Object.getOwnPropertyNames(RUNEWORD_DATA).map(
                        // eslint-disable-next-line array-callback-return
                        (property) => {
                          const runeword2 = RUNEWORD_DATA[property].find(
                            (rw) => rw.name === runeword
                          );

                          if (runeword2)
                            return (
                              <>
                                <Text color="#797979">{runeword2.gear}</Text>
                                <Text color="#C7B377">
                                  '{runeword2.recipe}'
                                </Text>
                                <Text>
                                  Level Requirement: {runeword2.lvl_req}
                                </Text>
                                {runeword2.stats.map((stat) => {
                                  return <Text color="#6969FF">{stat}</Text>;
                                })}
                              </>
                            );
                        }
                      )}
                    </AccordionPanel>
                  </AccordionItem>
                </>
              );
            })}
          </Accordion>
        </Box>
      </Box>
    </Flex>
  );
}
