
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDHyzBfZaalSJsTgCdxGYlZ9tJJi28oScE",
  authDomain: "edgardo-isla.firebaseapp.com",
  projectId: "edgardo-isla",
  storageBucket: "edgardo-isla.appspot.com",
  messagingSenderId: "326040653155",
  appId: "1:326040653155:web:83485c5b62a4934d74d756",
  measurementId: "G-ZLEKQ7MMLG"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);