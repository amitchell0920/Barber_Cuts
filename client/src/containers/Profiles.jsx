import React from "react";
import Auth from "../modules/Auth";
import { connect } from "react-redux";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";

class Profiles extends React.Component {
  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      profiles: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectProfile = this.selectProfile.bind(this);
  }

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

        this.setState({
          profiles: tempResponse
        });
      }
    });
    xhr.send();
  }

  selectProfile(profile) {
    this.setState({
      selectedProfile: {
        ...profile,
        index: profileIndex
      }
    });
  }

  handleSubmit(event) {
    const slProfile = this.state.selectedProfile;
    const profiles = this.state.profiles;
    this.setState({
      profiles: [
        ...profiles.slice(0, slProfile.index),
        { ...slProfile },
        ...profiles.slice(slProfile.index + 1, profiles.length)
      ]
    });
    event.preventDefault();
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <div>
        <ProfilesList
          profiles={this.props.heroes}
          selectedProfile={this.state.selectedProfile}
          onProfileClick={this.selectProfile}
        />
        {this.state.selectedProfile.name && (
          <div>
            <h2>{this.state.selectedProfile.name}</h2>
            <Link to={`/profile/details/${this.state.selectedProfile.id}`}>
              <button>Profile Details</button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  profiles: state.profiles
});

export default connect(mapStatetoProps)(Profiles);
