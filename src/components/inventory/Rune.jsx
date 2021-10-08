import { Box, Flex, Text, Image } from "@chakra-ui/react";

const CustomButton = ({ children, onClick }) => {
  return (
    <Box
      h="28px"
      w="28px"
      bg="#141414"
      textAlign="center"
      cursor="pointer"
      lineHeight="1.25"
      _hover={{ bg: "white", color: "black" }}
      onClick={onClick}
    >
      {children}
    </Box>
  );
};

export default function Rune({ rune, inventory, addRune, minusRune }) {
  return (
    <Flex bg="#1D1D1D" p={1} m={2} align="center" justifyContent="space-evenly">
      <Image src={process.env.PUBLIC_URL + `/${rune.image}`} />

      <Text mx={2}>{rune.name}</Text>

      <Flex flexDir="column" mr={2} align="center">
        <Text fontSize="small">qt.</Text>
        <Text color={inventory[rune.name].quantity > 0 ? "#C53030" : "white"}>
          {inventory[rune.name].quantity}
        </Text>
      </Flex>

      <Flex flexDir="column" fontSize="x-large">
        <CustomButton
          onClick={() => {
            addRune(rune.name);
          }}
        >
          <Text>+</Text>
        </CustomButton>

        <CustomButton
          onClick={() => {
            minusRune(rune.name);
          }}
        >
          <Text>-</Text>
        </CustomButton>
      </Flex>
    </Flex>
  );
}
