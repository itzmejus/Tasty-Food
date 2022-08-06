import React from "react";
import QuickDelivery from "../images/QuickDelivery.png";
import DineIn from "../images/DineIn.png";
import PickUp from "../images/PickUp.png";
import "../styles/HomeSection.css";

function WhatWeServe() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-xl-12 col-lg-12 col-sm-12 ">
          <div className="feature__subtitle mb-4 text-center">
            <h5>What we serve </h5>
            <h2 className="feature__title fs-1 fw-bold">
              Just sit back at home
            </h2>
            <h2 className="feature__title">
              we will
              <span className="ms-1">take care</span>
            </h2>
            {/* <p className="mb-1 mt-4 feature__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aperiam, eius.
            </p> */}
          </div>
        </div>
        <div className="col-xl-12 col-lg-12 col-sm-12">
          <div className="row mb-2 text-center">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
              <img className="w-25 mb-3" src={QuickDelivery} />
              <h5 className=" fw-bold mb-3">Quick Delivery</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
                doloremque.
              </p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
              <img className="w-25 mb-3" src={DineIn} />
              <h5 className=" fw-bold mb-3">Super Dine In</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
                doloremque.
              </p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
              <img className="w-25 mb-3" src={PickUp} />
              <h5 className=" fw-bold mb-3">Easy Pick Up</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
                doloremque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeServe;
