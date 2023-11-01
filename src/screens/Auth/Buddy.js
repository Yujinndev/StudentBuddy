import React from 'react';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, Text } from 'react-native';
import { AppBar, IconButton } from "@react-native-material/core";
import { FontAwesome } from '@expo/vector-icons';

import Styles from '../../theme/Styles';
import Colors from '../../theme/Colors';

export default function Buddy() {
    return (
        <SafeAreaView>
            <StatusBar style="auto" />
            <AppBar 
                color="white"
                title="Buddy" 
                contentContainerStyle={[{ marginTop: 20 }, Styles.center ]}
                titleStyle= {[ Styles.heading, Styles.textGray ]}
                style={ Styles.appbar }
                trailing={
                    <IconButton icon={ <FontAwesome name="user-circle-o" size={25} color={Colors.gray} /> } />
                }
            />

            <View style={ Styles.container }>
                
            </View>
        </SafeAreaView>
    );
}
