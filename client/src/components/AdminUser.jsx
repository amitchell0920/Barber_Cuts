import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../Actions/actions.js";
import PropTypes from "prop-types";
import Paper from "material-ui/Paper";
import Auth from "../modules/Auth";
import { setUsers, saveUser } from "../Actions/actions.js";
import { bindActionCreators } from "redux";
import TextField from "material-ui/TextField";

const style = {
  height: 375,
  width: 300,
  margin: 20,
  textAlign: "center",
  display: "inline-block"
};

let user = {};

class AdminUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      users: []
    };
    this.handleUseDelete = this.handleUseDelete.bind(this);
    this.handleUsrUpt = this.handleUsrUpt.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    const xhr = new XMLHttpRequest();
    xhr.open("get", "/api/adminusers");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // // set the authorization HTTP header
    xhr.setRequestHeader("Authorization", `bearer ${Auth.getToken()}`);
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        let tempResponse = [];
        for (var index in xhr.response) {
          tempResponse.push(xhr.response[index]);
        }
        this.props.onSave(tempResponse);
        this.setState({
          users: tempResponse
        });
      }
    });
    xhr.send();
  }

  // componentDidUpdate() {
  // const xhr = new XMLHttpRequest();
  // xhr.open("get", "/api/adminusers");
  // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  // // // set the authorization HTTP header
  // xhr.setRequestHeader("Authorization", `bearer ${Auth.getToken()}`);
  // xhr.responseType = "json";
  // xhr.addEventListener("load", () => {
  //   if (xhr.status === 200) {
  //     let tempResponse = [];
  //     for (var index in xhr.response) {
  //       tempResponse.push(xhr.response[index]);
  //     }
  //     this.setState({
  //       users: tempResponse
  //     });
  //   }
  // });
  // xhr.send();
  // }

  handleUseDelete(e) {
    console.log(e.target.id);
    //console.log(this.state.user._id);
    var uid = encodeURIComponent(e.target.id);

    var data = `id=${uid}`;

    const xhr = new XMLHttpRequest();
    xhr.open("delete", "/api/adminusers/delete/" + uid);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // // set the authorization HTTP header
    xhr.setRequestHeader("Authorization", `bearer ${Auth.getToken()}`);
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
      console.log("After send to DB");
      if (xhr.status === 200) {
        let tempResponse = [];
        for (var index in xhr.response) {
          tempResponse.push(xhr.response[index]);
        }
        // this.setState({
        //   users: tempResponse
        // });
      }
    });
    xhr.send(data);
    console.log(uid);

    //window.location.reload();
    //this.props.router.reload();
    const users = this.state.users.filter(item => {
      return item._id != uid;
    });
    console.log(users);
    this.setState({ users: users });
  }

  handleUsrUpt(e) {
    // var id = encodeURIComponent(this.state.id);
    const user = this.state.users.filter(item => item._id === e.target.id);
    var uid = encodeURIComponent(e.target.id);
    var name = encodeURIComponent(user[0].name);
    var email = encodeURIComponent(user[0].email);
    var role = encodeURIComponent(user[0].role);

    const formData = `id=${uid}&name=${name}&email=${email}&role=${role}`;

    const xhr = new XMLHttpRequest();
    xhr.open("put", "/api/adminusers/update/" + uid);
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
      }
    });
    xhr.send(formData);
    console.log(formData);
    // console.log(xhr.response.body);
    //window.location.reload(true);
    const users = this.state.users.map(item => {
      if (item._id === uid) {
        console.log(item);
        this.props.onUpdate(item);
      }
      return item;
    });
    console.log(users);
  }

  handleChange(e) {
    console.log(e.target);
    var foundIndex = -1;
    var tempUserArray = this.state.users;

    for (var i = 0; i < tempUserArray.length; ++i) {
      if (tempUserArray[i]._id == e.target.id) foundIndex = i;
    }

    console.log(foundIndex);
    if (foundIndex > -1) {
      tempUserArray[foundIndex][e.target.name] = e.target.value;
      this.setState({
        users: tempUserArray
      });
    }
  }

  render() {
    const users = this.state.users;
    //console.log(users);

    return (
      <div>
        <div id="admin">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h2> User Admin Dashboard </h2>
          <br />
          <br />
          {users.map(user => {
            var AdminUser = user;
            //console.log(AdminUser);
            return (
              <Paper style={style} zDepth={5} key={user._id}>
                <h3>{user.name}</h3>
                <TextField
                  name="name"
                  id={user._id}
                  type="text"
                  floatingLabelText="Name"
                  onChange={this.handleChange}
                  value={user.name}
                />
                <TextField
                  name="email"
                  id={user._id}
                  type="email"
                  floatingLabelText="Email"
                  onChange={this.handleChange}
                  value={user.email}
                />
                <TextField
                  name="role"
                  id={user._id}
                  type="text"
                  floatingLabelText="role"
                  onChange={this.handleChange}
                  value={user.role}
                />

                <p>
                  <button
                    type="warning"
                    onClick={this.handleUseDelete}
                    id={user._id}
                  >
                    Delete User
                  </button>

                  <button
                    type="button"
                    onClick={this.handleUsrUpt}
                    id={user._id}
                  >
                    Update Role
                  </button>
                </p>
              </Paper>
            );
          })}
          <div />
        </div>
      </div>
    );
  }
}

AdminUser.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  onSave: bindActionCreators(setUsers, dispatch),
  onUpdate: bindActionCreators(saveUser, dispatch)
  // handleUseDelete: bindActionCreators(deleteUser, dispatch)
});

export default connect(mapStatetoProps, mapDispatchToProps)(AdminUser);
