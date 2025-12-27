import "../../styles/Experience.css";
import { experience_Data } from "../../data/data";
import ExperienceItem from "./ExperienceItem";
import SectionHeading from "../SectionHeader/SectionHeading";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  return (
    <>
      <section id="experience" className="experience-container">
        <SectionHeading>My Experience</SectionHeading>
        <VerticalTimeline>
          {experience_Data.map((item) => (
            <ExperienceItem key={item.id} experience={item} />
          ))}
        </VerticalTimeline>
      </section>
    </>
  );
}
