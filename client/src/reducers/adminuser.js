import * as Actions from "../constants/ActionTypes.js";

const adminuser = (state = [], action) => {
  switch (action.type) {
    case Actions.SAVE_USER:
      // const appointmentIndex = state.map(o => o.id).indexOf(action.id);
      // return [
      //   ...state.slice(0, appointmentIndex),
      //   { ...state[appointmentIndex], _id: action._id },
      //   ...state.slice(appointmentIndex + 1, state.length)
      // ];
      console.log("USER UPDATED : " + action.user);
      return [...state, action.user];

    case Actions.GET_USER:
      // const index = state.findIndex(
      //   item => appointment._id === action.appointment._id
      // );
      // if (index > -1) {
      //   return state.map(item => {
      //     if (item._id === action.appointment._id) return action.appointment;
      //     return item;
      //   });
      // } else {
      //   return [...state, action.appointment];
      // }
      return [...state, action.user];

    case Actions.SET_USERS:
      console.log("Setting Users", action);
      return [...action.users];

    case Actions.DELETE_USER:
      return state.filter(users => user._id !== action._id);

    default:
      return state;
  }
};

export default adminuser;
