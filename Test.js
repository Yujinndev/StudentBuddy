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
  createUserWithFacebook,
  getProfile,
  getUser,
  isSignedIn,
  logInWithEmailAndPassword,
  signIn,
  signOutFacebook,
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
              await createUserWithFacebook();
            } catch (error) {
              console.log(error);
            }
          }}
        />
        <Button
          title="sign Out"
          onPress={async () => {
            try {
              await signOutFacebook();
              console.log("naka sign out na");
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
                console.log(res);
              });
            } catch (error) {
              console.log(error);
            }
          }}
        />
        <Button
          title="Get profile"
          onPress={async () => {
            try {
              await getProfile();
            } catch (error) {
              console.log(error);
            }
          }}
        />
      </SafeAreaView>
    </>
  );
}
