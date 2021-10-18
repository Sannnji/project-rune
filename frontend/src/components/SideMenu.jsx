import { Flex, Text } from "@chakra-ui/react";

export default function SideMenu({ children, DATA, setFilter, currentFilter }) {
  const filters = [];

  for (const tier in DATA) {
    filters.push(tier);
  }

  return (
    <Flex
      fontFamily="AvQest"
      color="white"
      flexDir="row"
      justifyContent={{ base: "center", lg: "normal" }}
    >
      <Flex flexDir="column" align="baseline" mr={{ base: 2, md: 12 }}>
        {filters.map((filter, index) => {
          return (
            <Text
              key={index}
              mb={2}
              textAlign="start"
              fontSize={{ base: "normal", md: "22px" }}
              color={currentFilter === filter ? "#C53030" : "white"}
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
