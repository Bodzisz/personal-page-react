import classes from "./Nav.module.css";
import React from "react";
import { Container, Group, Center, Drawer, Burger, Anchor, Paper, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { BsHouse, BsMedium, BsInstagram, BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { GrContact, GrProjects } from "react-icons/gr";
import { FaBook } from "react-icons/fa";

function Nav() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  const links = [
    { link: "/", label: "Home", icon: BsHouse },
    { link: "/books", label: "Book Reviews", icon: FaBook },
    { link: "https://blog.kacper.software", label: "Blog", icon: BsMedium },
    { link: "/contact", label: "Contact", icon: GrContact },
  ];

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => {
        // event.preventDefault(); // Remove if using real routing
        // navigate(link.link);
      }}
    >
      <Group gap={8}>
        <link.icon size={18} />
        <span>{link.label}</span>
      </Group>
    </a>
  ));

  return (
    <Container size="md" py="xl" id="nav">
      <Paper className="glass" radius="xl" p="xs" visibleFrom="sm">
        <Group justify="center" px="md">
          <Group gap="lg">
            {items}
          </Group>
        </Group>
      </Paper>

      <Group justify="flex-end" hiddenFrom="sm">
        <Burger opened={drawerOpened} onClick={toggleDrawer} size="sm" />
      </Group>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <Stack gap="lg">
          {items}
        </Stack>

        <Group justify="center" gap="lg" mt="xl">
          <Anchor href="https://x.com/kacpersoftware" c="dimmed"><BsTwitterX size={20} /></Anchor>
          <Anchor href="https://github.com/Bodzisz" c="dimmed"><BsGithub size={20} /></Anchor>
          <Anchor href="https://pl.linkedin.com/in/kacper-wojcicki-05a13521b" c="dimmed"><BsLinkedin size={20} /></Anchor>
          <Anchor href="https://medium.com/@kacper_wojcicki" c="dimmed"><BsMedium size={20} /></Anchor>
          <Anchor href="https://www.instagram.com/kacper_software" c="dimmed"><BsInstagram size={20} /></Anchor>
        </Group>
      </Drawer>
    </Container>
  );
}

export default Nav;
