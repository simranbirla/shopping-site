import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { IProduct } from "../interfaces/Product";

export default function SingleProduct() {
  const [product, setProduct] = useState<IProduct>();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  return (
    <div className="product">
      {product ? <ProductCard product={product} /> : <div>Loading</div>}
    </div>
  );
}
