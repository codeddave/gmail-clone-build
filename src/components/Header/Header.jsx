import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "./Header.scss";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://www.vectorlogo.zone/logos/gmail/gmail-ar21.svg"
          alt="gmail-logo"
        />
      </div>
      <div className="header-middle">
        <SearchIcon className="search-icon" />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDownIcon />
      </div>
      <div className="header-right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar />
        <div></div>
      </div>
    </div>
  );
}

export default Header;
