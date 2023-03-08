import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const ForgotLayoutStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 35,
    },
    contentContainer: {
        minHeight: hp('95%'),
        display:'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingVertical: 15,
        paddingHorizontal: 2,
        position: 'relative'
    },
    imageStyle: {
        width: '83%',
        overflow: 'hidden',
        resizeMode: 'contain',
    },
    contactDetail: {
        width: '100%',
        padding: 20,
        borderColor: '#DEDEDE',
        borderWidth: 1,
        marginVertical: 15,
        borderRadius: 15,
        display: 'flex',
        // justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    btnStyle: {
        backgroundColor: '#000',
        paddingVertical: 16,
        width: '85%',
        fontFamily: 'Raleway-bold',
        color: '#fff',
        textAlign: 'center',
        borderRadius: 100,
        fontSize: 16,
    },
    text: {
        fontFamily: 'Raleway',
        color: '#000',
        fontSize: 18,
    }
});

export default ForgotLayoutStyle;
