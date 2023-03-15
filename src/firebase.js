// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi4ObyVu6d2GfWXJe6DqXJKRLmdv_vhE4",
  authDomain: "react-chat-app-12bde.firebaseapp.com",
  projectId: "react-chat-app-12bde",
  storageBucket: "react-chat-app-12bde.appspot.com",
  messagingSenderId: "959291562831",
  appId: "1:959291562831:web:be12b51588b25d4aa1433a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)