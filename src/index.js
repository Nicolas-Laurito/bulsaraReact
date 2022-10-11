import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { initializeApp } from "firebase/app";


// const firebaseConfig = {
//   // apiKey: "AIzaSyCOAVLkU2pjCgQHOVfdi759KIPS9S_OIpI",
//   apiKey: process.env.API_KEY,  //sino puedo hacer process.env.REACT_APP_API_KEY y no instalo dotenv
//   authDomain: "bulsara-grow-shop.firebaseapp.com",
//   projectId: "bulsara-grow-shop",
//   storageBucket: "bulsara-grow-shop.appspot.com",
//   messagingSenderId: "1007680812763",
//   appId: "1:1007680812763:web:412b3ddc7324d225b63efe",
//   measurementId: "G-C691531E4E"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App   />     {/*mando como parametro al componente app lo que quiero, un array, objeto, funcion, datos, etc*/}
    
  </React.StrictMode>
);


