import { useState, useEffect } from "react";
import { SimpleGrid, Button, Text, useDisclosure } from "@chakra-ui/react";

import DatabaseService from "../../../services/database";
import RuneModal from "./RuneModal";
import SideMenu from "../../SideMenu";

export const RuneWiki = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [filter, setFilter] = useState();
  const [rune, setRune] = useState();
  const [runes, setRunes] = useState(null);

  useEffect(() => {
    retrieveRunes();
  }, []);

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

  return (
    <>
      <SideMenu DATA={runes} setFilter={setFilter} currentFilter={filter}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }}>
          {runes && filter ? (
            runes[filter].map((rune, index) => {
              return (
                <Button
                  key={index}
                  bg="#090909"
                  m={2}
                  py={6}
                  width="218px"
                  borderRadius="0"
                  fontFamily="AvQest"
                  flexDir="column"
                  onClick={() => {
                    setRune(rune);
                    onToggle();
                  }}
                >
                  <Text color="#C7B377">{rune.name}</Text>
                  <Text color="#797979">{rune.tier}</Text>
                </Button>
              );
            })
          ) : (
            <div />
          )}
        </SimpleGrid>

        <RuneModal onClose={onClose} isOpen={isOpen} rune={rune} />
      </SideMenu>
    </>
  );
};
