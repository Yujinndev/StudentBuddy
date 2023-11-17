import React, { useRef } from 'react';
import { Animated } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome, FontAwesome5, Foundation, MaterialIcons } from '@expo/vector-icons';

import Colors from '../theme/Colors';
import { Metrics } from '../theme/Metrics';

/* SCREENS */
import Dashboard from '../screens/Auth/Dashboard';
import Notes from '../screens/Auth/Notes';
import Tasks from '../screens/Auth/Tasks';
import Funds from '../screens/Auth/Funds';
import Buddy from '../screens/Auth/Buddy';

const getWidth = () => (Metrics.screenWidth - 80) / 5;

export default function AuthNavigation() {
  const Tab = createBottomTabNavigator();
  // const tabOffsetValue = useRef(new Animated.Value(0)).current;

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ focused, size }) => {
            let iconName;
            const colour = focused ? Colors.primary : Colors.gray ;

              if (route.name === 'Home') {
                iconName = 'dashboard';
                return <MaterialIcons name={iconName} size={size} color={ colour } />;
              } 
              
              else if (route.name === 'Notes') {
                iconName = 'clipboard-notes';
                return <Foundation name={iconName} size={size} color={ colour } />;
              } 
              
              else if (route.name === 'Tasks') {
                iconName = 'tasks'; 
                return <FontAwesome name={iconName} size={size} color={ colour } />;
              } 
              
              else if (route.name === 'Funds') {
                iconName = 'money-check';
              } 
              
              else if (route.name === 'Buddy') {
                iconName = 'user-friends';
              } 

              return <FontAwesome5 name={iconName} size={size} color={ colour } />;
            },
            headerShown: false,
            tabBarStyle: {
              backgroundColor: Colors.white,
              position: 'absolute',
              bottom: 15,
              marginHorizontal: 20,
              // Max Height...
              height: 60,
              borderRadius: 10,
              paddingHorizontal: 20,
            },
          }
        )}
      >
        <Tab.Screen name="Home" component={Dashboard} />
        <Tab.Screen name="Notes" component={Notes} />
        <Tab.Screen name="Tasks" component={Tasks} />
        <Tab.Screen name="Funds" component={Funds} />
        <Tab.Screen name="Buddy" component={Buddy} />
      </Tab.Navigator>

      {/* <Animated.View style={{
        width: getWidth() - 20,
        height: 2,
        backgroundColor: Colors.primary,
        position: 'absolute',
        bottom: 74,
        // Horizontal Padding = 20...
        left: 50,
        borderRadius: 20,
        transform: [
          { translateX: tabOffsetValue }
        ]
      }}>

      </Animated.View> */}
    </NavigationContainer>
  );
}
