import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const SetupStyle = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: hp('100%'),
        backgroundColor: '#ffffff',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 15,
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
    }
});

export default SetupStyle;
