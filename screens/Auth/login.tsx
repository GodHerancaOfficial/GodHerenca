import { AuthLayout } from "../../layouts";
import { Form } from "../../components/Auth";

interface Prop{
    navigation?: any,
}

export default function Login({navigation}:Prop): any{
    return (
        <AuthLayout section="Login" navigate={navigation.navigate}>
            <Form />
        </AuthLayout>
    )
}
