// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxBHtnAcoFLKoPbn3MvlndGsD0QIbgbis",
  authDomain: "fedorynoblog.firebaseapp.com",
  projectId: "fedorynoblog",
  storageBucket: "fedorynoblog.appspot.com",
  messagingSenderId: "398792278833",
  appId: "1:398792278833:web:96f0b8b1512b0bed206610",
  measurementId: "G-M4T4X5WBJW"
};
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

// Initialize Firebase
const db = getFirestore(app);

export { auth, provider, db };
