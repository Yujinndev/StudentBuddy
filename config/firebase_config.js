import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDf3DQFZFWKqpU1MEgVM5_7JCYHgDQIo8Y",
  authDomain: "student-buddy-54a93.firebaseapp.com",
  projectId: "student-buddy-54a93",
  storageBucket: "student-buddy-54a93.appspot.com",
  messagingSenderId: "515804150656",
  appId: "1:515804150656:web:586f93de4baae3e8ad9f65",
  measurementId: "G-XDPR6BEF9C",
};


export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_FIRESTORE = getFirestore(FIREBASE_APP);
