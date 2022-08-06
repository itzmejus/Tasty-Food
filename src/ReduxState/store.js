import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
// import {thunk} from "react-redux";
export const store = createStore(reducers, {}, applyMiddleware());
