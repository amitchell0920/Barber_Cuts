import React from "react";
import createReactClass from "create-React-Class";
import Carousel from "nuka-carousel";

class Carousel2 extends React.Component {
  render() {
    return (
      <div>
        <center>
          <Carousel id="Carousel">
            <div className="item">
              <img
                id="slide-image"
                src="https://www.betrendsetter.com/wp-content/uploads/2016/06/Best-hairstyle-for-black-boys.jpg"
              />
            </div>
            <div className="item">
              <img id="slide-image" src="https://i.imgur.com/HckCmCO.jpg" />
            </div>
            <div className="item">
              <img
                id="slide-image"
                src="https://hairstyleshits.com/wp-content/uploads/2017/03/new-hairstyle-boy-cut-new-hair-cut-for-boy-haircuts-black.jpg"
              />
            </div>
            <div className="item">
              <img
                id="slide-image"
                src="http://www.restylegrooming.com/wp-content/uploads/2016/10/maxresdefault.jpg"
              />
            </div>
            <div className="item">
              <img
                id="slide-image"
                src="http://machohairstyles.com/wp-content/uploads/2015/12/hairstyles_for_black_men_69.jpg"
              />
            </div>
            <div className="item">
              <img
                id="slide-image"
                src="http://cleverhairstyles.com/wp-content/uploads/2016/04/fade-haircut-guide-5-types-of-fade-cuts-curly-hairstyles-for-men-with-african-american-barber-shop-haircuts.jpg"
              />
            </div>
          </Carousel>
        </center>
      </div>
    );
  }
}

export default Carousel2;
