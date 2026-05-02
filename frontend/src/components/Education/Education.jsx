import SectionHeading from "../SectionHeader/SectionHeading";
import { education_details } from "../../data/data";
import { LuGraduationCap, LuMapPin } from "react-icons/lu";
import "../../styles/Education.css";

export default function Education() {
  const edu = education_details[0];
  return (
    <section id="education" className="education-container">
      <SectionHeading>My Education</SectionHeading>
      <div className="education-card">
        <div className="education-card-header">
          <div className="education-logo-wrap">
            <img src="/iauLogo.png" alt="university-logo" />
          </div>
          <div className="education-header-info">
            <h3 className="education-degree">{edu.degree}</h3>
            <p className="education-university">
              <LuMapPin size={14} />
              {edu.university}
            </p>
            <span className="education-badge">
              <LuGraduationCap size={14} />
              {edu.graduate}
            </span>
          </div>
        </div>
        <p className="education-description">{edu.description}</p>
        <div className="education-skills">
          {edu.skills.map((skill, index) => (
            <span key={index} className="education-skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
