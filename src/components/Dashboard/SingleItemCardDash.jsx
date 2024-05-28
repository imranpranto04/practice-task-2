import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

// toast.configure();
export default function SingleItemCardDash({ item, onDelete }) {
  const { id, title, brand, price, description, image_url } = item;

  const handleDelete = () => {
    // Show a confirmation modal
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // If the user confirms, delete the item
        await deleteItem();
      }
    });
  };

  const deleteItem = async () => {
    try {
      await fetch(`http://localhost:3000/items/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          onDelete(id);
        });

      // Show success toast notification
      toast.success("Product added successfully!");
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Failed to delete product.");
    }
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
      <ToastContainer />
    </>
  );
}
