import React from "react";
import { Checkbox, IconButton } from "@material-ui/core";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { connect, useDispatch, useSelector } from "react-redux";

import "./EmailRow.scss";
import { useHistory } from "react-router-dom";
import { selectMail } from "../../redux/mail/mailActions";
function EmailRow({ title, subject, id, description, time }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(
      selectMail({
        title,
        subject,
        id,
        description,
        time,
      })
    );
    history.push("/mail");
  };
  return (
    <div className="email-row" onClick={openMail}>
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
          {subject}{" "}
          <span className="email-row-description">-{description}</span>
        </h4>
      </div>
      <p className="email-row-time">{time}</p>
    </div>
  );
}

export default EmailRow;
