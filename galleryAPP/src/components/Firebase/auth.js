
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAS1IwIFMO0UWBniSH3M2hLruTal12Z8E",
  authDomain: "galleryapp-e0aa0.firebaseapp.com",
  projectId: "galleryapp-e0aa0",
  storageBucket: "galleryapp-e0aa0.appspot.com",
  messagingSenderId: "685266873038",
  appId: "1:685266873038:web:9d7bed32eb2646327bbe9f"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);