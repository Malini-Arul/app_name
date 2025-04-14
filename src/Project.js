// Projects.js
import React from "react";
import "./styles.css";

const projects = [
  {
    title: "Ride Booking App",
    description: "Built core UI blocks, integrated REST APIs, and implemented ride confirmation flow with payment methods.",
    technologies: ["React Native", "Redux", "REST API", "Firebase"],
  },
  {
    title: "E-commerce App",
    description: "Created responsive UI screens, managed state with Redux, and handled cart, wishlist, and order flow.",
    technologies: ["React Native", "Redux Toolkit", "Node.js"],
  },
  {
    title: "Social Media Clone",
    description: "Developed UI screens and integrated APIs for posts, likes, and comments. Added image picker and authentication.",
    technologies: ["React Native", "Express", "MongoDB"],
  },
];

const Projects = () => {
  return (
    <section className="projects-section" >
      <h2 className="project-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
