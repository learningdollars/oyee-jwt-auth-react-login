import LoginReducer from "./auth/Login";

import { combineReducers } from "redux";

export default combineReducers({
  loginReducer: LoginReducer,
});
