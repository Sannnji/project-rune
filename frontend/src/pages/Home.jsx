import { Box, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box color="white" align="center" width="100%">
      {/* <Image src={diabloPic} position="absolute" left={0} zIndex={-1} /> */}
      <Heading mt={20} color="#C7B377" fontFamily="AvQest">
        🔥Welcome To Rune Tool!🔥
      </Heading>
      <Box mt={4} p={4} border="1px" borderColor="#C7B377" w="600px">
        <Text>
          Navigate over to Inventory to add runes you've collected to see the
          runewords you can craft!
        </Text>
        <br />
        <Text>Register to save your Inventory.(no email required)</Text>
        <br />
        <Text>This site is currently desktop only.</Text>
      </Box>
    </Box>
  );
}
