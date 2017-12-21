import React, { Component } from "react";
import { Link } from "react-router-dom";
//import "../css/style.css";

class Privacy extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div id="privacy" className="privacy">
          <div>
            <h2>Privacy</h2>
            <div>
              <div>
                <p id="privacyP" className="privacyP">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div id="privacyPP" className="privacyPP">
          <h2>Terms & Conditions</h2>
          <p id="privacyPP" className="privacyPP">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
    );
  }
}

export default Privacy;
