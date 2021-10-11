import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/provider";

import App from "./App";

import "./index.css";
import "./assets/fonts/AvQest.ttf";
import "./assets/fonts/exocet.ttf";
import theme from "./theme";

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById("root")
);