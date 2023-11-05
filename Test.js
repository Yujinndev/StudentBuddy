import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@react-native-material/core";
import {
  createNote,
  deleteNote,
  editNote,
  getNotes,
} from "./src/utils/NotesFirebase";
import {
  getUser,
  isSignedIn,
  logInWithEmailAndPassword,
  signIn,
  signOutOfEmailAndPassword,
} from "./src/utils/AuthenticationFirebase";

export default function Test() {
  return (
    <>
      <SafeAreaView>
        <Button
          title="Test Create"
          onPress={async () => {
            // signIn("Example@example.com", "any", "any", "any", "anyany")
            //   .then((val) => {
            //     console.log(val);
            //   })
            //   .catch((error) => {
            //     console.log(error);
            //   });
            try {
              const result = await logInWithEmailAndPassword(
                "Example@example.com.ph",
                "anyany"
              );
              console.log(result.uid);
            } catch (error) {
              console.log(error);
            }
          }}
        />
        <Button
          title="Test sign"
          onPress={async () => {
            try {
              console.log(await isSignedIn());
            } catch (error) {
              console.log(error);
            }
          }}
        />
        <Button
          title="sign Out"
          onPress={() => {
            try {
              signOutOfEmailAndPassword();
            } catch (error) {
              console.log(error);
            }
          }}
        />
        <Button
          title="Get user"
          onPress={async () => {
            try {
              await getUser().then((val) => {
                const res = JSON.parse(val);
                console.log(res.uid);
              });
            } catch (error) {
              console.log(error);
            }
          }}
        />
      </SafeAreaView>
    </>
  );
}
