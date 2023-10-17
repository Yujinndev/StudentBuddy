import React from 'react';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, Text } from 'react-native';
import { AppBar, IconButton } from "@react-native-material/core";
import { MaterialIcons } from '@expo/vector-icons';

import Styles from '../theme/Styles';

export default function Buddy() {
    return (
        <SafeAreaView>
            <StatusBar style="auto" />
            <AppBar 
                color="white"
                title="Buddy" 
                style={ Styles.appbar }
                // leading={
                //   <IconButton icon={ <MaterialIcons name="arrow-left" size={18} color="#300" /> } />
                // }
            />

            <View style={ Styles.container }>
                
            </View>
        </SafeAreaView>
    );
}
