import React, { useState, useRef } from 'react';
import { Animated, View, TextInput, TouchableOpacity, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../theme/Colors';
import Styles from '../../theme/Styles';

export default function TextInputAtom({
  styling,
  placeholder,
  value,
  onChangeText,
  dataType,
  secureTextEntry,
  disabled,
  error,
}) {
  const [visibility, setVisibility] = useState(secureTextEntry);

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  // Use fadeIn when there's an error
  if (error) {
    fadeIn();
  }

  return (
    <View>
      <TextInput
        style={styling}
        placeholder={placeholder}
        placeholderTextColor={error ? Colors.error : Colors.accent}
        value={value ? value.toString() : ''}
        onChangeText={onChangeText}
        keyboardType={dataType}
        secureTextEntry={secureTextEntry ? visibility : false}
        editable={!disabled}
        pointerEvents={disabled ? 'none' : 'auto'}
      />

      {secureTextEntry && (
        <TouchableOpacity
          onPress={toggleVisibility}
          style={{ position: 'absolute', right: -20, top: 19 }}
        >
          <FontAwesome5
            name={visibility ? 'eye' : 'eye-slash'}
            style={{ marginHorizontal: 38 }}
            size={24}
            color={Colors.black}
          />
        </TouchableOpacity>
      )}

      {error && (
        <Animated.View style={{ opacity: fadeAnim } }>
          <Text style={ Styles.errorText }>{error}</Text>
        </Animated.View>
      )}
    </View>
  );
}
