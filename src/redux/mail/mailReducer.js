import { mailActionTypes } from "./mailActionTypes";

const INITIAL_STATE = {
  isMessageOpen: false,
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
    default:
      return state;
  }
};

export default mailReducer;
