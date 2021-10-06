import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#151515",
        fontFamily: "AvQest",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        _focus: { outline: "none", boxShadow: "none" },
      },
    },
  },
});

export default theme;
