import "../../styles/Project.css";
import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Project({ project }) {
  return (
    <>
      <div className="project-inner-container">
        <div className="project-text">
          <h3>{project.title}</h3>
          <p className="made-with">
            Made With:
            {project.icons.map((icon) => (
              <span key={icon.id}>
                {React.createElement(icon.icon, {
                  size: 30,
                  color: icon.color,
                })}
              </span>
            ))}
          </p>
          <p>{project.description}</p>
          <a target="_blank" href={project.link} rel="noopener noreferrer">
            GitHub <FaGithub />
          </a>
        </div>
        <div className="project-images">
          <img src={project.image} alt="project-image" />
        </div>
      </div>
    </>
  );
}
