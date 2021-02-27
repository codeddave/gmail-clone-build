import { mailActionTypes } from "./mailActionTypes";

export const setIsMessageOpen = () => ({
  type: mailActionTypes.SET_SEND_MESSAGE_OPEN,
});

export const closeSendMessage = () => ({
  type: mailActionTypes.CLOSE_SEND_MESSAGE,
});
