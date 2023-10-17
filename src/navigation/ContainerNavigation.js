import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome, FontAwesome5, Foundation, MaterialIcons } from '@expo/vector-icons';

/* SCREENS */
import Dashboard from '../screens/Dashboard';
import Notes from '../screens/Notes';
import Tasks from '../screens/Tasks';
import Funds from '../screens/Funds';
import Buddy from '../screens/Buddy';

export default function ContainerNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

              if (route.name === 'Home') {
                iconName = 'dashboard';
                return <MaterialIcons name={iconName} size={size} color={color} />;
              } 
              
              else if (route.name === 'Notes') {
                iconName = 'clipboard-notes';
                return <Foundation name={iconName} size={size} color={color} />;
              } 
              
              else if (route.name === 'Tasks') {
                iconName = 'tasks'; 
                return <FontAwesome name={iconName} size={size} color={color} />;
              } 
              
              else if (route.name === 'Funds') {
                iconName = 'money-check';
              } 
              
              else if (route.name === 'Buddy') {
                iconName = 'user-friends';
              } 

              return <FontAwesome5 name={iconName} size={size} color={color} />;
            },
            headerShown: false,
          }
        )}
      >
        <Tab.Screen name="Home" component={Dashboard} />
        <Tab.Screen name="Notes" component={Notes} />
        <Tab.Screen name="Tasks" component={Tasks} />
        <Tab.Screen name="Funds" component={Funds} />
        <Tab.Screen name="Buddy" component={Buddy} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
