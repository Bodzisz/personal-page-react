import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@mantine/core/styles.css";
import App from "./App";
import { MantineProvider, createTheme } from "@mantine/core";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
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
      "#AD1374",
    ],
    yellow: [
      "#FFFF00",
      "#FFFF99",
      "#FFF44F",
      "#FFFE71",
      "#FFDC35",
      "#DAA520",
      "#FBEC5D",
      "#FFDB58",
      "#FFBF00",
      "#FFD700",
    ],
  },
});

root.render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <App />
    </MantineProvider>
  </React.StrictMode>
);
