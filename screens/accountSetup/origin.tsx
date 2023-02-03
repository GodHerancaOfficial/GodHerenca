import { Text, TextInput, View, TouchableWithoutFeedback } from "react-native";
import { AccountSetupLayout } from "../../layouts";
import { SetupStyle } from "../../styles/Auth";
import DropDown from "../../components/dropdown/dropdown";
import { useState } from "react";

export default function OriginScreen({ navigation }: any): any {
    const [btnActive, setBtnActive] = useState<boolean>(false);

    return (
        <AccountSetupLayout navigateBack={navigation.pop}>
            <View style={SetupStyle.generalView}>
                <Text style={SetupStyle.titleText}>
                    State
                </Text>

                <DropDown
                    placeholder="Select State"
                    lists={[{ id: 1, title: "Coming Soon!" }]}
                />

                <Text style={SetupStyle.titleText}>
                    City
                </Text>

                <DropDown
                    placeholder="Select City"
                    lists={[{ id: 1, title: "Coming Soon!" }]}
                />

                <Text style={SetupStyle.titleText}>
                    Address
                </Text>

                <TextInput
                    placeholder="Your Address"
                    style={SetupStyle.formInputs}
                />

                <TouchableWithoutFeedback>
                    <Text style={[SetupStyle.button, { marginVertical: 10, opacity: (btnActive) ? 1 : 0.5 }]}>
                        Next
                    </Text>
                </TouchableWithoutFeedback>
            </View>
        </AccountSetupLayout>
    )
}