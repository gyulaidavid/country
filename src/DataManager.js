import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHha2Gd_09sVm0kHrveqUNSLM6g227ZKQ",
  authDomain: "countries-1bab8.firebaseapp.com",
  projectId: "countries-1bab8",
  storageBucket: "countries-1bab8.appspot.com",
  messagingSenderId: "557057798345",
  appId: "1:557057798345:web:d1a94526f29dbe5fb75d18",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addCountry = async (capital, country) => {
  try {
    const docRef = await addDoc(collection(db, "countries"), {
      capital,
      country,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const deleteCountry = async (capital, country) => {
    try {
      const docRef = await deleteDoc(collection(db, "countries"), {
        capital,
        country,
      });
      console.log("Document deleted with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
