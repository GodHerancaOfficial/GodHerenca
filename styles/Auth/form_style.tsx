import { StyleSheet } from "react-native";

const FormStyle = StyleSheet.create({
    container: {
        paddingVertical: 15,
        width: '100%',
    },
    formView: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#F6F6F6',
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 8,
    },
    formInput: {
        width: '80%',
        fontFamily: 'Nunito',
        paddingLeft: 10,
        paddingVertical: 8,
        fontSize: 17,
    }
})

export default FormStyle;
