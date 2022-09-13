import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfFYqmqOMUQzF50KX4WvZQZIfo42HUunk",
  authDomain: "loginpage-8ec6f.firebaseapp.com",
  projectId: "loginpage-8ec6f",
  storageBucket: "loginpage-8ec6f.appspot.com",
  messagingSenderId: "381178733899",
  appId: "1:381178733899:web:a84a70e58e28e8a7ca74ce",
  measurementId: "G-JQL7S0J8XW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };