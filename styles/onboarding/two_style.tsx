import { StyleSheet } from "react-native";

const MoreGeneral = StyleSheet.create({
    image: {
        width: '80%',
        height: '50%',
        resizeMode: 'contain'
    },
    container: {
        alignItems: 'center',
    },
    two_p: {
        textAlign: 'center',
        paddingHorizontal: 5,
    },
    h2: {
        fontSize: 22,
        fontFamily: 'Nunito-bold'
    },
    sectionIndicatorContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
    },
    dots: {
        borderRadius: 50,
        padding: 3,
        backgroundColor: '#A0A0A0',
        marginHorizontal: 2,
    },
    activeSection: {
        width: 30,
        backgroundColor: '#FFD763',
    }
});

export default MoreGeneral;