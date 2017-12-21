import React from "react";

const ProfileList = props => {
  return (
    <ul className="profiles">
      {props.profiles.map(profile => (
        <li
          className={profile.id === props.selectedProfile.id ? "selected" : ""}
          key={profile.id}
          onClick={() => props.onProfileClick(profile)}
        >
          <Card className="col-1-4" key={item._id}>
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
        </li>
      ))}
    </ul>
  );
};

export default ProfileList;
