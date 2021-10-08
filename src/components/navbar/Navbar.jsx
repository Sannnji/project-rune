import { Flex, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
    >
      <Link to="/">
        <Text fontFamily="exocet">Rune Sack</Text>
      </Link>

      <Flex>
        <NavLink href="/" linkName="Inventory" />
        <NavLink href="/wiki" linkName="Wiki" />
      </Flex>
    </Flex>
  );
}
