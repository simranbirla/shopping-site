import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions";

interface ICartProductCard {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export default function CartProductCard({
  id,
  title,
  price,
  image,
  quantity,
}: ICartProductCard): React.ReactElement<ICartProductCard> {
  const dispatch = useDispatch();

  return (
    <div className="cart-card">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>Quantity: {quantity}</p>
      <p>Price: {price}</p>
      <button onClick={() => dispatch(removeFromCart(id))}>Remove Item</button>
    </div>
  );
}
