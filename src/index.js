import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_RAPID_API_KEY,
  authDomain: "desafio-firebase-1618f.firebaseapp.com",
  projectId: "desafio-firebase-1618f",
  storageBucket: "desafio-firebase-1618f.appspot.com",
  messagingSenderId: "838403785133",
  appId: "1:838403785133:web:e8212793dca4c1fd6ae124"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
