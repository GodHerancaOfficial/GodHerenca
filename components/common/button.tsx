import { TouchableWithoutFeedback, Text, StyleSheet, Easing } from "react-native";

interface ButtonProps {
    children: any,
    disabled: boolean,
    onPress: any,
    style?: any
}

const Button = ({ children, disabled, onPress, style }: ButtonProps): any => {
    const handlePress = () => {
        if (disabled) {
            return;
        }

        // rotationVal.value = withRepeat(
        //     withTiming(360, {
        //         duration: 1000,
        //         easing: Easing.linear
        //     }),-1
        // )
        onPress();
    }

    return (
        <TouchableWithoutFeedback onPress={()=>{handlePress()}}>
            <Text style={[style || ButtonStyle.button, { opacity: (disabled) ? 0.5 : 1 }]}>
                {children}
            </Text>
        </TouchableWithoutFeedback>
    )
}

const ButtonStyle = StyleSheet.create({
    button: {
        width: '85%',
        paddingVertical: 16,
        backgroundColor: '#000',
        color: '#fff',
        fontFamily: 'Raleway-bold',
        textAlign: 'center',
        borderRadius: 100,
        fontSize: 16,
    }
});

export default Button;
