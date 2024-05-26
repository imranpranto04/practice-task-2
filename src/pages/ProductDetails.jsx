import React from "react";
import { useLoaderData } from "react-router-dom";

export default function ProductDetails() {
  const data = useLoaderData();
  console.log("object", data);
  const { id, title, brand, price, description, image_url } = data;

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl h-[650px]">
        <figure>
          <img className="" src={image_url} alt="Backpack" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {" "}
            {title}
            <div className="badge badge-secondary">{price}</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
