import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions";
import "../styles/cartCard.css";

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
      <img src={image} alt={title} />
      <div className="cart-card__details">
        <div className="cart-card__details--info">
          <p>{title}</p>
          <p>Quantity: {quantity}</p>
          <p>Price: {price}</p>
        </div>
        <button onClick={() => dispatch(removeFromCart(id))}>
          Remove Item
        </button>
      </div>
    </div>
  );
}
