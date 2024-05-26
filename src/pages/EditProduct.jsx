import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function EditProduct() {
  const backpackData = useLoaderData();

  const [id, setId] = useState(backpackData.id);
  const [title, setTitle] = useState(backpackData.title);
  const [price, setPrice] = useState(backpackData.price);
  const [brand, setBrand] = useState(backpackData.brand);
  const [description, setDescription] = useState(backpackData.description);
  const [image_url, setImageURL] = useState(backpackData.image_url);

  console.log("backpackData", backpackData);
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

    await fetch(`http://localhost:3000/items/${backpackData.id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <div className="w-full">
        <h1 className="bg-blue-500 p-5 text-white mb-6 text-center text-2xl">
          Edit Product
        </h1>
        <div className="w-full">
          <form className="w-full" onSubmit={handlesubmit}>
            <div className="mt-3">
              <input
                className="bg-gray-100 p-3 w-1/2 border border-blue-500 rounded-md"
                type="text"
                name="id"
                placeholder="ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>

            <div className="mt-3">
              <input
                className="bg-gray-100 p-3 w-1/2 border border-blue-500 rounded-md"
                type="text"
                name="title"
                placeholder="Product Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <input
                className="bg-gray-100 p-3 w-1/2 border border-blue-500 rounded-md"
                type="text"
                name="brand"
                placeholder="Brand Name"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <input
                className="bg-gray-100 p-3 w-1/2 border border-blue-500 rounded-md"
                type="number"
                name="price"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <input
                className="bg-gray-100 p-3 w-1/2 border border-blue-500 rounded-md"
                type="text"
                name="description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <input
                className="bg-gray-100 p-3 w-1/2 border border-blue-500 rounded-md"
                type="text"
                name="image_url"
                placeholder="Image url"
                value={image_url}
                onChange={(e) => setImageURL(e.target.value)}
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
