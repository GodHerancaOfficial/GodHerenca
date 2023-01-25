import { Text, View } from "react-native";
import { AccountSetupLayout } from "../../layouts";

interface Prop{
    navigation?: any,
}

export default function DobScreen({navigation}:Prop): any{
    return (
        <AccountSetupLayout navigateBack={navigation.pop}>
            <Text>
                Dob Screen
            </Text>
        </AccountSetupLayout>
    )
}