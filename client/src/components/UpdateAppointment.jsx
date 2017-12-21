import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { saveAppointment } from "../Actions/actions.js";
import { bindActionCreators } from "redux";
import TextField from "material-ui/TextField";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import Auth from "../modules/Auth";

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

class AppointmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointment: this.props.appointment
    };
    console.log("update form!!");
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAppts = this.handleAppts.bind(this);
    this.handleImages = this.handleImages.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSave(this.state.appointment);
    var id = encodeURIComponent(this.state.appointment._id);
    var name = encodeURIComponent(this.state.appointment.name);
    var email = encodeURIComponent(this.state.appointment.email);
    var phone = encodeURIComponent(this.state.appointment.phone);
    var date = encodeURIComponent(this.state.appointment.date);
    var time = encodeURIComponent(this.state.appointment.time);
    var service = encodeURIComponent(this.state.appointment.service);
    var message = encodeURIComponent(this.state.appointment.message);
    var profileName = encodeURIComponent(this.state.appointment.profileName);
    var profileEmail = encodeURIComponent(this.state.appointment.profileEmail);

    const formData = `name=${name}&email=${email}&phone=${phone}&date=${
      date
    }&time=${time}&service=${service}&message=${message}&profileName=${
      profileName
    }&profileEmail=${profileEmail}`;

    const xhr = new XMLHttpRequest();
    xhr.open("put", "/api/appointments/" + id);
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
    let tempAppointment = this.state.appointment;
    tempAppointment[e.target.name] = e.target.value;

    this.setState({
      appointment: tempAppointment
    });
  }

  handleDelete(e) {
    console.log("Delete Appts");
  }

  render() {
    var appointment = this.state.appointment;
    if (!appointment) {
      return <div>Loading........</div>;
    }
    return (
      <div>
        <Paper style={style} zDepth={1} rounded>
          <div>
            <h2>Appointment Information</h2>
            <label>Name: </label>
            {appointment.name}
          </div>
          <form onSubmit={this.handleSubmit}>
            <TextField
              name="name"
              type="text"
              value={appointment.name}
              onChange={this.handleChange}
              floatingLabelText="Name"
            />
            <TextField
              name="email"
              type="email"
              value={appointment.email}
              onChange={this.handleChange}
              floatingLabelText="email"
            />
            <TextField
              name="phone"
              type="phone"
              value={appointment.phone}
              onChange={this.handleChange}
              floatingLabelText="Phone"
            />
            <DatePicker
              name="date"
              type="date"
              value={appointment.date}
              onChange={this.handleChange}
              floatingLabelText="Date"
            />
            <TextField
              name="time"
              type="time"
              value={appointment.time}
              onChange={this.handleChange}
              floatingLabelText="Time"
            />
            <TextField
              name="mesage"
              type="text"
              value={appointment.message}
              onChange={this.handleChange}
              floatingLabelText="message"
              multiLine={true}
              rows={2}
              rowsMax={4}
            />
            <TextField
              name="profileName"
              type="text"
              value={appointment.profileName}
              onChange={this.handleChange}
              floatingLabelText="Barber Name"
            />
            <TextField
              name="wsite"
              type="text"
              value={appointment.profileEmail}
              onChange={this.handleChange}
              floatingLabelText="Barber Email"
            />
            <button type="submit" style={buttonStyle}>
              Save Appointment
            </button>
            <button style={buttonStyle} onClick={this.handleDelete}>
              Delete Appointment
            </button>
          </form>
        </Paper>
      </div>
    );
  }
}

AppointmentForm.PropTypes = {};

const mapStatetoProps = (state, props) => {
  console.log(state);

  const appointmentId = parseInt(props.params.appointmentId, 10);
  return {
    appointment: state.appointments.find(
      appointment => appointment._id == props.params.appointmentId
    )
  };
};

const mapDispatchToProps = dispatch => ({
  onSave: bindActionCreators(saveAppointment, dispatch)
});

export default connect(mapStatetoProps, mapDispatchToProps)(AppointmentForm);
