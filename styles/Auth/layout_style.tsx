import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

const AuthLayout_Style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'flex-end',
        paddingVertical: 30,
        paddingHorizontal: 15,
        backgroundColor: '#ffffff',
        height: hp('100%'),
    },
    introText: {
        fontSize: 50,
        fontFamily: 'Raleway-bold',
        textAlign: 'left',
        width: '100%',
    },
    actionButton: {
        width: '100%',
        paddingVertical: 17,
        backgroundColor: '#000000',
        color: '#ffffff',
        fontFamily: 'Nunito-bold',
        textAlign: 'center',
        fontSize: 18,
        borderRadius: 50,
        marginVertical: 20,
    },
    InactiveBtn: {
        opacity: 0.5,
    },
    p: {
        fontSize: 16,
        fontFamily: 'Nunito',
    },
    pBold: {
        fontFamily: 'Nunito-bold',
    },
    socialsContainer: {
        paddingVertical: 10,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 20,
    },
    socials: {
        borderColor: "#DBDBDB",
        paddingVertical: 8,
        paddingHorizontal: 25,
        borderRadius: 5,
        borderWidth: 1,
        marginHorizontal: 10,
    }
})

export default AuthLayout_Style;
