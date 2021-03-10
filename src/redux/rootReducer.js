import { combineReducers } from "redux";
import mailReducer from "./mail/mailReducer";
import { userReducer } from "./user/userReducer";

export const rootReducer = combineReducers({
  mail: mailReducer,
  user: userReducer,
});
