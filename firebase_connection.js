// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALJ98AfwD6gdd4gYszDw6rvAJa8DjhHyk",
  authDomain: "e-commerce-final-project-25540.firebaseapp.com",
  projectId: "e-commerce-final-project-25540",
  storageBucket: "e-commerce-final-project-25540.appspot.com",
  messagingSenderId: "25524929636",
  appId: "1:25524929636:web:cbd61edae56fb228db8b71",
  measurementId: "G-1BSQMBSMT6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);