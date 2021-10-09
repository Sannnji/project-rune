import { Flex, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import User from "./User";

const NavLink = ({ href, linkName }) => {
  return (
    <Box mx={2} fontFamily="AvQest">
      <Link to={href}>{linkName}</Link>
    </Box>
  );
};

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
        <Text fontFamily="exocet">Rune Sack</Text>
      </Link>

      <Flex       align="center">
        <NavLink href="/" linkName="Inventory" />
        <NavLink href="/wiki" linkName="Wiki" />
        <User />
      </Flex>
    </Flex>
  );
}
