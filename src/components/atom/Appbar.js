import React from 'react';
import { StatusBar } from "expo-status-bar";
import { AppBar, IconButton } from "@react-native-material/core";
import { FontAwesome } from '@expo/vector-icons';
import Styles from '../../theme/Styles';
import Colors from '../../theme/Colors';
import { signOutOfEmailAndPassword } from '../../utils/AuthenticationFirebase';

export default function Appbar({ title }) {
    const signOut = async () => {
        await signOutOfEmailAndPassword();
    }

    return (
        <>
            <StatusBar style="auto" />
            <AppBar 
                color="white"
                title={title} 
                contentContainerStyle={[ Styles.center, Styles.appbarContainer ]}
                titleStyle= {[ Styles.heading, Styles.textDark ]}
                style={ Styles.appbar }
                trailing={
                    <IconButton icon={ <FontAwesome name="user-circle-o" size={22} color={Colors.black} /> } onPress={() => signOut()} />
                }
            />
        </>
    );
}
