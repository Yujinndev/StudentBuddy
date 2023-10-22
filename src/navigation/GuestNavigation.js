import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/* SCREENS */
import Welcome from '../screens/Guest/Welcome';
import Login from '../screens/Guest/Login';
import Register from '../screens/Guest/Register';

export default function GuestNavigation() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Welcome"
                screenOptions={{
                    headerMode: 'screen',
                    headerTintColor: '#FAF9F6',
                    headerStyle: { backgroundColor: '#FAF9F6' },
                }}
            >
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
