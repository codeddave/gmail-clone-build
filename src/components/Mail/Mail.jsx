import { IconButton } from "@material-ui/core";
import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import "./Mail.scss";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function Mail() {
  const history = useHistory();
  const { id, title, subject, description, time } = useSelector(
    (state) => state.mail.selectedMail
  );
  return (
    <div className="mail">
      <div className="mail-tools">
        <div className="mail-tools-left" onClick={() => history.push("/")}>
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mail-tools-right">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>

          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail-body">
        <div className="mail-body-header">
          <h2>{subject}</h2>
          <LabelImportantIcon className="mail-important" />
          <p>{title}</p>
          <p className="mail-time">{time}</p>
        </div>
        <div className="mail-message">
          <p>{description} </p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
