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

class ProfilePage extends React.Component {
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

  /**
   * Render the component.
   */
  render() {
    if (this.state.profiles.length > 0) {
      return (
        <div>
          <h1>PROFILE PAGE</h1>
          {this.state.profiles.map(item => {
            return (
              <Card className="col-1-4" key={item._id}>
                <CardHeader
                  title={item.name}
                  subtitle={item.wsite}
                  avatar={item.image}
                />
                <CardMedia
                //   overlay={
                //     <CardTitle title={item.name} subtitle={item.wsite} />
                //   }
                >
                  <img src={item.image} alt="" />
                </CardMedia>
                <CardTitle title="Barber Profile Information" />
                <CardText style={{ fontSize: "16px", color: "red" }} />
                <p>
                  {item.businessName} <br />
                  {item.address} <br />
                  {item.city} {item.state} {item.zip} <br />
                  {item.wsite}
                </p>
                )}
              </Card>
            );
          })}
        </div>
      );
    } else return null;
  }
}

const mapStatetoProps = state => ({
  profiles: state.profiles
});

export default connect(mapStatetoProps)(ProfilePage);
