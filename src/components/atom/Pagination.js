import React from 'react';
import { View } from 'react-native';
import Styles from '../../theme/Styles';

export default function Pagination() {
    return (
        <View style={ Styles.pagination }>
            <View style={{ width: 35, height: 3, borderRadius: 20, backgroundColor: 'white' }} />
            <View style={{ width: 35, height: 3, borderRadius: 20, backgroundColor: 'white', opacity: .4 }} />
        </View>
    );
}
