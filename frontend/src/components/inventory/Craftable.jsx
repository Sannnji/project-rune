import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export default function Craftable({ craftable, runewords }) {
  if (craftable.length === 0) {
    return (
      <Box align="center" bg="#090909" m={4} p={2} color="#C7B377">
        You Don't Have Any Craftable Runewords
      </Box>
    );
  } else
    return (
      <Accordion allowToggle>
        {craftable.map((runeword, index) => {
          return (
            <>
              <AccordionItem key={index} border="none" bg="#090909" m={4}>
                <AccordionButton
                  justifyContent="center"
                  color="#C7B377"
                  position="relative"
                  _focus={{ outline: "none", boxShadow: "none" }}
                >
                  {runeword}
                  <AccordionIcon position="absolute" right={4} />
                </AccordionButton>

                <AccordionPanel textAlign="center" mt={-2}>
                  {Object.getOwnPropertyNames(runewords).map(
                    // eslint-disable-next-line array-callback-return
                    (property) => {
                      const runeword2 = runewords[property].find(
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
