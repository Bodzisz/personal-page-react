import React, { useEffect, useState } from "react";
import { SiSpring, SiHibernate, SiReact, SiDocker, SiPython, SiHtml5, SiGit } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FcLinux } from "react-icons/fc";
import { SimpleGrid, Tooltip, useMantineTheme, Container, TooltipFloating } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

function TechnologiesIcons() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const tooltipEvents = { hover: true, focus: false, touch: true };

  const withTooltip = (label, children) => {
    return (
      <Tooltip label={label} offset={30} events={tooltipEvents}>
        <Container>{children}</Container>
      </Tooltip>
    );
  };

  return (
    <SimpleGrid cols={isMobile ? 1 : 3} verticalSpacing={"xl"} spacing={"xs"} pt={30} pb={50}>
      {withTooltip("Spring", <SiSpring className="grow" size="100" color="#1a751d" />)}
      {withTooltip("Hibernate", <SiHibernate className="grow" size="100" color="#e8b15f" />)}
      {withTooltip("SQL", <AiOutlineConsoleSql className="grow" size="100" color="#d4cfc9" />)}
      {withTooltip("React", <SiReact className="grow" size="100" color="#2e92f0" />)}
      {withTooltip("Linux", <FcLinux className="grow" size="100" />)}
      {withTooltip("Docker", <SiDocker className="grow" size="100" color="#0e6bc2" />)}
      {withTooltip("HTML", <SiHtml5 className="grow" size="100" color="#eb9307" />)}
      {withTooltip("Python", <SiPython className="grow" size="100" color="#a39b03" />)}
      {withTooltip("Git", <SiGit className="grow" size="100" color="#e34e34" />)}
    </SimpleGrid>
  );
}

export default TechnologiesIcons;
