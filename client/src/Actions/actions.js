import * as types from "../constants/ActionTypes.js";
import axios from "axios";

export default function(state = { authenticated: false }, action) {
  switch (action.type) {
    case AUTH_USER:
      return { state, error: "", authenticated: true };
    case UNAUTH_USER:
      return { state, authenticated: false };
    case AUTH_ERROR:
      return { state, error: action.payload };
    case FETCH_MESSAGE:
      return { state, message: action.payload };

    default:
      return state;
  }
}

export const confirmAppointment = message => ({
  type: types.CONFIRM_APPOINTMENT,
  message
});

export const contactSubmit = message => ({
  type: types.CONTACT_SUBMIT,
  message
});

export const sendMessage = message => ({
  type: types.SEND_MESSAGE,
  message
});

export const thisUser = email => {
  return {
    type: types.THIS_USER_EMAIL,
    email
  };
};

export const thisUserAuth = auth => {
  return {
    type: types.THIS_USER_AUTH,
    auth
  };
};

export const fetchMessage = user => ({
  type: types.FETCH_MESSAGE,
  user
});

export const setUsers = users => ({
  type: types.SET_USERS,
  users
});

export const setUser = user => ({
  type: types.SET_USER,
  user
});

export const saveUser = user => ({
  type: types.SAVE_USER,
  user
});

export const deleteUser = user => ({
  type: types.DELETE_USER,
  user
});

export const addProfile = profile => ({
  type: types.ADD_PROFILE,
  profile
});

export const saveProfile = profile => ({
  type: types.SAVE_PROFILE,
  profile
});

export const setProfiles = profiles => ({
  type: types.SET_PROFILES,
  profiles
});

export const deleteProfile = profile => ({
  type: types.DELETE_PROFILE,
  profile
});

export const addAppointment = appointment => ({
  type: types.ADD_APPOINTMENT,
  appointment
});

export const saveAppointment = appointment => ({
  type: types.SAVE_APPOINTMENT,
  appointment
});

export const setAppointments = appointments => ({
  type: types.SET_APPOINTMENTS,
  appointments
});

export const getAppointment = appointment => ({
  type: types.GET_APPOINTMENT,
  appointment
});

export const deleteAppointment = appointment => ({
  type: types.DELETE_APPOINTMENT,
  appointment
});

// const ROOT_URL = "http://localhost:3000/api";
// export function contactSubmit(email, fullName, phoneNumber, subject, message) {
//   return function(dispatch) {
//     // Submit email/password to the server
//     axios
//       .post(`${ROOT_URL}/sendMessage`, {
//         email,
//         fullName,
//         phoneNumber,
//         subject,
//         message
//       })
//       .then(response => {
//         // If request is good...

//         console.log("MESSAGE SENT SUCCESSFULLY!");
//       })
//       .catch(() => {
//         // If request is bad...
//         // - Show an error to the user
//         dispatch(authError("Bad Login Info"));
//       });
//   };
// }

export const handleClick = () => ({ type: types.HANDLE_CLICK });
