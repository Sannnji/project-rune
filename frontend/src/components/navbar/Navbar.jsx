import { Flex, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { useState } from "react";

import NavLink from "./NavLink";
import User from "./User";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <Box zIndex={1} top={0}>
      <Flex
        py={4}
        px={{ base: 4, md: 12 }}
        justify="space-between"
        color="white"
        bg="#090909"
        boxShadow="lg"
        align="center"
        wrap="wrap"
      >
        <Link to="/">
          <Text fontFamily="exocet">Rune Tool</Text>
        </Link>

        <Box
          display={{ base: "block", lg: "none" }}
          onClick={() => handleToggle()}
          cursor="pointer"
        >
          <i class="fas fa-bars"></i>
        </Box>

        <Box
          display={{ base: show ? "block" : "none", lg: "flex" }}
          width={{ base: "full", lg: "auto" }}
          direction={{ base: "column", lg: "row" }}
        >
          <Flex align="center" direction={{ base: "column", lg: "row" }}>
            <NavLink href="/inventory" linkName="Inventory" />
            <NavLink href="/wiki" linkName="Wiki" />
            <User />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
