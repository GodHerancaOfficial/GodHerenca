import { TextInput } from "react-native";
import { SetupStyle } from "../../styles/Auth";
import DropDown from "../dropdown/dropdown";
import { useState } from "react";

interface Prop{
    fullName?: string,
    username?: string,
    gender?: string,
    cpf?: string,
    phone?: string,
    accountType?: string,
    setAccountType?: any,
}

export default function GeneralForm({ fullName, username, gender, cpf, phone, setAccountType }:Prop): any {
    const [accountTypeList, setList] = useState<any[]>([
        {
            id: 1,
            title: 'Customer',
        },
        {
            id: 2,
            title: 'Rider',
        },
    ])
        
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

            <DropDown
                lists={accountTypeList}
                setOption={setAccountType}
            />
        </>
    )
}