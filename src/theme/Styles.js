import { StyleSheet } from 'react-native';
import { Metrics } from './Metrics';
import Colors from './Colors';
import Fonts from './Fonts';

export default StyleSheet.create({

    container: {
        height: Metrics.screenHeight,
        paddingVertical: 15,
        alignItems: 'center',
        padding: 20,
        backgroundColor: Colors.white,
    },

    appbar: {
        fontFamily: 'Montserrat',
        paddingTop: 30,
        elevation: 0,
        backgroundColor: Colors.white,
    },
    
});