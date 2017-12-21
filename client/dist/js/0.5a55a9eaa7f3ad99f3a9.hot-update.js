webpackHotUpdate(0,{

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(66);

	var _propTypes = __webpack_require__(6);

	var _actions = __webpack_require__(144);

	var _redux = __webpack_require__(68);

	var _TextField = __webpack_require__(110);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _Paper = __webpack_require__(109);

	var _Paper2 = _interopRequireDefault(_Paper);

	var _Card = __webpack_require__(34);

	var _RaisedButton = __webpack_require__(75);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _Auth = __webpack_require__(42);

	var _Auth2 = _interopRequireDefault(_Auth);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	// import Row from "material-ui/Row";
	// import Col from "material-ui/Col";
	// import Box from "material-ui/Box";
	//import "../Images/defaultprofile.jpg";
	var buttonStyle = {
	  margin: "10px 10px 10px 10px"
	};

	var style = _defineProperty({
	  position: "relative",
	  height: 900,
	  width: 400,
	  margin: 20,
	  textAlign: "left",
	  display: "inline-block",
	  padding: "0 1rem 3rem 2rem"
	}, "textAlign", "center");

	var ProfileForm = function (_Component) {
	  _inherits(ProfileForm, _Component);

	  function ProfileForm(props) {
	    _classCallCheck(this, ProfileForm);

	    var _this = _possibleConstructorReturn(this, (ProfileForm.__proto__ || Object.getPrototypeOf(ProfileForm)).call(this, props));

	    _this.state = {
	      profile: _this.props.profile
	    };
	    _this.handleChange = _this.handleChange.bind(_this);
	    _this.handleSubmit = _this.handleSubmit.bind(_this);
	    _this.handleAppts = _this.handleAppts.bind(_this);
	    _this.handleImages = _this.handleImages.bind(_this);
	    return _this;
	  }

	  _createClass(ProfileForm, [{
	    key: "handleSubmit",
	    value: function handleSubmit(e) {
	      e.preventDefault();
	      this.props.onSave(this.state.profile);
	      var id = encodeURIComponent(this.state.profile._id);
	      var name = encodeURIComponent(this.state.profile.name);
	      var email = encodeURIComponent(this.state.profile.email);
	      var address = encodeURIComponent(this.state.profile.address);
	      var city = encodeURIComponent(this.state.profile.city);
	      var state = encodeURIComponent(this.state.profile.state);
	      var zip = encodeURIComponent(this.state.profile.zip);
	      var businessName = encodeURIComponent(this.state.profile.businessName);
	      var wsite = encodeURIComponent(this.state.profile.wsite);
	      var dateCreated = encodeURIComponent(this.state.profile.dateCreated);
	      var pimage = encodeURIComponent(this.state.profile.pimage);
	      var image = encodeURIComponent(this.state.profile.image);

	      var formData = "name=" + name + "&email=" + email + "&address=" + address + "&city=" + city + "&state=" + state + "&zip=" + zip + "&businessName=" + businessName + "&wsite=" + wsite + "&dateCreated=" + dateCreated + "&pimage=" + pimage + "&image=" + image;

	      var xhr = new XMLHttpRequest();
	      xhr.open("put", "/api/profiles/" + id);
	      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	      // // set the authorization HTTP header
	      xhr.setRequestHeader("Authorization", "bearer " + _Auth2.default.getToken());
	      xhr.responseType = "json";
	      xhr.addEventListener("load", function () {
	        if (xhr.status === 200) {
	          // foundProfiles = xhr.response[0];
	          var tempResponse = {};
	          // for (var index in xhr.response) {
	          //   tempResponse.push(xhr.response[index]);
	          // }

	          // this.setState({
	          //   profiles: tempResponse
	          //   });
	        }
	      });
	      console.log("Send Here");
	      xhr.send(formData);
	      console.log(formData);
	      this.props.router.goBack();
	    }
	  }, {
	    key: "handleChange",
	    value: function handleChange(e) {
	      var tempProfile = this.state.profile;
	      tempProfile[e.target.name] = e.target.value;

	      this.setState({
	        profile: tempProfile
	      });
	      console.log(e.target.value);
	    }
	  }, {
	    key: "handleAppts",
	    value: function handleAppts(e) {
	      console.log("Fetch Appts");
	    }
	  }, {
	    key: "handleImages",
	    value: function handleImages(e) {
	      console.log("Fetch Images");
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var profile = this.state.profile;
	      if (!profile) {
	        return _react2.default.createElement(
	          "div",
	          null,
	          "Loading........"
	        );
	      }
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          _Paper2.default,
	          { style: style, zDepth: 1, rounded: true },
	          _react2.default.createElement(
	            "div",
	            null,
	            _react2.default.createElement(
	              "h2",
	              null,
	              "Profile Information"
	            ),
	            _react2.default.createElement(
	              "label",
	              null,
	              "Name: "
	            ),
	            profile.name
	          ),
	          _react2.default.createElement(
	            "form",
	            { onSubmit: this.handleSubmit },
	            _react2.default.createElement(_TextField2.default, {
	              name: "name",
	              type: "text",
	              value: profile.name,
	              onChange: this.handleChange,
	              floatingLabelText: "Name"
	            }),
	            _react2.default.createElement(_TextField2.default, {
	              name: "email",
	              type: "email",
	              value: profile.email,
	              onChange: this.handleChange,
	              floatingLabelText: "email"
	            }),
	            _react2.default.createElement(_TextField2.default, {
	              name: "address",
	              type: "text",
	              value: profile.address,
	              onChange: this.handleChange,
	              floatingLabelText: "Address"
	            }),
	            _react2.default.createElement(_TextField2.default, {
	              name: "city",
	              type: "text",
	              value: profile.city,
	              onChange: this.handleChange,
	              floatingLabelText: "City"
	            }),
	            _react2.default.createElement(_TextField2.default, {
	              name: "state",
	              type: "text",
	              value: profile.state,
	              onChange: this.handleChange,
	              floatingLabelText: "State"
	            }),
	            _react2.default.createElement(_TextField2.default, {
	              name: "zip",
	              type: "zip",
	              value: profile.zip,
	              onChange: this.handleChange,
	              floatingLabelText: "Zip"
	            }),
	            _react2.default.createElement(_TextField2.default, {
	              name: "businessName",
	              type: "text",
	              value: profile.businessName,
	              onChange: this.handleChange,
	              floatingLabelText: "Business Name"
	            }),
	            _react2.default.createElement(_TextField2.default, {
	              name: "wsite",
	              type: "text",
	              value: profile.wsite,
	              onChange: this.handleChange,
	              floatingLabelText: "Web Site Address"
	            }),
	            _react2.default.createElement(
	              _Card.CardMedia,
	              null,
	              _react2.default.createElement("img", {
	                name: "pimage",
	                src: profile.pimage,
	                alt: "c:\\Users\\Owner\\Desktop\\teamcarzy\\client\\src\\Images\\defaultprofile.jpg"
	              })
	            ),
	            _react2.default.createElement(
	              _Card.CardMedia,
	              null,
	              _react2.default.createElement("img", {
	                name: "image",
	                src: profile.image,
	                alt: "c:\\Users\\Owner\\Desktop\\teamcarzy\\client\\src\\Images\\defaultprofile.jpg"
	              })
	            ),
	            _react2.default.createElement(
	              "button",
	              { type: "submit", style: buttonStyle },
	              "Save Profile"
	            ),
	            _react2.default.createElement(
	              "button",
	              { style: buttonStyle, onClick: this.handleAppts },
	              "View Appts"
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          null,
	          _react2.default.createElement(
	            _Paper2.default,
	            { style: style, zDepth: 1, rounded: true },
	            _react2.default.createElement(
	              "div",
	              null,
	              _react2.default.createElement(
	                "h2",
	                null,
	                "Profile Information"
	              ),
	              _react2.default.createElement(
	                "label",
	                null,
	                "Images"
	              )
	            ),
	            _react2.default.createElement(
	              _Card.CardMedia,
	              null,
	              _react2.default.createElement("img", {
	                name: "pimage",
	                src: profile.pimage,
	                alt: "c:\\Users\\Owner\\Desktop\\teamcarzy\\client\\src\\Images\\defaultprofile.jpg"
	              })
	            ),
	            _react2.default.createElement(
	              _Card.CardMedia,
	              null,
	              _react2.default.createElement("img", {
	                name: "image",
	                src: profile.image,
	                alt: "c:\\Users\\Owner\\Desktop\\teamcarzy\\client\\src\\Images\\defaultprofile.jpg"
	              })
	            ),
	            _react2.default.createElement(
	              "button",
	              { style: buttonStyle, onClick: this.handleImages },
	              "Upload Images"
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return ProfileForm;
	}(_react.Component);

	ProfileForm.PropTypes = {};

	var mapStatetoProps = function mapStatetoProps(state, props) {
	  console.log(state);

	  var profileId = parseInt(props.params.profileId, 10);
	  return {
	    profile: state.profiles.find(function (profile) {
	      return profile._id == props.params.profileId;
	    })
	  };
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    onSave: (0, _redux.bindActionCreators)(_actions.saveProfile, dispatch)
	  };
	};

	exports.default = (0, _reactRedux.connect)(mapStatetoProps, mapDispatchToProps)(ProfileForm);

	// <RaisedButton
	//   label="Save Profile"
	//   fullWidth={true}
	//   style={buttonStyle}
	//   primary={true}
	//   type="submit"
	// />
	// <RaisedButton
	//   label="Reset Form"
	//   fullWidth={true}
	//   style={buttonStyle}
	//   primary={true}
	//   type="submit"
	// />

/***/ })

})