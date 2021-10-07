import { useState } from "react";
import { Button, useDisclosure, Text, SimpleGrid } from "@chakra-ui/react";

import RUNEWORD_DATA from "../../../data/runewords.json";
import SideMenu from "../SideMenu";
import RunewordModal from "./RunewordModal";

export const RunewordWiki = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [runeword, setRuneword] = useState(null);

  const [filter, setFilter] = useState(Object.keys(RUNEWORD_DATA)[0]);

  return (
    <SideMenu DATA={RUNEWORD_DATA} setFilter={setFilter}>
      <SimpleGrid columns="4">
        {RUNEWORD_DATA[filter].map((runeword, index) => (
          <Button
            key={index}
            bg="#090909"
            m={2}
            py={6}
            maxW="180px"
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
        ))}

        <RunewordModal onClose={onClose} isOpen={isOpen} runeword={runeword} />
      </SimpleGrid>
    </SideMenu>
  );
};
