import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Platform, ToastAndroid } from 'react-native';
import TextInputAtom from '../atom/TextInputAtom';
import ButtonAtom from '../atom/ButtonAtom';
import Styles from '../../theme/Styles';

export default function Form({ inputFields, onSubmit }) {
    const [formValues, setFormValues] = useState(
        inputFields.reduce((acc, field) => {
            acc[field.id] = field.value || '';

            return acc;
        }, {})
    );

    const [errorFields, setErrorFields] = useState({});

    const handleFieldChange = (fieldId, text) => {
        setFormValues({ ...formValues, [fieldId]: text });
      
        // Clear the error message for the specific field
        setErrorFields((prevErrorFields) => ({
          ...prevErrorFields,
          [fieldId]: '',
        }));
    };

    const handleFormSubmit = () => {
        let hasError = false;
        const newErrorFields = {};
        
        // Check for empty input fields and mark them as errors
        inputFields.forEach((field) => {
            if (!formValues[field.id].trim()) {
                hasError = true;
                newErrorFields[field.id] = 'This field is required';
            }
        });

        // If there are errors, update the state to highlight the empty fields
        if (hasError) {
            ToastAndroid.show('Fill in all inputs', ToastAndroid.SHORT);
            setErrorFields(newErrorFields);
        } else {
            setErrorFields({}); // Clear any previous error messages

            if (onSubmit === 'login') {
                // Handle login
            } else {
                // Handle other actions
            }

            console.log(formValues);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View>
                {inputFields.map((field, index) => (
                    <TextInputAtom
                        styling={[ Styles.formControl , { borderColor: errorFields[field.id] ? '#710C04' : '#FAF9F6', color: errorFields[field.id] ? '#710C04' : '#FAF9F6' } ]}
                        key={ index }
                        placeholder={ field.placeholder }
                        value={ formValues[field.id] }
                        onChangeText={(text) => handleFieldChange(field.id, text)}
                        secureTextEntry={ field.secureTextEntry || false }
                    />
                ))}

                <ButtonAtom title={onSubmit} onPress={handleFormSubmit} />
            </View>
        </KeyboardAvoidingView>
    );
}
