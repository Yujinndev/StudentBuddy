import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { FIREBASE_APP } from "../../config/firebase_config";

const auth = getAuth(FIREBASE_APP);

export const signIn = () => {
  // verify if the user's email and password is valid
  if (!isValidEmail("email.example.com")) {
    throw "Wrong email format";
  }
  createUserWithEmailAndPassword(auth, "email@example.com", "testing");
};

isValidEmail = (email) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (reg.test(email) === false) {
    return false;
  }
  return true;
};

export const logInWithEmailAndPassword = (email, password) => {
  // verify the user's email
  if (!isValidEmail("email.example.com")) {
    throw "Wrong email format";
  }
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return userCredential;
    })
    .catch((error) => {
      return error;
    });
};
