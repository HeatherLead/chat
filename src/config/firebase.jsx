import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC42iPhidRzxHkIZiGZp8c-AO9MuXOGroo",
  authDomain: "chat-b428e.firebaseapp.com",
  projectId: "chat-b428e",
  storageBucket: "chat-b428e.appspot.com",
  messagingSenderId: "892606557306",
  appId: "1:892606557306:web:aee9ffad89b1613ee89fc3",
  measurementId: "G-18ZRJB6HZH",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
