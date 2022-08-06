import React from "react";
import BurgerBtn from "../images/BurgerBtn.png";
import PizzaBtn from "../images/PizzaBtn.png";
import BreadBtn from "../images/BreadBtn.png";
import DelBread from "../images/DelBread.png";
import ChickenBurger from "../images/ChickenBurger.jpg";
import VegPizza from "../images/VegPizza.jpg";
import ClassicHamBurger from "../images/ClassicHamBurger.jpg";
import "../styles/HomeSection.css";

function PopularFoods() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-xl-12 col-lg-12 col-sm-12 mb-2">
          <div className="text-center">
            <h2>Popular Foods</h2>
          </div>
          <div className="col-xl-12 
           food__category d-flex align-items-center justify-content-center gap-4">
            <div className="row  justify-content-center">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 food">
                <button className=" d-flex align-items-center gap-2  ">All</button>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 food">
                <button className=" d-flex align-items-center gap-2 ">
                  <img src={BurgerBtn} />
                  Burger
                </button>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 food">
                <button className=" d-flex align-items-center gap-2">
                  <img src={PizzaBtn} />
                  Pizza
                </button>{" "}
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 food">
                <button className=" d-flex align-items-center gap-2">
                  <img src={BreadBtn} />
                  Bread
                </button>
              </div>
            </div>
          </div>
          <div className="row mt-2">
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
                  <h5>Vegetarian Pizza</h5>
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
                  <img className="w-50" src={DelBread} />
                </div>
                <div className="product__content">
                  <h5>Delicious Bread</h5>
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
                  <h5>ClassicHamBurger</h5>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularFoods;
