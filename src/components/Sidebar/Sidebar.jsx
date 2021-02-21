import { Button } from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import "./Sidebar.scss";
import SidebarOption from "../SidebarOption/SidebarOption";
import InboxIcon from "@material-ui/icons/Inbox";
function Sidebar() {
  return (
    <div className="sidebar">
      <Button startIcon={<AddIcon />} className="sidebar-compose">
        compose
      </Button>
      <SidebarOption Icon={InboxIcon} title="Inbox" number={54} />
    </div>
  );
}

export default Sidebar;
