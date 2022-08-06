import { combineReducers } from "redux";
import cartReduser from "./cartReducer";

const reducers = combineReducers({
  cart: cartReduser,
});
export default reducers;
