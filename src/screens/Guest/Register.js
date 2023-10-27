import React from 'react';
import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Animated from 'react-native-reanimated';
import Styles from '../../theme/Styles';
import Pagination from '../../components/atom/Pagination';
import Form from '../../components/template/Form';

export default function Register() {
  const navigation = useNavigation();

  const inputFields = [
    { id: 'email', placeholder: 'Email', value: '', secureTextEntry: false },
    { id: 'school', placeholder: 'School/Organization', value: '', secureTextEntry: false },
    { id: 'fullName', placeholder: 'Full Name', value: '', secureTextEntry: false },
    { id: 'password', placeholder: 'Password', value: '', secureTextEntry: true },
  ];

  return (
    <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar style="auto" />
      <View style={{ height: 150 }}/>
      <Animated.View 
        style={[ Styles.box, { borderTopRightRadius: 0 } ]} 
        sharedTransitionTag="tag"
      >
        <Text sharedTransitionTag="form" Text style={[ Styles.heading, Styles.textLight ]}>Register</Text>
        <Text style={[ Styles.paragraph, Styles.textLight ]}>Create your account ...</Text>

        <View style={ Styles.form }>
          <Form inputFields={ inputFields } onSubmit={ 'Register' } />
        </View>
        
        <View style={ Styles.center }>
          <View style={ Styles.divider }></View>
          <Text style={ Styles.textLight }> OR </Text>
          <View style={ Styles.divider }></View>
        </View>

        <TouchableOpacity onPress={() => navigation.push('Login')}>
          <View style={ Styles.center }>
            <Text style={ Styles.normalText }>Already have an acc? Login now!</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
        
      <Pagination viewCount={2} currentPage="2nd" />
    </SafeAreaView>
  );
}
