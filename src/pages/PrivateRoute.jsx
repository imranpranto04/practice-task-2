import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contextProvieders/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  console.log("Loading", loading);

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} />;
}
