import { BsMoon, BsSun } from "react-icons/bs";
import cx from "clsx";
import { ActionIcon, Group, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import classes from "./LightModeSwitchButton.module.css";

export const LightModeSwitchButton = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("dark", { getInitialValueInEffect: true });

  return (
    <Group justify="center">
      <ActionIcon
        onClick={() => setColorScheme(computedColorScheme === "light" ? "dark" : "light")}
        variant="default"
        size="xl"
        aria-label="Toggle color scheme"
      >
        <BsMoon className={cx(classes.icon, classes.light)} stroke={1.5} />
        <BsSun className={cx(classes.icon, classes.dark)} stroke={1.5} />
      </ActionIcon>
    </Group>
  );
};
