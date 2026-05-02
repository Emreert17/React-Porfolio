import React from "react";
import ParticleContainer from "./ParticleContainer";
import "../../styles/Intro.css";
import { intro_info } from "../../data/data";
import IntroTextCard from "./İntroTextCard";
const info = intro_info[0];

export default function Intro() {
  return (
    <>
      <section id="home" className="particle-container">
        <ParticleContainer />
        <div className="inner-particle-container">
          <div className="intro-content">
            <img
              className="intro-picture"
              src={info.image}
              alt={info.imageDesc}
            />
            <div className="intro-text">
              {info.description.map((description) => (
                <IntroTextCard key={description.id} description={description} />
              ))}
            </div>
            <div className="button-group">
              {info.links.map((link) => (
                <a
                  className={`btn-intro ${link.id === 2 ? "btn-2" : ""}`}
                  key={link.id}
                  href={link.link}
                  target="_blank"
                >
                  {link.title} {React.createElement(link.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
