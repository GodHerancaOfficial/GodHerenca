import { View, Text, ScrollView, TouchableWithoutFeedback } from "react-native";
import Header from "../../components/accountSetup/header";
import { SetupStyle } from "../../styles/Auth";

interface Prop{
    navigation?: any,
}

export default function AccountSetup({navigation}:Prop): any {
    return(
        <ScrollView>
            <View style={SetupStyle.container}>
                <Header goBack={navigation.pop} />
                <TouchableWithoutFeedback>
                    <Text style={SetupStyle.button}>
                        Continue
                    </Text>
                </TouchableWithoutFeedback>
            </View>
        </ScrollView>
    )
}
