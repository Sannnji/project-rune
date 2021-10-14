import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import NavLink from "./NavLink";
import User from "./User";

export default function Navbar() {
  return (
    <Flex
      width="100%"
      py={4}
      px={{ base: 4, md: 12 }}
      zIndex={1}
      justifyContent="space-between"
      color="white"
      bg="#090909"
      boxShadow="lg"
      align="center"
    >
      <Link to="/">
        <Text fontFamily="exocet">Rune Tool</Text>
      </Link>

      <Flex align="center">
        <NavLink href="/inventory" linkName="Inventory" />
        <NavLink href="/wiki" linkName="Wiki" />
        <User />
      </Flex>
    </Flex>
  );
}
