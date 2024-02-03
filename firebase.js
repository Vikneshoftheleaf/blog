// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIemTmlp_WCktIwFF_2SbK69xgCiCOkrk",
  authDomain: "blogxpilot.firebaseapp.com",
  projectId: "blogxpilot",
  storageBucket: "blogxpilot.appspot.com",
  messagingSenderId: "55252155720",
  appId: "1:55252155720:web:41290da3ff03201470077d",
  measurementId: "G-C5V7SM0Z5X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};