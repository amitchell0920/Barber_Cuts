import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../Actions/actions.js";
import PropTypes from "prop-types";
import Privacy from "../components/Pravicy";
import fontAwesome from "react-fontawesome";
import TextField from "material-ui/TextField";
import Auth from "../modules/Auth";
import { contactSubmit } from "../Actions/actions.js";
import { bindActionCreators } from "redux";

const style = { color: "green", fontsize: "18px" };

class ConfirmPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmAppointment: false,
      sent: false,
      apptId: this.props.params.appointmentId,
      apptEmail: this.props.params.email,
      appointment: this.props.appointment,
      message: {}
    };
    this.contactSubmit = this.contactSubmit.bind(this);
  }

  contactSubmit(event) {
    var conMsg = `Date: ${this.props.appointment.date} Time: ${
      this.props.appointment.time
    } Service: ${this.props.appointment.service} Barber: ${
      this.props.appointment.profileName
    } Barber Email: ${this.props.appointment.profileEmail}`;
    var conSub = "Appointment Confirmation";
    var name = encodeURIComponent(this.props.appointment.name);
    var email = encodeURIComponent(this.props.appointment.email);
    var phone = encodeURIComponent(this.props.appointment.phone);
    var subject = encodeURIComponent(conSub);
    var msg = encodeURIComponent(conMsg);

    const message = `name=${name}&email=${email}&phone=${phone}&subject=${subject}&msg=${msg}`;

    const xhr = new XMLHttpRequest();
    xhr.open("post", "/api/sendMessage");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // set the authorization HTTP header
    xhr.setRequestHeader("Authorization", `bearer ${Auth.getToken()}`);
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        this.setState({ sent: true, contactSubmision: true });
        this.props.router.push("/");
      }
    });
    xhr.send(message);
  }

  render() {
    var appt = this.props.appointment;
    return (
      <div id="contact" className="contact">
        <br />
        <br />
        <br />
        <div id="appointment" className="container">
          <br />
          <div className="row">
            <h2>Appointment Confirmation</h2>
            <p>Please Confirm Your Appointment with:</p>

            <form>
              <div className="col-lg-6 col-md-6">
                <div className="input-group input-group-lg">
                  <span className="input-group-addon" id="sizing-addon1">
                    <i className="fa fa-user" aria-hidden="true" />
                  </span>
                  <TextField
                    style={{
                      width: "50%",
                      margin: "0 auto",
                      border: "2px solid #E1F5FE ",
                      backgroundColor: "#E1F5FE "
                    }}
                    id="name"
                    floatingLabelText="Your Name"
                    type="text"
                    name="name"
                    value={appt.name}
                  />
                </div>
                <br />
                <div className="input-group input-group-lg">
                  <span className="input-group-addon" id="sizing-addon1">
                    <i className="fa fa-envelope" aria-hidden="true" />
                  </span>
                  <TextField
                    style={{
                      width: "50%",
                      margin: "0 auto",
                      border: "2px solid #E1F5FE ",
                      backgroundColor: "#E1F5FE "
                    }}
                    id="email"
                    floatingLabelText="Your Email"
                    type="email"
                    name="email"
                    value={appt.email}
                  />
                </div>
                <br />
                <div className="input-group input-group-lg">
                  <span className="input-group-addon" id="sizing-addon1">
                    <i className="fa fa-phone" aria-hidden="true" />
                  </span>
                  <TextField
                    style={{
                      width: "50%",
                      margin: "0 auto",
                      border: "2px solid #E1F5FE ",
                      backgroundColor: "#E1F5FE "
                    }}
                    id="phone"
                    floatingLabelText="Your Phone Number"
                    type="phone"
                    name="phone"
                    value={appt.phone}
                  />
                </div>
                <br />
              </div>
              <div className="input-group input-group-lg">
                <TextField
                  style={{
                    width: "50%",
                    margin: "0 auto",
                    border: "2px solid #E1F5FE ",
                    backgroundColor: "#E1F5FE "
                  }}
                  id="subject"
                  floatingLabelText="Subject"
                  type="text"
                  name="subject"
                  value="Appointment Confirmation"
                />
              </div>
              <br />
              <div className="input-group input-group-lg">
                <div className="input-group">
                  <TextField
                    style={{
                      width: "80%",
                      margin: "0 auto",
                      border: "2px solid #E1F5FE ",
                      backgroundColor: "#E1F5FE "
                    }}
                    id="msg"
                    floatingLabelText="Message"
                    type="text"
                    name="msg"
                    multiLine={true}
                    rows={3}
                    rowsMax={6}
                    value={`Date: ${appt.date} Time: ${appt.time} Service: ${
                      appt.service
                    } Barber: ${appt.profileName} Barber Email: ${
                      appt.profileEmail
                    }`}
                  />
                </div>
                <br />
                <button onClick={this.contactSubmit} className="btn btn-md">
                  Confirm Appointment
                </button>
              </div>
            </form>
            <br />
            {/* I CHANGED THIS */}
            {this.state.contactSubmision == true ? (
              <p style={style}> Confirmation Submitted Successfully </p>
            ) : (
              <p />
            )}
          </div>
        </div>
      </div>
    );
  }
}

ConfirmPage.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStatetoProps = (state, props) => {
  const appointmentId = props.params.appointmentId;
  const appointmentEmail = props.params.email;

  if (appointmentId == null || appointmentId == undefined) {
    return {
      appointment: state.appointments.find(
        appointment => appointment.email == appointmentEmail
      )
    };
    return {
      appointment: state.appointments.find(
        appointment => appointment._id == appointmentId
      )
    };
  }
};

const mapDispatchToProps = dispatch => ({
  contactSubmit: bindActionCreators(contactSubmit, dispatch)
});

export default connect(mapStatetoProps, mapDispatchToProps)(ConfirmPage);
