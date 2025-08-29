import { projects_Data } from "../data/data";
import Project from "./Project";
import SectionHeading from "./SectionHeading";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <>
      <section id="projects" className="projects-container">
        <SectionHeading>My Projects</SectionHeading>
        {projects_Data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </section>
    </>
  );
}
