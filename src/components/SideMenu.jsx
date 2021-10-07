import { Flex, Text } from "@chakra-ui/react";

export default function SideMenu({ children, DATA, setFilter }) {
  const filter = [];

  for (const tier in DATA) {
    filter.push(tier);
  }

  return (
    <Flex
      fontFamily="exocet"
      color="white"
      align="center"
      alignItems="baseline"
    >
      <Flex flexDir="column" align="baseline" mr={4}>
        {filter.map((catagory, index) => {
          return (
            <Text
              key={index}
              textAlign="start"
              mb={2}
              onClick={() => {
                setFilter(catagory);
              }}
            >
              {catagory}
            </Text>
          );
        })}
      </Flex>

      <Flex flexDir="column">{children}</Flex>
    </Flex>
  );
}
