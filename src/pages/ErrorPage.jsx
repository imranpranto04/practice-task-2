import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <>
      {" "}
      <div
        id="error-page"
        className="text-center min-h-screen flex items-center justify-center font-bold text-red-500"
      >
        <div>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
          <Link className="btn bg-green-600" to={"/"}>
            Back Home
          </Link>
        </div>
      </div>
    </>
  );
}
