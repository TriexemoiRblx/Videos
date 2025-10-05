// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFVQQj_SA8kc4Lmc35jsJHtEMw6cHwd-Q",
  authDomain: "triexemoi-login.firebaseapp.com",
  projectId: "triexemoi-login",
  storageBucket: "triexemoi-login.firebasestorage.app",
  messagingSenderId: "968889295659",
  appId: "1:968889295659:web:bd4cfc1756d80179f1db6e",
  measurementId: "G-8VK0795WBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
