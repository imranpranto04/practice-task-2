import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

export default function AddProduct() {
  const [formData, setFormData] = useState(null);
  const [getAlert, setGetAlert] = useState(false);

  useEffect(() => {
    if (formData && getAlert) {
      const postData = async () => {
        try {
          const response = await fetch("http://localhost:3000/items", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          const data = await response.json();

          console.log("alert data", data);
          // Reset form data and alert state after successful submission
          setFormData(null);
          setGetAlert(false);
          toast.success("Product added successfully!");
        } catch (error) {
          console.error("Error adding product:", error);
          toast.error("Failed to add product.");
        }
      };

      postData();
    }
  }, [getAlert, formData]);

  // form handle submit
  const handlesubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const id = e.target.id.value;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const newFormData = {
      id,
      title,
      brand,
      price,
      description,
      image_url,
    };

    console.log("Form data", newFormData);

    handleModal(newFormData);
  };

  const handleModal = (newFormData) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to add this product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Added!",
          text: "Your product has been added.",
          icon: "success",
        });
        setFormData(newFormData);
        setGetAlert(true);
      }
    });
  };

  return (
    <>
      <div className="w-full">
        <h1 className="bg-blue-500 p-5 text-white mb-6 text-center text-2xl">
          Add Product
        </h1>
        <div className="w-full">
          <form className="w-full" onSubmit={handlesubmit}>
            <div className="mt-3">
              <input
                className="bg-gray-100 p-3 w-1/2 border border-blue-500 rounded-md"
                type="text"
                name="id"
                placeholder="ID"
              />
            </div>

            <div className="mt-3">
              <input
                className="bg-gray-100 p-3 w-1/2 border border-blue-500 rounded-md"
                type="text"
                name="title"
                placeholder="Product Title"
              />
            </div>
            <div className="mt-3">
              <input
                className="bg-gray-100 p-3 w-1/2 border border-blue-500 rounded-md"
                type="text"
                name="brand"
                placeholder="Brand Name"
              />
            </div>
            <div className="mt-3">
              <input
                className="bg-gray-100 p-3 w-1/2 border border-blue-500 rounded-md"
                type="number"
                name="price"
                placeholder="Price"
              />
            </div>
            <div className="mt-3">
              <input
                className="bg-gray-100 p-3 w-1/2 border border-blue-500 rounded-md"
                type="text"
                name="description"
                placeholder="Description"
              />
            </div>
            <div className="mt-3">
              <input
                className="bg-gray-100 p-3 w-1/2 border border-blue-500 rounded-md"
                type="text"
                name="image_url"
                placeholder="Image url"
              />
            </div>

            <div>
              <input
                className="btn mt-3 w-3/4"
                type="submit"
                value="Add Product"
              />
            </div>

            <ToastContainer />
          </form>
        </div>
      </div>
    </>
  );
}
