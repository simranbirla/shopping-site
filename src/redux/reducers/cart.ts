import { ACTION_TYPES } from "../../constants/actions";
import { IProduct } from "../../interfaces/Product";

type IAction = {
  type: ACTION_TYPES;
  payload: any;
};

type ICartProduct = {
  item: IProduct;
  quantity: number;
};

const Addcart = (state: ICartProduct[] = [], action: IAction) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART:
      console.log(state);
      const index = state.findIndex((obj) => obj.item.id === action.payload.id);
      console.log(index);
      if (index === -1) {
        return [...state, { item: action.payload, quantity: 1 }];
      } else {
        const new_arr = state.map((obj) =>
          obj.item.id === action.payload.id
            ? { ...obj, quantity: obj.quantity + 1 }
            : obj
        );
        return [...new_arr];
      }

    case ACTION_TYPES.INCREASE_ITEM:
      const new_arr = state.map((obj) =>
        obj.item.id === action.payload
          ? { ...obj, quantity: obj.quantity + 1 }
          : obj
      );
      return [...new_arr];

    case ACTION_TYPES.DECREASE_ITEM:
      const new_arrr = state.map((obj) =>
        obj.item.id === action.payload
          ? { ...obj, quantity: obj.quantity - 1 }
          : obj
      );
      return [...new_arrr];

    case ACTION_TYPES.REMOVE_FROM_CART:
      const arr = state.filter((obj) => obj.item.id !== action.payload);
      return [...arr];

    default:
      return state;
  }
};

export default Addcart;
