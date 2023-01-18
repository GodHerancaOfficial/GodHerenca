import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        flex: 1,
        paddingVertical: 35,
        paddingHorizontal: 15,
    },
    h2: {
        fontSize: 30,
        fontFamily: 'Nunito-bold',
    },
    h1: {
        fontSize: 50,
    },
    p: {
        fontSize: 18,
        fontFamily: 'Nunito',
    },
    getStartedButton: {
        backgroundColor: '#000000',
        paddingHorizontal: '25%',
        paddingVertical: 15,
        color: '#ffffff',
        borderRadius: 50,
        fontFamily: 'Nunito-bold',
        fontSize: 19,
    },
    textColorWhite: {
        color: '#ffffff',
    },
    nextButton: {
        backgroundColor: '#000000',
        paddingHorizontal: '37%',
        paddingVertical: 15,
        color: '#ffffff',
        borderRadius: 50,
        fontFamily: 'Nunito-bold',
        fontSize: 19,
    },
})

export default Style;