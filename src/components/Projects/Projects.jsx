import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./Projects.css";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme, SimpleGrid, Center } from "@mantine/core";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((projects) => setProjects(projects))
      .then(setLoading(false))
      .catch((e) => {
        console.log(e);
        setHasError(true);
      });
  }, []);

  if (loading) return <div className="center-div" aria-busy="true"></div>;
  if (hasError) return <div className="center-div">Server Error :(</div>;

  return (
    <Center pt={30} pb={100}>
      <SimpleGrid cols={isMobile ? 1 : 3} spacing={"xl"}>
        {projects.map((project) => (
          <Card project={project} key={project.id} />
        ))}
      </SimpleGrid>
    </Center>
  );
}

export default Projects;
