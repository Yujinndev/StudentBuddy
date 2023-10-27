import React from 'react';
import { Text, View } from 'react-native';
import Styles from '../../theme/Styles';

export default function DividerLine() {
  return (
    <View style={[ Styles.center, { flexDirection: 'row', marginVertical: 20 } ]}>
        <View style={ Styles.divider }></View>
        <Text style={ Styles.textLight }> OR </Text>
        <View style={ Styles.divider }></View>
    </View>
  )
}
