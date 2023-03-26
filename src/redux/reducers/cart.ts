import { ACTION_TYPES } from "../../constants/actions";
import { IProduct } from "../../interfaces/Product";

type IAction = {
  type: ACTION_TYPES;
  payload: any;
};

export interface ICartProduct {
  item: Partial<IProduct>;
  quantity: number;
}

const Cart = (state: ICartProduct[] = [], action: IAction) => {
  const addProductToCart = () => {
    const index = state.findIndex((obj) => obj.item.id === action.payload.id);
    if (index === -1) {
      return [...state, { item: action.payload, quantity: 1 }];
    } else {
      const new_arr = state.map((obj, objIndex) =>
        objIndex === index ? { ...obj, quantity: obj.quantity + 1 } : obj
      );
      return [...new_arr];
    }
  };

  const decreaseProductQuantity = () => {
    const product = state.find((obj) => obj.item.id === action.payload);

    if (product?.quantity === 1) {
      const arr = state.filter((obj) => obj.item.id !== action.payload);
      return [...arr];
    } else {
      const new_arrr = state.map((obj) =>
        obj.item.id === action.payload
          ? { ...obj, quantity: obj.quantity - 1 }
          : obj
      );
      return [...new_arrr];
    }
  };

  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART:
      return addProductToCart();

    case ACTION_TYPES.INCREASE_ITEM:
      return addProductToCart();

    case ACTION_TYPES.DECREASE_ITEM:
      return decreaseProductQuantity();

    case ACTION_TYPES.REMOVE_FROM_CART:
      const arr = state.filter((obj) => obj.item.id !== action.payload);
      return [...arr];

    default:
      return state;
  }
};

export default Cart;
