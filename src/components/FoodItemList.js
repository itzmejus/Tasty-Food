import Cart from "../pages/Cart";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { addedToCart, setProducts } from "../redux/actions/productAction";
import Loader from "./Loader";

function FoodItemList() {
  const [load, setLoad] = useState(false);
  const [singleItem, setSingleItem] = useState("");

  const products = useSelector(
    (state) => state.allProducts.products.categories
  );
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    setLoad(true);
    const response = await axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .catch((err) => {
        console.log(err);
      });

    dispatch(setProducts(response.data));
    setLoad(false);
  };

  const getItemById = (item) => {
    setSingleItem(item);
    // console.log("clicked", item.strCategory);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (item) => {
    console.log(item  );
    dispatch(addedToCart(item));

    // console.log("clicked cart", item);
  };

  // console.log(addedToCartItem);
  return (
    <div style={{ backgroundColor: "#FBEEF0" }} className="container-fluid">
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "cursive",
          fontWeight: "bolder",
        }}
      >
        Available Items
      </h1>
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <div className="row">
          {products != undefined &&
            products?.map((item, key) => {
              return (
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                  <div
                    key={key}
                    className="card mt-1 text-center"
                    style={{
                      backgroundColor: "#E5E5E5",
                    }}
                  >
                    <img src={item.strCategoryThumb} alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item.strCategory}</h5>
                      <button
                        className="btn btn-outline-success"
                        onClick={() => {
                          addToCart(item);
                        }}
                      >
                        Add To Cart
                      </button>
                      <h1></h1>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
export default FoodItemList;
