import React, { useContext, useState } from "react";
import auth from "../../firebase/firebase.config";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { AuthContext } from "../../contextProvieders/AuthProvider";

export default function GoogleLogin() {
  const { googleUser, user } = useContext(AuthContext);
  // console.log("authInfoData", authInfoData);
  // const [user, setUser] = useState("");

  // const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    googleUser(provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const loggedInuser = result.user;
        // setUser(loggedInuser);
        console.log("user data", loggedInuser, user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const SignOutGoogle = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div>
      {user ? (
        <button
          onClick={SignOutGoogle}
          className=" px-5 py-3 bg-red-500 text-white w-full rounded-lg"
        >
          Sign out from google
        </button>
      ) : (
        <button
          onClick={signInWithGoogle}
          className=" px-5 py-3 bg-yellow-500 text-white w-full rounded-lg"
        >
          Google Login
        </button>
      )}
    </div>
  );
}
