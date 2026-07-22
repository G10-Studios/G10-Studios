
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxs549OCTA194_pdtkrj9hISfqdJjcgzM",
  authDomain: "g-10-studios.firebaseapp.com",
  projectId: "g-10-studios",
  storageBucket: "g-10-studios.firebasestorage.app",
  messagingSenderId: "541097041185",
  appId: "1:541097041185:web:ef6e7cb4ba8c08e9b77260",
  measurementId: "G-S7HCM5VEE8",
};

const app = initializeApp(firebaseConfig);

/* AUTH */
export const auth = getAuth(app);

/* FIRESTORE DATABASE */
export const db = getFirestore(app);