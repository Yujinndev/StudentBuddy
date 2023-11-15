import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import Styles from '../../theme/Styles';
import Colors from '../../theme/Colors';
import Appbar from '../../components/atom/Appbar';

export default function Tasks() {
    return (
        <SafeAreaView>
            <Appbar title={"Tasks"} />


            <View style={ Styles.container }>
                
            </View>
        </SafeAreaView>
    );
}
