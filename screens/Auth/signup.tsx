import { Text } from "react-native"
import { AuthLayout } from "../../layouts"

interface Prop{
    navigation?: any,
}

export default function Signup({navigation}:Prop): any{
    return (
        <AuthLayout section="Signup" navigate={navigation.navigate} >
            <Text>
                This is the signup
            </Text>
        </AuthLayout>
    )
}
