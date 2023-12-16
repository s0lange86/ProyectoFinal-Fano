import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPBdluJbJVDO7rvMXXn0aDoCCwhACHwqk",
  authDomain: "react-coderhouse-253b4.firebaseapp.com",
  projectId: "react-coderhouse-253b4",
  storageBucket: "react-coderhouse-253b4.appspot.com",
  messagingSenderId: "815024007868",
  appId: "1:815024007868:web:09d092309ce90b40ac3eb9"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
