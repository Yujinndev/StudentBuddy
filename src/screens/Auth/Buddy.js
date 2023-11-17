import React from 'react';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, Text } from 'react-native';
import { AppBar, IconButton } from "@react-native-material/core";
import { FontAwesome } from '@expo/vector-icons';

import Styles from '../../theme/Styles';
import Colors from '../../theme/Colors';
import Appbar from '../../components/atom/Appbar';

export default function Buddy() {
    return (
        <SafeAreaView>
            <Appbar title={"Buddy"} />

            <View style={ Styles.container }>
                
            </View>
        </SafeAreaView>
    );
}
