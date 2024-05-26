import React from "react";
import { Link } from "react-router-dom";

export default function SingleItemCardDash({ item, onDelete }) {
  const { id, title, brand, price, description, image_url } = item;

  const handleDelete = async () => {
    await fetch(`http://localhost:3000/items/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        onDelete(id);
      });
  };

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
          <div className="card-actions justify-between">
            <Link to={`/dashboard/allProducts/productDetails/${id}`}>
              <button className="btn btn-active  btn-accent">Details</button>
            </Link>

            <Link to={`/dashboard/allProducts/editProduct/${id}`}>
              <button className="btn btn-primary">Edit</button>
            </Link>
            <button className="btn btn-error" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
