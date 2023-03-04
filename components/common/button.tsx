import { TouchableWithoutFeedback, Text, StyleSheet } from "react-native";

interface ButtonProps {
    children: any,
    disabled: boolean,
    onPress: any,
    style?: any
}

const Button = ({ children, disabled, onPress, style }: ButtonProps): any => {
    return (
        <TouchableWithoutFeedback onPress={() => {(disabled) ? null : onPress()}}>
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
