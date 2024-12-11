import "./App.css";
import React from "react";
import { AppShell, Title } from "@mantine/core";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.location.replace("https://kacper.software");
  }, []);
  return (
    <AppShell mih={"100vh - 60px"}>
      <Title>Redirecting to kacper.software ...</Title>
    </AppShell>
  );
}

export default App;
