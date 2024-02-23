import React from "react";
import "./Card.css";
import { Anchor } from "@mantine/core";

function Card({ project }) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(/images/${project.image})`,
      }}
    >
      <div className="card-content">
        <h2 className="card-title">{project.title}</h2>
        <p className="card-body">{project.desc}</p>
        <Anchor href={project.repo_url} role="button">
          Read More
        </Anchor>
      </div>
    </div>
  );
}

export default Card;
