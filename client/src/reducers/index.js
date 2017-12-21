import { combineReducers } from "redux";
import authReducer from "./auth_reducer";
import profiles from "./profiles.js";
import appointments from "./appointments.js";
import adminuser from "./adminuser.js";
import user from "./users.js";
import thisuser from "./fetchUser.js";
import sendMessage from "./sendMessage.js";

const rootReducer = combineReducers({
  auth: authReducer,
  profiles,
  appointments,
  adminuser,
  user,
  thisuser,
  sendMessage
});

export default rootReducer;
