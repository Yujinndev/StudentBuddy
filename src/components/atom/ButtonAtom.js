import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Styles from '../../theme/Styles';

export default function ButtonAtom({ title, onPress }) {
    return (
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={onPress}>
            <View style={ Styles.btn }>
                <Text style={ Styles.btnTitle }>{ title }</Text>
            </View>
        </TouchableOpacity>
    );
}
