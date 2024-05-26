// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz5_XOAPRvSrjcOYdiUd2iUNwRrWu3Ycs",
  authDomain: "private-auth-router-d372c.firebaseapp.com",
  projectId: "private-auth-router-d372c",
  storageBucket: "private-auth-router-d372c.appspot.com",
  messagingSenderId: "448982458411",
  appId: "1:448982458411:web:48e59f45bd1dc8b3744a6e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
