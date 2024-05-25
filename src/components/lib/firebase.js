
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-1d962.firebaseapp.com",
  projectId: "reactchat-1d962",
  storageBucket: "reactchat-1d962.appspot.com",
  messagingSenderId: "1063064615280",
  appId: "1:1063064615280:web:cee373fe9d7acca840f7b5"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()