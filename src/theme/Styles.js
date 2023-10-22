import { StyleSheet } from 'react-native';
import { Metrics } from './Metrics';
import Colors from './Colors';
import Fonts from './Fonts';

export default StyleSheet.create({

    heading: {
        color: Colors.white,
        fontSize: Fonts.font32,
        fontFamily: 'Poppins',
    },

    subheading: {
        color: Colors.white,
        fontSize: Fonts.font20,
    },

    paragraph: {
        color: Colors.white,
        fontSize: Fonts.font16,
        fontFamily: 'Lora',
    },

    btn: {
        marginVertical: 10,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10,
        padding: 10,
        width: 150,
        borderRadius: 10
    },

    btnTitle: {
        color: Colors.black,
        fontSize: Fonts.font14,
        fontFamily: 'Inter',
        fontWeight: '900'
    },

    container: {
        height: Metrics.screenHeight,
        alignItems: 'center',
        backgroundColor: Colors.white,
    },

    appbar: {
        fontFamily: 'Montserrat',
        paddingTop: 30,
        elevation: 0,
        backgroundColor: Colors.white,
    },
    
    backgroundImg: {
        height: (Metrics.screenHeight - 520)
    },

    box: {
        flex: 1,
        width: '100%',
        backgroundColor: Colors.primary,
        padding: 40,
        borderTopLeftRadius: 50,
    },

    pagination: {
        flexDirection: 'row', 
        gap: 5, 
        position: 'absolute', 
        top: (Metrics.screenHeight - 100)
    }

});