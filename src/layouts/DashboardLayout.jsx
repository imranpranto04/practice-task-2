import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Link, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <>
      <Navbar />

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center md:justify-start md:items-start md:p-10">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          {/* Page content here */}
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li className="border-2 border-indigo-600 mb-4 rounded-xl text-lg text-violet-800">
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
            <li className="border-2 border-indigo-600 mb-4 rounded-xl text-lg text-violet-800">
              <Link to={"/dashboard/allProducts"}>All Product</Link>
            </li>
            <li className="border-2 border-indigo-600 mb-4 rounded-xl text-lg text-purple-900">
              <Link to={"/dashboard/addProduct"}>Add Product</Link>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}
