import React, { useState, useEffect } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productAction";
import Loader from "./Loader";
import { Link } from "react-router-dom";

function SpecialDishes() {
  let maximumNumberToDisplay = 4;

  const [load, setLoad] = useState(false);
  const [singleItem, setSingleItem] = useState("");
  const products = useSelector(
    (state) => state.allProducts.products.categories
  );
  // console.log("prodcts is ", products);

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

  return (
    <div style={{ backgroundColor: "#FBEEF0" }} className="container-fluid">
      <div >
        {load && <Loader />}
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "cursive",
            fontWeight: "bolder",
          }}
        >
          Our Special Dishes
        </h1>
        <div className="row">
          {products != undefined &&
            products?.map((item, index) => {
              if (index < maximumNumberToDisplay) {
                return (
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div
                      key={index}
                      className="card rounded-5"
                      style={{
                        alignItems: "center",
                        margin: "5px",
                        marginLeft: "5px",
                        marginBottom: "5px",
                        textAlign: "center",
                        backgroundColor: "#E5E5E5",
                      }}
                    >
                      <img
                        src={item.strCategoryThumb}
                        className="card-img-top"
                        alt="..."
                        style={{ width: "180px" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.strCategory}</h5>
                        <button
                          className="btn btn-outline"
                          style={{
                            backgroundColor: "#E7D3D9",
                            color: "#0F0E0E",
                          }}
                          type="button"
                          class="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={() => {
                            getItemById(item);
                          }}
                        >
                          View
                        </button>
                        <h1></h1>
                      </div>
                      <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div
                          class="modal-dialog "
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                          }}
                        >
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">
                                {singleItem.strCategory}
                              </h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <img
                                src={singleItem.strCategoryThumb}
                                style={{ width: "180px" }}
                              />
                            </div>
                            <div
                              class="modal-body"
                              style={{ fontSize: "15px" }}
                            >
                              <p>{singleItem.strCategoryDescription}</p>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <Link to={`/products/${singleItem.idCategory}`}>
                                <button type="button" class="btn btn-primary">
                                  Order Now
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
}

export default SpecialDishes;
