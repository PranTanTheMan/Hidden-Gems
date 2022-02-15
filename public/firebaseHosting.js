// FIREBASE SDK's
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCV4aSPeEHEmsZYZqVshrpvSvRabQWl2o",
  authDomain: "hidden-gems-8711.firebaseapp.com",
  projectId: "hidden-gems-8711",
  storageBucket: "hidden-gems-8711.appspot.com",
  messagingSenderId: "284447061780",
  appId: "1:284447061780:web:699479b301262b1323b401",
  measurementId: "G-XYJRGKEZWP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
