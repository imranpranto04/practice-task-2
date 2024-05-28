import React, { useContext } from "react";
import auth from "../../firebase/firebase.config";
import { signOut } from "firebase/auth";
import { AuthContext } from "../../contextProvieders/AuthProvider";

export default function SignOutBtn() {
  const { setLoading } = useContext(AuthContext);

  const SignOutGoogle = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <button
        onClick={SignOutGoogle}
        className=" px-5 py-3 bg-red-500 text-white rounded-lg"
      >
        Sign out
      </button>
    </>
  );
}
