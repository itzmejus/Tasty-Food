import React, { useEffect } from "react";
import "../styles/CartPage.css";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { addedToCart, selectedProduct } from "../redux/actions/productAction";
import Chicken from "../images/Chicken.jpg";
import user from "../images/user.png";
import Debitcard from "../images/Debitcard.png";
function CartItems() {
  const cartItems = useSelector(
    (state) => state.cartItems.availableItemsInCart
  );
  // const allItemInCart=   cartItems.map((item) )

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <h1 className="text-center">Shopping Cart</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 bg-dark">
          <div className="card">
            <div className=" d-flex justify-content-between ">
              <h1 className="card-title fs-4">Available Items</h1>
              <h1 className="card-title fs-4">Available Items</h1>
            </div>
            <div className="card-body d-flex">
              <img src={Chicken} style={{ width: "150px" }} />
              <h2 className="card-text">Chicken</h2>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
          <div className="row ">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="card ">
                <div className="card-body d-flex justify-content-between ">
                  <img src={user} style={{ width: "50px" }} />
                  <p>
                    Cart
                    <sup>9</sup>
                  </p>
                </div>
              </div>
              <div className="card mh-100">
                <div className="card-body text-center">
                  <h1 className="card-text fs-5">Total Amount:600</h1>
                  <h1 className="card-text fs-5">Coupon Applied:60</h1>
                  <img src={Debitcard}  style={{width:"300px"}}/>
                  <button className="btn btn-success">Pay Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;

{
  /* {cartItems.map((item, key) => {
                return (
                  <div className="col-lg-4">
                    <div className="card">
                      <div className="card-body">
                        <h1 className="card-title">
                          Available items {item.strCategory}
                        </h1>
                        <img
                          className="card-image"
                          src={item.strCategoryThumb}
                        />
                      </div>
                    </div>
                  </div>
                );
              })} */
}
