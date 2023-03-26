import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IProduct } from "../interfaces/Product";
import { addToCart, decreaseItem } from "../redux/actions";
import { IReducerState } from "../redux/reducers";
import "../styles/productCard.css";

interface IProductCard {
  product: IProduct;
}

export default function ProductCard({ product }: IProductCard): ReactElement {
  const { title, image, description, id, price } = product;
  const quantity = useSelector<IReducerState, number>((state) => {
    const currentProduct = state.cart.find((obj) => obj.item.id === id);
    return currentProduct?.quantity ?? 0;
  });
  const dispatch = useDispatch();

  const addProductToCart: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    dispatch(addToCart({ image, title, id, price }));
  };

  const decreaseProductQuantity: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    e.preventDefault();
    dispatch(decreaseItem(id));
  };

  return (
    <div className="product-card">
      <Link to={`/product/${id}`}>
        <h1 className="product-card__title">{title}</h1>
        <img src={image} alt={title} className="product-card__img" />
      </Link>
      <h2 className="product-card__description">{description}</h2>
      <p className="product-card__price">
        Price: <strong>${price}</strong>
      </p>
      <button onClick={addProductToCart} className="product-card__button--blue">
        Add To Cart
      </button>
      <div className="product-card__quantity">
        <button onClick={addProductToCart} className="product-card__button">
          +
        </button>
        <p>Quantity: {quantity}</p>
        <button
          onClick={decreaseProductQuantity}
          className="product-card__button"
        >
          -
        </button>
      </div>
    </div>
  );
}
