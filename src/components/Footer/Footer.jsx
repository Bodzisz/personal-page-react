import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsMedium, BsTwitterX } from "react-icons/bs";
import { Anchor, Group, Container } from "@mantine/core";

function Footer() {
  const socialLinks = [
    { link: "https://x.com/kacpersoftware", icon: BsTwitterX },
    { link: "https://github.com/Bodzisz", icon: BsGithub },
    { link: "https://pl.linkedin.com/in/kacper-wojcicki-05a13521b", icon: BsLinkedin },
    { link: "https://medium.com/@kacper_wojcicki", icon: BsMedium },
    { link: "https://www.instagram.com/kacper_software", icon: BsInstagram },
  ];

  const items = socialLinks.map((item) => (
    <Anchor
      key={item.link}
      href={item.link}
      target="_blank"
      c="dimmed"
      style={{
        transition: 'all 0.3s ease',
        ':hover': {
          color: '#c4a81a',
          transform: 'scale(1.1)'
        }
      }}
    >
      <item.icon size={24} />
    </Anchor>
  ));

  return (
    <Container fluid p="xl" pb={{ base: 100, sm: 'xl' }} mt={50}>
      <Group justify="center" gap="xl">
        {items}
      </Group>
    </Container>
  );
}

export default Footer;
