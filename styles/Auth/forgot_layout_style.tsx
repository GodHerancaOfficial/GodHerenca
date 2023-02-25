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
        paddingVertical: 15,
        paddingHorizontal: 2,
    },
    imageStyle: {
        width: '83%',
        overflow: 'hidden',
        resizeMode: 'contain',
    },
});

export default ForgotLayoutStyle;
