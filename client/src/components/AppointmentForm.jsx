import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import * as actions from "../Actions/actions.js";
import { saveAppointment } from "../Actions/actions.js";
import { bindActionCreators } from "redux";
import TextField from "material-ui/TextField";
import Paper from "material-ui/Paper";
import { CardMedia } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import Auth from "../modules/Auth";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

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
      apptId: this.props.params.appointmentId,
      appointment: this.props.appointment,
      value: this.props.appointment.service
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var id = encodeURIComponent(this.state.appointment._id);
    var email = encodeURIComponent(this.state.appointment.email);
    var name = encodeURIComponent(this.state.appointment.name);
    var phone = encodeURIComponent(this.state.appointment.phone);
    var date = encodeURIComponent(this.state.appointment.date);
    var time = encodeURIComponent(this.state.appointment.time);
    var service = encodeURIComponent(this.state.value);
    var message = encodeURIComponent(this.state.appointment.message);
    var profileEmail = encodeURIComponent(this.state.appointment.profileEmail);
    var profileName = encodeURIComponent(this.state.appointment.profileName);

    const formData = `name=${name}&email=${email}&phone=${phone}&date=${date}&time=${time}&service=${service}&message=${message}&profileName=${profileName}&profileEmail=${profileEmail}`;

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
    this.props.router.push(`/confirm/${id}`);
  }

  handleChange(e) {
    let tempAppointment = this.state.appointment;
    tempAppointment[e.target.name] = e.target.value;

    this.setState({
      appointment: tempAppointment
    });
  }

  handleClick(event, index, value) {
    this.setState({ value });
  }

  handleDelete(e) {
    event.preventDefault();
    var id = encodeURIComponent(this.state.appointment._id);

    const formData = `id=${id}`;

    const xhr = new XMLHttpRequest();
    xhr.open("delete", "/api/appointments/" + id);
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

  render() {
    var appointment = this.state.appointment;
    if (!appointment) {
      return <div>Loading........</div>;
    }
    return (
      <div id="appointment-form">
        <br />
        <br />
        <br />
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
              floatingLabelText="Name"
              onChange={this.handleChange}
            />
            <TextField
              name="email"
              type="email"
              value={appointment.email}
              floatingLabelText="email"
              onChange={this.handleChange}
            />
            <TextField
              name="phone"
              type="phone"
              value={appointment.phone}
              floatingLabelText="Phone"
              onChange={this.handleChange}
            />
            <TextField
              name="date"
              type="date"
              value={appointment.date}
              floatingLabelText="Appointment Date"
              onChange={this.handleChange}
            />
            <TextField
              name="time"
              type="time"
              value={appointment.time}
              floatingLabelText="Appointment Time"
              onChange={this.handleChange}
            />
            <SelectField
              id="service"
              floatingLabelText="Select Service"
              value={this.state.value}
              onChange={this.handleClick}
            >
              <MenuItem value={"Cut"} primaryText="Cut" />
              <MenuItem value={"Cut Shave"} primaryText="Cut Shave" />
              <MenuItem value={"Wash Cut Shave"} primaryText="Wash Cut Shave" />
              <MenuItem value={"Braids"} primaryText="Braids" />
              <MenuItem value={"Relaxer"} primaryText="Relaxer" />
            </SelectField>
            <TextField
              name="message"
              type="text"
              value={appointment.message}
              floatingLabelText="Message"
              onChange={this.handleChange}
            />
            <TextField
              name="barberName"
              type="text"
              value={appointment.profileName}
              floatingLabelText="Barber Name"
              onChange={this.handleChange}
            />
            <TextField
              name="barberEmail"
              type="email"
              value={appointment.profileEmail}
              floatingLabelText="Barber Email"
              onChange={this.handleChange}
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
  const appointmentId = parseInt(props.params.appointmentId, 10);
  return {
    appointment: state.appointments.find(
      appointment => appointment._id == props.params.appointmentId
    )
  };
};

export default connect(mapStatetoProps, actions)(AppointmentForm);
