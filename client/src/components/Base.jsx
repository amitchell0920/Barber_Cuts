import React, { PropTypes } from "react";
import { Link, IndexLink } from "react-router";
import Auth from "../modules/Auth";

import { connect } from "react-redux";

class Base extends React.Component {
  renderPage() {
    let userAdmin = localStorage.getItem("admin");
    //if (this.props.state.thisuser.auth !== "admin") {
    if (userAdmin !== "true") {
      return (
        //employee navbar
        <div>
          <div className="top-bar">
            <div className="top-bar-left">
              <IndexLink id="logo" to="/">
                TeamCarzy Cuts
              </IndexLink>
            </div>

            {Auth.isUserAuthenticated() ? (
              <div className="top-bar-right">
                <Link id="Login" to="/addAppointment">
                  Add Appointment
                </Link>
                <Link id="Login" to="/contact">
                  Contact Us
                </Link>
                <Link id="Login" to="/about">
                  About
                </Link>
                <Link id="Login" to="/logout">
                  Log out
                </Link>
              </div>
            ) : (
              <div className="top-bar-right">
                <Link id="Login" to="/contact">
                  Contact Us
                </Link>
                <Link id="Login" to="/about">
                  About
                </Link>
                <Link id="Login" to="/login">
                  Log in
                </Link>
                <Link id="Login" to="/signup">
                  Sign up
                </Link>
              </div>
            )}
          </div>

          {/* child component will be rendered here */}
          {this.props.children}
        </div>
      );
    } else if (userAdmin == "true") {
      return (
        //admin navbar
        <div>
          <div className="top-bar">
            <div className="top-bar-left">
              <IndexLink id="logo" to="/">
                TeamCarzy Cuts
              </IndexLink>
            </div>

            {Auth.isUserAuthenticated() ? (
              <div className="top-bar-right">
                <Link id="Login" to="/admin">
                  Admin User
                </Link>
                <Link id="Login" to="/adminprofile">
                  Admin Profile
                </Link>
                <Link id="Login" to="/addAppointment">
                  Add Appointment
                </Link>
                <Link id="Login" to="/addProfile">
                  Add Barber
                </Link>
                <Link id="Login" to="/contact">
                  Contact Us
                </Link>
                <Link id="Login" to="/about">
                  About
                </Link>
                <Link id="Login" to="/logout">
                  Log out
                </Link>
              </div>
            ) : (
              <div className="top-bar-right">
                <Link id="Login" to="/contact">
                  Contact Us
                </Link>
                <Link id="Login" to="/about">
                  About
                </Link>
                <Link id="Login" to="/login">
                  Log in
                </Link>
                <Link id="Login" to="/signup">
                  Sign up
                </Link>
              </div>
            )}
          </div>

          {/* child component will be rendered here */}
          {this.props.children}
        </div>
      );
    }
  }
  render() {
    return <div>{this.renderPage()}</div>;
  }
}

const mapStatetoProps = state => ({
  state
});

export default connect(mapStatetoProps)(Base);
