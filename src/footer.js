import React, { Component } from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  render() {
    return (
      <div className="footer-component">
        <div class="row">
          <div class="footerimage">
            <img
              src="	https://urlife.co.in/wp-content/uploads/2020/04/20003353/urlife_favicon.jpg"
              align="center"
            />
            {/* <p>contribute to our sir Mr.Revanth</p> */}
          </div>
          <div class="col-md-4">
            <h5>XRG IT consulting services</h5>
            <p>near jubileehills telangana hyderabad</p>
          </div>
          <div class="col-md-4">
            <h5>Contact us</h5>
            <p>nvanaveen96@gmail.com</p>
            <p>chandana.velpula16@gmail.com</p>
            <FontAwesomeIcon Component={faHome}>
            
              </FontAwesomeIcon>
            <p>anilkumar</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
