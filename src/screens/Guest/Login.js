import React from 'react';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

/* COMPONENTS */
import Form from '../../components/template/Form';
import Pagination from '../../components/atom/Pagination';
import ButtonAtom from '../../components/atom/ButtonAtom';
import DividerLine from '../../components/atom/DividerLine';

import Styles from '../../theme/Styles';

export default function Login() {
  const navigation = useNavigation();

  const inputFields = [
    { id: 'email', placeholder: 'Email', value: '', secureTextEntry: false },
    { id: 'password', placeholder: 'Password', value: '', secureTextEntry: true },
  ];

  return (
    <SafeAreaView style={ Styles.center }>
      <StatusBar style="auto" />
        <View style={{ height: 150 }}/>
        <View 
          style={[ Styles.box, { borderTopRightRadius: 0 } ]}
        >
          <Text style={[ Styles.heading, Styles.textLight ]}>Login</Text>
          <Text style={[ Styles.paragraph, Styles.textLight ]}>Enter your account details ...</Text>

          <View style={ Styles.form }>
            <Form inputFields={ inputFields } onSubmit={ 'Login' } />
          </View>
          
          <DividerLine />

          <ButtonAtom styling='left' title='Login with Google' icon='google' />
          <ButtonAtom styling='left' title='Login with Facebook' icon='facebook-square' />

          <TouchableOpacity onPress={() => navigation.push('Register')}>
            <View style={[ Styles.center, { marginTop: 20 } ]}>
              <Text style={[ Styles.normalText, Styles.textLight, { textDecorationLine: 'underline' } ]}>No account yet? Create first!</Text>
            </View>
          </TouchableOpacity>
        </View>
        
        <Pagination viewCount={2} currentPage="2nd" />
    </SafeAreaView>
  );
}
