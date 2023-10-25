import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@react-native-material/core";
import {
  createNote,
  deleteNote,
  editNote,
  getNotes,
} from "./src/utils/NotesFirebase";

export default function Test() {
  return (
    <>
      <SafeAreaView>
        <Button
          title="Test Create"
          onPress={() => {
            editNote();
          }}
        />
      </SafeAreaView>
    </>
  );
}
