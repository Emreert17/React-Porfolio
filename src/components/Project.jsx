import { FaGithub } from "react-icons/fa";
import "../styles/Project.css";
import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";

export default function Project({ project }) {
  return (
    <>
      <div className="project-inner-container">
        <div className="project-text">
          <h3>{project.title}</h3>
          <p className="made-with">
            Made With:
            <FaReact style={{ paddingLeft: "5px" }} size={30} color="#33A1E0" />
            <FaJs style={{ paddingLeft: "5px" }} size={30} color="#FFE100" />
          </p>
          <p>{project.description}</p>
          <a href={project.link}>
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
