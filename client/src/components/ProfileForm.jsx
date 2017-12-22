import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { saveProfile } from "../Actions/actions.js";
import { bindActionCreators } from "redux";
import TextField from "material-ui/TextField";
import Paper from "material-ui/Paper";
import { CardMedia } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import Auth from "../modules/Auth";
import Divider from "material-ui/Divider";
import Filestack from "../containers/Filestack.jsx";
import { GridList, GridTile } from "material-ui/GridList";

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  gridList: {
    width: 700,
    height: 750,
    overflowY: "auto"
  }
};

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: this.props.profile
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImages = this.handleImages.bind(this);
  }

  handleSubmit(e) {
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

    const formData = `name=${name}&email=${email}&address=${address}&city=${city}&state=${state}&zip=${zip}&businessName=${businessName}&wsite=${wsite}&dateCreated=${dateCreated}&pimage=${pimage}&image=${image}`;

    const xhr = new XMLHttpRequest();
    xhr.open("put", "/api/profiles/" + id);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // // set the authorization HTTP header
    xhr.setRequestHeader("Authorization", `bearer ${Auth.getToken()}`);
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        let tempResponse = {};
      }
    });
    xhr.send(formData);
    this.props.router.goBack();
  }

  handleChange(e) {
    let tempProfile = this.state.profile;
    tempProfile[e.target.name] = e.target.value;

    this.setState({
      profile: tempProfile
    });
  }

  handleImages(e) {
    e.preventDefault();
    const profileId = e.target.id;
    this.props.router.push(`/profile/profileImages/${profileId}`);
  }

  render() {
    var profile = this.state.profile;
    if (!profile) {
      return <div>Loading........</div>;
    }
    return (
      <div id="Profile-form">
        <br />
        <div>
          <br />
          <br />
          <br />
          <div style={styles.root}>
            <center>
              <div id="Profile-information">
                <h2>Profile Information</h2>
                <label>Name: </label>
                {profile.name}
              </div>

              <form id="Form-profile" onSubmit={this.handleSubmit}>
                <GridList cellHeight={180} style={styles.gridList}>
                  <TextField
                    style={{
                      width: "80%",
                      border: "2px solid #E1F5FE ",
                      backgroundColor: "#84FFFF"
                    }}
                    name="name"
                    type="text"
                    value={profile.name}
                    onChange={this.handleChange}
                    floatingLabelText="Name"
                  />
                  <TextField
                    style={{
                      width: "80%",
                      border: "2px solid #E1F5FE ",
                      backgroundColor: "#84FFFF"
                    }}
                    name="email"
                    type="email"
                    value={profile.email}
                    onChange={this.handleChange}
                    floatingLabelText="email"
                  />
                  <TextField
                    style={{
                      width: "80%",
                      border: "2px solid #E1F5FE ",
                      backgroundColor: "#84FFFF"
                    }}
                    name="address"
                    type="text"
                    value={profile.address}
                    onChange={this.handleChange}
                    floatingLabelText="Address"
                  />
                  <TextField
                    style={{
                      width: "80%",
                      border: "2px solid #E1F5FE ",
                      backgroundColor: "#84FFFF"
                    }}
                    name="city"
                    type="text"
                    value={profile.city}
                    onChange={this.handleChange}
                    floatingLabelText="City"
                  />
                  <TextField
                    style={{
                      width: "80%",
                      border: "2px solid #E1F5FE ",
                      backgroundColor: "#84FFFF"
                    }}
                    name="state"
                    type="text"
                    value={profile.state}
                    onChange={this.handleChange}
                    floatingLabelText="State"
                  />
                  <TextField
                    style={{
                      width: "80%",
                      border: "2px solid #E1F5FE ",
                      backgroundColor: "#84FFFF"
                    }}
                    name="zip"
                    type="zip"
                    value={profile.zip}
                    onChange={this.handleChange}
                    floatingLabelText="Zip"
                  />
                  <TextField
                    style={{
                      width: "80%",
                      border: "2px solid #E1F5FE ",
                      backgroundColor: "#84FFFF"
                    }}
                    name="businessName"
                    type="text"
                    value={profile.businessName}
                    onChange={this.handleChange}
                    floatingLabelText="Business Name"
                  />
                  <TextField
                    style={{
                      width: "80%",
                      border: "2px solid #E1F5FE ",
                      backgroundColor: "#84FFFF"
                    }}
                    name="wsite"
                    type="text"
                    value={profile.wsite}
                    onChange={this.handleChange}
                    floatingLabelText="Web Site Address"
                  />
                </GridList>
                <button
                  style={buttonStyle}
                  onClick={this.handleImages}
                  id={profile._id}
                >
                  Update Images
                </button>
                <button style={buttonStyle} onClick={this.handleSubmit}>
                  Update Profile
                </button>
              </form>
            </center>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

ProfileForm.PropTypes = {};

const mapStatetoProps = (state, props) => {
  console.log(state);

  const profileId = parseInt(props.params.profileId, 10);
  return {
    profile: state.profiles.find(
      profile => profile._id == props.params.profileId
    )
  };
};

const mapDispatchToProps = dispatch => ({
  onSave: bindActionCreators(saveProfile, dispatch)
});

export default connect(mapStatetoProps, mapDispatchToProps)(ProfileForm);
