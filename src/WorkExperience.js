import React, { useState } from "react";
import "./styles.css";

const experienceData = [
  {
    title: "React Native Developer",
    company: "Freelance & Startup Projects",
    duration: "2021 - Present",
    percentage: 90,
    details: [
      "Built 3–5 mobile applications using React Native.",
      "Handled complete UI/UX design and implementation.",
      "Integrated REST APIs and managed state effectively.",
      "Improved performance and navigation handling.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Open Source & Personal Projects",
    duration: "2020 - 2021",
    percentage: 85,
    details: [
      "Built responsive UI using React.js and TailwindCSS.",
      "Created modular, reusable components.",
      "Integrated API calls and managed async flows.",
      "Worked on accessibility and mobile responsiveness.",
    ],
  },
  {
    title: "UI Designer",
    company: "Freelance",
    duration: "2019 - 2020",
    percentage: 75,
    details: [
      "Designed mobile and web interfaces in Figma.",
      "Worked closely with developers for design implementation.",
      "Maintained brand consistency and usability.",
      "Created design systems and UI kits.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Tech Startup",
    duration: "2018 - 2019",
    percentage: 65,
    details: [
      "Assisted in frontend development using HTML/CSS/JS.",
      "Learned responsive layout and component styling.",
      "Worked on small bug fixes and tasks.",
      "Collaborated in an Agile environment.",
    ],
  },
];

const WorkExperience = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleDetails = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const displayedData = showAll ? experienceData : experienceData.slice(0, 3);

  return (
    <section className="experience-section">
      <h2 className="experience-title">Work Experience</h2>
      <div className="experience-list horizontal">
        {displayedData.map((exp, index) => (
          <div
            className="experience-item"
            key={index}
            onClick={() => toggleDetails(index)}
          >
            <div className="circle-progress">
              <svg width="100" height="100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#e6e6e6"
                  strokeWidth="10"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#0077b5"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray={2 * Math.PI * 45}
                  strokeDashoffset={
                    2 * Math.PI * 45 * (1 - exp.percentage / 100)
                  }
                  transform="rotate(-90 50 50)"
                />
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className="circle-text"
                >
                  {exp.percentage}%
                </text>
              </svg>
            </div>
            <div className="experience-info">
              <h3>{exp.title}</h3>
              <p className="company">{exp.company}</p>
              <p className="duration">{exp.duration}</p>
              {activeIndex === index && (
                <ul className="experience-details">
                  {exp.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
      {experienceData.length > 3 && (
        <button
          className="toggle-more-btn"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </section>
  );
};

export default WorkExperience;
