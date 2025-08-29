import "../styles/Experience.css";
import SectionHeading from "./SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import LogoIcon from "./LogoIcon";
import opetLogo from "/Opet_logo.svg";
import { SiSap } from "react-icons/si";

export default function Experience() {
  return (
    <>
      <section id="experience" className="experience-container">
        <SectionHeading>My Experience</SectionHeading>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              backgroundColor: "#f0f1f3",
              color: "#333",
              boxShadow: " rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgb(179, 182, 188)" }}
            date="July 2024 - August 2024"
            icon={<LogoIcon src={opetLogo} alt="Opet Logo" />}
            iconStyle={{
              background: "#fff",
              color: "#333",
            }}
          >
            <h3 className="vertical-timeline-element-title btn-display">
              SAP Internship <SiSap size={40} color="#687FE5" style={{}} />
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Opet Headquarters
            </h4>
            <p>
              Received introductory training and briefings on SAP systems.
              Participated in internal corporate meetings.Contributed to ongoing
              projects by providing assistance in various tasks.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </>
  );
}
