import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const SetupStyle = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        height: hp('99%'),
        backgroundColor: '#ffffff',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    headerText: {
        fontFamily: 'Raleway-bold',
        fontSize: 23,
        padding: 0,
    },
    button: {
        backgroundColor: '#000000',
        fontFamily: "Nunito",
        fontSize: 20,
        paddingVertical: 15,
        color: '#ffffff',
        textAlign: "center",
        width: '98%',
        borderRadius: 50,
        marginVertical: 20,
    }
});

export default SetupStyle;
