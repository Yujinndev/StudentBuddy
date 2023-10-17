import React from 'react';
import { View, TextInput } from 'react-native';

export default function TextInputAtom({ placeholder, value, onChangeText, secureTextEntry }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={ styles.input }
        placeholder={ placeholder }
        value={ value }
        onChangeText={ onChangeText }
        secureTextEntry={ secureTextEntry }
      />
    </View>
  );
}