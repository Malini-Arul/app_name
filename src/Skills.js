import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaGithub } from "react-icons/fa";
import "./styles.css";

const skills = [
  { name: "HTML", icon: <FaHtml5 color="#e34c26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#264de4" /> },
  { name: "JavaScript", icon: <FaJsSquare color="#f0db4f" /> },
  { name: "React", icon: <FaReact color="#61dbfb" /> },
  { name: "Node.js", icon: <FaNodeJs color="#68a063" /> },
  { name: "Git & GitHub", icon: <FaGithub color="#333" /> },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid" >
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-text">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
