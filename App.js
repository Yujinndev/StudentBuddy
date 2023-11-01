import React, { useEffect, useState } from 'react';  
import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen';
import AuthNavigation from './src/navigation/AuthNavigation';
import GuestNavigation from './src/navigation/GuestNavigation';

export default function App() { 
  const [fontsLoaded] = useFonts({
    "Montserrat": require("./src/assets/fonts/Montserrat-Regular.ttf"),
    "Inter": require("./src/assets/fonts/Inter.ttf"),
    "Lora": require("./src/assets/fonts/Lora.ttf"),
    "Poppins": require("./src/assets/fonts/Poppins-Bold.ttf"),
    'MaterialIcons': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialIcons.ttf'),
  });

  const [isLoggedin, setIsLoggedIn] = useState(true);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    isLoggedin ? <AuthNavigation /> : <GuestNavigation />
  );
  
}