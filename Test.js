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
  isSignedIn,
  logInWithEmailAndPassword,
  signIn,
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
          onPress={() => {
            try {
              console.log(isSignedIn());
            } catch (error) {
              console.log(error);
            }
          }}
        />
      </SafeAreaView>
    </>
  );
}
