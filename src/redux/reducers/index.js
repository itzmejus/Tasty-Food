import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productReducer } from "./productReducer";
const reducers = combineReducers({
  allProducts: productReducer,
  cartItems: cartReducer,
});

export default reducers;
