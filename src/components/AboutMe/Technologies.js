import React, { useState } from "react";
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

  return (
    <div className="technologies-grid">
      <div className="icon-div">
        <SiSpring
          className="grow"
          size="100"
          color="#1a751d"
          onMouseEnter={() => setIsShown({ ...isShown, spring: true })}
          onMouseLeave={() => setIsShown({ ...isShown, spring: false })}
          onClick={() => setIsShown({ ...isShown, spring: !isShown.spring })}
        />
        {isShown.spring ? <p className="icon-desc">Spring</p> : null}
      </div>
      <div className="icon-div">
        <SiHibernate
          className="grow"
          size="100"
          color="#e8b15f"
          onMouseEnter={() => setIsShown({ ...isShown, hibernate: true })}
          onMouseLeave={() => setIsShown({ ...isShown, hibernate: false })}
          onClick={() =>
            setIsShown({ ...isShown, hibernate: !isShown.hibernate })
          }
        />
        {isShown.hibernate ? <p className="icon-desc">Hibernate</p> : null}
      </div>
      <div className="icon-div">
        <AiOutlineConsoleSql
          className="grow"
          size="100"
          color="#d4cfc9"
          onMouseEnter={() => setIsShown({ ...isShown, sql: true })}
          onMouseLeave={() => setIsShown({ ...isShown, sql: false })}
          onClick={() => setIsShown({ ...isShown, sql: !isShown.sql })}
        />
        {isShown.sql ? <p className="icon-desc">SQL</p> : null}
      </div>
      <div className="icon-div">
        <SiReact
          className="grow"
          size="100"
          color="#2e92f0"
          onMouseEnter={() => setIsShown({ ...isShown, react: true })}
          onMouseLeave={() => setIsShown({ ...isShown, react: false })}
          onClick={() => setIsShown({ ...isShown, react: !isShown.react })}
        />
        {isShown.react ? <p className="icon-desc">React</p> : null}
      </div>
      <div className="icon-div">
        <FcLinux
          className="grow"
          size="100"
          onMouseEnter={() => setIsShown({ ...isShown, linux: true })}
          onMouseLeave={() => setIsShown({ ...isShown, linux: false })}
          onClick={() => setIsShown({ ...isShown, linux: !isShown.linux })}
        />
        {isShown.linux ? <p className="icon-desc">Linux</p> : null}
      </div>
      <div className="icon-div">
        <SiDocker
          className="grow"
          size="100"
          color="#0e6bc2"
          onMouseEnter={() => setIsShown({ ...isShown, docker: true })}
          onMouseLeave={() => setIsShown({ ...isShown, docker: false })}
          onClick={() => setIsShown({ ...isShown, docker: !isShown.docker })}
        />
        {isShown.docker ? <p className="icon-desc">Docker</p> : null}
      </div>
      <div className="icon-div">
        <SiPython
          className="grow"
          size="100"
          color="#a39b03"
          onMouseEnter={() => setIsShown({ ...isShown, python: true })}
          onMouseLeave={() => setIsShown({ ...isShown, python: false })}
          onClick={() => setIsShown({ ...isShown, python: !isShown.python })}
        />
        {isShown.python ? <p className="icon-desc">Python</p> : null}
      </div>
      <div className="icon-div">
        <SiHtml5
          className="grow"
          size="100"
          color="#eb9307"
          onMouseEnter={() => setIsShown({ ...isShown, html: true })}
          onMouseLeave={() => setIsShown({ ...isShown, html: false })}
          onClick={() => setIsShown({ ...isShown, html: !isShown.html })}
        />
        {isShown.html ? <p className="icon-desc">HTML5</p> : null}
      </div>
      <div className="icon-div">
        <SiGit
          className="grow"
          size="100"
          color="#e34e34"
          onMouseEnter={() => setIsShown({ ...isShown, git: true })}
          onMouseLeave={() => setIsShown({ ...isShown, git: false })}
          onClick={() => setIsShown({ ...isShown, git: !isShown.git })}
        />
        {isShown.git ? <p className="icon-desc">GIT</p> : null}
      </div>
    </div>
  );
}

export default TechnologiesIcons;