import { View, TextInput } from "react-native";
import { FormStyle } from "../../styles/Auth";
import { MaterialIcons } from '@expo/vector-icons'

export default function Form(): any{
    return (
        <View style={FormStyle.container}>
            <View style={FormStyle.formView}>
                <View>
                    <MaterialIcons name="email" size={25} color={'#A5A5A5'} />
                </View>
                <TextInput placeholder="Email" style={FormStyle.formInput} />
            </View>

            <View style={FormStyle.formView}>
                <View>
                    <MaterialIcons name="lock" size={25} color={'#A5A5A5'} />
                </View>
                <TextInput placeholder="Password" secureTextEntry={true} style={FormStyle.formInput} />
            </View>
        </View>
    )
}