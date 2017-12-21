import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';


const Dashboard = ({ profiles }) => (
  {this.state.profiles.map(item => {
    return (
      <Card className="col-1-4">
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
      // <div className="module profile" key={item._id}>
      //   <h4>{item.name}</h4>
      //   {item.email}
      //   {item.address}
      //   {item.city}
      //   {item.state}
      //   {item.zip}
      //   {item.businessName}
      //   {item.wsite}
      //   {item.image}
      // </div>
    );
  })}
);
} else return null;
}
}

Dashboard.propTypes = {
  profiles: PropTypes.array.isRequired
};

export default Dashboard;

