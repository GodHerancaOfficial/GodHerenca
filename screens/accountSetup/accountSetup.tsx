import { View, Text, TouchableWithoutFeedback } from "react-native";
import { GeneralForm } from "../../components/accountSetup";
import { SetupStyle } from "../../styles/Auth";
import { MaterialIcons } from "@expo/vector-icons";
import { useState, useEffect, useCallback } from "react";
import { AccountSetupLayout } from "../../layouts";

interface Prop {
    navigation?: any,
}

export default function AccountSetup({ navigation }: Prop): any {
    const [fullName, setFullName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [accountType, setAccountType] = useState<string>("");

    const [btnActive, setBtnActive] = useState<boolean>(false);

    useEffect(() => {
        if (!(fullName == "" || username == "" || cpf == "" || phone == "" || gender == "" || accountType == "")) {
            setBtnActive(true);
        }
        else {
            setBtnActive(false);
        }
    }, [fullName, username, cpf, phone, gender, accountType]);

    const handleBtnPress = ():void|null => {
        if(!btnActive)
            return null;
        
        ((accountType=="Rider")?navigation.navigate("Dob"):console.log("Customer Account Done!"))
    }

    return (
        <AccountSetupLayout navigateBack={navigation.pop}>
            {/**User Profile Picture */}
            <View style={SetupStyle.profileContainer}>
                <TouchableWithoutFeedback>
                    <MaterialIcons name="edit" size={20} color={'#FFD763'} style={SetupStyle.editBtn} />
                </TouchableWithoutFeedback>
            </View>

            {/**Forms To fill out */}
            <GeneralForm
                fullName={fullName}
                setFullName={setFullName}
                username={username}
                setUsername={setUsername}
                cpf={cpf}
                setCpf={setCpf}
                phone={phone}
                setPhone={setPhone}
                setAccountType={setAccountType}
                setGender={setGender}
            />

            <TouchableWithoutFeedback onPress={()=>handleBtnPress()}>
                <Text style={[SetupStyle.button, { opacity: (btnActive) ? 1 : 0.5 }]}>
                    {(accountType == "Rider") ? 'Next' : 'Continue'}
                </Text>
            </TouchableWithoutFeedback>
        </AccountSetupLayout>
    )
}
