import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/Auth/GoogleLogin";
import { AuthContext } from "../contextProvieders/AuthProvider";
import SignOutBtn from "../components/Auth/SignOutBtn";

export default function Login() {
  // console.log("Google Use", user);

  const { user } = useContext(AuthContext);

  const naigate = useNavigate();

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
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
                  {user ? (
                    <div>
                      {naigate(`/dashboard`)}
                      <SignOutBtn />
                    </div>
                  ) : (
                    <button className=" px-5 py-3 my-5 bg-yellow-500 text-white w-full rounded-lg">
                      Login
                    </button>
                  )}
                </div>
              </div>

              <GoogleLogin />
            </form>
          </div>
        </div>
        {/* )} */}
      </div>
    </>
  );
}
