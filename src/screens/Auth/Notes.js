import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import Styles from '../../theme/Styles';
import Colors from '../../theme/Colors';
import Appbar from '../../components/atom/Appbar';

export default function Notes() {
  return (
    <SafeAreaView>
      <Appbar title={"Notes"} />

      <View style={ Styles.container }>
                
      </View>
    </SafeAreaView>
  );
}
