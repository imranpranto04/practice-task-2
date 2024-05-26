import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";

export default function GoogleLogin() {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  console.log("Google Use", user);
  return (
    <div>
      {" "}
      <button
        onClick={() => signInWithGoogle()}
        className=" px-5 py-3 bg-yellow-500 text-white w-full rounded-lg"
      >
        Google Login
      </button>
    </div>
  );
}
