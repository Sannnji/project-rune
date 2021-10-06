import { useContext } from "react";
import { SimpleGrid, Button, Text, useDisclosure } from "@chakra-ui/react";

import RuneModal from "./RuneModal";
import { MyContext } from "../../../context";
import RUNE_DATA from "../../../data/runes.json";

const runes = RUNE_DATA.runes;

export const RuneWiki = () => {
  const { context, setContext } = useContext(MyContext);
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <SimpleGrid columns="3">
      {runes.map((element, index) => (
        <Button
          key={index}
          bg="#090909"
          m={2}
          px={6}
          py={6}

          borderRadius="0"
          fontFamily="AvQest"
          flexDir="column"
          onClick={() => {
            setContext((prevContext) => {
              return {
                ...prevContext,
                rune: element,
              };
            });
            onToggle();
          }}
        >
          <Text color="#C7B377">{element.name}</Text>
          <Text color="#797979">{element.tier}</Text>
        </Button>
      ))}
      <RuneModal onClose={onClose} isOpen={isOpen} rune={context.rune} />
    </SimpleGrid>
  );
};
