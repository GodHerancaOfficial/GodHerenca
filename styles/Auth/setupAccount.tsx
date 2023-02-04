import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const SetupStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container1: {
        flex: 1,
        // display: 'flex',
        alignItems: 'center',
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
        width: '100%',
        borderRadius: 50,
        marginVertical: 20,
    },
    profileContainer: {
        position: 'relative',
        borderRadius: 100,
        width: 150,
        height: 150,
        backgroundColor: '#f3f3f3',
        marginVertical: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    editBtn: {
        position: 'absolute',
        padding: 5,
        backgroundColor: '#000000',
        bottom: 7,
        right: 7,
        borderRadius: 5,
    },
    formInputs: {
        width: '100%',
        padding: 13,
        backgroundColor: '#f6f6f6',
        fontSize: 18,
        fontFamily: 'Raleway',
        borderRadius: 5,
        marginVertical: 10,
        color: '#000000'
    },
    generalView: {
        width: '100%',
        flex: 1,
        alignItems: 'flex-start',
        paddingVertical: 30,
        minHeight: '100%',
        // paddingHorizontal: 5,
    },
    titleText: {
        fontFamily: 'Raleway-bold',
        fontSize: 20,
    },
    p: {
        fontFamily: 'Raleway',
        fontSize: 16,
        color: '#888',
    },
    uploadView: {
        width: '95%',
        paddingVertical: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
        marginVertical: 20,
        borderRadius: 10,
        marginTop: 40,
    },
    browseBtn: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#000',
        fontFamily: 'Raleway-bold',
        marginVertical: 10,
        color: '#000',
    },
    displayBoxes: {
        width: 80,
        height: 80,
        backgroundColor: '#EDEDED',
        borderRadius: 10,
        marginVertical: 10,
    }
});

export default SetupStyle;
