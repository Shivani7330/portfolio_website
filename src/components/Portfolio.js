import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const projects = [
    { title: "E-Commerce", description: "A web app for Shopping...", link: "https://go-shopping123.netlify.app" },
    { title: "Entertainment_tracker", description: "A web app for Movies...", link: "https://github.com/Shivani7330/Entertainment_tracker" },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <h2>PROJECTS</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;