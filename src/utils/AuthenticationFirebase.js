import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  FacebookAuthProvider,
} from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";

import { FIREBASE_APP } from "../../config/firebase_config";

const auth = getAuth(FIREBASE_APP);
const db = getFirestore(FIREBASE_APP);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

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

export const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      // save the user's credentials to firestore
      const docRef = setDoc(doc(db, user.uid), {
        email: user.email,
        firstname: user.displayName,
        lastname: "",
        school: "",
      });
      return {
        credential: GoogleAuthProvider.credentialFromResult(result),
        user: user,
      };
    })
    .catch((error) => {
      return error;
    });
};

export const signInWithFacebook = () => {
  signInWithRedirect(auth, facebookProvider).catch((error) => {
    return error;
  });
};

export const getUserCredentialFacebook = () => {
  getRedirectResult(auth)
    .then((result) => {
      const user = result.user;
      const docRef = setDoc(doc(db, "users", user.uid), {
        email: user.email,
        firstname: user.displayName,
        lastname: "",
        school: "",
      });
      return {
        credential: FacebookAuthProvider.credentialFromResult(result),
        user: user,
      };
    })
    .catch((error) => {
      return error;
    });
};
