// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1dHt_BfngmlJp40If6a45zZY3P9bfY9s",
  authDomain: "the-dragon-news-projact.firebaseapp.com",
  projectId: "the-dragon-news-projact",
  storageBucket: "the-dragon-news-projact.appspot.com",
  messagingSenderId: "529069891615",
  appId: "1:529069891615:web:5fc4284f8c6ab0229a352a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;