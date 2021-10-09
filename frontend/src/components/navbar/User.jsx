import { Box, Button } from "@chakra-ui/react";

export default function User({ user }) {
  const helloUser = user ? "PraiseTheSun" : "Login/Register";

  return (
    <Box>
      <Button
        size="sm"
        bg="#C53030"
        _hover={{ color: "black", bg: "lightgrey" }}
      >
        {helloUser}
      </Button>
    </Box>
  );
}
