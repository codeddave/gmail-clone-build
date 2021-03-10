import { mailActionTypes } from "./mailActionTypes";
import { firestore } from "../../firebase";

export const setIsMessageOpen = () => ({
  type: mailActionTypes.SET_SEND_MESSAGE_OPEN,
});

export const closeSendMessage = () => ({
  type: mailActionTypes.CLOSE_SEND_MESSAGE,
});

export const fetchEmailsStart = () => ({
  type: mailActionTypes.FETCH_EMAILS_START,
});
export const fetchEmailsSuccess = (emails) => ({
  type: mailActionTypes.FETCH_EMAILS_SUCCESS,
  payload: emails,
});
export const fetchEmailsFailure = (error) => ({
  type: mailActionTypes.FETCH_EMAILS_FAILURE,
  payload: error,
});

export const getEmailbyId = (id) => ({
  type: mailActionTypes.FETCH_EMAIL_BY_ID,
  payload: id,
});
export const selectMail = (mail) => ({
  type: mailActionTypes.SELECT_MAIL,
  payload: mail,
});
export const addEmailMessage = (message) => ({
  type: mailActionTypes.addEmailMessage,
  payload: message,
});
export const fetchEmailsStartAsync = () => {
  let emails = [];

  return async (dispatch) => {
    const emailsRef = firestore.collection("emails");
    dispatch(fetchEmailsStart());
    try {
      await emailsRef.orderBy("timestamp", "desc").onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          emails.push({ id: doc.id, data: doc.data() });
          console.log(emails);
        });
        dispatch(fetchEmailsSuccess(emails));
      });
    } catch (error) {
      dispatch(fetchEmailsFailure(error.message));
    }
  };
};
