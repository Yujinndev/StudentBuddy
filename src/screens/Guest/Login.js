import React from 'react';
import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Animated from 'react-native-reanimated';
import Styles from '../../theme/Styles';
import Pagination from '../../components/atom/Pagination';

export default function Login() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <View style={ Styles.container }>
        <View>
          <Image 
            style={ Styles.authImg }
            source={require('../../assets/images/bg.png')}
            resizeMode="cover"
          />
        </View>
        <Animated.View 
          style={ Styles.box } 
          sharedTransitionTag="tag"
        >
          <Text style={ Styles.heading }>Login</Text>
          <Text style={ Styles.paragraph }>Enter your account details ...</Text>

          <TouchableOpacity>
            <View style={ Styles.btn }>
              <Text style={ Styles.btnTitle }>Login</Text>
              {/* <MaterialIcons name='arrow-right-alt' size={24} color='black' /> */}
            </View>
          </TouchableOpacity>
        </Animated.View>
        
        <Pagination viewCount={2} currentPage="2nd" />
      </View>
    </SafeAreaView>
  )
}
