import React from "react";

export default function Skill({ items }) {
  return (
    <>
      {items.map((item, index) => (
        <div className="skill" key={index}>
          {item.icon && (
            <span>
              {React.createElement(item.icon, {
                size: 35,
                color: item.color,
              })}
            </span>
          )}
          {item.name}
        </div>
      ))}
    </>
  );
}
