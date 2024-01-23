import "./Welcome.css";
import React from "react";
import Typewriter from "typewriter-effect";

function Welcome() {
  return (
    <div className="container typediv">
      <h1>
        <Typewriter
          options={{
            strings: [
              "Hello, welcome to my site!",
              "I am a Java Developer.",
              "I am happy you are here ;)",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </div>
  );
}

export default Welcome;
