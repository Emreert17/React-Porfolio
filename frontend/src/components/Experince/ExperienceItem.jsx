import { VerticalTimelineElement } from "react-vertical-timeline-component";
import LogoIcon from "./LogoIcon";
import React from "react";

export default function ExperienceItem({ experience }) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "#fff",
        border: "1px solid #e5e7eb",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
        borderRadius: "12px",
        padding: "24px 28px",
        color: "#333",
      }}
      contentArrowStyle={{ borderRight: "7px solid #e5e7eb" }}
      date={experience.date}
      icon={
        <LogoIcon
          src={experience.logo}
          alt={`${experience.subtitle} logo`}
          style={experience.logoStyle}
        />
      }
      iconStyle={{
        background: "#fff",
        boxShadow: "0 0 0 3px #e5e7eb, 0 4px 12px rgba(0, 0, 0, 0.08)",
      }}
    >
      <div className="exp-header">
        <h3 className="exp-title">
          {experience.title}
          {experience.icon &&
            React.createElement(experience.icon, {
              size: 17,
              color: "#0d1164",
            })}
        </h3>
        <span className="exp-company">{experience.subtitle}</span>
      </div>
      <p className="exp-description">{experience.description}</p>
    </VerticalTimelineElement>
  );
}
