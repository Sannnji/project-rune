import { useState, useEffect } from "react";
import { Button, useDisclosure, Text, SimpleGrid } from "@chakra-ui/react";

import DatabaseService from "../../../services/database";
import SideMenu from "../../SideMenu";
import RunewordModal from "./RunewordModal";

export const RunewordWiki = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [filter, setFilter] = useState(0);
  const [runeword, setRuneword] = useState(null);
  const [runewords, setRunewords] = useState(null);

  useEffect(() => {
    retrieveRunewords();
  }, []);

  const retrieveRunewords = () => {
    DatabaseService.getRunewords()
      .then((response) => {
        setFilter(Object.keys(response.data)[0]);
        setRunewords(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SideMenu DATA={runewords} setFilter={setFilter} currentFilter={filter}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }}>
        {runewords && filter ? (
          runewords[filter].map((runeword, index) => (
            <Button
              key={index}
              bg="#090909"
              m={2}
              py={6}
              width="218px"
              borderRadius="0"
              fontFamily="AvQest"
              onClick={() => {
                setRuneword(runeword);
                onToggle();
              }}
              flexFlow="column"
            >
              <Text color="#C7B377">{runeword.name}</Text>
              <Text color="#797979">'{runeword.recipe}'</Text>
            </Button>
          ))
        ) : (
          <div />
        )}
      </SimpleGrid>

      <RunewordModal onClose={onClose} isOpen={isOpen} runeword={runeword} />
    </SideMenu>
  );
};
