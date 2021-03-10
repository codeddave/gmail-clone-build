import { mailActionTypes } from "./mailActionTypes";

const INITIAL_STATE = {
  loading: false,
  isMessageOpen: false,
  emails: [],
  selectedMail: null,
};
const mailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case mailActionTypes.SET_SEND_MESSAGE_OPEN:
      return {
        ...state,
        isMessageOpen: !state.isMessageOpen,
      };
    case mailActionTypes.CLOSE_SEND_MESSAGE:
      return {
        ...state,
        isMessageOpen: false,
      };
    case mailActionTypes.FETCH_EMAILS_START:
      return {
        ...state,
        loading: true,
      };
    case mailActionTypes.FETCH_EMAILS_SUCCESS:
      return {
        ...state,
        emails: action.payload,
        loading: false,
      };
    case mailActionTypes.ADD_MESSAGE:
      return {
        ...state,
        emails: [...state.emails, action.payload],
        loading: false,
      };
    case mailActionTypes.SELECT_MAIL:
      return {
        ...state,
        selectedMail: action.payload,
      };
    default:
      return state;
  }
};

export default mailReducer;
