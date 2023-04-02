import { AuthLayout } from "../../layouts";
import { Form } from "../../components/Auth";
import { useState, useEffect } from "react";

interface Prop{
    navigation?: any,
}



export default function Signup({navigation}:Prop): any{
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [active, setActive] = useState<boolean>(true);

    useEffect(()=>{
        ((email == "" || password == "")?setActive(true):setActive(false));
    },[email, password])

    return (
        <AuthLayout active={active} section="Signup" navigate={navigation.navigate} >
            <Form email={email} password={password} setEmail={setEmail} setPassword={setPassword} />
        </AuthLayout>
    )
}
