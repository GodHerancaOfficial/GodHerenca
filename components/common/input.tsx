import {
    View,
    Text,
    TouchableWithoutFeedback,
    TextInput,
    KeyboardTypeOptions
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
// import { Icon } from "@expo/vector-icons/build/createIconSet";

interface InputProps {
    placeholder: string
    icon?: any,
    keyboardType?: KeyboardTypeOptions,
    secureTextEntry?: boolean,
}

export default function Input({ placeholder, icon, keyboardType, secureTextEntry }: InputProps): any {
    return (
        <View>
            {/* Icon To Be placed on the input */}
            {icon}

            {/* Actual Text View */}
            <TextInput
                placeholder={placeholder}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                style={{
                    fontFamily: 'Raleway',
                    fontSize: 16,
                }}
            />

            {/* View Icon, in case input is for a password. */}
        </View>
    )
}