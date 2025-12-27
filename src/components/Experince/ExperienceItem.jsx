import { VerticalTimelineElement } from "react-vertical-timeline-component";
import LogoIcon from "./LogoIcon";
import React from "react";
export default function ExperienceItem({ experience }) {
  return (
    <>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          backgroundColor: "#f0f1f3",
          color: "#333",
          boxShadow: " rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        }}
        contentArrowStyle={{ borderRight: "7px solid rgb(179, 182, 188)" }}
        date={experience.date}
        icon={
          <LogoIcon
            src={experience.logo}
            alt="enoca Logo"
            style={experience.logoStyle}
          />
        }
        iconStyle={{
          background: "#fff",
          color: "#333",
        }}
      >
        <h3 className="vertical-timeline-element-title btn-display">
          {experience.title}{" "}
          {experience.icon
            ? React.createElement(experience.icon, {
                size: "30px",
                color: "#05339C",
              })
            : ""}
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          {experience.subtitle}
        </h4>
        <p>{experience.description}</p>
      </VerticalTimelineElement>
    </>
  );
}
