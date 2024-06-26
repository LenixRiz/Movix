// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKkPNd4RLKYrZH9QSkJTKtyc3f8-sRh2Y",
  authDomain: "movix-app-b0fae.firebaseapp.com",
  projectId: "movix-app-b0fae",
  storageBucket: "movix-app-b0fae.appspot.com",
  messagingSenderId: "850084750585",
  appId: "1:850084750585:web:c417fca8e63d4c0bfaee28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);