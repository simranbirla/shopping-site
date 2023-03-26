import React from "react";
import { useSelector } from "react-redux";
import { IReducerState } from "../redux/reducers";
import { ICartProduct } from "../redux/reducers/cart";
import CartProductCard from "./CartProductCard";

export default function Cart() {
  const cartProducts = useSelector<IReducerState, ICartProduct[]>(
    (state) => state.cart
  );

  return (
    <div>
      Cart
      {cartProducts.length > 0 ? (
        cartProducts.map((product) => (
          <CartProductCard
            key={product.item.id}
            id={product.item.id as number}
            title={product.item.title as string}
            quantity={product.quantity}
            price={product.item.price as number}
            image={product.item.image as string}
          />
        ))
      ) : (
        <div>Add Products in Cart</div>
      )}
    </div>
  );
}
