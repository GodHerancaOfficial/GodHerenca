import { View, Text } from "react-native";
import { AuthLayout } from "../../layouts";

interface Prop{
    navigation?: any,
}

export default function Login({navigation}:Prop): any{
    return (
        <AuthLayout section="Login" navigate={navigation.navigate}>
            <Text>
                This is the login
            </Text>
        </AuthLayout>
    )
}
