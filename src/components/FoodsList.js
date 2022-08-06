import React, { useState } from "react";
import "../styles/FoodPage.css";
import ChickenBurger from "../images/ChickenBurger.jpg";
import VegPizza from "../images/VegPizza.jpg";
import ClassicHamBurger from "../images/ClassicHamBurger.jpg";
import { ProductData } from "../Data/ProductData";
function FoodsList() {
  const [cartItem, setCartItem] = useState([]);
  const AddToCart = (item) => {
    setCartItem(item);
    console.log("clicked", item);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 p-0">
          <div className="common__section">
            <div className="container">
              <h2 className="text-white text-center">All Foods</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
            <div className="search__widget d-flex align-items-center justify-content-between ">
              <input type="text" placeholder="I'm looking for...." />
              <span>
                <i class="bi bi-search"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          {ProductData.map((item, key) => {
            return (
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-12  mb-2"
                key={key}
              >
                <div className="product__item ">
                  <div className="product__img">
                    <img className="w-50" src={item.image} />
                  </div>
                  <div className="product__content">
                    <h5>{item.title}</h5>
                  </div>
                  <div className=" d-flex align-items-center justify-content-between ">
                    <span className="product__price">{item.price}</span>
                    <button
                      className="addTOCart__btn"
                      onClick={() => {
                        AddToCart(item);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12  mb-2">
            <div className="product__item">
              <div className="product__img">
                <img className="w-50" src={VegPizza} />
              </div>
              <div className="product__content">
                <h5>Veg Pizza</h5>
              </div>
              <div className=" d-flex align-items-center justify-content-between ">
                <span className="product__price">$ 78</span>
                <button className="addTOCart__btn">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12  mb-2">
            <div className="product__item">
              <div className="product__img">
                <img className="w-50" src={ClassicHamBurger} />
              </div>
              <div className="product__content">
                <h5>Classic Ham Burger</h5>
              </div>
              <div className=" d-flex align-items-center justify-content-between ">
                <span className="product__price">$ 78</span>
                <button className="addTOCart__btn">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12  mb-2">
            <div className="product__item">
              <div className="product__img">
                <img className="w-50" src={VegPizza} />
              </div>
              <div className="product__content">
                <h5>Veg Pizza</h5>
              </div>
              <div className=" d-flex align-items-center justify-content-between ">
                <span className="product__price">$ 78</span>
                <button className="addTOCart__btn">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12  mb-2">
            <div className="product__item">
              <div className="product__img">
                <img className="w-50" src={ChickenBurger} />
              </div>
              <div className="product__content">
                <h5>Chicken Burger</h5>
              </div>
              <div className=" d-flex align-items-center justify-content-between ">
                <span className="product__price">$ 78</span>
                <button className="addTOCart__btn">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12  mb-2">
            <div className="product__item">
              <div className="product__img">
                <img className="w-50" src={VegPizza} />
              </div>
              <div className="product__content">
                <h5>Veg Pizza</h5>
              </div>
              <div className=" d-flex align-items-center justify-content-between ">
                <span className="product__price">$ 78</span>
                <button className="addTOCart__btn">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12  mb-2">
            <div className="product__item">
              <div className="product__img">
                <img className="w-50" src={ChickenBurger} />
              </div>
              <div className="product__content">
                <h5>Chicken Burger</h5>
              </div>
              <div className=" d-flex align-items-center justify-content-between ">
                <span className="product__price">$ 78</span>
                <button className="addTOCart__btn">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12  mb-2">
            <div className="product__item">
              <div className="product__img">
                <img className="w-50" src={ChickenBurger} />
              </div>
              <div className="product__content">
                <h5>Chicken Burger</h5>
              </div>
              <div className=" d-flex align-items-center justify-content-between ">
                <span className="product__price">$ 78</span>
                <button className="addTOCart__btn">Add to Cart</button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default FoodsList;
