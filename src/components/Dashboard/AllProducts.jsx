import React, { useEffect, useState } from "react";
import SingleItemCardDash from "./SingleItemCardDash";

export default function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <>
      <div className="w-full">
        <h1 className="mx-auto my-5 bg-blue-500 p-5 text-white mb-6 text-center text-2xl">
          All Products
        </h1>
        <div className="flex gap-4 flex-wrap justify-center ">
          {products.map((item) => (
            <SingleItemCardDash
              item={item}
              key={item.id}
              onDelete={handleDeleteProduct}
            />
          ))}
        </div>
      </div>
    </>
  );
}
