import React from "react";
import { Card, CardTitle } from "material-ui/Card";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { GridList, GridTile } from "material-ui/GridList";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import * as actions from "../Actions/actions.js";
import { addAppointment, setAppointments } from "../Actions/actions.js";
import { bindActionCreators } from "redux";
import Auth from "../modules/Auth";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  gridList: {
    width: 800,
    height: 950,
    overflowY: "auto"
  }
};

class AddAppointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointment: {},
      value: 1
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOnAdd = this.handleOnAdd.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    var id = this.state.appointment._id;
    var name = encodeURIComponent(this.state.appointment.name);
    var email = encodeURIComponent(this.state.appointment.email);
    var phone = encodeURIComponent(this.state.appointment.phone);
    var date = encodeURIComponent(this.state.appointment.date);
    var time = encodeURIComponent(this.state.appointment.time);
    var service = encodeURIComponent(this.state.value);
    var message = encodeURIComponent(this.state.appointment.message);
    var profileEmail = encodeURIComponent(this.state.appointment.profileEmail);
    var profileName = encodeURIComponent(this.state.appointment.profileName);
    var profileId = encodeURIComponent(this.state.appointment.profileId);

    const formData = `email=${email}&name=${name}&phone=${phone}&date=${date}&time=${time}&service=${service}&message=${message}&profileEmail=${profileEmail}&profileName=${profileName}&profileId=${profileId}`;

    const xhr = new XMLHttpRequest();
    xhr.open("post", "/api/appointments");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // set the authorization HTTP header
    xhr.setRequestHeader("Authorization", `bearer ${Auth.getToken()}`);
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        let tempAppointment = this.state.appointment;
        //this.handleOnAdd(e);
        //add service to appt object
        tempAppointment.service = this.state.value;
        this.props.onSave(tempAppointment);

        this.props.router.push(`/confirm/add/${email}`);
      }
    });
    xhr.send(formData);
    //this.props.router.goBack();
    //console.log(email);
    //this.props.router.push(`/contact/add/${email}`);
  }

  handleClick(event, index, value) {
    this.setState({ value });
  }

  handleChange(e) {
    let tempAppointment = this.state.appointment;
    tempAppointment[e.target.name] = e.target.value;

    this.setState({
      appointment: tempAppointment
    });
  }

  handleOnAdd(e) {
    //e.preventDefault();
    console.log("handleOnAdd started");

    var email = encodeURIComponent(this.state.appointment.email);
    var date = encodeURIComponent(this.state.appointment.date);
    var time = encodeURIComponent(this.state.appointment.time);
    // var profileEmail = encodeURIComponent(this.state.appointment.profileEmail);
    //var profileName = encodeURIComponent(this.state.appointment.profileName);

    const formData = `email=${email}&date=${date}&time=${time}`;

    const xhr = new XMLHttpRequest();
    xhr.open("get", "/api/appointments/add/" + email);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // set the authorization HTTP header
    xhr.setRequestHeader("Authorization", `bearer ${Auth.getToken()}`);
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        //let tempResponse = {};
        let tempAppointment = xhr.response;
        console.log(tempAppointment);
        //handldeOnAdd(addAppointment);
        let id = tempAppointment._id;
        //this.props.onSave(tempAppointment);
      }
    });
    xhr.send(formData);
    //this.props.router.goBack();
    //let id = tempAppointment._id;
    console.log(id);
    console.log(email);
    //this.props.router.push(`/confirm/${id}`);
    //this.props.router.push(`/confirm`);
    this.props.router.push(`/confirm/${email}`);
  }

  render() {
    return (
      <div>
        <div id="Add-Appointment">
          <center>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div id="appointmentFrom" className="text-center dropup">
              <form>
                <br />
                <h2 id="first-h2" className="card-heading">
                  Add Appointment
                </h2>
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
                            margin: "0 auto",
                            border: "2px solid #E1F5FE ",
                            backgroundColor: "#E1F5FE "
                          }}
                          id="name"
                          name="name"
                          type="text"
                          floatingLabelText="Name"
                          onChange={this.handleChange}
                          value={this.state.name}
                        />
                      </div>
                      <div className="field-line ">
                        <TextField
                          style={{
                            width: "80%",
                            margin: "0 auto",
                            border: "2px solid #E1F5FE ",
                            backgroundColor: "#E1F5FE "
                          }}
                          id="email"
                          name="email"
                          type="email"
                          floatingLabelText="email"
                          onChange={this.handleChange}
                          value={this.state.email}
                        />
                      </div>
                      <div className="field-line">
                        <TextField
                          style={{
                            width: "80%",
                            margin: "0 auto",
                            border: "2px solid #E1F5FE ",
                            backgroundColor: "#E1F5FE "
                          }}
                          id="phone"
                          name="phone"
                          type="phone"
                          floatingLabelText="Phone"
                          onChange={this.handleChange}
                          value={this.state.phone}
                        />
                      </div>
                      <div className="field-line">
                        <TextField
                          style={{
                            width: "80%",
                            margin: "0 auto",
                            border: "2px solid #E1F5FE ",
                            backgroundColor: "#E1F5FE "
                          }}
                          id="date"
                          name="date"
                          type="date"
                          floatingLabelText="Appointment Date"
                          onChange={this.handleChange}
                          value={this.state.date}
                        />
                      </div>
                      <div className="field-line">
                        <TextField
                          style={{
                            width: "80%",
                            margin: "0 auto",
                            border: "2px solid #E1F5FE ",
                            backgroundColor: "#E1F5FE "
                          }}
                          id="time"
                          name="time"
                          type="time"
                          floatingLabelText="Appointment Time"
                          onChange={this.handleChange}
                          value={this.state.time}
                        />
                      </div>
                      <div className="field-line">
                        <SelectField
                          style={{
                            width: "80%",
                            margin: "0 auto",
                            border: "2px solid #E1F5FE ",
                            backgroundColor: "#E1F5FE "
                          }}
                          id="service"
                          floatingLabelText="Select Service"
                          value={this.state.value}
                          onChange={this.handleClick}
                        >
                          <MenuItem value={"Cut"} primaryText="Cut" />
                          <MenuItem
                            value={"Cut Shave"}
                            primaryText="Cut Shave"
                          />
                          <MenuItem
                            value={"Wash Cut Shave"}
                            primaryText="Wash Cut Shave"
                          />
                          <MenuItem value={"Braids"} primaryText="Braids" />
                          <MenuItem value={"Relaxer"} primaryText="Relaxer" />
                        </SelectField>
                      </div>
                      <div className="field-line">
                        <TextField
                          style={{
                            width: "80%",
                            margin: "0 auto",
                            border: "2px solid #E1F5FE ",
                            backgroundColor: "#E1F5FE "
                          }}
                          id="message"
                          name="message"
                          type="text"
                          floatingLabelText="Message"
                          onChange={this.handleChange}
                          value={this.state.message}
                        />
                      </div>
                      <div className="field-line">
                        <TextField
                          style={{
                            width: "80%",
                            margin: "0 auto",
                            border: "2px solid #E1F5FE ",
                            backgroundColor: "#E1F5FE "
                          }}
                          id="profileName"
                          name="profileName"
                          type="text"
                          floatingLabelText="Barber Name"
                          onChange={this.handleChange}
                          value={this.state.profileName}
                        />
                      </div>
                      <div className="field-line">
                        <TextField
                          style={{
                            width: "80%",
                            margin: "0 auto",
                            border: "2px solid #E1F5FE ",
                            backgroundColor: "#E1F5FE "
                          }}
                          id="profileEmail"
                          name="profileEmail"
                          type="email"
                          floatingLabelText="Barber Email"
                          onChange={this.handleChange}
                          value={this.state.profileEmail}
                        />
                      </div>
                    </GridList>
                  </div>
                </div>

                <div className="button-line">
                  <div className="form-group ">
                    <div className="text-center dropup" />
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <div>
                    <button
                      id="save-profile"
                      type="submit"
                      onClick={this.handleSubmit}
                    >
                      Save Appointment
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
        <div id="bottom-footer2" />
      </div>
    );
  }
}
AddAppointment.PropTypes = {};

AddAppointment.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  appointment: state.appointment
});

const mapDispatchToProps = dispatch => ({
  //onSubmit: bindActionCreators(addAppointment, dispatch),
  onSave: bindActionCreators(addAppointment, dispatch)
  //onSave: bindActionCreators(setAppointments, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddAppointment);
