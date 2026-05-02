import "../../styles/Project.css";
import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Project({ project, index }) {
  const isReverse = index % 2 !== 0;
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <div className={`project-card ${isReverse ? "project-card--reverse" : ""}`}>
      <div className="project-body">
        <span className="project-number">{projectNumber}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.icons.map((icon) => (
            <span key={icon.id} className="project-tech-icon">
              {React.createElement(icon.icon, { size: 20, color: icon.color })}
            </span>
          ))}
        </div>
        <a
          className="project-link"
          target="_blank"
          href={project.link}
          rel="noopener noreferrer"
        >
          <FaGithub size={15} />
          View Code
        </a>
      </div>
      <div className="project-thumbnail">
        <img src={project.image} alt={project.title} />
      </div>
    </div>
  );
}
