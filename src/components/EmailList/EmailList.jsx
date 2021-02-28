import React, { useEffect } from "react";
import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Section from "../Section/Section";
import EmailRow from "../EmailRow/EmailRow";
import "./EmailList.scss";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchEmailsStartAsync } from "../../redux/mail/mailActions";

function EmailList({ emails }) {
  const isLoading = useSelector((state) => state.mail.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmailsStartAsync());
  }, []);

  return (
    <div className="email-list">
      <div className="email-list-settings">
        <div className="email-list-settings-left">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="email-list-settings-right">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="email-list-sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>
      {!isLoading && emails ? (
        <div className="email-list">
          {emails.map(({ id, data: { subject, timestamp, to, message } }) => {
            return (
              <EmailRow
                key={id}
                title={to}
                subject={subject}
                description={message}
                time={new Date(timestamp?.seconds * 1000).toUTCString()}
              />
            );
          })}
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  emails: state.mail.emails,
});

export default connect(mapStateToProps)(EmailList);
