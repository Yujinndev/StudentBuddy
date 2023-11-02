import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@react-native-material/core";
import {
  createNote,
  deleteNote,
  editNote,
  getNotes,
} from "./src/utils/NotesFirebase";
import { isSignedIn, signIn } from "./src/utils/AuthenticationFirebase";

export default function Test() {
  return (
    <>
      <SafeAreaView>
        <Button
          title="Test Create"
          onPress={() => {
            try {
              const res = signIn(
                "Example@example.com",
                "any",
                "any",
                "any",
                "any"
              );
            } catch (error) {
              console.log(error);
            }
          }}
        />
        <Button
          title="Test sign"
          onPress={() => {
            try {
              isSignedIn();
            } catch (error) {
              console.log(error);
            }
          }}
        />
      </SafeAreaView>
    </>
  );
}
