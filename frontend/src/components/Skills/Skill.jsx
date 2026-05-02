import React from "react";

export default function Skill({ items }) {
  return (
    <>
      {items.map((item, index) => (
        <div className="skill" key={index}>
          {item.icon &&
            React.createElement(item.icon, { size: 32, color: item.color })}
          <span className="skill-name">{item.name}</span>
        </div>
      ))}
    </>
  );
}
