import React, { Component, PropTypes } from "react";
import { reduxForm } from "redux-form";
import Paper from "material-ui/lib/paper";
import TextField from "material-ui/lib/text-field";
import RaisedButton from "material-ui/lib/raised-button";
import DropDownMenu from "material-ui/lib/DropDownMenu";
import MenuItem from "material-ui/lib/menus/menu-item";
import RadioButton from "material-ui/lib/radio-button";
import RadioButtonGroup from "material-ui/lib/radio-button-group";
import Row from "shared/components/FlexboxGrid/Row";
import Col from "shared/components/FlexboxGrid/Col";
import Box from "shared/components/FlexboxGrid/Box";
import classes from "./NewAccountForm.scss";
import newAccountValidation from "./newAccountValidation";

import ActionLock from "material-ui/lib/svg-icons/action/lock";
import CommunicationMailOutline from "material-ui/lib/svg-icons/communication/mail-outline";
import SocialPerson from "material-ui/lib/svg-icons/social/person";

export const fields = [
  "first_name",
  "last_name",
  "email",
  "password",
  "password2",
  "company_name",
  "phone_number",
  "website",
  "address1",
  "address2",
  "city",
  "state",
  "zip",
  "feature_set",
  "marketo_id"
];

class NewAccountForm extends Component {
  static propTypes = {
    account: PropTypes.object.isRequired,
    createAccount: PropTypes.func.isRequired,
    active: PropTypes.string,
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    dirty: PropTypes.bool.isRequired,
    resetForm: PropTypes.func.isRequired,
    invalid: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    valid: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
  }

  onSubmit(formData) {
    this.props.createAccount(formData);
  }

  render() {
    const {
      handleSubmit,
      resetForm,
      submitting,
      invalid,
      pristine,
      fields: {
        first_name,
        last_name,
        email,
        password,
        password2,
        company_name,
        phone_number,
        website,
        address1,
        address2,
        city,
        state,
        zip,
        feature_set,
        marketo_id
      }
    } = this.props;

    return (
      <form
        autoComplete="off"
        className={classes["formContainer"]}
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
      >
        <Row>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            className={classes["formCardLeft"]}
          >
            <Box>
              <Paper style={{ padding: "0 1rem 3rem 2rem" }} zDepth={1} rounded>
                <Row>
                  <Col xs={1}>
                    <SocialPerson
                      color={"hsla(0, 0%, 46%, 1)"}
                      style={{ marginTop: "2.65rem" }}
                    />
                  </Col>
                  <Col xs={5} sm={5} md={5} lg={5}>
                    <Box>
                      <TextField
                        {...first_name}
                        errorText={
                          first_name.touched && first_name.error
                            ? first_name.error
                            : ""
                        }
                        hintText="First Name"
                        floatingLabelText="First Name"
                        autoComplete="off"
                        style={{ width: "90%" }}
                      />
                    </Box>
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6}>
                    <Box>
                      <TextField
                        {...last_name}
                        errorText={
                          last_name.touched && last_name.error
                            ? last_name.error
                            : ""
                        }
                        hintText="Last Name"
                        floatingLabelText="Last Name"
                        style={{ width: "90%" }}
                      />
                    </Box>
                  </Col>
                </Row>
                <Row>
                  <Col xs={1}>
                    <CommunicationMailOutline
                      color={"hsla(0, 0%, 46%, 1)"}
                      style={{ marginTop: "2.65rem" }}
                    />
                  </Col>
                  <Col xs={11}>
                    <Box>
                      <TextField
                        {...email}
                        errorText={
                          email.touched && email.error ? email.error : ""
                        }
                        hintText="hans.gruber@shiphawk.com"
                        floatingLabelText="Email"
                        style={{ width: "95%" }}
                      />
                    </Box>
                  </Col>
                </Row>
                <Row>
                  <Col xs={1}>
                    <Box>
                      <ActionLock
                        color={"hsla(0, 0%, 46%, 1)"}
                        style={{ marginTop: "2.65rem" }}
                      />
                    </Box>
                  </Col>
                  <Col xs={11}>
                    <Box>
                      <TextField
                        {...password}
                        errorText={
                          password.touched && password.error
                            ? password.error
                            : ""
                        }
                        hintText="Password"
                        floatingLabelText="Password"
                        style={{ width: "95%" }}
                      />
                    </Box>
                  </Col>
                </Row>
                <Row>
                  <Col xs={1}>
                    <Box>
                      <ActionLock
                        color={"hsla(0, 0%, 46%, 0)"}
                        style={{ marginTop: "2.65rem" }}
                      />
                    </Box>
                  </Col>
                  <Col xs={11}>
                    <Box>
                      <TextField
                        {...password2}
                        errorText={
                          password2.touched && password2.error
                            ? password2.error
                            : ""
                        }
                        hintText="Password Confirmation"
                        floatingLabelText="Password Confirmation"
                        style={{ width: "95%", marginBottom: "2.5rem" }}
                      />
                    </Box>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4}>
                    <Box>
                      <RadioButtonGroup
                        {...feature_set}
                        name="feature_set"
                        defaultSelected="enterprise"
                      >
                        <RadioButton
                          defaultChecked={true}
                          value="basic"
                          label="Pro"
                          style={{
                            paddingLeft: "0.75rem",
                            paddingRight: "0.5rem",
                            marginBottom: 15
                          }}
                        />
                        <RadioButton
                          value="enterprise"
                          label="Enterprise"
                          style={{ paddingLeft: "0.75rem", marginBottom: 10 }}
                        />
                      </RadioButtonGroup>
                    </Box>
                  </Col>
                  <Col xs={8}>
                    <Box>
                      <TextField
                        {...marketo_id}
                        hintText="Marketo Lead ID"
                        floatingLabelText="Marketo Lead ID"
                        style={{ width: "97.5%" }}
                      />
                    </Box>
                  </Col>
                </Row>
              </Paper>
            </Box>
          </Col>

          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            className={classes["formCardRight"]}
          >
            <Box>
              <Paper
                style={{ padding: "0 1.5rem  3rem 2rem" }}
                zDepth={1}
                rounded
              >
                <Col xs={12}>
                  <Box>
                    <TextField
                      {...company_name}
                      errorText={
                        company_name.touched && company_name.error
                          ? company_name.error
                          : ""
                      }
                      hintText="Company Name"
                      floatingLabelText="Company Name"
                      style={{ width: "97.5%" }}
                    />
                  </Box>
                </Col>
                <Col xs={12}>
                  <Box>
                    <TextField
                      {...phone_number}
                      errorText={
                        invalid && phone_number.touched && phone_number.error
                          ? phone_number.error
                          : ""
                      }
                      hintText="3105501940"
                      floatingLabelText="Phone Number"
                      style={{ width: "97.5%" }}
                    />
                  </Box>
                </Col>

                <Col xs={12}>
                  <Box>
                    <TextField
                      {...website}
                      hintText="https://wwww.shiphawk.com"
                      floatingLabelText="Website"
                      style={{ width: "97.5%" }}
                    />
                  </Box>
                </Col>
                <Col xs={12}>
                  <Box>
                    <TextField
                      {...address1}
                      hintText="Address 1"
                      floatingLabelText="Address 1"
                      style={{ width: "97.5%" }}
                    />
                  </Box>
                </Col>

                <Col xs={12}>
                  <Box>
                    <TextField
                      {...address2}
                      hintText="Address 2"
                      floatingLabelText="Address 2"
                      style={{ width: "97.5%" }}
                    />
                  </Box>
                </Col>
                <Row>
                  <Col xs={12} sm={4} md={4} lg={4}>
                    <Box>
                      <TextField
                        {...city}
                        hintText="City"
                        floatingLabelText="City"
                        primary
                        style={{ width: "97.5%" }}
                      />
                    </Box>
                  </Col>

                  <Col xs={12} sm={4} md={4} lg={4}>
                    <Box>
                      <TextField
                        {...state}
                        hintText="State"
                        floatingLabelText="State"
                        style={{ width: "97.5%" }}
                      />
                    </Box>
                  </Col>
                  <Col xs={12} sm={4} md={4} lg={4}>
                    <Box>
                      <TextField
                        {...zip}
                        hintText="Zip"
                        floatingLabelText="Zip"
                        style={{ width: "92.5%" }}
                      />
                    </Box>
                  </Col>
                </Row>
              </Paper>
            </Box>
          </Col>
        </Row>

        <div className="row end-xs">
          <Col xs={2} sm={4} md={7} lg={8} />
          <Col xs={3} sm={3} md={2} lg={1}>
            <Box>
              <RaisedButton
                label="Reset"
                primary={true}
                style={{ width: "100%" }}
                onTouchTap={resetForm}
              />
            </Box>
          </Col>
          <Col xs={6} sm={4} md={3} lg={2}>
            <Box>
              <RaisedButton
                label="Create Account"
                secondary={true}
                style={{ width: "100%" }}
                type="submit"
              />
            </Box>
          </Col>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "new-account",
  fields,
  validate: newAccountValidation
})(NewAccountForm);
