import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../Actions/actions.js";
import PropTypes from "prop-types";
import Paper from "material-ui/Paper";
import Auth from "../modules/Auth";
import { setProfiles, saveProfile } from "../Actions/actions.js";
import { bindActionCreators } from "redux";
import TextField from "material-ui/TextField";

const style = {
  height: 675,
  width: 300,
  margin: 20,
  textAlign: "center",
  display: "inline-block"
};

let profile = {};

class AdminProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      profiles: []
    };
    this.handleUseDelete = this.handleUseDelete.bind(this);
    this.handleUsrUpt = this.handleUsrUpt.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    const xhr = new XMLHttpRequest();
    xhr.open("get", "/api/profiles");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // // set the authorization HTTP header
    xhr.setRequestHeader("Authorization", `bearer ${Auth.getToken()}`);
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        let tempResponse = [];
        for (var index in xhr.response) {
          tempResponse.push(xhr.response[index]);
        }
        this.props.onSave(tempResponse);
        this.setState({
          profiles: tempResponse
        });
      }
    });
    xhr.send();
  }

  handleUseDelete(e) {
    var uid = encodeURIComponent(e.target.id);
    var data = `id=${uid}`;

    const xhr = new XMLHttpRequest();
    xhr.open("delete", "/api/profiles/" + uid);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // // set the authorization HTTP header
    xhr.setRequestHeader("Authorization", `bearer ${Auth.getToken()}`);
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
      console.log("After send to DB");
      if (xhr.status === 200) {
        let tempResponse = [];
        for (var index in xhr.response) {
          tempResponse.push(xhr.response[index]);
        }
      }
    });
    xhr.send(data);
    const adminProfiles = this.state.profiles.filter(item => {
      return item._id != uid;
    });
    this.setState({ profiles: adminProfiles });
  }

  handleUsrUpt(e) {
    const adminProfile = this.state.profiles.filter(
      item => item._id === e.target.id
    );
    var uid = encodeURIComponent(e.target.id);
    var name = encodeURIComponent(adminProfile[0].name);
    var email = encodeURIComponent(adminProfile[0].email);
    var city = encodeURIComponent(adminProfile[0].city);
    var state = encodeURIComponent(adminProfile[0].state);
    var zip = encodeURIComponent(adminProfile[0].zip);
    var businessName = encodeURIComponent(adminProfile[0].businessName);
    var wsite = encodeURIComponent(adminProfile[0].wsite);

    const formData = `id=${uid}&name=${name}&email=${email}&city=${city}&state=${state}&zip=${zip}&businessName=${businessName}&wsite=${wsite}`;

    const xhr = new XMLHttpRequest();
    xhr.open("put", "/api/profiles/" + uid);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // // set the authorization HTTP header
    xhr.setRequestHeader("Authorization", `bearer ${Auth.getToken()}`);
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        let tempResponse = [];
        for (var index in xhr.response) {
          tempResponse.push(xhr.response[index]);
        }
      }
    });
    xhr.send(formData);
    const adminProfiles = this.state.profiles.map(item => {
      if (item._id === uid) {
        this.props.onUpdate(item);
      }
      return item;
    });
  }

  handleChange(e) {
    var foundIndex = -1;
    var tempProfileArray = this.state.profiles;

    for (var i = 0; i < tempProfileArray.length; ++i) {
      if (tempProfileArray[i]._id == e.target.id) foundIndex = i;
    }

    if (foundIndex > -1) {
      tempProfileArray[foundIndex][e.target.name] = e.target.value;
      this.setState({
        profiles: tempProfileArray
      });
    }
  }

  render() {
    const adminProfiles = this.state.profiles;

    return (
      <div>
        <div id="admin">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h2> Profile Admin Dashboard </h2>
          <br />
          <br />
          {adminProfiles.map(profile => {
            var AdminProfile = profile;

            return (
              <Paper style={style} zDepth={5} key={profile._id}>
                <h3>{profile.name}</h3>
                <TextField
                  id={profile._id}
                  name="name"
                  type="text"
                  value={profile.name}
                  onChange={this.handleChange}
                  floatingLabelText="Name"
                />
                <TextField
                  id={profile._id}
                  name="email"
                  type="email"
                  value={profile.email}
                  onChange={this.handleChange}
                  floatingLabelText="email"
                />
                <TextField
                  id={profile._id}
                  name="address"
                  type="text"
                  value={profile.address}
                  onChange={this.handleChange}
                  floatingLabelText="Address"
                />
                <TextField
                  id={profile._id}
                  name="city"
                  type="text"
                  value={profile.city}
                  onChange={this.handleChange}
                  floatingLabelText="City"
                />
                <TextField
                  id={profile._id}
                  name="state"
                  type="text"
                  value={profile.state}
                  onChange={this.handleChange}
                  floatingLabelText="State"
                />
                <TextField
                  id={profile._id}
                  name="zip"
                  type="zip"
                  value={profile.zip}
                  onChange={this.handleChange}
                  floatingLabelText="Zip"
                />
                <TextField
                  id={profile._id}
                  name="businessName"
                  type="text"
                  value={profile.businessName}
                  onChange={this.handleChange}
                  floatingLabelText="Business Name"
                />
                <TextField
                  id={profile._id}
                  name="wsite"
                  type="text"
                  value={profile.wsite}
                  onChange={this.handleChange}
                  floatingLabelText="Web Site Address"
                />
                <p>
                  <button
                    type="warning"
                    onClick={this.handleUseDelete}
                    id={profile._id}
                  >
                    Delete Profile
                  </button>

                  <button
                    type="button"
                    onClick={this.handleUsrUpt}
                    id={profile._id}
                  >
                    Update Profile
                  </button>
                </p>
              </Paper>
            );
          })}
          <div />
        </div>
      </div>
    );
  }
}

AdminProfile.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
  profiles: state.profiles
});

const mapDispatchToProps = dispatch => ({
  onSave: bindActionCreators(setProfiles, dispatch),
  onUpdate: bindActionCreators(saveProfile, dispatch)
});

export default connect(mapStatetoProps, mapDispatchToProps)(AdminProfile);
