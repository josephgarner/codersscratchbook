import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2dA75Zj4SQYTbQUJA4Fkx_CdwHDv7LDQ",
  authDomain: "codersscratchbook.firebaseapp.com",
  projectId: "codersscratchbook",
  storageBucket: "codersscratchbook.appspot.com",
  messagingSenderId: "558736415690",
  appId: "1:558736415690:web:70b47d7221d67517120d33",
  measurementId: "G-CPVZ1LHGSG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
