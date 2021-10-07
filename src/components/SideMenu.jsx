import { Flex, Text } from "@chakra-ui/react";

export default function SideMenu({ children, DATA, setFilter, currentFilter }) {
  const filters = [];

  for (const tier in DATA) {
    filters.push(tier);
  }

  return (
    <Flex
      fontFamily="exocet"
      color="white"
      justifyContent={{ base: "space-evenly", md: "normal" }}
    >
      <Flex flexDir="column" align="baseline" mr={{ base: 4, md: 12 }}>
        {filters.map((filter, index) => {
          return (
            <Text
              key={index}
              textAlign="start"
              mb={2}
              color={currentFilter === filter ? "#6969FF" : "white"}
              onClick={() => {
                setFilter(filter);
              }}
              cursor="pointer"
            >
              {filter.replace(/_/g, " ")}
            </Text>
          );
        })}
      </Flex>

      <Flex flexDir="column">{children}</Flex>
    </Flex>
  );
}
