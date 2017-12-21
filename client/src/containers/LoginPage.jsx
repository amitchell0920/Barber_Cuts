import React, { PropTypes } from "react";
import Auth from "../modules/Auth";
import LoginForm from "../components/LoginForm.jsx";
import { connect } from "react-redux";
import { setAppointments } from "../Actions/actions.js";
import { bindActionCreators } from "redux";
import { thisUser } from "../Actions/actions.js";

class LoginPage extends React.Component {
  /**
   * Class constructor.
   */
  constructor(props, context) {
    super(props, context);

    const storedMessage = localStorage.getItem("successMessage");
    let successMessage = "";

    if (storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem("successMessage");
    }

    // set the initial component state
    this.state = {
      errors: {},
      successMessage,
      user: {
        email: "",
        password: ""
      },
      userRole: "client"
      //users: []
    };
    //this.handleUserRole = this.handleUserRole.bind(this);
    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `email=${email}&password=${password}`;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open("post", "/auth/login");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {},
          user: this.state.user
        });

        // save the token
        Auth.authenticateUser(xhr.response.token);

        // get the role for this user and set to redux
        //this.handleUserRole(event);
        //this.props.onSave(xhr.response.data);
        console.log(this.state.user.email);
        this.props.thisUser(this.state.user.email);
        let userEmail = this.state.user.email;

        // change the current URL to /
        this.context.router.replace("/");
      } else {
        // failure

        // change the component state
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  // handleUserRole() {
  //   const xhr = new XMLHttpRequest();
  //   xhr.open("get", "/api/adminusers");
  //   xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  //   // // set the authorization HTTP header
  //   xhr.setRequestHeader("Authorization", `bearer ${Auth.getToken()}`);
  //   xhr.responseType = "json";
  //   xhr.addEventListener("load", () => {
  //     if (xhr.status === 200) {
  //       let tempResponse = [];
  //       for (var index in xhr.response) {
  //         tempResponse.push(xhr.response[index]);
  //       }
  //       this.props.onSave(tempResponse);
  //       this.setState({
  //         users: tempResponse
  //       });
  //     }
  //   });
  //   xhr.send();
  // }

  /**
   * Render the component.
   */
  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        successMessage={this.state.successMessage}
        user={this.state.user}
      />
    );
  }
}

LoginPage.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  //onSave: bindActionCreators(setUser, dispatch)
  thisUser: bindActionCreators(thisUser, dispatch)
});

export default connect(mapStatetoProps, mapDispatchToProps)(LoginPage);

//export default LoginPage;
