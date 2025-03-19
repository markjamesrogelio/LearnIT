// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMNKBltJmJYs9OjD-u-lDnK2KrIDYiDV0",
  authDomain: "learnit-3a97e.firebaseapp.com",
  databaseURL: "https://learnit-3a97e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "learnit-3a97e",
  storageBucket: "learnit-3a97e.firebasestorage.app",
  messagingSenderId: "217082895630",
  appId: "1:217082895630:web:12133c458b98c1e9a48b5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;