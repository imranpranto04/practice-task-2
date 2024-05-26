import React from "react";
import { Link } from "react-router-dom";

export default function SingleItem({ item }) {
  const { id, title, brand, price, description, image_url } = item;
  return (
    <div>
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
          <div className="card-actions justify-between">
            <button className="btn btn-primary">
              <Link to={""}>Details</Link>
            </button>
            <button className="btn btn-outline btn-success">Edit</button>
            <button className="btn btn-error">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
