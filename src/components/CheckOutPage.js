import React from "react";
import "../styles/HomeSection.css";

function CheckOutPage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 p-0">
          <div className="common__section">
            <div className="container">
              <h2 className="text-white text-center">Checkout</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
          <div class="mb-3  mt-3 ">
            <input
              type="text"
              class="form-control mb-2"
              id="exampleFormControlInput1"
              placeholder="Enter Your Name"
            />
            <input
              type="email"
              class="form-control mb-2"
              id="exampleFormControlInput1"
              placeholder="Enter Your Email"
            />
            <input
              type="number"
              class="form-control mb-2"
              id="exampleFormControlInput1"
              placeholder="Phone Number"
            />
            <input
              type="text"
              class="form-control mb-2"
              id="exampleFormControlInput1"
              placeholder="Country"
            />
            <input
              type="text"
              class="form-control mb-2"
              id="exampleFormControlInput1"
              placeholder="City"
            />
            <input
              type="number"
              class="form-control mb-2"
              id="exampleFormControlInput1"
              placeholder="Postal Code"
            />
            <input
              type="number"
              class="form-control mb-2"
              id="exampleFormControlInput1"
              placeholder="Account Number"
            />
            <input
              type="number"
              class="form-control mb-2"
              id="exampleFormControlInput1"
              placeholder=" Confirm Account Number"
            />
          </div>
        </div>
        <div className="col-xl-4 col-m=lg-4 col-md-12 col-sm-12 mt-5  ">
          <div className="card bg text-center ">
            <div className="d-flex ms-2  me-2 justify-content-between">
              <h4>Subtotal</h4>
              <span>$225</span>
            </div>
            <div className="d-flex ms-2 me-2 justify-content-between">
              <h4>Shipping:</h4>
              <span>$30</span>
            </div>
            <hr />
            <div className="d-flex ms-2 me-2 justify-content-between">
              <h4>Total:</h4>
              <span>$255</span>
            </div>
            <button className="addTOCart__btn ">Pay</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOutPage;
