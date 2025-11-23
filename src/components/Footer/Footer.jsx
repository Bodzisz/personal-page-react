import React from "react";
import classes from "./Footer.module.css";
import { BsGithub, BsInstagram, BsLinkedin, BsMedium, BsTwitterX } from "react-icons/bs";
import { Anchor, Group, Container, Paper, Stack, Text } from "@mantine/core";

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
      className={classes.socialLink}
    >
      <item.icon size={24} />
    </Anchor>
  ));

  return (
    <Container fluid p="xl" pb={{ base: 100, sm: 'xl' }} mt={50}>
      <Paper className="glass" radius="xl" p="md">
        <Stack align="center" gap="xs">
          <Group justify="center" gap="xl">
            {items}
          </Group>
          <Text c="dimmed" size="sm" pt="md">
            © {new Date().getFullYear()} Kacper Wójcicki
          </Text>
        </Stack>
      </Paper>
    </Container>
  );
}

export default Footer;
