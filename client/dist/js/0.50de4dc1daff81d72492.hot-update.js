webpackHotUpdate(0,{

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(68);

	var _auth_reducer = __webpack_require__(246);

	var _auth_reducer2 = _interopRequireDefault(_auth_reducer);

	var _profiles = __webpack_require__(248);

	var _profiles2 = _interopRequireDefault(_profiles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rootReducer = (0, _redux.combineReducers)({
	  auth: _auth_reducer2.default,
	  profiles: _profiles2.default,
	  appointments: appointments
	});

	exports.default = rootReducer;

/***/ })

})