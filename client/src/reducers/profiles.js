import * as Actions from "../constants/ActionTypes.js";

const profiles = (state = [], action = {}) => {
  switch (action.type) {
    case Actions.ADD_PROFILE:
      console.log("NEW PROFILE ADDED : " + action.profiles);
      return [...state, action.profile];

    case Actions.SAVE_PROFILE:
      // return
      // state.map(
      //   profile => (profile.id === action.id ? { ...action.profile } : profile)
      // );
      console.log("PROFILE UPDATED : " + action.profiles);
      return [...state, action.profile];

    case Actions.SET_PROFILES:
      return [...action.profiles];

    case Actions.DELETE_PROFILE:
      return state.filter(profiles => profile._id !== action._id);

    default:
      return state;
  }
};

export default profiles;
