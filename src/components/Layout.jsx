import { Flex } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Flex flexDir="column" px={{ base: 4, md: 12 }}>
      {children}
    </Flex>
  );
}
