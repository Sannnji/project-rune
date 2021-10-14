import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/provider";
import { ProvideAuth } from "./services/useAuth";

import App from "./App";

import "./index.css";
import "./assets/fonts/AvQest.ttf";
import "./assets/fonts/exocet.ttf";
import theme from "./theme";

ReactDOM.render(
  <ProvideAuth>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </ProvideAuth>,
  document.getElementById("root")
);
