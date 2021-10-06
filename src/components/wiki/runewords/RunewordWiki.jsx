import { useState, useContext } from "react";
import { Button, useDisclosure, Text, SimpleGrid } from "@chakra-ui/react";

import { MyContext } from "../../../context";
import RUNEWORD_DATA from "../../../data/runewords.json";

import SideMenu from "../SideMenu";
import RunewordModal from "./RunewordModal";

export const RunewordWiki = () => {
  const { context, setContext } = useContext(MyContext);
  const { isOpen, onToggle, onClose } = useDisclosure();

  const [catagory, setCatagory] = useState(RUNEWORD_DATA.chest_armor);

  return (
    <SideMenu setCatagory={setCatagory}>
      <SimpleGrid columns="4">
        {catagory.map((element, index) => (
          <Button
            key={index}
            bg="#090909"
            m={2}
            px={6}
            py={6}
            minW="218px"
            borderRadius="0"
            fontFamily="AvQest"
            onClick={() => {
              setContext((prevContext) => {
                return { ...prevContext, runeword: element };
              });
              onToggle();
            }}
            flexFlow="column"
          >
            <Text color="#C7B377">{element.name}</Text>
            <Text color="#797979">'{element.rune_combo}'</Text>
          </Button>
        ))}
        <RunewordModal onClose={onClose} isOpen={isOpen} runeword={context.runeword} />
      </SimpleGrid>
    </SideMenu>
  );
};
