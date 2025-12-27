import { useState } from "react";
import SectionHeading from "../SectionHeader/SectionHeading";
import { skillsData } from "../../data/data";
import "../../styles/Skills.css";
import Skill from "./Skill";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <>
      <section id="skills" className="skills-container">
        <SectionHeading>My Skills</SectionHeading>
        <div className="skills-button-container">
          {skillsData.map((skill, index) => (
            <button
              onClick={() => setActiveTab(skill.id)}
              key={index}
              className={`skills-button ${
                activeTab === skill.id ? "active-skills-button" : ""
              }`}
            >
              {skill.category}
            </button>
          ))}
        </div>
        <div className="skills-content-container">
          {skillsData.map((tab) =>
            activeTab === tab.id ? (
              <Skill key={tab.id} items={tab.items} />
            ) : null
          )}
        </div>
      </section>
    </>
  );
}
