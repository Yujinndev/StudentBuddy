import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AuthNavigation from "./src/navigation/AuthNavigation";
import GuestNavigation from "./src/navigation/GuestNavigation";
import { auth, isSignedIn } from "./src/utils/AuthenticationFirebase";
import { onAuthStateChanged } from "firebase/auth";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat: require("./src/assets/fonts/Montserrat-Regular.ttf"),
    Inter: require("./src/assets/fonts/Inter.ttf"),
    Lora: require("./src/assets/fonts/Lora.ttf"),
    Poppins: require("./src/assets/fonts/Poppins-Bold.ttf"),
    Lilita: require("./src/assets/fonts/LilitaOne-Regular.ttf"),
    PaytoneOne: require("./src/assets/fonts/PaytoneOne-Regular.ttf"),
    MaterialIcons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialIcons.ttf"),
  });

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuth(!!user); // Update isAuth based on the presence of user
      SplashScreen.hideAsync();
    });

    async function initializeApp() {
      await prepare();
      SplashScreen.hideAsync();
    }

    initializeApp();

    return () => unsubscribe(); // Cleanup the subscription when the component unmounts
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return isAuth ? <AuthNavigation /> : <GuestNavigation />;
}