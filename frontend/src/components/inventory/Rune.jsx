import { Box, Flex, Text, Image } from "@chakra-ui/react";

const CustomButton = ({ children, onClick }) => {
  return (
    <Box
      h="24px"
      w="24px"
      bg="#141414"
      position="relative"
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
    <Flex
      p={1}
      m={2}
      width="75px"
      bg="#1D1D1D"
      align="center"
      flexDir="column"
      justifyContent="space-evenly"
    >
      <Image src={process.env.PUBLIC_URL + rune.image} width="50%" />

      <Text>{rune.name}</Text>

      <Flex fontSize="x-large" align="center">
        <CustomButton
          onClick={() => {
            minusRune(rune.name);
          }}
        >
          <Text>-</Text>
        </CustomButton>

        <Text
          color={inventory[rune.name].quantity > 0 ? "#C53030" : "white"}
          mx={1}
          fontSize="sm"
        >
          {inventory[rune.name].quantity}
        </Text>

        <CustomButton
          onClick={() => {
            addRune(rune.name);
          }}
        >
          <Text>+</Text>
        </CustomButton>
      </Flex>
    </Flex>
  );
}
