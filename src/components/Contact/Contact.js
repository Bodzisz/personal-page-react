import React from "react";
import "./Contact.css";
import Typewriter from "typewriter-effect";

function Contact() {
  return (
    <div className="container form-div">
      <h3>
        <Typewriter
          options={{
            strings: ["Send me an email!"],
            autoStart: true,
            loop: true,
          }}
        />
      </h3>
      <form
        action="https://formsubmit.co/kacper.wojcicki@protonmail.com"
        method="POST"
      >
        <input type="hidden" name="_subject" value="Personal Page Email" />

        <textarea
          type="text"
          name="message"
          rows="5"
          placeholder="Type your message"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your email address"
          required
        />

        <button type="submit" className="submit-button">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
