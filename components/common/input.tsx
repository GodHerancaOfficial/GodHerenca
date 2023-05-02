import {
    View,
    Text,
    TouchableWithoutFeedback,
    TextInput,
    KeyboardTypeOptions,
    StyleSheet
} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from "react";

interface InputProps {
    placeholder: string
    icon?: any | undefined,
    keyboardType?: KeyboardTypeOptions,
    secureTextEntry?: boolean,
    onChangeText: any,
    style?: any | undefined,
}

export default function Input({ placeholder, icon, keyboardType, secureTextEntry, onChangeText, style }: InputProps): any {
    const [viewPassword, setViewPassword] = useState<boolean>(false);

    return (
        <View style={InputStyle.container || style}>
            {/* Icon To Be placed on the input */}
            {icon}

            {/* Actual Text View */}
            <TextInput
                placeholder={placeholder}
                keyboardType={keyboardType}
                secureTextEntry={((viewPassword) ? false : secureTextEntry)}
                style={{
                    fontFamily: 'Raleway',
                    fontSize: 18,
                    alignSelf: 'stretch',
                    width: ((icon) ? '75%' : '90%')
                }}
                onChangeText={onChangeText}
            />

            {/* View Icon, in case input is for a password. */}
            {((secureTextEntry) ?
                <TouchableWithoutFeedback onPress={() => { setViewPassword(!viewPassword) }}>
                    <MaterialCommunityIcons name="eye-off" color={'#A5A5A5'} size={20} />
                </TouchableWithoutFeedback>
                :
                <View style={{width:20}}></View>
            )}
        </View>
    )
}

const InputStyle = StyleSheet.create({
    container: {
        backgroundColor: '#F6F6F6',
        width: '100%',
        marginVertical: 10,
        borderRadius: 7,
        paddingHorizontal: 10,
        paddingVertical: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});
