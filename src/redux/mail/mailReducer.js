import { mailActionTypes } from "./mailActionTypes";

const INITIAL_STATE = {
  isMessageOpen: false,
};
const mailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case mailActionTypes.SET_MESSAGE_OPEN:
      return {
        ...state,
        isMessageOpen: !isMessageOpen,
      };

    default:
      return state;
  }
};

export default mailReducer;
