import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../Actions/actions.js";
import PropTypes from "prop-types";
import Privacy from "../components/Pravicy";
//import '../css/style.css';
import fontAwesome from "react-fontawesome";
import TextField from "material-ui/TextField";
import Auth from "../modules/Auth";
import { contactSubmit } from "../Actions/actions.js";

const style = { color: "green", fontsize: "18px" };

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactSubmision: false,
      sent: false,
      appointment: this.props.appointment,
      message: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchMessage();
  // }

  handleSubmit() {
    // let email = this.state.message.email;
    // let name = this.state.message.name;
    // let phone = this.state.message.phone;
    // let message = this.state.message.msg;
    // let subject = this.state.message.subject;
    //contactSubmit(email, name, phone, subject, message);
    // this.setState({ sent: true, contactSubmision: true });
    // console.log("CONTACT FORM SUBMITED");
    //this.props.router.goback();

    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var subject = $("#subject").val();
    var message = $("#message").val();

    var info = {
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message
    };

    const xhr = new XMLHttpRequest();
    xhr.open("post", "/api/sendMessage");
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    // // set the authorization HTTP header
    xhr.setRequestHeader("Authorization", `bearer ${Auth.getToken()}`);
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        // foundProfiles = xhr.response[0];
        let tempResponse = {};
        // for (var index in xhr.response) {
        //   tempResponse.push(xhr.response[index]);
        // }
        this.setState({ sent: true, contactSubmision: true });
        // this.setState({
        //   profiles: tempResponse
        //   });
      }
    });
    console.log("Contact Send Here");
    xhr.send(info);
    console.log("STEP 1", info);
    //this.props.router.goBack();
    //this.props.history.push(`/appointments/apointmentId`);
    this.props.history.refresh();
  }

  //this.props.onSave(this.state.appointment);
  // var id = encodeURIComponent(this.state.id);
  //   var name = encodeURIComponent(this.state.name);
  //   var email = encodeURIComponent(this.state.email);
  //   var phone = encodeURIComponent(this.state.phone);
  //   // var date = encodeURIComponent(this.state.appointment.date);
  //   // var time = encodeURIComponent(this.state.appointment.time);
  //   // var service = encodeURIComponent(this.state.value);
  //   var subject = encodeURIComponent(this.state.subject);
  //   var message = encodeURIComponent(this.state.message);
  //   // var profileEmail = encodeURIComponent(this.state.appointment.profileEmail);
  //   // var profileName = encodeURIComponent(this.state.appointment.profileName);

  //   const formData = `name=${name}&email=${email}&phone=${phone}&subject=${
  //     subject
  //   }&message=${message}`;

  //   const xhr = new XMLHttpRequest();
  //   xhr.open("post", "/api/sendMessage");
  //   xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  //   // // set the authorization HTTP header
  //   xhr.setRequestHeader("Authorization", `bearer ${Auth.getToken()}`);
  //   xhr.responseType = "json";
  //   xhr.addEventListener("load", () => {
  //     if (xhr.status === 200) {
  //       // foundProfiles = xhr.response[0];
  //       let tempResponse = {};
  //       // for (var index in xhr.response) {
  //       //   tempResponse.push(xhr.response[index]);
  //       // }
  //       this.setState({ sent: true, contactSubmision: true });
  //       // this.setState({
  //       //   profiles: tempResponse
  //       //   });
  //     }
  //   });
  //   console.log("Appointment Send Here");
  //   xhr.send(formData);
  //   console.log("STEP 1", formData);
  //   //this.props.router.goBack();
  //   this.props.history.push(`/appointments/apointmentId`);
  //   // this.props.history.push();
  // }

  handleChange(e) {
    let tempMessage = this.state.message;
    tempMessage[e.target.name] = e.target.value;

    this.setState({
      message: tempMessage
    });
  }

  render() {
    console.log("CONFIRM PAGE STATE", this.state);
    return (
      <div id="contact" className="contact">
        <div className="container">
          <div className="row">
            <h2>Appointment Confirmation</h2>
            <p>Your Appointment is Comfirmed with:</p>

            <form>
              <div className="col-lg-6 col-md-6">
                <div className="input-group input-group-lg">
                  <span className="input-group-addon" id="sizing-addon1">
                    <i className="fa fa-user" aria-hidden="true" />
                  </span>
                  <TextField
                    id="name"
                    floatingLabelText="Full Name"
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.name}
                    //value={this.props.appointment.name}
                  />
                </div>
                <div className="input-group input-group-lg">
                  <span className="input-group-addon" id="sizing-addon1">
                    <i className="fa fa-envelope" aria-hidden="true" />
                  </span>
                  <TextField
                    id="email"
                    floatingLabelText="Email Address"
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                    // value={this.props.appointment.name}
                  />
                </div>
                <div className="input-group input-group-lg">
                  <span className="input-group-addon" id="sizing-addon1">
                    <i className="fa fa-phone" aria-hidden="true" />
                  </span>
                  <TextField
                    id="phone"
                    floatingLabelText="Phone Number"
                    type="phone"
                    name="phone"
                    onChange={this.handleChange}
                    value={this.state.phone}
                    // value={this.props.appointment.name}
                  />
                </div>
              </div>
              <div className="input-group input-group-lg">
                <TextField
                  id="subject"
                  floatingLabelText="Subject"
                  type="text"
                  name="subject"
                  onChange={this.handleChange}
                  value={this.state.subject}
                  // value={this.props.appointment.name}
                />
              </div>
              <div className="input-group input-group-lg">
                <div className="input-group">
                  <TextField
                    id="message"
                    floatingLabelText="Message"
                    type="text"
                    name="message"
                    multiLine={true}
                    rows={3}
                    rowsMax={6}
                    onChange={this.handleChange}
                    value={this.state.msg}
                    // value={this.props.appointment.name}
                  />
                </div>
                <button onClick={this.handleSubmit} className="btn btn-md">
                  Submit your Message
                </button>
              </div>
            </form>
            <br />
            <br />
            <br />
            {/* I CHANGED THIS */}
            {this.state.contactSubmision == true ? (
              <p style={style}> Message Submitted Successfully </p>
            ) : (
              <p />
            )}
          </div>
        </div>
      </div>
    );
  }
}

// ConfirmPage.contextTypes = {
//   router: PropTypes.object.isRequired
// };

// function mapStateToProps(state) {
//   return {
//     authenticated: state.auth.authenticated,
//     message: state.auth.message
//   };
// }

// export default connect(mapStateToProps, actions)(ConfirmPage);
export default Contact;

// <input
// type="text"
// ref="Name"
// className="form-control"
// aria-describedby="sizing-addon1"
// placeholder="Full Name"
// />
// <input
// type="text"
// ref="email"
// className="form-control"
// aria-describedby="sizing-addon1"
// placeholder="Email Address"
// />
// <input
// type="text"
// ref="phone"
// className="form-control"
// aria-describedby="sizing-addon1"
// placeholder="Phone Number"
// />
// <label> Subject</label>
// <input
//   type="text"
//   ref="subject"
//   className="form-control"
//   aria-describedby="sizing-addon1"
//   placeholder="Subject"
// />
// <textarea
// ref="message"
// name=""
// id=""
// cols="80"
// rows="6"
// className="form-control"
// />
