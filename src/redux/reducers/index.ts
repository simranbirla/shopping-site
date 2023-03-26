import { combineReducers } from "redux";
import cart, { ICartProduct } from "./cart";

export interface IReducerState {
  cart: ICartProduct[];
}

const reducers = combineReducers({
  cart,
});

export default reducers;
