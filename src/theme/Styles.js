import { StyleSheet } from 'react-native';
import { Metrics } from './Metrics';
import Colors from './Colors';
import Fonts from './Fonts';

export default StyleSheet.create({

    textLight: {
        color: Colors.white
    },

    textDark: {
        color: Colors.black
    },

    heading: {
        fontSize: Fonts.font32,
        fontFamily: 'Poppins',
    },

    subheading: {
        fontSize: Fonts.font20,
        fontFamily: 'Poppins',
    },

    paragraph: {
        fontSize: Fonts.font16,
        fontFamily: 'Lora',
    },

    normalText: {
        fontSize: Fonts.font12,
        fontFamily: 'Lora',
    },

    center: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    divider: {
        width: 130,
        height: 1,
        marginHorizontal: 5,
        backgroundColor: Colors.white
    },

    btn: {
        marginVertical: 10,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10,
        padding: 10,
        width: '100%',
        borderRadius: 5,
    },

    btnTitle: {
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
    
    welcomeImg: {
        height: (Metrics.screenHeight - 500)
    },

    authImg: {
        height: (Metrics.screenHeight - 600),
    },

    box: {
        height: Metrics.screenHeight,
        width: Metrics.screenWidth,
        backgroundColor: Colors.primary,
        paddingHorizontal: 50,
        paddingVertical: 40,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },

    pagination: {
        flexDirection: 'row', 
        gap: 5, 
        position: 'absolute', 
        top: (Metrics.screenHeight - 30)
    },

    form: {
        marginTop: 20,
    },

    formControl: {
        marginVertical: 8,
        padding: 10,
        borderColor: Colors.white, 
        borderWidth: 1.5,
        borderRadius: 5,
        fontWeight: Fonts.semi
    },

});