import React from "react";
import { useSelector } from "react-redux";
function CartItemList() {
  const data = useSelector((state) => state.item.value);
  console.log(data);
  return (
    <div>
      <h1>hiii</h1>
      
    </div>
  );
}

export default CartItemList;
