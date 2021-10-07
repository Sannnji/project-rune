import { Box, Flex, Text, Image } from "@chakra-ui/react";

export default function Runes({ rune, inventory, addRune, minusRune }) {
  return (
    <Flex
      bg="#1D1D1D"
      py={1}
      px={1}
      m={2}
      align="center"
      justifyContent="space-evenly"
    >
      <Image src={process.env.PUBLIC_URL + `/${rune.image}`} />
      <Text mx={2}>{rune.name}</Text>

      <Flex flexDir="column" mr={2} align="center">
        <Text fontSize="small">qt.</Text>
        <Text>{inventory[rune.name].quantity}</Text>
      </Flex>

      <Flex flexDir="column" fontSize="x-large">
        <Box
          h="28px"
          w="28px"
          mb={1}
          bg="#141414"
          textAlign="center"
          lineHeight="1.25"
          cursor="pointer"
          _hover={{ bg: "white", color: "black" }}
          onClick={() => {
            addRune(rune.name);
          }}
        >
          <Text>+</Text>
        </Box>
        <Box
          h="28px"
          w="28px"
          bg="#141414"
          textAlign="center"
          cursor="pointer"
          lineHeight="1.25"
          _hover={{ bg: "white", color: "black" }}
          onClick={() => {
            minusRune(rune.name);
          }}
        >
          <Text>-</Text>
        </Box>
      </Flex>
    </Flex>
  );
}
