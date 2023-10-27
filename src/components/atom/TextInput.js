import React from 'react';
import { View, TextInput } from 'react-native';
import Styles from '../../theme/Styles';

export default function TextInputAtom({ styling, placeholder, value, onChangeText, secureTextEntry }) {
  return (
    <>
      <TextInput
        style={ styling }
        placeholder={ placeholder }
        placeholderTextColor="#ffffff" 
        value={ value }
        onChangeText={ onChangeText }
        secureTextEntry={ secureTextEntry }
      />
    </>
  );
}