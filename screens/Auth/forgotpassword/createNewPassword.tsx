import { Text } from "react-native"
import { ForgotPasswordLayout } from "../../../layouts"

export default function CreateNewPassword({navigation}:any): any{
    return (
        <ForgotPasswordLayout navigateBack={navigation.pop}>
            <Text>
                Create New Password
            </Text>
        </ForgotPasswordLayout>
    )
}
