import { THIS_USER_EMAIL, THIS_USER_AUTH } from "../constants/ActionTypes";

export default function(state = { email: null, auth: null }, action) {
  switch (action.type) {
    case THIS_USER_EMAIL:
      return { state, email: action.email };
    case THIS_USER_AUTH:
      return { state, auth: action.auth };
    default:
      return state;
  }
}
