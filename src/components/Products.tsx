import React, { useEffect, useState } from "react";
import { IProduct } from "../interfaces/Product";
import ProductCard from "./ProductCard";

export default function Products() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      Products
      <div className="products">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        ) : (
          <div>Loading </div>
        )}
      </div>
    </>
  );
}
