import { AuthLayout } from "../../layouts";
import { Form } from "../../components/Auth";
import { useState } from "react";

interface Prop{
    navigation?: any,
}

export default function Login({navigation}:Prop): any{
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <AuthLayout section="Login" navigate={navigation.navigate}>
            <Form email={email} password={password} setEmail={setEmail} setPassword={setPassword} />
        </AuthLayout>
    )
}
