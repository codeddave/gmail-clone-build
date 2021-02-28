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
export const fetchEmailsFailure = () => ({
  type: mailActionTypes.FETCH_EMAILS_FAILURE,
});

export const getEmailbyId = (id) => ({
  type: mailActionTypes.FETCH_EMAIL_BY_ID,
  payload: id,
});

export const fetchEmailsStartAsync = () => {
  return (dispatch) => {
    const emailsRef = firestore.collection("emails");
    dispatch(fetchEmailsStart());
    let emails = [];
    emailsRef.orderBy("timestamp", "desc").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        const data = doc.data();

        emails.push({ id: doc.id, data });
        console.log(emails);
      });
    });
    dispatch(fetchEmailsSuccess(emails));
  };
};
