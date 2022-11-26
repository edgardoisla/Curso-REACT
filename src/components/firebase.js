// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHyzBfZaalSJsTgCdxGYlZ9tJJi28oScE",
  authDomain: "edgardo-isla.firebaseapp.com",
  projectId: "edgardo-isla",
  storageBucket: "edgardo-isla.appspot.com",
  messagingSenderId: "326040653155",
  appId: "1:326040653155:web:83485c5b62a4934d74d756",
  measurementId: "G-ZLEKQ7MMLG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);