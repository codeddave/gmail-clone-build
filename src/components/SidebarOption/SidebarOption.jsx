import React from "react";
import "./SidebarOption.scss";

function SidebarOption({ Icon, title, number, selected }) {
  return (
    <div className={`sidebar-option ${selected && "sidebar-option-active"}`}>
      <Icon className="sidebar-option-icon" />
      <h3 className="sidebar-option-title">{title}</h3>
      <p className="testing">{number}</p>
    </div>
  );
}

export default SidebarOption;
