import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
const AboutPage = () => (
  <div>
    <div id="About-Img">
      <div id="Eddie">
        <Card>
          <CardHeader
            title="Eddie Miamen"
            subtitle="frontend developer"
            avatar="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAmhAAAAJGJiMzEyMTRkLWU2ZDktNDRlZC1iNDY4LTZjYzdlOGFkZTVhNA.jpg"
          />
          <CardTitle
            id="Eddie-CardTitle"
            className="container white"
            title="Eddie Miamen"
            subtitle="frontend developer."
          />
          <a
            id="linkedin"
            href="https://www.linkedin.com/in/eddie-miamen-562961145/"
          >
            {" "}
            <img
              className="slide-image"
              src="https://i.imgur.com/H0O5t2u.png"
              alt=""
            />
          </a>
          <CardText>
            <p>
              Hello! My name is Eddie and I’m from Arizona. What really brought
              me to development was the passion to work with computers, and
              that’s what brought me to Coder Camps.
            </p>
            <p>
              Before coming to Coder Camps, I was working as a music producer.
              My passion for music and creativity drove me to dive deeper into
              merging music and technology.
            </p>
            <p>
              This training has been fun and challenging and I have loved
              learning how to make websites and web applications. I feel honored
              to be on the TeamCarzy team and can’t wait to see what grows from
              this project.
            </p>
          </CardText>
          <CardMedia overlay={<CardTitle title="Frontend developer" />}>
            <img
              className="slide-image"
              src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAmhAAAAJGJiMzEyMTRkLWU2ZDktNDRlZC1iNDY4LTZjYzdlOGFkZTVhNA.jpg"
              alt=""
            />
          </CardMedia>
        </Card>
      </div>
      <div id="Andre">
        <Card>
          <CardHeader
            title="Andre mitchell"
            subtitle="Backend developer"
            avatar="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAuMAAAAJDg0OGI0ZjAzLTQ4NTItNGQzYi05OTAxLTBmOWUyMjI1ZTMwNA.jpg"
          />
          <CardTitle
            id="Andre-CardTitle"
            className="container white"
            title="Andre mitchell"
            subtitle="Backend developer"
          />
          <a
            id="linkedin2"
            href="https://www.linkedin.com/in/andre-mitchell-4085b214/"
          >
            {" "}
            <img
              className="slide-image"
              src="https://i.imgur.com/H0O5t2u.png"
              alt=""
            />
          </a>
          <CardText>
            <p>
              I’m a native of Chicago, Illinois. I love good food and great
              sports. I’m a veteran of the US Air Force where I completed 10
              years of service. Upon my release from the military I decided that
              I would make Phoenix, Arizona my home. I had previously lived her
              for four of my 10 years in the military and had made a few very
              good friends.
            </p>
            <p>
              My desire to become a web applications developer landed my here at
              Coder Camp. I am currently studying to become a Full-stack
              JavaScript Developer.
            </p>
            <CardMedia
              overlay={
                <CardTitle
                  title="Backend Developer"
                  subtitle="And Middleware"
                />
              }
            >
              <img
                className="slide-image"
                src="https://i.imgur.com/lP4ukuh.jpg"
                alt=""
              />
            </CardMedia>
          </CardText>
        </Card>
      </div>
    </div>
  </div>
);

export default AboutPage;
