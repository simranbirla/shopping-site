import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../interfaces/Product";

interface IProductCard {
  product: IProduct;
}

export default function ProductCard({ product }: IProductCard): ReactElement {
  const { title, image, description, id } = product;

  return (
    <div className="product-card">
      ProductCard
      <h1 className="product-card__title">{title}</h1>
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} className="product-card__img" />
      </Link>
      <h2 className="product-card__description">{description}</h2>
    </div>
  );
}
