import React, { useEffect, useState } from "react";
import {
  SiSpring,
  SiHibernate,
  SiReact,
  SiDocker,
  SiPython,
  SiHtml5,
  SiGit,
} from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FcLinux } from "react-icons/fc";

function TechnologiesIcons() {
  const isShownInitialData = {
    spring: false,
    hibernate: false,
    sql: false,
    react: false,
    linux: false,
    docker: false,
    python: false,
    html: false,
    git: false,
  };
  const [isShown, setIsShown] = useState(isShownInitialData);
  const [usingTouch, setUsingTouch] = useState(false);

  useEffect(() => {
    window.addEventListener("touchstart", handleTouchStart());

    return () => {
      window.removeEventListener("touchstart", handleTouchStart());
    };
  }, []);

  useEffect(() => {
    window.addEventListener("touchend", handleTouchEnd());

    return () => {
      window.removeEventListener("touchend", handleTouchEnd());
    };
  }, []);

  const handleTouchStart = () => {
    setUsingTouch(true);
  };
  const handleTouchEnd = () => {
    setUsingTouch(false);
  };

  const setIconShown = (fieldName, value, shouldUseTouch) => {
    if (usingTouch === shouldUseTouch) {
      setIsShown({ ...isShown, [fieldName]: value });
    }
  };

  return (
    <div className="technologies-grid">
      <div
        className="icon-div"
        onMouseEnter={() => setIconShown("spring", true, false)}
        onMouseLeave={() => setIconShown("spring", false, false)}
        onClick={() => setIconShown("spring", !isShown.spring, true)}
      >
        <SiSpring className="grow" size="100" color="#1a751d" />
        {isShown.spring ? <p className="icon-desc">Spring</p> : null}
      </div>
      <div
        className="icon-div"
        onMouseEnter={() => setIconShown("hibernate", true, false)}
        onMouseLeave={() => setIconShown("hibernate", false, false)}
        onClick={() => setIconShown("hibernate", !isShown.hibernate, true)}
      >
        <SiHibernate className="grow" size="100" color="#e8b15f" />
        {isShown.hibernate ? <p className="icon-desc">Hibernate</p> : null}
      </div>
      <div
        className="icon-div"
        onMouseEnter={() => setIconShown("sql", true, false)}
        onMouseLeave={() => setIconShown("sql", false, false)}
        onClick={() => setIconShown("sql", !isShown.sql, true)}
      >
        <AiOutlineConsoleSql className="grow" size="100" color="#d4cfc9" />
        {isShown.sql ? <p className="icon-desc">SQL</p> : null}
      </div>
      <div
        className="icon-div"
        onMouseEnter={() => setIconShown("react", true, false)}
        onMouseLeave={() => setIconShown("react", false, false)}
        onClick={() => setIconShown("react", !isShown.react, true)}
      >
        <SiReact className="grow" size="100" color="#2e92f0" />
        {isShown.react ? <p className="icon-desc">React</p> : null}
      </div>
      <div
        className="icon-div"
        onMouseEnter={() => setIconShown("linux", true, false)}
        onMouseLeave={() => setIconShown("linux", false, false)}
        onClick={() => setIconShown("linux", !isShown.linux, true)}
      >
        <FcLinux className="grow" size="100" />
        {isShown.linux ? <p className="icon-desc">Linux</p> : null}
      </div>
      <div
        className="icon-div"
        onMouseEnter={() => setIconShown("docker", true, false)}
        onMouseLeave={() => setIconShown("docker", false, false)}
        onClick={() => setIconShown("docker", !isShown.docker, true)}
      >
        <SiDocker className="grow" size="100" color="#0e6bc2" />
        {isShown.docker ? <p className="icon-desc">Docker</p> : null}
      </div>
      <div
        className="icon-div"
        onMouseEnter={() => setIconShown("python", true, false)}
        onMouseLeave={() => setIconShown("python", false, false)}
        onClick={() => setIconShown("python", !isShown.python, true)}
      >
        <SiPython className="grow" size="100" color="#a39b03" />
        {isShown.python ? <p className="icon-desc">Python</p> : null}
      </div>
      <div
        className="icon-div"
        onMouseEnter={() => setIconShown("html", true, false)}
        onMouseLeave={() => setIconShown("html", false, false)}
        onClick={() => setIconShown("html", !isShown.html, true)}
      >
        <SiHtml5 className="grow" size="100" color="#eb9307" />
        {isShown.html ? <p className="icon-desc">HTML5</p> : null}
      </div>
      <div
        className="icon-div"
        onMouseEnter={() => setIconShown("git", true, false)}
        onMouseLeave={() => setIconShown("git", false, false)}
        onClick={() => setIconShown("git", !isShown.git, true)}
      >
        <SiGit className="grow" size="100" color="#e34e34" />
        {isShown.git ? <p className="icon-desc">GIT</p> : null}
      </div>
    </div>
  );
}

export default TechnologiesIcons;
