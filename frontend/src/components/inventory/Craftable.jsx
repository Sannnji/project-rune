import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import RUNEWORD_DATA from "../../data/runewords.json"

export default function Craftable({ craftable }) {
  return (
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
                          <Text color="#C7B377">'{runeword2.recipe}'</Text>
                          <Text>Level Requirement: {runeword2.lvl_req}</Text>
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
  );
}
