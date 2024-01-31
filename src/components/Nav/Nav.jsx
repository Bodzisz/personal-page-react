import classes from "./Nav.module.css";
import React from "react";
import { Container, Group, Center, Drawer, Burger, createTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

function Nav() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  const getNavOptions = () => {
    return (
      <Center>
        <Group h="100%" gap={80} visibleFrom="sm">
          <a href="/" className={classes.link}>
            <span>Home</span>
          </a>
          <a href="/projects" className={classes.link}>
            <span>Projects</span>
          </a>
          <a href="/contact" className={classes.link}>
            <span>Contact</span>
          </a>
        </Group>
      </Center>
    );
  };

  const getMobileNavOptions = () => {
    return (
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        size="50%"
        padding="md"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <Group h="100%" gap={80} pt={"20vh"}>
          <a href="/" className={classes.link}>
            <span>Home</span>
          </a>
          <a href="/projects" className={classes.link}>
            <span>Projects</span>
          </a>
          <a href="/contact" className={classes.link}>
            <span>Contact</span>
          </a>
        </Group>
      </Drawer>
    );
  };

  return (
    <Container pt={20} pb={30}>
      {getNavOptions()}
      <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" pt={20} size={40} />
      {getMobileNavOptions()}
    </Container>
  );
}

export default Nav;
