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
import Filestack from "./Filestack_Updt.jsx";

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

const style = {
  position: "relative",
  height: 900,
  width: 400,
  margin: 20,
  textAlign: "left",
  display: "inline-block",
  padding: "0 1rem 3rem 2rem",
  textAlign: "center"
};

class ProfileImages extends Component {
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
    var pimage = encodeURIComponent(this.state.profile.imageUrl);
    var image = encodeURIComponent([this.state.profile.hairCutUrls]);
    console.log(this.state.profile.imageUrl);
    console.log(this.state.profile.hairCutUrls);
    console.log(this.state.imageUrl);

    const formData = `name=${name}&email=${email}&address=${address}&city=${
      city
    }&state=${state}&zip=${zip}&businessName=${businessName}&wsite=${
      wsite
    }&dateCreated=${dateCreated}&pimage=${pimage}&image=${image}`;

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

  handleDelete(e) {
    event.preventDefault();
    const profileId = e.target.id;
    this.props.router.push(`/profile/${profileId}`);
  }

  handleImages(url, type) {
    let tempProfile = this.state.profile;
    switch (type) {
      case "profileImage":
        tempProfile.imageUrl = url;
        break;

      case "hairCutImages":
        tempProfile.hairCutUrls = url;
        break;
    }
    this.setState({
      profile: tempProfile
    });
  }

  render() {
    var profile = this.state.profile;
    if (!profile) {
      return <div>Loading........</div>;
    }
    return (
      <div id="Update-haircut-images">
        <Paper style={style} zDepth={1} rounded>
          <div>
            <h2>Profile Information</h2>
            <label>Name: </label>
            {profile.name}
          </div>
          <div>
            <h2>Update Profile Image</h2>
            <label>Image</label>
          </div>
          <CardMedia>
            <img name="pimage" src={profile.pimage} alt="" />
          </CardMedia>
          <Filestack handleImages={this.handleImages} type="profileImage" />
        </Paper>
        <Paper style={style} zDepth={1} rounded>
          <div>
            <h2>Profile Information</h2>
            <label>Name: </label>
            {profile.name}
          </div>
          <div>
            <h2>Update Haircut Images</h2>
            <label>Images</label>
          </div>
          <CardMedia>
            {Array.isArray(profile.image) ? (
              profile.image[0]
                .split(",")
                .map(itm => (
                  <img
                    key={itm}
                    style={{ height: "20vw", width: "20vw" }}
                    src={itm}
                  />
                ))
            ) : (
              <img style={{ height: "20vw", width: "20vw" }} src={itm} />
            )}
          </CardMedia>
          <Filestack handleImages={this.handleImages} type="hairCutImages" />
        </Paper>
        <button
          style={buttonStyle}
          onClick={this.handleSubmit}
          id={profile._id}
        >
          Save Updates
        </button>
      </div>
    );
  }
}

ProfileImages.PropTypes = {};

const mapStatetoProps = (state, props) => {
  //console.log(state);

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

export default connect(mapStatetoProps, mapDispatchToProps)(ProfileImages);
