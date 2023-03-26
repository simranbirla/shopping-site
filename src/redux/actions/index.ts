import { ACTION_TYPES } from "../../constants/actions";
import { IProduct } from "../../interfaces/Product";

export const addCart = (item: IProduct) => {
  return { type: ACTION_TYPES.ADD_TO_CART, payload: item };
};

export const removeCart = (item: IProduct) => {
  return { type: ACTION_TYPES.REMOVE_FROM_CART, payload: item };
};

export const increaseItem = (item: IProduct) => {
  return { type: ACTION_TYPES.INCREASE_ITEM, payload: item };
};

export const decreaseItem = (item: IProduct) => {
  return { type: ACTION_TYPES.DECREASE_ITEM, payload: item };
};
