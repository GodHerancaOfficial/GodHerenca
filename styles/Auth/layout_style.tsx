import { StyleSheet } from "react-native";

const AuthLayout_Style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'flex-end',
        paddingVertical: 30,
        paddingHorizontal: 15,
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
    p: {
        fontSize: 16,
        fontFamily: 'Nunito',
    },
    pBold: {
        fontFamily: 'Nunito-bold',
    }
})

export default AuthLayout_Style;
