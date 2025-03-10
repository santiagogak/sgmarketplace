import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDRrWkCB8rRTawNRfOT4nGZAMaO3we9H4M",
  authDomain: "sgmarketplace-ea21e.firebaseapp.com",
  projectId: "sgmarketplace-ea21e",
  storageBucket: "sgmarketplace-ea21e.firebasestorage.app",
  messagingSenderId: "233107318699",
  appId: "1:233107318699:web:4b4fe77dc6fd7eae3fd4ee"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);