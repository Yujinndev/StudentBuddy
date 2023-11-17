import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Platform, ToastAndroid } from 'react-native';
import TextInputAtom from '../atom/TextInputAtom';
import ButtonAtom from '../atom/ButtonAtom';
import Styles from '../../theme/Styles';
import { useNavigation } from '@react-navigation/native';

import { signIn, logInWithEmailAndPassword } from '../../utils/AuthenticationFirebase';

export default function AuthForm({ inputFields, onSubmit }) {
  const navigation = useNavigation();

  const [formValues, setFormValues] = useState(
    inputFields.reduce((acc, field) => {
      acc[field.id] = field.value || '';
      return acc;
    }, {})
  );

  const [errorFields, setErrorFields] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleFieldChange = (fieldId, text) => {
    // Update form values
    setFormValues({ ...formValues, [fieldId]: text });
  
    // Clear any previous error messages for the field
    setErrorFields((prevErrorFields) => ({ ...prevErrorFields, [fieldId]: '' }));
  
    if (submitted) {
      // Validate email format in real-time
      if (fieldId === 'email' && text.trim() === '') {
        setErrorFields((prevErrorFields) => ({
          ...prevErrorFields,
          email: 'Email is required',
        }));
      } else {
        // Validate email format in real-time
        if (fieldId === 'email') {
          if (!emailRegex.test(text.trim())) {
            setErrorFields((prevErrorFields) => ({
              ...prevErrorFields,
              email: 'Invalid email format',
            }));
          }
        }
      }
  
      // Check for password length
      if (fieldId === 'password' && text.trim().length < 6) {
        setErrorFields((prevErrorFields) => ({
          ...prevErrorFields,
          password: 'Password must be at least 6 characters',
        }));
      }
  
      // Check for empty input fields
      if (text.trim() === '') {
        setErrorFields((prevErrorFields) => ({
          ...prevErrorFields,
          [fieldId]: `${fieldId.charAt(0).toUpperCase() + fieldId.slice(1).replace(/([A-Z])/g, ' $1').trim()} is required`,
        }));
      }
    }
  };
  

  const handleFormSubmit = async () => {
    setSubmitted(true);
    
    let hasError = false;
    const newErrorFields = {};

    // Validate email format
    if (!emailRegex.test(formValues.email.trim())) {
      hasError = true;
      newErrorFields.email = 'Invalid Email format';
    }

    // Check for empty input fields and mark them as errors
    inputFields.forEach((field) => {
      if (!formValues[field.id].trim()) {
        hasError = true;
        newErrorFields[field.id] = `${field.placeholder} is required`;
      }
    });

    // If there are errors, update the state to highlight the empty fields
    if (hasError) {
      setErrorFields(newErrorFields);
    } else {
      setErrorFields({}); // Clear any previous error messages

      if (onSubmit == "Register") {
        try {
          await signIn(
            formValues.email,
            formValues.firstName,
            formValues.lastName,
            formValues.school,
            formValues.password
          );
  
          ToastAndroid.show('Registration Successful', ToastAndroid.SHORT);
          navigation.navigate('Login');
        } catch (error) {
          ToastAndroid.show(error.toString(), ToastAndroid.SHORT);
        }
      } else if (onSubmit == "Login") {
        try {
          const result = await logInWithEmailAndPassword(
            formValues.email,
            formValues.password
          );
          console.log(result.uid);
          ToastAndroid.show(`Hello, ${result.email}`, ToastAndroid.SHORT);
        } catch (error) {
          ToastAndroid.show(error.toString(), ToastAndroid.SHORT);
        }
      }
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding">
      <View>
        {inputFields.map((field, index) => (
          <TextInputAtom
            styling={[
              Styles.formControl,
              {
                borderColor: errorFields[field.id] ? '#710C04' : '#FAF9F6'
              },
            ]}
            key={index}
            placeholder={field.placeholder}
            value={formValues[field.id]}
            onChangeText={(text) => handleFieldChange(field.id, text)}
            secureTextEntry={field.secureTextEntry || false}
            error={errorFields[field.id]} // Pass the error message to TextInputAtom
          />
        ))}

        <ButtonAtom title={onSubmit} onPress={handleFormSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
}