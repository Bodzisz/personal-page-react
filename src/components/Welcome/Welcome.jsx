import { Container, Title } from "@mantine/core";
import React from "react";
import Typewriter from "typewriter-effect";

function Welcome() {
  return (
    <Container>
      <Title order={1} style={{ fontFamily: "Poppins sans-serif" }}>
        <Typewriter
          options={{
            strings: ["Hello, welcome to my site!", "I am a Java Developer.", "I am happy you are here ;)"],
            autoStart: true,
            loop: true,
          }}
        />
      </Title>
    </Container>
  );
}

export default Welcome;
