import React, { PropTypes } from "react";
import { Link } from "react-router";
import { Card, CardText } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

const LoginForm = ({ onSubmit, onChange, errors, successMessage, user }) => (
  <div id="Login-page">
    <div>
      <Card id="p101" className="container">
        <form id="login-form" action="/" onSubmit={onSubmit}>
          <h2 className="card-heading">Login</h2>

          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
          {errors.summary && <p className="error-message">{errors.summary}</p>}

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
              id="text"
              floatingLabelText="Password"
              type="password"
              name="password"
              onChange={onChange}
              errorText={errors.password}
              value={user.password}
            />
          </div>

          <div className="button-line">
            <RaisedButton type="submit" label="Log in" />
          </div>

          <CardText>
            Don't have an account?{" "}
            <Link id="logo2" to={"/signup"}>
              Create one
            </Link>.
          </CardText>
          <img
            id="formimg"
            src="https://cdn.filestackcontent.com/9q5WcIHPQ7STCsqkD4oF"
          />
        </form>
      </Card>
    </div>
  </div>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
