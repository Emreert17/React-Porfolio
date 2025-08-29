import SectionHeading from "./SectionHeading";
import "../styles/Skills.css";
import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Skills() {
  return (
    <>
      <section id="skills" className="skills-container">
        <SectionHeading>My Skills</SectionHeading>
        <div className="inner-skills-container">
          <div className="skills-content">
            <h4 className="skills-title">Frontend</h4>
            <div className="skills">
              <ul>
                <li>
                  <FaReact size={30} color="#33A1E0" /> React.js
                </li>
                <li>
                  <FaJs size={30} color="#FFE100" /> JavaScript
                </li>
                <li>
                  <FaHtml5 size={30} color="#FF9B00" /> HTML5
                </li>
                <li>
                  <FaCss3Alt size={30} color="#1C6EA4" /> CSS
                </li>
                <li>
                  <FaBootstrap size={30} color="#9929EA" /> Bootstrap
                </li>
                <li>
                  <RiTailwindCssFill size={30} color="#33A1E0" /> Tailwind
                </li>
                <li>Responsive Design</li>
                <li>Single Page Applications</li>
              </ul>
            </div>
          </div>
          <div className="skills-content">
            <h4 className="skills-title">Tools</h4>
            <div className="skills">
              <ul>
                <li>
                  <FaGitAlt size={30} color="#DC2525" /> Git
                </li>
                <li>
                  <FaGithub size={30} color="#333" /> GitHub
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
