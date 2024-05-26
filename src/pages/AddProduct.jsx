import React from "react";
import { json } from "react-router-dom";

export default function AddProduct() {
  const handlesubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const id = e.target.id.value;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const formData = {
      id,
      title,
      brand,
      price,
      description,
      image_url,
    };

    console.log("FOrm data", formData);

    await fetch("http://localhost:3000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
        e.target.reset();
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
          </form>
        </div>
      </div>
    </>
  );
}
