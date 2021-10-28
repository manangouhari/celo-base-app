import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { ChakraProvider } from "@chakra-ui/react";
import { ContractKitProvider, Alfajores } from "@celo-tools/use-contractkit";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ContractKitProvider
        networks={[Alfajores]}
        dapp={{
          name: "NFT Market",
          description: "_",
          url: "https://example.com",
        }}
      >
        <App />
      </ContractKitProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
