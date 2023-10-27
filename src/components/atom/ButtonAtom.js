import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import Styles from '../../theme/Styles';

export default function ButtonAtom({ styling, icon, title, onPress }) {
    return (
        <TouchableOpacity onPress={ onPress }>
            <View style={[ Styles.btn, styling == 'left' ? null : Styles.center ]}>
                { icon != null 
                    ? <FontAwesome name={ icon } style={{ marginHorizontal: 38 }} size={24} color='black' /> 
                    : null
                }
                <View style={ Styles.center }>
                    <Text style={ Styles.btnTitle }>{ title }</Text>
                </View>

            </View>
        </TouchableOpacity>
    );
}
