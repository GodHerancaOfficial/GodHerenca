import { TextInput } from "react-native";
import { SetupStyle } from "../../styles/Auth";
import DropDown from "../dropdown/dropdown";
import { useState } from "react";

interface Prop{
    fullName?: string,
    setFullName?: any,
    username?: string,
    setUsername?: any,
    setGender?: any,
    cpf?: string,
    setCpf?:any,
    phone?: string,
    setPhone?:any,
    setAccountType?: any,
}

export default function GeneralForm({ fullName, username, cpf, phone, setAccountType,
                                    setCpf, setFullName, setGender, setPhone, setUsername }:Prop): any {
    const [accountTypeList] = useState<any[]>([
        {
            id: 1,
            title: 'Customer',
        },
        {
            id: 2,
            title: 'Rider',
        },
    ])

    const [genderList] = useState<any[]>([
        {
            id: 1,
            title: 'Male',
        },
        {
            id: 2,
            title: 'Female',
        },
    ])
        
    return (
        <>
            <TextInput
                placeholder="Name"
                style={SetupStyle.formInputs}
                value={fullName}
                onChangeText={(e)=>{setFullName(e)}}
            />

            <TextInput
                placeholder="Username"
                style={SetupStyle.formInputs}
                value={username}
                onChangeText={(e)=>{setUsername(e)}}
            />

            <DropDown
                lists={genderList}
                setOption={setGender}
                placeholder="Gender"
            />

            <TextInput
                placeholder="CPF"
                style={SetupStyle.formInputs}
                value={cpf}
                onChangeText={(e)=>{setCpf(e)}}
                keyboardType="numeric"
            />

            <TextInput
                placeholder="Phone Number"
                style={SetupStyle.formInputs}
                value={phone}
                onChangeText={(e)=>{setPhone(e)}}
                keyboardType='phone-pad'
            />

            <DropDown
                lists={accountTypeList}
                setOption={setAccountType}
                placeholder="Account Type"
            />
        </>
    )
}