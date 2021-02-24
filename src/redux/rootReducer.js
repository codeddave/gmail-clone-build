import { combineReducers } from "redux";
import mailReducer from "./mail/mailReducer";

export const rootReducer = combineReducers({
  mail: mailReducer,
});
