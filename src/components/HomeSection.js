import React from "react";
import "../styles/HomeSection.css";
import heroImg from "../images/heroImg.png";
import Piza from "../images/Piza.png";
import AsianFood from "../images/AsianFood.png";
import Meat from "../images/Meat.png";
import catergoryImg1 from "../images/catergoryImg1.png";
import { Link } from "react-router-dom";
function HomeSection() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
          <div className="content pt-3">
            <h5 className="fw-bold mb-3">Easy way to make an order </h5>

            <h1 className="fs-1 fw-bold content-title">
              <span className="color-danger">HUNGRY?</span>
              Just wait <br /> food at
              <span> your door</span>
            </h1>
            <p>
              very Good food with lot of energies and vitamins are being the
              speciality of us very Good food with lot of energies and vitamins
              are being the speciality of us
            </p>
            <div className="content-btn d-flex align-items-center gap-5 mt-4">
              <button className=" order__btn d-flex align-items-center justify-content-between">
                Order Now
              </button>
              <Link to="/foods">
                <button className="all__foods-btn">See All Foods</button>
              </Link>
            </div>
            <div className="content-services d-flex align-items-center gap-5 mt-5 ">
              <p className=" d-flex align-items-center gap-2 ">
                <span className="shipping__icon">
                  <i class="bi bi-truck"></i>
                </span>
                No shipping charge
              </p>
              <p className=" d-flex align-items-center gap-2 ">
                <span className="shipping__icon">
                  <i class="bi bi-shield"></i>
                </span>
                100% secure checkout
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
          <div className="heroImg">
            <img className="w-100" src={heroImg} />
          </div>
        </div>
      </div>
      <div className="row mb-5 mt-5">
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-1">
          <div className=" category__item d-flex align-items-center gap-3">
            <div className="category__img">
              <img src={catergoryImg1} />
            </div>
            <h6 className="fw-bold">Fast Food</h6>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-1">
          <div className=" category__item d-flex align-items-center gap-3">
            <div className="category__img">
              <img src={Piza} />
            </div>
            <h6 className="fw-bold">Pizza</h6>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-1">
          <div className=" category__item d-flex align-items-center gap-3">
            <div className="category__img">
              <img src={AsianFood} />
            </div>
            <h6 className="fw-bold">Asian Food</h6>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-1">
          <div className=" category__item d-flex align-items-center gap-3">
            <div className="category__img">
              <img src={Meat} />
            </div>
            <h6 className="fw-bold">Raw Meat</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
