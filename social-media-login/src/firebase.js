// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA7vuKjrUJmX7wbGii2xUQcQFwJ2YolHOk",
    authDomain: "login2-df9a3.firebaseapp.com",
    projectId: "login2-df9a3",
    storageBucket: "login2-df9a3.appspot.com",
    messagingSenderId: "1080138806721",
    appId: "1:1080138806721:web:f1c9be004ba9f3dfe3eb40",
    measurementId: "G-GKG0ZC4X7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()