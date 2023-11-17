import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getReactNativePersistence,
  initializeAuth,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import AsyncStorage, {
  ReactNativeAsyncStorage,
} from "@react-native-async-storage/async-storage";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

import { FIREBASE_APP } from "../../config/firebase_config";

const auth = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(FIREBASE_APP);
GoogleSignin.configure({
  webClientId:
    "515804150656-ophtobgt090lgv8jnbpp6fck5e1tn70m.apps.googleusercontent.com",
});

// to save user's credential locally when he signin or login
onAuthStateChanged(auth, async (user) => {
  if (user) {
    AsyncStorage.setItem("user", JSON.stringify(user));
  }
});

/**
 * Create user account
 * @param {String} email - the email of the user
 * @param {String} firstname - the first name of the user
 * @param {String} lastname - the last name of the user
 * @param {String} school - the school or organization that the user is in
 * @param {String} password - the password for the user's account
 * @returns the user information is JSON format
 */
export const signIn = async (email, firstname, lastname, school, password) => {
  // verify if the user's email and password is valid
  if (!isValidEmail(email)) {
    throw "Wrong email format";
  }
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const docRef = await setDoc(doc(db, "users", user.uid), {
      email: email,
      firstname: firstname,
      lastname: lastname,
      school: school,
    });
    return user;
  } catch (error) {
    throw error;
  }
};

isValidEmail = (email) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (reg.test(email) === false) {
    return false;
  }
  return true;
};

/**
 * Check if the user is already logged in
 * @returns true if the user is logged in otherwise false
 */
export const isSignedIn = async () => {
  const user = await AsyncStorage.getItem("user");
  if (user) {
    return true;
  } else {
    return false;
  }
};

/**
 * Get the current logged in user's credential
 * @returns String - the user's credential in JSON format; can be parse using
 * the JSON.parse()
 */
export const getUser = async () => {
  return await AsyncStorage.getItem("user");
};

/**
 * Log in the user using email and password
 * @param {String} email - the email of the user
 * @param {String} password - the password of the user
 * @returns String - user's credential
 */
export const logInWithEmailAndPassword = async (email, password) => {
  // verify the user's email
  if (!isValidEmail(email)) {
    throw "Wrong email format";
  }
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

/**
 * To sign out the user
 */
export const signOutOfEmailAndPassword = async () => {
  try {
    await AsyncStorage.removeItem("user");
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

/**
 * Create a new account with google account
 * @returns user credentials
 */
export async function createAccountWithGoogle() {
  try {
    console.log("gologolo");
    const userCredential = await GoogleSignin.signIn();
    const googleCredential = GoogleAuthProvider.credential(
      userCredential.idToken
    );
    const user = await signInWithCredential(auth, googleCredential);
    const docRef = await setDoc(doc(db, "users", user.user.uid), {
      email: user.user.email,
      firstname: user.user.displayName,
      lastname: "",
      school: "",
    });
    return user;
  } catch (error) {
    throw error;
  }
}

/**
 * Log in using the google acount
 * @returns user credentials
 */
export async function loginWithGoogle() {
  try {
    const userCredential = await GoogleSignin.signIn();
    const googleCredential = GoogleAuthProvider.credential(
      userCredential.idToken
    );
    const user = await signInWithCredential(auth, googleCredential);
    return user;
  } catch (error) {
    throw error;
  }
}

/**
 * Sign out the logged in google account
 */
export async function signOutGoogle() {
  await GoogleSignin.signOut();
  await AsyncStorage.removeItem("user");
  await signOut(auth);
}

/*
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
*/
