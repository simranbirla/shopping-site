import React, { useEffect, useState } from "react";
import { IProduct } from "../interfaces/Product";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import "../styles/products.css";

export default function Products() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [searchProduct, setSearchProduct] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });

    return () => {
      setProducts([]);
      setSearchProduct("");
    };
  }, []);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    navigate(`/search/${searchProduct}`);
  };

  return (
    <main>
      <div className="search-box">
        <input
          type="text"
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
          placeholder="Enter product name to search"
        />
        <button onClick={handleClick} disabled={searchProduct ? false : true}>
          Search
        </button>
      </div>
      <div className="products">
        {products.length > 0
          ? products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))
          : "Loading"}
      </div>
    </main>
  );
}
