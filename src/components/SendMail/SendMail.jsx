import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import "./SendMail.scss";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
function SendMail() {
  return (
    <div className="send-mail">
      <div className="send-mail-header">
        <h3>Send Message</h3>
        <CloseIcon className="send-mail-close" />
      </div>
      <form>
        <input type="text" placeholder="To" />
        <input type="text" placeholder="Subject" />
        <input
          type="text"
          placeholder="Message..."
          className="send-mail-message"
        />

        <div className="send-mail-options">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="send-mail-send"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
