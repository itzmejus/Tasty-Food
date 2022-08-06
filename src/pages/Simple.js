import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/actions/productAction";
function App() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .catch((err) => {
        console.log(err);
      });

    dispatch(setProducts(response.data));
  };
useEffect(()=>{
  fetchProducts()
},[])
console.log(products);
  return (
    <div>
      <hi>Data form redux</hi>
      <h1></h1>
    </div>
  );
}

export default App;
