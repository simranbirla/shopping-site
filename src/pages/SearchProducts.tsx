import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { IProduct } from "../interfaces/Product";

export default function SearchProducts() {
  const { name } = useParams();
  const [searchedProducts, setSearchedProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    console.log("wohoooooooo");
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const products = data.filter((item: any) =>
          item.title.toLowerCase().includes(name)
        );
        setSearchedProducts(products);
      });

    return () => {
      setSearchedProducts([]);
    };
  }, [name]);

  return (
    <div className="products">
      {searchedProducts.length > 0 ? (
        searchedProducts.map((product) => <ProductCard product={product} />)
      ) : (
        <div>No Products found </div>
      )}
    </div>
  );
}
