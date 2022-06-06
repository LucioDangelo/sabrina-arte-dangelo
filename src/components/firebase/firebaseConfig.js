import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsrX57KmjrmP7sLYUNZHn5B1jzpVGsT7A",
    authDomain: "coderhouse-ecommerce-arte.firebaseapp.com",
    projectId: "coderhouse-ecommerce-arte",
    storageBucket: "coderhouse-ecommerce-arte.appspot.com",
    messagingSenderId: "936914448887",
    appId: "1:936914448887:web:6696862a1c45153079fef2"
  };

  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
