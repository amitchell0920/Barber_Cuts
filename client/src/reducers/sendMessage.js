import { SEND_MESSAGE } from "../constants/ActionTypes";

export default function(state = { message: null }, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return { state, message: action.message };

    default:
      return state;
  }
}
