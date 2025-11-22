import { Container, Title } from "@mantine/core";
import React from "react";
import Typewriter from "typewriter-effect";

function Welcome() {
  return (
    <Container>
      <Title
        order={1}
        size="3rem"
        fw={900}
        variant="gradient"
        gradient={{ from: 'violet', to: '#c4a81a', deg: 45 }}
        style={{ fontFamily: "Bungee, sans-serif" }}
      >
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
