import React from "react";
import './Contact.css';

function Contact() {
    return (
    <div className="container form-div">
        <h3 className="typewrite" data-type='[ "Send me an email!" ]'></h3>
        <form action="https://formsubmit.co/kacper.wojcicki@protonmail.com" method="POST">
                <input type="hidden" name="_subject" value="Personal Page Email" />

                <label htmlFor="message">
                        Message
                        <textarea type="text" name="message" rows="5" required />
                </label>

                <label htmlFor="email">
                    Your Email Address
                    <input type="email" name="email" required />
                </label>
                
                <button type="submit" className="submit-button">Send</button>
        </form>
    </div>
    );
}

export default Contact;