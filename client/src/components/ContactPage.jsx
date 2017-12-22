import React, { Component } from "react";
import * as actions from "../actions/actions.js";
import { contactSubmit } from "../Actions/actions.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import Auth from "../modules/Auth";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactSubmission: false,
      sent: false
    };
    this.contactSubmit = this.contactSubmit.bind(this);
  }
  contactSubmit(event) {
    var name = encodeURIComponent(this.refs.fullName.value);
    var email = encodeURIComponent(this.refs.email.value);
    var phone = encodeURIComponent(this.refs.phoneNumber.value);
    var subject = encodeURIComponent(this.refs.subject.value);
    var msg = encodeURIComponent(this.refs.message.value);

    const message = `name=${name}&email=${email}&phone=${phone}&subject=${subject}&msg=${msg}`;

    const xhr = new XMLHttpRequest();
    xhr.open("post", "/api/sendMessage");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // set the authorization HTTP header
    xhr.setRequestHeader("Authorization", `bearer ${Auth.getToken()}`);
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        console.log("MESSAGE SENT SUCCESSFULLY!");
        this.setState({ sent: true, contactSubmision: true });
        this.props.router.push("/");
      }
    });
    xhr.send(message);
  }

  render() {
    return (
      <div>
        <div id="contact" className="contact">
          <div className="container">
            <div className="row">
              <h2>Contact</h2>
              <div id="contact-form-div" className="form">
                <h3>Got a question? Drop us an email.</h3>
                <form>
                  <div className="col-lg-6 col-md-6">
                    <div className="input-group input-group-lg">
                      <span className="input-group-addon" id="sizing-addon1">
                        <i className="fa fa-user" aria-hidden="true" />
                      </span>
                      <br />
                      <input
                        type="text"
                        ref="fullName"
                        className="form-control"
                        aria-describedby="sizing-addon1"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="input-group input-group-lg">
                      <span className="input-group-addon" id="sizing-addon1">
                        <i className="fa fa-envelope" aria-hidden="true" />
                      </span>
                      <br />
                      <input
                        type="text"
                        ref="email"
                        className="form-control"
                        aria-describedby="sizing-addon1"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="input-group input-group-lg">
                      <span className="input-group-addon" id="sizing-addon1">
                        <i className="fa fa-phone" aria-hidden="true" />
                      </span>
                      <br />
                      <input
                        type="text"
                        ref="phoneNumber"
                        className="form-control"
                        aria-describedby="sizing-addon1"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div className="input-group input-group-lg">
                    <br />
                    <input
                      type="text"
                      ref="subject"
                      className="form-control"
                      aria-describedby="sizing-addon1"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="input-group">
                      <br />
                      <textarea
                        ref="message"
                        name=""
                        id=""
                        cols="80"
                        rows="6"
                        className="form-control"
                      />
                    </div>
                    <br />
                    <button onClick={this.contactSubmit} className="btn btn-md">
                      Submit your Message
                    </button>
                  </div>
                  <br />
                  <br />
                </form>
              </div>
              <br />
              <br />
              <br />
              {/* I CHANGED THIS */}
              {this.state.contactSubmision == true ? (
                <p style={{ color: "green", fontsize: "18px" }}>
                  {" "}
                  Message Submitted Successfully <br />
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
                </p>
              ) : (
                <p />
              )}
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ContactPage.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  contactSubmit: bindActionCreators(contactSubmit, dispatch)
});

export default connect(mapStatetoProps, mapDispatchToProps)(ContactPage);
