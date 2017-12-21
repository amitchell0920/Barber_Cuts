import * as Actions from "../constants/ActionTypes.js";

const appointments = (state = [], action) => {
  switch (action.type) {
    case Actions.ADD_APPOINTMENT:
      console.log("NEW APPOINTMENT ADDED : " + action.appointments);
      return [...state, action.appointment];

    case Actions.SAVE_APPOINTMENT:
      // const appointmentIndex = state.map(o => o.id).indexOf(action.id);
      // return [
      //   ...state.slice(0, appointmentIndex),
      //   { ...state[appointmentIndex], _id: action._id },
      //   ...state.slice(appointmentIndex + 1, state.length)
      // ];
      console.log("APPOINTMENT UPDATED : " + action.appointments);
      return [...state, action.appointment];

    case Actions.GET_APPOINTMENT:
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
      return [...state, action.appointment];

    case Actions.SET_APPOINTMENTS:
      console.log("Setting Appts", action);
      return [...action.appointments];

    case Actions.DELETE_APPOINTMENT:
      return state.filter(appointments => appointment._id !== action._id);

    case Actions.CONFIRM_APPOINTMENT:
      console.log("Setting Confirm Appts", action);
      return [...state, action.appointment];

    default:
      return state;
  }
};

export default appointments;
