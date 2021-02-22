import React from "react";
import "./Section.scss";

function Section({ title, selected, color, Icon }) {
  return (
    <>
      <div
        className={`section ${selected && "section-selected"}`}
        style={{
          borderBottom: `3px solid  ${color}`,
          color: `${selected && color}`,
        }}
      >
        <Icon />
        <p>{title}</p>
      </div>
    </>
  );
}

export default Section;
