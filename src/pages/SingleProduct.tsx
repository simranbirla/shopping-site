import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { IProduct } from "../interfaces/Product";

export default function SingleProduct() {
  const [product, setProduct] = useState<IProduct>();
  const { id } = useParams();

  useEffect(() => {
    console.log("heyyyyyyyyyyyyy");
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }, [id]);

  return (
    <div className="product">
      {product ? <ProductCard product={product} /> : <div>Loading</div>}
    </div>
  );
}
