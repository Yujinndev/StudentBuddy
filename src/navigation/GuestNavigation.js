import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* SCREENS */
import Welcome from '../screens/Guest/Welcome';
import Login from '../screens/Guest/Login';
import Register from '../screens/Guest/Register';

export default function GuestNavigation() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Welcome"
                screenOptions={{
                    headerShown: false,
                    headerMode: 'screen',
                    headerTintColor: '#FAF9F6',
                    headerStyle: { backgroundColor: '#FAF9F6', },
                }}
            >
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}