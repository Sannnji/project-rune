import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import { RunewordWiki } from "../components/wiki/runewords/RunewordWiki";
import { RuneWiki } from "../components/wiki/runes/RuneWiki";

export default function Wiki() {
  return (
    <>
      <Tabs my={8} colorScheme="red">
        <TabList color="white" fontFamily="exocet">
          <Tab
            p={0}
            mr={4}
            fontSize={24}
            borderTopStartRadius="sm"
            borderTopEndRadius="sm"
            _focus={{ outline: "none", boxShadow: "none" }}
          >
            Runewords
          </Tab>
          <Tab
            p={0}
            fontSize={24}
            borderTopStartRadius="sm"
            borderTopEndRadius="sm"
            _focus={{ outline: "none", boxShadow: "none" }}
          >
            Runes
          </Tab>
        </TabList>

        <TabPanels mt={8}>
          <TabPanel p={0}>
            <RunewordWiki />
          </TabPanel>
          <TabPanel p={0}>
            <RuneWiki />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}