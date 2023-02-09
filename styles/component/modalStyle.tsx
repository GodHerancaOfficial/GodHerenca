import { StyleSheet } from "react-native";

const ModalStyle = StyleSheet.create({
    mainView: {
        width: '87%',
        paddingVertical: 30,
        backgroundColor: '#fff',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#fff',
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 3,
            height: 2
        },
    },
    imageView: {
        width: '95%',
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        resizeMode: 'contain',
    }
});

export default ModalStyle;
