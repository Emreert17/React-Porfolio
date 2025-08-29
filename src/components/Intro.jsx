import ParticleContainer from "./ParticleContainer";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "../styles/Intro.css";

export default function Intro() {
  return (
    <>
      <section id="home" className="particle-container">
        <ParticleContainer />
        <div className="inner-particle-container">
          <div className="intro-content">
            <img className="intro-picture" src="/intro-pic.jpg" alt="" />
            <p className="intro-text">
              Hello I'm Emre, Senior Software Engineering student at Istanbul
              Aydın University with expertise in frontend development using
              HTML, CSS, JavaScript, and React. Skilled in Java programming and
              passionate about creating modern, user-focused web interfaces for
              real-world projects.
            </p>
            <div className="button-group">
              <a
                href="https://github.com/Emreert17/Emreert17"
                className="btn-intro"
                target="_blank"
              >
                GitHub <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/emre-ertu%C4%9Frul-3403592b2/"
                className="btn-intro btn-2"
                target="_blank"
              >
                LinkedIn <BsLinkedin />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
