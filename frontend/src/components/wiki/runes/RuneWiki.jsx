import { useState } from "react";
import { SimpleGrid, Button, Text, useDisclosure } from "@chakra-ui/react";

import RUNE_DATA from "../../../data/runes.json";
import RuneModal from "./RuneModal";
import SideMenu from "../../SideMenu";

export const RuneWiki = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [rune, setRune] = useState(null);

  const [filter, setFilter] = useState(Object.keys(RUNE_DATA)[0]);

  return (
    <SideMenu DATA={RUNE_DATA} setFilter={setFilter} currentFilter={filter}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }}>
        {RUNE_DATA[filter].map((rune, index) => {
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
        })}
      </SimpleGrid>

      <RuneModal onClose={onClose} isOpen={isOpen} rune={rune} />
    </SideMenu>
  );
};
