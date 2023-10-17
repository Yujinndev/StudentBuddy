import React, { useEffect } from 'react';  
import { useFonts } from 'expo-font'; 
import ContainerNavigation from './src/navigation/ContainerNavigation'
import * as SplashScreen from 'expo-splash-screen';

export default function App() { 
  const [fontsLoaded] = useFonts({
    "Montserrat": require("./src/assets/fonts/Montserrat-Regular.ttf"),
    'MaterialIcons': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialIcons.ttf'),
  });

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
    <>
      <ContainerNavigation/>
    </>
  );
}