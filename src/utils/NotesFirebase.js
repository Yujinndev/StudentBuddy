import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";

import { FIREBASE_APP } from "../../config/firebase_config";

const db = getFirestore(FIREBASE_APP);

/**
 * Create new note in firebase cloud firestore
 * @param {the userID of user in firebase} userID
 * @param {the title of the new Note} title
 * @param {the content of the note} body
 */
export const createNote = async (userID, title, body) => {
  try {
    const docRef = await addDoc(collection(db, "notes"), {
      userId: userID,
      title: title,
      body: body,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

/**
 * Return the notes of the user
 *
 * Example Code:
 *  querySnapshot.forEach((doc) => {
 *      console.log(doc.id, " => ", doc.data());
 *  });
 *
 * @param {the assigned user ID} userId
 * @returns QuerySnapshot object of the notes by the user
 */
export const getNotes = async (userId) => {
  const notesRef = collection(db, "notes");
  const q = query(notesRef, where("userId", "==", userId));

  const querySnapshot = await getDocs(q);
  return querySnapshot;
};

/**
 * Edit the existing user's note in the cloud firestore
 * @param {the userID of user in firebase} userID
 * @param {the title of the new Note} title
 * @param {the content of the note} body
 * @param {the id of the document of a note} documentId
 */
export const editNote = async (userID, title, body, documentId) => {
  const docRef = await setDoc(doc(db, "notes", documentId), {
    userId: userID,
    title: title,
    body: body,
  });
};

/**
 * Delete the note in cloud firestore
 * @param {the id of the document of a note} documentID
 */
export const deleteNote = async (documentID) => {
  await deleteDoc(doc(db, "notes", documentID));
};
