import React from "react";
import Typewriter from "typewriter-effect";
import { BsGithub, BsInstagram, BsLinkedin, BsMedium, BsTwitterX } from "react-icons/bs";
import { Button, Center, Container, Group, Input, Textarea, Title, Text } from "@mantine/core";
import ContactLink from "./ContactLink";
import SEO from "../SEO/SEO";

function Contact() {
  const getEmailContactForm = () => {
    return (
      <Container miw={"40%"} bg={"rgba(0, 0, 0, 0.1)"} p={50} style={{ borderRadius: "40px" }}>
        <Container>
          <Center>
            <Title order={3} pb={10} c={"var(--text-color)"}>
              <Typewriter
                options={{
                  strings: ["Send me an email here!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Title>
          </Center>
        </Container>
        <Container>
          <form action="https://formsubmit.co/kacper.wojcicki@protonmail.com" method="POST" style={{ width: "100%" }}>
            <input type="hidden" name="_subject" value="Personal Page Email" />

            <Textarea
              type="text"
              name="message"
              rows="5"
              placeholder="Type your message"
              autosize
              minRows={15}
              maxRows={25}
              withAsterisk
              required
              mb={10}
              style={{
                borderRadius: "7px",
              }}
              variant="unstyled"
              p={10}
            />

            <Input type="email" name="email" placeholder="Your email address" required pb={10} variant="unstyled" />

            <Center>
              <Button type="submit" className="submit-button" w={"100%"}>
                Send
              </Button>
            </Center>
          </form>

          <Center pt={15} pb={30}>
            <Group>
              <Text c={"var(--text-color)"}>Or write me directly at</Text>{" "}
              <Text c={"var(--primary-hover)"}>contact@kacper.software</Text>
            </Group>
          </Center>
        </Container>
      </Container>
    );
  };

  const getContactLinks = () => {
    const iconSize = 30;

    return (
      <Container miw={"40%"}>
        <ContactLink link="https://github.com/Bodzisz" icon={<BsGithub size={iconSize} />} name={"Github"} />
        <ContactLink
          link="https://www.linkedin.com/in/kacper-wojcicki-05a13521b/"
          icon={<BsLinkedin size={iconSize} />}
          name={"LinkedIn"}
        />
        <ContactLink link="https://x.com/kacpersoftware" icon={<BsTwitterX size={iconSize} />} name={"X /Twitter"} />
        <ContactLink link="https://medium.com/@kacper_wojcicki" icon={<BsMedium size={iconSize} />} name={"Medium"} />
        <ContactLink
          link="https://www.instagram.com/kacper_software"
          icon={<BsInstagram size={iconSize} />}
          name={"Instagram"}
        />
      </Container>
    );
  };

  const getHelmetSeoTags = () => {
    return (
      <SEO
        title="Kacper Wojcicki - Contact"
        description="Connect with Kacper Wojcicki on Medium, Instagram, X/Twitter, GitHub, LinkedIn, or via email. Explore my work, projects, and ideas across platforms"
        canonical="https://kacper.software/contact"
      />
    );
  };

  return (
    <>
      {getHelmetSeoTags()}
      <Container mih={"calc(100vh - 90px)"} pt={"calc(0.05 * 100vh)"} size={"xl"} pb={100}>
        <Group mb={100}>
          {getContactLinks()}
          {getEmailContactForm()}
        </Group>
      </Container>
    </>
  );
}

export default Contact;
