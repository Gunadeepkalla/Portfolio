import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

import theme_pattern from "../assets/theme_pattern.svg";
import mailicon from "../assets/mailicon.png";
import locationicon from "../assets/locationicon.png";
import phoneicon from "../assets/phoneicon.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e232kmr",   // EmailJS Service ID
        "template_qacqt7p",  // EmailJS Template ID
        form.current,
        "ZkNLlhNERN0dcSH5d"  // Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully ✅");
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong ❌");
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="backgroundimage" />
      </div>

      <div className="contact-section">
        {/* Left Section */}
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I’m open to exciting opportunities and collaborations. Feel free to
            reach out if you have a project or requirement—I’d be happy to work
            with you.
          </p>
          <div className="contact-details">
            <div className="contact-details">
              <img src={mailicon} alt="" /> <p>gunadeepkalla33@gmail.com</p>
            </div>
            <div className="contact-details">
              <img src={phoneicon} alt="" /> <p>+91 8143725278</p>
            </div>
            <div className="contact-details">
              <img src={locationicon} alt="" />{" "}
              <p>Bhimavaram, Andhra Pradesh, India</p>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <form ref={form} onSubmit={sendEmail} className="contact-right">
          <label>Your Name</label>
          <input type="text" name="user_name" placeholder="Enter your name" required />

          <label>Your Email</label>
          <input type="email" name="user_email" placeholder="Enter your email" required />

          <label>Your Message</label>
          <textarea name="message" rows="8" placeholder="Enter your message" required></textarea>

          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
