import React from "react";
import Auth from "../modules/Auth";
import { connect } from "react-redux";
import Paper from "material-ui/Paper";
import Divider from "material-ui/Divider";
import PropTypes from "prop-types";
import * as actions from "../Actions/actions.js";
import { setAppointments } from "../Actions/actions.js";
import { bindActionCreators } from "redux";
import TextField from "material-ui/TextField";

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

class AppointmentPage extends React.Component {
  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);
    this.state = {
      //profile: this.props.profile,
      appointments: []
    };

    this.handleApptUpt = this.handleApptUpt.bind(this);
  }

  // /**
  //  * This method will be executed after initial rendering.
  //  */
  componentWillMount() {
    var profileEmail = encodeURIComponent(this.props.params.profileEmail);
    const data = `profileEmail=${profileEmail}`;
    const xhr = new XMLHttpRequest();

    xhr.open("get", "/api/appointments/" + profileEmail);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // // set the authorization HTTP header
    xhr.setRequestHeader("Authorization", `bearer ${Auth.getToken()}`);
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        // foundProfiles = xhr.response[0];
        let tempResponse = [];
        for (var index in xhr.response) {
          tempResponse.push(xhr.response[index]);
        }
        this.props.onSave(tempResponse);
        this.setState({
          appointments: tempResponse
        });
      }
    });
    xhr.send(data);
  }

  handleApptUpt(e) {
    event.preventDefault();
    const appointmentId = e.target.id;
    this.props.router.push(`/appointments/edit/appointmentId/${appointmentId}`);
  }

  /**
   * Render the component.
   */
  render() {
    if (this.state.appointments.length > 0) {
      return (
        <div id="appointment-page">
          <h1>APPOINTMENTS DASHBOARD</h1>
          {this.state.appointments.map(item => {
            return (
              <Paper style={style} zDepth={1} rounded key={item._id}>
                <div>
                  <h2>Appointment Information</h2>
                  <label>Name: </label>
                  {item.name}
                </div>
                <form>
                  <TextField
                    name="name"
                    type="text"
                    value={item.name}
                    floatingLabelText="Name"
                  />
                  <TextField
                    name="email"
                    type="email"
                    value={item.email}
                    floatingLabelText="email"
                  />
                  <TextField
                    name="phone"
                    type="phone"
                    value={item.phone}
                    floatingLabelText="Phone"
                  />
                  <TextField
                    name="date"
                    type="date"
                    value={item.date}
                    floatingLabelText="Appointment Date"
                  />
                  <TextField
                    name="time"
                    type="time"
                    value={item.time}
                    floatingLabelText="Appointment Time"
                  />
                  <TextField
                    name="service"
                    type="text"
                    value={item.service}
                    floatingLabelText="Selected Service"
                  />
                  <TextField
                    name="message"
                    type="text"
                    value={item.message}
                    floatingLabelText="Message"
                  />
                  <TextField
                    name="barberName"
                    type="text"
                    value={item.profileName}
                    floatingLabelText="Barber Name"
                  />
                  <TextField
                    name="barberEmail"
                    type="email"
                    value={item.profileEmail}
                    floatingLabelText="Barber Email"
                  />
                  <button
                    id={item._id}
                    style={buttonStyle}
                    onClick={this.handleApptUpt}
                  >
                    Edit Appointment
                  </button>
                </form>
              </Paper>
            );
          })}
        </div>
      );
    } else
      return (
        <div>
          <h1>APPOINTMENTS DASHBOARD</h1>
          <Divider />
          <h3>
            No Appointents Found Click Add Appointments to Schedule an
            Appointment
          </h3>
        </div>
      );
  }
}

AppointmentPage.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  appointments: state.appointments
});

const mapDispatchToProps = dispatch => ({
  onSave: bindActionCreators(setAppointments, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentPage);
