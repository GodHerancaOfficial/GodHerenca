import { Text, TouchableWithoutFeedback, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SetupStyle } from "../../styles/Auth";

interface Prop{
    goBack: any,
}

export default function Header({goBack}:Prop): any {
    return (
        <View style={SetupStyle.header}>
            <TouchableWithoutFeedback onPress={()=>{goBack()}}>
                <MaterialIcons name="keyboard-backspace" size={35} color='#000000' />
            </TouchableWithoutFeedback>
            <Text style={SetupStyle.headerText}>
                Setup Your Account
            </Text>
            <View></View>
        </View>
    )
}