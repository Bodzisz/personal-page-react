import React from "react";
import "./Contact.css";
import Typewriter from "typewriter-effect";
import { Button, Center, Container, Input, Textarea, Title } from "@mantine/core";

function Contact() {
  return (
    <Container className="form-div" pt={150}>
      <Center>
        <Title order={3} pb={10}>
          <Typewriter
            options={{
              strings: ["Send me an email here!"],
              autoStart: true,
              loop: true,
            }}
          />
        </Title>
      </Center>
      <form action="https://formsubmit.co/kacper.wojcicki@protonmail.com" method="POST">
        <input type="hidden" name="_subject" value="Personal Page Email" />

        <Textarea
          type="text"
          name="message"
          rows="5"
          placeholder="Type your message"
          autosize
          minRows={10}
          maxRows={20}
          withAsterisk
          required
          pb={10}
        />

        <Input type="email" name="email" placeholder="Your email address" required pb={10} />

        <Center>
          <Button type="submit" className="submit-button" w={"100%"}>
            Send
          </Button>
        </Center>
      </form>
    </Container>
  );
}

export default Contact;
