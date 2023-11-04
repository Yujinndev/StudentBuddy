import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getReactNativePersistence,
  initializeAuth,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import AsyncStorage, {
  ReactNativeAsyncStorage,
} from "@react-native-async-storage/async-storage";

import { FIREBASE_APP } from "../../config/firebase_config";

const auth = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(FIREBASE_APP);

onAuthStateChanged(auth, async (user) => {
  if (user) {
    AsyncStorage.setItem("user", JSON.stringify(user));
  }
});

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
  // return createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     const user = userCredential.user;
  //     const docRef = setDoc(doc(db, "users", user.uid), {
  //       email: email,
  //       firstname: firstname,
  //       lastname: lastname,
  //       school: school,
  //     });
  //     console.log("wtf2");
  //     AsyncStorage.setItem("user", JSON.stringify(user));
  //     return user;
  //   })
  //   .catch((error) => {
  //     return error;
  //   });
};

isValidEmail = (email) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (reg.test(email) === false) {
    return false;
  }
  return true;
};

export const isSignedIn = () => {
  const user = AsyncStorage.getItem("user");
  if (user) {
    return true;
  } else {
    return false;
  }
};

export const logInWithEmailAndPassword = async (email, password) => {
  // verify the user's email
  if (!isValidEmail("email.example.com")) {
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
    return error;
  }
};

/*
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
*/
