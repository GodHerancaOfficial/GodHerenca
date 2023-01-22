import { AuthLayout } from "../../layouts";
import { Form } from "../../components/Auth";
import { useEffect, useState } from "react";

interface Prop{
    navigation?: any,
}

export default function Login({navigation}:Prop): any{
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [active, setActive] = useState<boolean>(false);

    useEffect(()=>{
        ((email == "" || password == "")?setActive(false):setActive(true));
    },[email, password])

    return (
        <AuthLayout active={active} section="Login" navigate={navigation.navigate}>
            <Form email={email} password={password} setEmail={setEmail} setPassword={setPassword} />
        </AuthLayout>
    )
}
