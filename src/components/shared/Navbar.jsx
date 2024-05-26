import React from "react";
import { FaHamburger } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/services"}>Services</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            daisyUI
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/services"}>Services</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={"/login"} className="btn mr-3 bg-orange-500 text-white">
            Login
          </Link>
          <Link to={"/register"} className="btn bg-red-600 text-white">
            Register
          </Link>
        </div>
      </div>
    </>
  );
}
