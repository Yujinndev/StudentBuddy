import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function TextInputAtom({ styling, placeholder, value, onChangeText, secureTextEntry }) {
  const [visibility, setVisibility] = useState(secureTextEntry);

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <View>
      <TextInput
        style={styling}
        placeholder={placeholder}
        placeholderTextColor="#ffffff"
        value={value}
        onChangeText={ onChangeText }
        secureTextEntry={ !visibility } 
      />

      {
        secureTextEntry == true 
        ? <TouchableOpacity onPress={ toggleVisibility } style={{ position: 'absolute', right: -20, top: 19 }}>
            <FontAwesome5
              name={ visibility ? 'eye' : 'eye-slash' }
              style={{ marginHorizontal: 38 }}
              size={24}
              color="white"
            />
          </TouchableOpacity>
        : null
      }
    </View>
  );
}
