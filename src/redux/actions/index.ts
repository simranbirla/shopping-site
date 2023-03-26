import { ACTION_TYPES } from "../../constants/actions";
import { IProduct } from "../../interfaces/Product";

export const addToCart = (item: Partial<IProduct>) => {
  return { type: ACTION_TYPES.ADD_TO_CART, payload: item };
};

export const removeFromCart = (id: number) => {
  return { type: ACTION_TYPES.REMOVE_FROM_CART, payload: id };
};

export const increaseItem = (item: Partial<IProduct>) => {
  return { type: ACTION_TYPES.INCREASE_ITEM, payload: item };
};

export const decreaseItem = (id: number) => {
  return { type: ACTION_TYPES.DECREASE_ITEM, payload: id };
};
