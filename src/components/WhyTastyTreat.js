import React from "react";
import WhyTasty from "../images/WhyTasty.png";
import "../styles/HomeSection.css";

function WhyTastyTreat() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <img className="w-100" src={WhyTasty} />
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="whyTasty">
            <h2 className="tasty__treat-title mb-4">
              Why<span>Tasty Treat?</span>
            </h2>
            <p className="tasty__treat-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              minus. Tempora reprehenderit a corporis velit, laboriosam vitae
              ullam, repellat illo sequi odio esse iste fugiat dolor, optio
              incidunt eligendi deleniti!
            </p>
            <ul className="mt-4 list-group">
              <li className="border-0 ps-0 list-group-item">
                <p className=" choose__us-title d-flex align-items-center gap-2 ">
                  <i class="bi bi-check rounded-5 border"></i>
                  Fresh and tasty foods
                </p>
                <p className="choose__us-desc">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quia, voluptatibus.
                </p>
              </li>
              <li className="border-0 ps-0 list-group-item">
                <p className=" choose__us-title d-flex align-items-center gap-2 ">
                  <i class="bi bi-check rounded-5 border"></i>
                  Quality support
                </p>
                <p className="choose__us-desc">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quia, voluptatibus.
                </p>
              </li>
              <li className="border-0 ps-0 list-group-item">
                <p className=" choose__us-title d-flex align-items-center gap-2 ">
                  <i class="bi bi-check rounded-5 border"></i>
                  Quality support
                </p>
                <p className="choose__us-desc">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quia, voluptatibus.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyTastyTreat;
