// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOAVLkU2pjCgQHOVfdi759KIPS9S_OIpI",
  authDomain: "bulsara-grow-shop.firebaseapp.com",
  projectId: "bulsara-grow-shop",
  storageBucket: "bulsara-grow-shop.appspot.com",
  messagingSenderId: "1007680812763",
  appId: "1:1007680812763:web:412b3ddc7324d225b63efe",
  measurementId: "G-C691531E4E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);          //inicia firebase con todas mis credenciales
const db=  getFirestore(app)                    //llamo a la base de datos y la guardo en una constante (tambien lo puedo hacer en el archivo donde la voy a usar, pero aca lohago solo una vez)


export default db           //lo exporto para usar en nuestras fuciones