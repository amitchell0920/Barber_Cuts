import React, { PropTypes } from "react";
import { Link } from "react-router";
import { Card, CardText } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

const SignUpForm = ({ onSubmit, onChange, errors, user }) => (
  <div id="SPform">
    <center>
      <Card id="p102" className="container">
        <form id="signup-form" action="/" onSubmit={onSubmit}>
          <h2 className="card-heading">Sign Up</h2>

          {errors.summary && <p className="error-message">{errors.summary}</p>}

          <div className="field-line">
            <TextField
              style={{
                width: "50%",
                margin: "0 auto",
                border: "2px solid #FF9800 ",
                backgroundColor: "#ffd699 "
              }}
              floatingLabelText="Name"
              name="name"
              errorText={errors.name}
              onChange={onChange}
              value={user.name}
            />
          </div>

          <div className="field-line">
            <TextField
              style={{
                width: "50%",
                margin: "0 auto",
                border: "2px solid #FF9800 ",
                backgroundColor: "#ffd699 "
              }}
              id="text"
              floatingLabelText="Email"
              name="email"
              errorText={errors.email}
              onChange={onChange}
              value={user.email}
            />
          </div>

          <div className="field-line">
            <TextField
              style={{
                width: "50%",
                margin: "0 auto",
                border: "2px solid #FF9800 ",
                backgroundColor: "#ffd699 "
              }}
              id="Login"
              floatingLabelText="Password"
              type="password"
              name="password"
              onChange={onChange}
              errorText={errors.password}
              value={user.password}
            />
          </div>

          <div className="button-line">
            <RaisedButton
              id="create-new-account"
              style={{
                width: "50%",
                margin: "0 auto"
              }}
              id="create-new-account"
              type="submit"
              label="Create New Account"
            />
          </div>

          <CardText>
            Already have an account?{" "}
            <Link id="Login" to={"/login"}>
              Log in
            </Link>
          </CardText>
          <img id="formimg2" src="https://i.imgur.com/bxKNPG7.png" />
        </form>
      </Card>
    </center>
  </div>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;
