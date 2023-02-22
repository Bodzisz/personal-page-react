import "./Welcome.css";
import React from "react";

function Welcome() {
  return (
    <div className="container typediv">
      <h1
        className="typewrite"
        data-type='[ "Hello, welcome to my site!","I am a Java Developer.", "I am happy you are here ;)" ]'
      >Hello, welcome to my site!</h1>
    </div>
  );
}

export default Welcome;
