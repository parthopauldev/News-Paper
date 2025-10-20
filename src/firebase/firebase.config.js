// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWHMMm0iQRgomqffkEHTw291aPtrwwfbk",
  authDomain: "newspaper-5ef84.firebaseapp.com",
  projectId: "newspaper-5ef84",
  storageBucket: "newspaper-5ef84.firebasestorage.app",
  messagingSenderId: "932576884275",
  appId: "1:932576884275:web:a2d581f3c22417c4bf9546"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app