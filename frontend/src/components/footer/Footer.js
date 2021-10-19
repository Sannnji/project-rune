import { Box, Stack, Text } from "@chakra-ui/react";

import { Copyright } from "./Copyright";
import { SocialMediaLinks } from "./SocialMediaLinks";

export default function Footer() {
  return (
    <Box
      as="footer"
      role="contentinfo"
      py={12}
      px={{ base: 4, md: 12 }}
    >
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Text>Site created by James Ji</Text>
        <SocialMediaLinks />
      </Stack>
      <Copyright alignSelf={{ base: "center", sm: "start" }} />
    </Box>
  );
}
