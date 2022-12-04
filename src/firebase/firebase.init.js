// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_1YbcgGOfSJBmhF0irtfYUncY7-n4ORk",
  authDomain: "learning-platform-1c131.firebaseapp.com",
  projectId: "learning-platform-1c131",
  storageBucket: "learning-platform-1c131.appspot.com",
  messagingSenderId: "1082535588104",
  appId: "1:1082535588104:web:5b9f907bd792df0586bcbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app