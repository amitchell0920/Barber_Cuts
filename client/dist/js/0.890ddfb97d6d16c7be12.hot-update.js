webpackHotUpdate(0,{

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Base = __webpack_require__(234);

	var _Base2 = _interopRequireDefault(_Base);

	var _HomePage = __webpack_require__(235);

	var _HomePage2 = _interopRequireDefault(_HomePage);

	var _Dashboard = __webpack_require__(240);

	var _Dashboard2 = _interopRequireDefault(_Dashboard);

	var _LoginPage = __webpack_require__(242);

	var _LoginPage2 = _interopRequireDefault(_LoginPage);

	var _SignUpPage = __webpack_require__(244);

	var _SignUpPage2 = _interopRequireDefault(_SignUpPage);

	var _Auth = __webpack_require__(42);

	var _Auth2 = _interopRequireDefault(_Auth);

	var _AboutPage = __webpack_require__(239);

	var _AboutPage2 = _interopRequireDefault(_AboutPage);

	var _ProfilePage = __webpack_require__(243);

	var _ProfilePage2 = _interopRequireDefault(_ProfilePage);

	var _UploadPage = __webpack_require__(245);

	var _UploadPage2 = _interopRequireDefault(_UploadPage);

	var _ProfileForm = __webpack_require__(237);

	var _ProfileForm2 = _interopRequireDefault(_ProfileForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import AppointmentForm from "./components/AppointmentForm.jsx";

	//import Profiles from "./containers/Profiles.jsx";

	//import DashboardPage from "./containers/DashboardPage.jsx";
	var routes = {
	  // base component (wrapper for the whole application).
	  component: _Base2.default,
	  childRoutes: [{
	    path: "/",
	    getComponent: function getComponent(location, callback) {
	      if (_Auth2.default.isUserAuthenticated()) {
	        callback(null, _Dashboard2.default);
	        //callback(null, Profiles);
	      } else {
	        callback(null, _HomePage2.default);
	      }
	    }
	  }, {
	    path: "/login",
	    component: _LoginPage2.default
	  }, {
	    path: "/signup",
	    component: _SignUpPage2.default
	  }, {
	    path: "/profile/:profileId",
	    component: _ProfileForm2.default
	  }, {
	    path: "/profile",
	    component: _ProfilePage2.default
	  }, {
	    path: "/about",
	    component: _AboutPage2.default
	  }, {
	    path: "/uploadpage",
	    component: _UploadPage2.default
	  }, {
	    path: "/logout",
	    onEnter: function onEnter(nextState, replace) {
	      _Auth2.default.deauthenticateUser();

	      // change the current URL to /
	      replace("/");
	    }
	  }]
	};

	exports.default = routes;

/***/ })

})