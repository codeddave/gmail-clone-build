import React from "react";
import "./SidebarOption.scss";

function SidebarOption({ Icon, title, number }) {
  return (
    <div className="sidebar-option">
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOption;
