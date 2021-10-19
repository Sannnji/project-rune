import { Box, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box align="center" width="100%" my={24}>
      {/* <Image src={diabloPic} position="absolute" left={0} zIndex={-1} /> */}
      <Heading
        color="#C7B377"
        fontFamily="AvQest"
        fontSize={{ base: "x-large", lg: "xxx-large" }}
      >
        🔥Welcome To Rune Tool🔥
      </Heading>
      <Box
        mt={8}
        p={4}
        border="1px"
        borderColor="#C7B377"
        w={{ base: "auto", lg: "600px" }}
      >
        <Text>
          Navigate over to Inventory to add runes you've collected to see the
          runewords you can craft!
        </Text>
        <br />
        <Text>Register to save your Inventory. (No Email Required!)</Text>
      </Box>
    </Box>
  );
}
