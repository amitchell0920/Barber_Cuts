import React, { PropTypes } from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

const Profile = ({ profiles }) => (
  <Card className="col-1-4">
    <CardHeader
      title={profile.name}
      subtitle={profile.wsite}
      avatar={profile.image}
    />
    <CardMedia
      overlay={<CardTitle title={profile.name} subtitle={profile.wsite} />}
    >
      <img src={profile.image} alt="" />
    </CardMedia>
    <CardTitle title="Barber Profile Information" />
    <CardText style={{ fontSize: "16px", color: "red" }} />
    {profile.businessName}
    {profile.address}
    {profile.city} {profile.state} {profile.zip}
    {profile.wsite}
    )}
  </Card>
);

// Profile.propTypes = {
//   foundProfiles: PropTypes.array.isRequired
// };

export default Profile;
