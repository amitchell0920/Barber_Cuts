import React from "react";
import { Card, CardTitle } from "material-ui/Card";
import Filestack from "../containers/Filestack.jsx";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { GridList, GridTile } from "material-ui/GridList";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { addProfile } from "../Actions/actions.js";
import { bindActionCreators } from "redux";
import Auth from "../modules/Auth";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  gridList: {
    width: 800,
    height: 900,
    overflowY: "auto"
  }
};

class AddBarber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleImages = this.handleImages.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
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
    console.log(this.state.profile.hairCutUrls);

    const formData = `name=${name}&email=${email}&address=${address}&city=${city}&state=${state}&zip=${zip}&businessName=${businessName}&wsite=${wsite}&pimage=${pimage}&image=${image}`;

    const xhr = new XMLHttpRequest();
    xhr.open("post", "/api/profiles");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // // set the authorization HTTP header
    xhr.setRequestHeader("Authorization", `bearer ${Auth.getToken()}`);
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        let tempResponse = {};
        this.props.router.push(`/profile`);
      }
    });
    xhr.send(formData);
  }

  handleChange(e) {
    let tempProfile = this.state.profile;
    tempProfile[e.target.name] = e.target.value;

    this.setState({
      profile: tempProfile
    });
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
    return (
      <div>
        <div id="Add-Barber">
          <center>
            <br />
            <br />
            <br />
            <br />
            <div id="profileFrom" className="text-center dropup">
              <form id="uploadForm">
                <br />
                <div id="filestack-img">
                  <h2 id="first-h2" className="card-heading">
                    Add Barber
                  </h2>
                  <div id="avatar-photo">
                    <br />
                    <br />
                    <br />
                    <strong id="find-an-avatar">Find an avatar</strong>
                    {
                      <Filestack
                        handleImages={this.handleImages}
                        type="profileImage"
                      />
                    }

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
                <div id="PF-from-color">
                  <h2 id="first2-h2" className="card-heading">
                    Barber Info
                  </h2>
                  <div style={styles.root}>
                    <GridList cellHeight={180} style={styles.gridList}>
                      <div className="field-line">
                        <TextField
                          style={{
                            width: "80%",
                            borderRadius: "18",
                            margin: "0 auto",
                            border: "3px solid #039BE5 ",
                            backgroundColor: "#E1F5FE"
                          }}
                          id="name"
                          floatingLabelText="Full Name"
                          name="name"
                          type="text"
                          errorText="This field is required"
                          onChange={this.handleChange}
                          value={this.state.name}
                        />
                      </div>
                      <div className="field-line ">
                        <TextField
                          style={{
                            width: "80%",
                            borderRadius: "18",
                            margin: "0 auto",
                            border: "3px solid #039BE5 ",
                            backgroundColor: "#E1F5FE"
                          }}
                          id="email"
                          floatingLabelText="Email"
                          name="email"
                          type="text"
                          errorText="This field is required"
                          value={this.state.email}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="field-line">
                        <TextField
                          style={{
                            width: "80%",
                            borderRadius: "18",
                            margin: "0 auto",
                            border: "3px solid #039BE5 ",
                            backgroundColor: "#E1F5FE"
                          }}
                          id="address"
                          floatingLabelText="Address"
                          type="address"
                          name="address"
                          errorText="This field is required"
                          value={this.state.address}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="field-line">
                        <TextField
                          style={{
                            width: "80%",
                            borderRadius: "18",
                            margin: "0 auto",
                            border: "3px solid #039BE5 ",
                            backgroundColor: "#E1F5FE"
                          }}
                          id="city"
                          floatingLabelText="City"
                          type="city"
                          name="city"
                          errorText="This field is required"
                          value={this.state.city}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="field-line">
                        <TextField
                          style={{
                            width: "80%",
                            borderRadius: "18",
                            margin: "0 auto",
                            border: "3px solid #039BE5 ",
                            backgroundColor: "#E1F5FE"
                          }}
                          id="state"
                          floatingLabelText="State"
                          type="state"
                          name="state"
                          errorText="This field is required"
                          value={this.state.state}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="field-line">
                        <TextField
                          style={{
                            width: "80%",
                            borderRadius: "18",
                            margin: "0 auto",
                            border: "3px solid #039BE5 ",
                            backgroundColor: "#E1F5FE"
                          }}
                          id="zip"
                          floatingLabelText="Zip"
                          type="zip"
                          name="zip"
                          errorText="This field is required"
                          value={this.state.zip}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="field-line">
                        <TextField
                          style={{
                            width: "80%",
                            borderRadius: "18",
                            margin: "0 auto",
                            border: "3px solid #039BE5 ",
                            backgroundColor: "#E1F5FE"
                          }}
                          id="businessName"
                          floatingLabelText="Business Name"
                          type="business name"
                          name="businessName"
                          errorText="This field is required"
                          value={this.state.businessName}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="field-line">
                        <TextField
                          style={{
                            width: "80%",
                            borderRadius: "18",
                            margin: "0 auto",
                            border: "3px solid #039BE5 ",
                            backgroundColor: "#E1F5FE"
                          }}
                          id="wsite"
                          floatingLabelText="Website"
                          type="website"
                          name="wsite"
                          errorText="This field is required"
                          value={this.state.wsite}
                          onChange={this.handleChange}
                        />
                      </div>
                    </GridList>
                  </div>
                </div>
                <div className="button-line">
                  <div className="form-group ">
                    <div className="text-center dropup" />
                  </div>
                  <div id="avatar-photo">
                    <br />
                    <br />
                    <br />
                    {
                      <Filestack
                        handleImages={this.handleImages}
                        type="hairCutImages"
                      />
                    }

                    {/* <strong id="add-hair">add hair Cuts Images</strong> */}
                    <br />
                    <label id="add-hair" htmlFor="picture">
                      Picture
                    </label>

                    <br />
                    <br />
                    <button
                      id="save-profile"
                      type="button"
                      className="btn btn-filestack btn-block"
                      onClick={this.handleSubmit}
                    >
                      Save Profile
                    </button>
                  </div>
                </div>
              </form>
              <div />
            </div>
          </center>

          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}
AddBarber.PropTypes = {};

AddBarber.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  //profile: state.profiles
});

const mapDispatchToProps = dispatch => ({
  onSubmit: bindActionCreators(addProfile, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBarber);
