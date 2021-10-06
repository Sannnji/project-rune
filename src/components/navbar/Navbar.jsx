import { Flex, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavLink = ({ href, linkName }) => {
  return (
    <Box mx={2}>
      <Link to={href}>{linkName}</Link>
    </Box>
  );
};

export default function Navbar() {
  return (
    <Flex
      width="100%"
      py={4}
      px={12}
      zIndex={1}
      fontFamily="exocet"
      justifyContent="space-between"
      color="white"
      bg="#090909"
      boxShadow="lg"
    >
      <Link to="/">
        <Text>Project Runes</Text>
      </Link>

      <Flex>
        <NavLink href="/inventory" linkName="Inventory" />
        <NavLink href="/wiki" linkName="Wiki" />
      </Flex>
    </Flex>
  );
}
