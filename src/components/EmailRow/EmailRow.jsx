import React from "react";
import { Checkbox, IconButton } from "@material-ui/core";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";

import "./EmailRow.scss";
function EmailRow({ title, subject, id, description, time }) {
  return (
    <div className="email-row">
      <div className="email-row-options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="email-row-title">{title}</h3>

      <div className="email-row-message">
        <h4>
          {" "}
          {subject} <span className="email-row-description">{description}</span>
        </h4>
      </div>
      <div className="email-row-description"></div>
    </div>
  );
}

export default EmailRow;
