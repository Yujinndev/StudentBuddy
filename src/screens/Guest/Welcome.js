import React from 'react';
import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, View, Text, TouchableHighlight } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Styles from '../../theme/Styles';
import Pagination from '../../components/atom/Pagination';

export default function Welcome() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <View style={ Styles.container }>
        <View>
          <Image style={ Styles.backgroundImg }
            source={require('../../assets/images/bg.png')}
            resizeMode="contain"
          />
        </View>
        <View style={ Styles.box }>
          <Text style={ Styles.heading }>Simplifying your Academic Life</Text>
          <Text style={[ Styles.paragraph, { marginVertical: 10 }]}>We make it easy to take down your Notes & Lessons, manage your academic tasks, and financial Funds. Interact with your friends and your school buddies!</Text>

          <TouchableHighlight >
            <View style={ Styles.btn }>
              <Text style={ Styles.btnTitle }>Get Started</Text>
              <MaterialIcons name='arrow-right-alt' size={24} color='black' />
            </View>
          </TouchableHighlight>


        </View><Pagination/>
      </View>
    </SafeAreaView>
  )
}
