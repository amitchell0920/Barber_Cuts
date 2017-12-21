import React from "react";
import Auth from "../modules/Auth";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import PropTypes from "prop-types";
import { setProfiles, setUsers, thisUserAuth } from "../Actions/actions.js";
import { bindActionCreators } from "redux";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";

const buttonStyle = {
  paddingTop: "20px"
};

const style = {
  margin: 12,
  height: 1150,
  width: 400,
  margin: 20,
  textAlign: "left",
  display: "inline-block",
  padding: "0 1rem 3rem 2rem",
  textAlign: "center"
};

class Dashboard extends React.Component {
  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      userEmail: "",
      profiles: [],
      userRole: 1
    };
    this.handleUserRole = this.handleUserRole.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleAppts = this.handleAppts.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
  }

  // componentWillUpdate(nextProps) {
  //   if (!nextProps.Auth.isArrayuthenticated) {
  //     this.context.router.history.push('/');
  //   }
  // };

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open("get", "/api/profiles");
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
          profiles: tempResponse
        });
        this.handleUserRole();
      }
    });
    xhr.send();
  }

  handleClick(e) {
    event.preventDefault();
    console.log("this =>", e.target);
    const profileId = e.target.id;
    this.props.router.push(`/profile/edit/${profileId}`);
  }

  handleAppts(e) {
    event.preventDefault();
    console.log("this =>", e.target);
    const profileEmail = e.target.id;
    console.log(profileEmail);
    this.props.router.push(`/appointments/${profileEmail}`);
  }

  handleUserRole() {
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
        this.props.onGet(tempResponse);
        let userAuth;
        for (let i = 0; i < tempResponse.length; i++) {
          if (tempResponse[i].email === this.props.state.thisuser.email) {
            userAuth = tempResponse[i].role;
            if (userAuth === "admin") {
              console.log("I AM AN ADMIN");
              localStorage.setItem("admin", true);
            }
          } else {
            console.log("NO USER EMAIL INPUT --> LOG IN AGAIN");
          }
        }

        this.props.thisUserAuth(userAuth);

        this.setState({
          users: tempResponse
        });
      }
    });
    xhr.send();
  }

  renderButtons(item) {
    if (this.props.state.thisuser.auth === "client") {
      return (
        //client buttons
        <div>
          <CardActions>
            <button id={item.email} onClick={this.handleAppts}>
              View Appointments
            </button>
          </CardActions>
        </div>
      );
    } else {
      return (
        //admin employee buttons
        <div>
          <CardActions>
            <button id={item._id} onClick={this.handleClick}>
              Barber Details
            </button>
            <button id={item.email} onClick={this.handleAppts}>
              View Appointments
            </button>
          </CardActions>
        </div>
      );
    }
  }

  /**
   * Render the component.
   */
  render() {
    if (this.state.profiles.length > 0) {
      return (
        <div id="dashboard-page">
          <h1>PROFILE DASHBOARD</h1>
          {this.state.profiles.map(item => {
            return (
              <Card className="col-1-4" key={item._id} style={style}>
                <CardHeader
                  title={item.name}
                  subtitle={item.wsite}
                  avatar={item.pimage}
                />
                <CardMedia
                //   overlay={
                //     <CardTitle title={item.name} subtitle={item.wsite} />
                //   }
                >
                  {Array.isArray(item.image) ? (
                    item.image[0]
                      .split(",")
                      .map(itm => (
                        <img
                          key={itm}
                          style={{ height: "20vw", width: "20vw" }}
                          src={itm}
                        />
                      ))
                  ) : (
                    <img style={{ height: "20vw", width: "20vw" }} src={itm} />
                  )}
                </CardMedia>
                <CardTitle title="Barber Profile Information" />
                <CardText style={{ fontSize: "16px", color: "red" }} />
                <p>
                  {item.businessName} <br />
                  {item.address} <br />
                  {item.city} {item.state} {item.zip} <br />
                  {item.email}
                </p>
                <div>{this.renderButtons(item)}</div>
                )}
              </Card>
            );
          })}
        </div>
      );
    } else return null;
  }
}

Dashboard.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
  profiles: state.profiles,
  state
});

const mapDispatchToProps = dispatch => ({
  onSave: bindActionCreators(setProfiles, dispatch),
  onGet: bindActionCreators(setUsers, dispatch),
  thisUserAuth: bindActionCreators(thisUserAuth, dispatch)
});

export default connect(mapStatetoProps, mapDispatchToProps)(Dashboard);
