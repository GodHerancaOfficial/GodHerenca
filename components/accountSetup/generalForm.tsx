import { TextInput } from "react-native";
import { SetupStyle } from "../../styles/Auth";

interface Prop{
    fullName?: string,
    username?: string,
    gender?: string,
    cpf?: string,
    phone?: string,
    accountType?: string,
}

export default function GeneralForm({ fullName, 
    username, 
    gender, 
    cpf, 
    phone, 
    accountType }:Prop): any {
    return (
        <>
            <TextInput
                placeholder="Name"
                style={SetupStyle.formInputs}
                value={fullName}
            />

            <TextInput
                placeholder="Username"
                style={SetupStyle.formInputs}
                value={username}
            />

            <TextInput
                placeholder="Gender"
                style={SetupStyle.formInputs}
                value={gender}
            />

            <TextInput
                placeholder="CPF"
                style={SetupStyle.formInputs}
                value={cpf}
            />

            <TextInput
                placeholder="Phone Number"
                style={SetupStyle.formInputs}
                value={phone}
            />

            <TextInput
                placeholder="Account Type"
                style={SetupStyle.formInputs}
                value={accountType}
            />
        </>
    )
}