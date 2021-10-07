import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import { RunewordWiki } from "../components/wiki/runewords/RunewordWiki";
import { RuneWiki } from "../components/wiki/runes/RuneWiki";

export default function Wiki() {
  return (
    <>
      <Tabs align="center" my={16} variant="unstyled">
        <TabList
          color="white"
          justifyContent="center"
          width="50%"
          fontFamily="exocet"
        >
          <Tab
            _focus={{ outline: "none", boxShadow: "none" }}
            _selected={{ color: "#6969FF", bg: "#090909" }}
            borderRadius="md"
          >
            Runewords
          </Tab>
          <Tab
            _focus={{ outline: "none", boxShadow: "none" }}
            _selected={{ color: "#6969FF", bg: "#090909" }}
            borderRadius="md"
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
