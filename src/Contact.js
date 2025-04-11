// Contact.js
import React from "react";
import "./styles.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out for collaborations or just a friendly hello 👋</p>

      <div className="contact-row">
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <span className="icon-text">malini.arulraj1@wovvtech.com</span>
        </div>
        <div className="contact-item">
          <FaPhone className="icon" />
          <span className="icon-text">+91-9876543210</span>
        </div>
        <div className="contact-item">
          <FaLinkedin className="icon" />
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="contact-item">
          <FaGithub className="icon" />
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
