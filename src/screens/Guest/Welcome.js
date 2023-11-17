import React from 'react';
import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Animated from 'react-native-reanimated';
import Styles from '../../theme/Styles';
import Pagination from '../../components/atom/Pagination';

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <View style={ Styles.container }>
        <View>
          <Image 
            style={ Styles.welcomeImg }
            source={require('../../assets/images/bg.png')}
            resizeMode="contain"
          />
        </View>
        <Animated.View 
          style={ Styles.box } 
          sharedTransitionTag="tag"
        >
          <Text style={[ Styles.heading, Styles.textLight ]}>Empowering Students, Building Futures</Text>
          <Text style={[ Styles.paragraph, Styles.textLight, { marginVertical: 15 }]}>We make it easy to take down your Notes & Lessons, manage your academic tasks, and financial Funds. Interact with your friends and your school buddies!</Text>

          <TouchableOpacity onPress={() => navigation.push('Register')}>
            <View style={[ Styles.btn, Styles.center, { width: 150, marginTop: 10 }]}>
              <Text style={ Styles.btnTitle }>Get Started</Text>
              <MaterialIcons name='arrow-right-alt' size={20} color='black' />
            </View>
          </TouchableOpacity>
        </Animated.View>
        
        <Pagination viewCount={2} currentPage="1st" />
      </View>
    </SafeAreaView>
  )
}
