import { Flex, Text } from "@chakra-ui/react";

import RUNEWORD_DATA from "../../data/runewords.json";

export default function SideMenu({ children, setCatagory }) {
  return (
    <Flex
      fontFamily="exocet"
      color="white"
      align="center"
      alignItems="baseline"
    >
      <Flex flexDir="column" align="baseline" mr={4}>
        <Text
          textAlign="start"
          mb={2}
          onClick={() => setCatagory(RUNEWORD_DATA.chest_armor)}
        >
          Chest Armor
        </Text>
        <Text
          textAlign="start"
          mb={2}
          onClick={() => setCatagory(RUNEWORD_DATA.head_armor)}
        >
          Head Armor
        </Text>
        <Text mb={2} onClick={() => setCatagory(RUNEWORD_DATA.shield)}>
          Shield
        </Text>
        <Text mb={2} onClick={() => setCatagory(RUNEWORD_DATA.weapon)}>
          Weapon
        </Text>
      </Flex>

      {children}
    </Flex>
  );
}
