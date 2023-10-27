import React from 'react';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated from 'react-native-reanimated';

/* COMPONENTS */
import Form from '../../components/template/Form';
import Pagination from '../../components/atom/Pagination';
import ButtonAtom from '../../components/atom/ButtonAtom';
import DividerLine from '../../components/atom/DividerLine';

import Styles from '../../theme/Styles';

export default function Register() {
  const navigation = useNavigation();

  const inputFields = [
    { id: 'email', placeholder: 'Email', value: '', secureTextEntry: false },
    { id: 'school', placeholder: 'School/Organization', value: '', secureTextEntry: false },
    { id: 'fullName', placeholder: 'Full Name', value: '', secureTextEntry: false },
    { id: 'password', placeholder: 'Password', value: '', secureTextEntry: true },
  ];

  return (
    <SafeAreaView style={ Styles.center }>
      <StatusBar style="auto" />
      <View style={{ height: 150 }}/>
      <Animated.View 
        style={[ Styles.box, { borderTopRightRadius: 0 } ]} 
        sharedTransitionTag="tag"
      >
        <Text sharedTransitionTag="form" style={[ Styles.heading, Styles.textLight ]}>Register</Text>
        <Text style={[ Styles.paragraph, Styles.textLight ]}>Create your account ...</Text>

        <View style={ Styles.form }>
          <Form inputFields={ inputFields } onSubmit={ 'Register' } />
        </View>

        <DividerLine />

        <ButtonAtom styling='left' title='Login with Google' icon='google' />
        <ButtonAtom styling='left' title='Login with Facebook' icon='facebook-square' />

        <TouchableOpacity onPress={() => navigation.push('Login')}>
          <View style={[ Styles.center, { marginTop: 20 } ]}>
            <Text style={[ Styles.normalText, Styles.textLight, { textDecorationLine: 'underline' } ]}>Already have an acc? Login now!</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
        
      <Pagination viewCount={2} currentPage="2nd" />
    </SafeAreaView>
  );
}
