import React from "react";
import "./styles.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="left">
        <h4>Hi, I am</h4>
        <h1 >  Malini Arulraj</h1>
        <p className="role">Front-end Developer</p>
      </div>
      <div className="right">
        <img
          src="https://img.freepik.com/premium-vector/developer-smart-woman-with-white-hair-works-laptop-3d-rendered-icon-isolated_831490-5401.jpg"
          alt="Profile"
          className="profile-img"
        />
      </div>
    </section>
  );
};

export default HeroSection;
