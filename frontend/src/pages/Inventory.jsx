import { useState, useEffect } from "react";
import { Box, Flex, Text, SimpleGrid, Button } from "@chakra-ui/react";

import DatabaseService from "../services/database";
import Runes from "../components/inventory/Rune";
import SideMenu from "../components/SideMenu";
import Craftable from "../components/inventory/Craftable";
import VisitorData from "../visitorData.json";

const craftable = [];

export default function Inventory() {
  const [runes, setRunes] = useState();
  const [runewords, setRunewords] = useState();
  const [filter, setFilter] = useState();

  const pastUser = JSON.parse(localStorage.getItem("user"));

  // default inventory (has Jah, Ber, Ith)
  const [inv, setInv] = useState(pastUser ? pastUser.inventory : VisitorData);

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

          if (inv[rune].quantity >= 1 && !craftable.includes(runeword.name)) {
            //check if recipe req are met
            recipe.forEach((rune) => {
              if (inv[rune].quantity >= 1) {
                req_met++;
              }
            });

            // if recipe are met and rune isn't already in craftable array
            if (req_reqired === req_met) {
              craftable.push(runeword.name);
            }
          } else if (
            inv[rune].quantity === 0 &&
            craftable.includes(runeword.name)
          ) {
            craftable.splice(runeword.name, 1);
          }
        });
      });
    }
  };

  const addRune = (rune) => {
    setInv((prevState) => {
      inv[rune].quantity += 1;
      return {
        ...prevState,
      };
    });
    checkCraftable();
  };

  const minusRune = (rune) => {
    setInv((prevState) => {
      inv[rune].quantity -= 1;
      return {
        ...prevState,
      };
    });
    checkCraftable();
  };

  useEffect(() => {
    retrieveRunewords();
    retrieveRunes();
  }, []);

  checkCraftable();

  return (
    <Flex flexDir="row" mt={8}>
      <Box color="white">
        <Flex>
          <Text mb={4} fontFamily="exocet" fontSize={24}>
            Inventory
          </Text>
          <Button
            bg="#090909"
            ml={7}
            _hover={{ color: "#C7B377", bg: "white" }}
            onClick={() => {
              pastUser
                ? DatabaseService.saveInv(
                    pastUser.username,
                    pastUser.token,
                    inv
                  )
                    .then((response) => {
                      pastUser.inventory = inv;
                      localStorage.setItem("user", JSON.stringify(pastUser));
                      alert("Inventory saved!");
                    })
                    .catch((err) => {
                      console.log(err);
                    })
                : alert("You are not logged in.");
            }}
          >
            Save Inventory
          </Button>
        </Flex>

        <SideMenu DATA={runes} setFilter={setFilter} currentFilter={filter}>
          <SimpleGrid columns={3}>
            {runes ? (
              runes[filter].map((rune, index) => {
                return (
                  <Runes
                    key={index}
                    rune={rune}
                    inventory={inv}
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
