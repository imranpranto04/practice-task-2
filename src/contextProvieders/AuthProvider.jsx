import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const googleUser = (provider) => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);
  // useEffect(() => {const unSubscribe = onAuthStateChanged(auth, currentUser =>{}}, []);

  const authInfo = { user, googleUser };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
