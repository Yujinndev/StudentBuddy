import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";

import { FIREBASE_APP } from "../../config/firebase_config";

const auth = getAuth(FIREBASE_APP);
const db = getFirestore(FIREBASE_APP);

export const signIn = (email, firstname, lastname, school, password) => {
  // verify if the user's email and password is valid
  if (!isValidEmail(email)) {
    throw "Wrong email format";
  }
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const docRef = setDoc(doc(db, user.uid), {
        email: email,
        firstname: firstname,
        lastname: lastname,
        school: school,
      });
      return user;
    })
    .catch((error) => {
      return error;
    });
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
