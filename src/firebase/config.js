// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCudVhkhSPOopAsWnJ-oBD10ku5tfcaG6I",
  authDomain: "react-xd.firebaseapp.com",
  projectId: "react-xd",
  storageBucket: "react-xd.appspot.com",
  messagingSenderId: "2019346214",
  appId: "1:2019346214:web:bb7aff38961c99b5fe23e7",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
