// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_PAYQXexlPIe0s7GKVd3fBzA9zbXlvVk",
  authDomain: "nutriastapp.firebaseapp.com",
  projectId: "nutriastapp",
  storageBucket: "nutriastapp.appspot.com",
  messagingSenderId: "317139172575",
  appId: "1:317139172575:web:cc23d00dc7ff7f719dbd6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;