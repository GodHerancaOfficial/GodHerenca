import { StyleSheet } from "react-native";

const DropDownStyle = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#f6f6f6',
        borderRadius: 5,
        marginVertical: 10,
        paddingHorizontal: 10,
        // paddingVertical: 14,
        height: 55,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        zIndex: 1000,
    },
    dropDownText: {
        fontSize: 18,
        fontFamily: 'Raleway',
    },
    dropDownOptions: {
        position: 'absolute',
        top: '100%',
        left: 0,
        padding: 10,
        backgroundColor: '#f8f8f8',
        width: '106.1%',
    },
});

export default DropDownStyle;
