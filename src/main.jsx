import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@mantine/core/styles.css";
import "animate.css/animate.compat.css";
import App from "./App";
import { MantineProvider, createTheme } from "@mantine/core";
import { HelmetProvider } from "react-helmet-async";
import { rem } from "@mantine/core";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  primaryColor: "violet",
  defaultColorScheme: "dark",
  fontFamily: "Inter, sans-serif",
  colors: {
    // Custom glass palette or other colors can be added here if needed
  },
  fontSizes: {
    xs: rem(14),
    sm: rem(16),
    md: rem(18),
    lg: rem(20),
    xl: rem(22)
  }
});

root.render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark" forceColorScheme="dark">
      <HelmetProvider>
        <link rel="canonical" href={"https://kacper.software/"} />
        <App />
      </HelmetProvider>
    </MantineProvider>
  </React.StrictMode>
);
