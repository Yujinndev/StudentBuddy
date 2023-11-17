import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import Styles from '../../theme/Styles';
import Colors from '../../theme/Colors';
import Appbar from '../../components/atom/Appbar';

export default function Funds() {
    return (
        <SafeAreaView>
            <Appbar title={"Expenses"} />

            <View style={ Styles.container }>
            
            </View>
        </SafeAreaView>
    );
}
