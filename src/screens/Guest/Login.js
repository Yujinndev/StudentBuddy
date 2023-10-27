import React from 'react';
import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Animated from 'react-native-reanimated';

import Styles from '../../theme/Styles';
import Pagination from '../../components/atom/Pagination';
import Form from '../../components/template/Form';

export default function Login() {
  const navigation = useNavigation();

  const inputFields = [
    { id: 'email', placeholder: 'Email', value: '', secureTextEntry: false },
    { id: 'password', placeholder: 'Password', value: '', secureTextEntry: true },
  ];

  return (
    <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar style="auto" />
        <View style={{ height: 150 }}/>
        <Animated.View 
          style={[ Styles.box, { borderTopLeftRadius: 0 } ]}
        >
          <Text style={[ Styles.heading, Styles.textLight ]}>Login</Text>
          <Text style={[ Styles.paragraph, Styles.textLight ]}>Enter your account details ...</Text>

          <View style={ Styles.form }>
            <Form inputFields={ inputFields } onSubmit={ 'Login' } />
          </View>
          
          <View style={ Styles.center }>
            <View style={ Styles.divider }></View>
            <Text style={ Styles.textLight }> OR </Text>
            <View style={ Styles.divider }></View>
          </View>

          <TouchableOpacity onPress={() => navigation.push('Register')}>
            <View style={ Styles.center }>
              <Text style={ Styles.normalText }>No account yet? Create first!</Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
        
        <Pagination viewCount={2} currentPage="2nd" />
    </SafeAreaView>
  );
}
