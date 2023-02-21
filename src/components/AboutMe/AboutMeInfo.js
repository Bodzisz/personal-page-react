import React from "react";
import { FcOvertime } from "react-icons/fc";
import { FaUniversity, FaJava, FaChess } from "react-icons/fa";
import { IoMdFootball } from "react-icons/io";
import { GiMountains } from "react-icons/gi";

function AboutMeInfo() {
  return (
    <div>
      <div className="grid article-header-grid">
        <div className="article-header-java">
          <FaJava size="100" />
        </div>
        <div>
          <h2 className="about-me-name" id="about-me-name">
            Kacper <br /> Wójcicki
          </h2>
        </div>
      </div>
      <h2 className="primary-hover-color" id="about-me-java-dev">
        Java Developer
      </h2>
      <article className="about-me-article" id="about-me-article">
        <p>
          <FcOvertime /> <b>21</b> years old
        </p>
        <p>
          <FaUniversity /> 3rd Year student of <b>Applied Computer Science</b>{" "}
          on Wroclaw Unviersity of Technology
        </p>
        <p>
          Backend <b>80%</b> - <b>20%</b> Frontend
        </p>
        <p>
          Hobbies <IoMdFootball color="#FFFFFF" size="50" />
          {"            "}
          <FaChess color="#5B1D10" size="50" />
          {"            "}
          <GiMountains size="50" />
          {"            "}
        </p>
      </article>
    </div>
  );
}

export default AboutMeInfo;
