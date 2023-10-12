// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyApDgoZUJFV75agI5W7ienQRQV1C-tG-_o",
  authDomain: "uni-meet-61742.firebaseapp.com",
  projectId: "uni-meet-61742",
  storageBucket: "uni-meet-61742.appspot.com",
  messagingSenderId: "535624897643",
  appId: "1:535624897643:web:a4d6798b60924be56b0d2e",
  measurementId: "G-KST83X1H1C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
