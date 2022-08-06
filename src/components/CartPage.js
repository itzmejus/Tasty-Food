import React from "react";
import "../styles/FoodPage.css";
import ChickenBurger from "../images/ChickenBurger.jpg";
import VegPizza from "../images/VegPizza.jpg";
import ClassicHamBurger from "../images/ClassicHamBurger.jpg";
import { Link } from "react-router-dom";

function CartPage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 p-0">
          <div className="common__section">
            <div className="container">
              <h2 className="text-white text-center">Your Cart</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="conatiner">
        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="container ">
              <table class="table table-bordered ">
                <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Product Title </th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  <tr>
                    <th scope="row">
                      {" "}
                      <img className="cart__img-box" src={ChickenBurger} />
                    </th>
                    <td>Chicken Burger</td>
                    <td>$24 </td>
                    <td>1Pc</td>
                    <td>
                      <i class="bi bi-trash"></i>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <img className="cart__img-box" src={VegPizza} />
                    </th>
                    <td>Double Cheese Margherita</td>
                    <td>$110</td>
                    <td>1Pc</td>
                    <td>
                      <i class="bi bi-trash"></i>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <img className="cart__img-box" src={ClassicHamBurger} />
                    </th>
                    <td>Classic Ham Burger</td>
                    <td>$110</td>
                    <td>1Pc</td>
                    <td>
                      <i class="bi bi-trash"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="col-lg-6 align-self-center ">
                <h6>
                  Subtotal: $<span className="cart__subtotal">786</span>
                </h6>
                <p>Taxes and shipping will calculate at checkout</p>
                <div className="row cart__page-btn mb-5 ">
                  <div className="col-xl-4 ">
                    <Link to="/foods">
                      <button className="addTOCart__btn me-4">
                        Continue shopping
                      </button>
                    </Link>
                  </div>
                  <div className="col-xl-4">
                    <Link to="/checkout">
                      <button className="addTOCart__btn me-4">
                        Check Out
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row "></div>
    </div>
  );
}

export default CartPage;
