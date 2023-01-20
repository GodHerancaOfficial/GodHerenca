import { Text } from "react-native"
import { AuthLayout } from "../../layouts"
import { Form } from "../../components/Auth"

interface Prop{
    navigation?: any,
}

export default function Signup({navigation}:Prop): any{
    return (
        <AuthLayout section="Signup" navigate={navigation.navigate} >
            <Form />
        </AuthLayout>
    )
}
