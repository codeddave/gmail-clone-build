import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import "./SendMail.scss";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { connect, useDispatch } from "react-redux";
import { closeSendMessage } from "../../redux/mail/mailActions";
import { firestore } from "../../firebase";
import firebase from "../../firebase";
function SendMail({ closeSendMessage }) {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (formData) => {
    console.log(formData);
    firestore.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };

  return (
    <div className="send-mail">
      <div className="send-mail-header">
        <h3>Send Message</h3>
        <CloseIcon className="send-mail-close" onClick={closeSendMessage} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          type="email"
          placeholder="To"
          ref={register({ required: true })}
        />
        {errors.to && <span className="input-error">To is Required!</span>}
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          ref={register({ required: true })}
        />
        {errors.subject && (
          <span className="input-error">Subject is Required!</span>
        )}

        <input
          name="message"
          type="text"
          placeholder="Message..."
          className="send-mail-message"
          ref={register({ required: true })}
        />
        {errors.message && (
          <span className="input-error">Message is Required!</span>
        )}

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
const mapDispatchToProps = (dispatch) => ({
  closeSendMessage: () => dispatch(closeSendMessage()),
});
export default connect(null, mapDispatchToProps)(SendMail);
