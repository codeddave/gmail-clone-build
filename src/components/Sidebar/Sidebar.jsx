import { Button, IconButton } from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import "./Sidebar.scss";
import SidebarOption from "../SidebarOption/SidebarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import NearMeIcon from "@material-ui/icons/NearMe";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import { connect } from "react-redux";
import { setIsMessageOpen } from "../../redux/mail/mailActions";

function Sidebar({ setIsMessageOpen }) {
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon />}
        className="sidebar-compose"
        onClick={setIsMessageOpen}
      >
        compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={54}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={54} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={54} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={54} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={54} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={54} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={54} />

      <div className="sidebar-footer">
        <div className="sidebar-footer-icons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setIsMessageOpen: () => dispatch(setIsMessageOpen()),
});
export default connect(null, mapDispatchToProps)(Sidebar);
