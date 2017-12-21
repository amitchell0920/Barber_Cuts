webpackHotUpdate(0,{

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.handleClick = exports.deleteAppointment = exports.fetchAppointment = exports.setAppointments = exports.saveAppointment = exports.addAppointment = exports.deleteProfile = exports.fetchProfile = exports.setProfiles = exports.saveProfile = exports.addProfile = undefined;

	var _ActionTypes = __webpack_require__(90);

	var types = _interopRequireWildcard(_ActionTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var addProfile = exports.addProfile = function addProfile(profile) {
	  return {
	    type: types.ADD_PROFILE,
	    profile: profile
	  };
	};

	var saveProfile = exports.saveProfile = function saveProfile(profile) {
	  return {
	    type: types.SAVE_PROFILE,
	    profile: profile
	  };
	};

	var setProfiles = exports.setProfiles = function setProfiles(profiles) {
	  return {
	    type: types.SET_PROFILES,
	    profiles: profiles
	  };
	};

	var fetchProfile = exports.fetchProfile = function fetchProfile(profile) {
	  return {
	    type: types.FETCH_PROFILE,
	    profile: profile
	  };
	};

	var deleteProfile = exports.deleteProfile = function deleteProfile(profile) {
	  return {
	    type: types.DELETE_PROFILE,
	    profile: profile
	  };
	};

	var addAppointment = exports.addAppointment = function addAppointment(appointment) {
	  return {
	    type: types.ADD_APPOINTMENT,
	    appointment: appointment
	  };
	};

	var saveAppointment = exports.saveAppointment = function saveAppointment(appointment) {
	  return {
	    type: types.SAVE_APPOINTMENT,
	    appointment: appointment
	  };
	};

	var setAppointments = exports.setAppointments = function setAppointments(appointments) {
	  return {
	    type: types.SET_APPOINTMENTS,
	    appointments: appointments
	  };
	};

	var fetchAppointment = exports.fetchAppointment = function fetchAppointment(appointment) {
	  return {
	    type: types.FETCH_APPOINTMENT,
	    appointment: appointment
	  };
	};

	var deleteAppointment = exports.deleteAppointment = function deleteAppointment(appointment) {
	  return {
	    type: types.DELETE_APPOINTMENT,
	    appointment: appointment
	  };
	};

	// export function setProfiles() {
	//   return dispatch => {
	//       .then(res => res.json())
	//       .then(data => dispatch(setProfile(data.profile)));
	//   };
	// }

	// export function fetchProfile(id) {
	//   return dispatch => {
	//     fetch(`/profile/${id}`)
	//       .then(res => res.json())
	//       .then(data => dispatch(profileFetched(data.profile)));
	//   };
	// }

	// export function deleteProfile(id) {
	//   return dispatch => {
	//     fetch(`/profile/${id}`).then(res => res.json());
	//   };
	// }

	// export function saveAppointment(data) {
	//   return dispatch => {
	//     return fetch("/appointment", {
	//       method: "post",
	//       body: JSON.stringify(data),
	//       headers: {
	//         "content-Type": "application/x-www-form-urlencoded"
	//       }
	//     })
	//       .then(res => res.json())
	//       .then(data => dispatch(addprofile(data.appointmen)));
	//   };
	// }

	// export function setAppointments() {
	//   return dispatch => {
	//     fetch("/appointment")
	//       .then(res => res.json())
	//       .then(data => dispatch(setProfile(data.appointmen)));
	//   };
	// }

	// export function fetchAppointment(id) {
	//   return dispatch => {
	//     fetch(`/appointment/${id}`)
	//       .then(res => res.json())
	//       .then(data => dispatch(appointmenFetched(data.appointmen)));
	//   };
	// }

	// export function deleteAppointment(id) {
	//   return dispatch => {
	//     fetch(`/appointment/${id}`).then(res => res.json());
	//   };
	// }

	var handleClick = exports.handleClick = function handleClick() {
	  return { type: types.HANDLE_CLICK };
	};

/***/ })

})