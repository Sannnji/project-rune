import { Flex } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Flex flexDir="column" px={12}>
      {children}
    </Flex>
  );
}
