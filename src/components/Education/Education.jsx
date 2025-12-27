import SectionHeading from "../SectionHeader/SectionHeading";
import { education_details } from "../../data/data";
import { FaGraduationCap } from "react-icons/fa";
import "../../styles/Education.css";

export default function Education() {
  return (
    <>
      <section id="education" className="education-container">
        <SectionHeading>My Education</SectionHeading>
        <div className="education-content">
          <div className="education-image">
            <img style={{}} src="/iauLogo.png" alt="university-photo" />
          </div>
          <div className="education-text">
            <h4>{education_details[0].degree}</h4>
            <h5>{education_details[0].university}</h5>
            <p style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              {education_details[0].graduate}
              <FaGraduationCap size={30} color="#0D1164" />
            </p>
            <ul>
              {education_details[0].skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
