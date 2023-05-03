// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-yOplkVyIkGdbs8slS4WM9IJ_GAv_zR0",
  authDomain: "reddit-f8166.firebaseapp.com",
  projectId: "reddit-f8166",
  storageBucket: "reddit-f8166.appspot.com",
  messagingSenderId: "368853333385",
  appId: "1:368853333385:web:5df637125ef47cdbd65d58",
  measurementId: "G-LB8Y40SR5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {app};