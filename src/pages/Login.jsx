import React from "react";
import { Link } from "react-router-dom";
import GoogleLogin from "../components/Auth/GoogleLogin";

export default function Login() {
  // console.log("Google Use", user);

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        {/* {user ? ( */}
        {/* <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                User Name: {user?.user?.displayName}
              </h2>
              <p>User email: {user?.user?.email}</p>
              <div className="mx-auto">
                <img
                  className="w-12 rounded-full "
                  src={user?.user?.photoURL}
                  alt=""
                />
              </div>
            </div>
          </div> */}
        {/* ) : ( */}
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>

                  <Link
                    to={"/register"}
                    className="label-text-alt link link-hover text-orange-500"
                  >
                    haven't any account, Register here?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                {/* <button className="btn btn-primary">Login</button> */}
                <div>
                  <button className=" px-5 py-3 bg-yellow-500 text-white w-full rounded-lg">
                    Login
                  </button>
                </div>
              </div>
            </form>

            <GoogleLogin />
          </div>
        </div>
        {/* )} */}
      </div>
    </>
  );
}
