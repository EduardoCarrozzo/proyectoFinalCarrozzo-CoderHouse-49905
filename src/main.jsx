import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBqhHYaCymVspMgoJJ2i2wJjPI-XbT5ROY",
  authDomain: "pfcarrozzo-coderhouse-49905.firebaseapp.com",
  projectId: "pfcarrozzo-coderhouse-49905",
  storageBucket: "pfcarrozzo-coderhouse-49905.appspot.com",
  messagingSenderId: "128438587316",
  appId: "1:128438587316:web:e4b09dc663f43d224d2ce1"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
