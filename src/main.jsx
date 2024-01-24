import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@mantine/core/styles.css";
import App from "./App";
import { MantineProvider, createTheme } from "@mantine/core";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  /** To be filled */
});

root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
