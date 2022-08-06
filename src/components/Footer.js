import React from "react";
import "../styles/HomeSection.css";
import "../styles/Global.css";
import Logo from "../images/logo.png";
function Footer() {
  return (
    <div className="container-fluid footer ">
      <div className="row justify-content-start">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
          <div className="logo text-center ">
            <img style={{ width: "40px" }} src={Logo} />
            <h5>Tasty Treat</h5>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
          <div className="logo text-center mt-3">
            <h5>Made& Designed By <span>Justin Johnson</span></h5>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Footer;

