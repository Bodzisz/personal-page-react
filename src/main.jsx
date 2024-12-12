import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@mantine/core/styles.css";
import "animate.css/animate.compat.css";
import App from "./App";
import { MantineProvider, createTheme } from "@mantine/core";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  // colorScheme: "dark",
  primaryColor: "yellow",
  colors: {
    "bright-pink": [
      "#F0BBDD",
      "#ED9BCF",
      "#EC7CC3",
      "#ED5DB8",
      "#F13EAF",
      "#F71FA7",
      "#FF00A1",
      "#E00890",
      "#C50E82",
      "#AD1374"
    ],
    yellow: [
      "#fefae2",
      "#f9f3d1",
      "#f2e5a7",
      "#ead778",
      "#e3cb52",
      "#dfc338",
      "#ddbf29",
      "#c4a81a",
      "#ae9510",
      "#968000"
    ]
  }
});

root.render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </MantineProvider>
  </React.StrictMode>
);
