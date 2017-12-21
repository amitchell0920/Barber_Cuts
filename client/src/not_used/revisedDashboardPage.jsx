import React from "react";
import Auth from "../modules/Auth";
import Dashboard from "../components/Dashboard.jsx";

class DashboardPage extends React.Component {
  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      profiles: []
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    var foundProfiles;
    const xhr = new XMLHttpRequest();
    xhr.open("get", "/api/profiles");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // // set the authorization HTTP header
    xhr.setRequestHeader("Authorization", `bearer ${Auth.getToken()}`);
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        console.log("63", xhr);
        foundProfiles = xhr.response[0];
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
    console.log(xhr.responseType.body);
    // console.log(xhr.response.body);
  }

  /**
   * Render the component.
   */
  render() {
    return <Dashboard {...profiles} />;
  }
}

export default DashboardPage;
