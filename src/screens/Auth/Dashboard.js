import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import Styles from '../../theme/Styles';
import Colors from '../../theme/Colors';
import Appbar from '../../components/atom/Appbar';
import { getUser } from '../../utils/AuthenticationFirebase';

export default function Dashboard() {

  // const[user, setUser] = useState();

  // useEffect(() => {
  //   async function getUserInfo() {
  //     setUser(JSON.parse(await getUser()));
  //   }

  //   getUserInfo();
  // });

  const name = 'Mark'

  return (
    <SafeAreaView>
      <Appbar title={`Hi, ${name}!`} />

      <View style={ Styles.container }>
        
      </View>
    </SafeAreaView>
  );
}
