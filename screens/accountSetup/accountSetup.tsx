import { View, Text, ScrollView, TouchableWithoutFeedback } from "react-native";
import { Header, GeneralForm, RiderForm } from "../../components/accountSetup";
import { SetupStyle } from "../../styles/Auth";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

interface Prop{
    navigation?: any,
}

export default function AccountSetup({navigation}:Prop): any {
    const [fullName, setFullName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [accountType, setAccountType] = useState<string>("");
    const [driversLicense, setDriversLicense] = useState<boolean>(false);
    const [guarantorName, setGuarantorName] = useState<string>("");
    const [guarantorPhone, setGuarantorPhone] = useState<string>("");

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={SetupStyle.container}>
                <Header goBack={navigation.pop} />

                {/**User Profile Picture */}
                <View style={SetupStyle.profileContainer}>
                    <TouchableWithoutFeedback>
                        <MaterialIcons name="edit" size={20} color={'#FFD763'} style={SetupStyle.editBtn} />
                    </TouchableWithoutFeedback>
                </View>

                {/**Forms To fill out */}
                <GeneralForm 
                    fullName={fullName}
                    username={username}
                    cpf={cpf}
                    phone={phone}
                    gender={gender}
                    setAccountType={setAccountType}
                />
                {((accountType == "Rider")?
                    <RiderForm />
                    :
                    null
                )}

                <TouchableWithoutFeedback>
                    <Text style={SetupStyle.button}>
                        Continue
                    </Text>
                </TouchableWithoutFeedback>
            </View>
        </ScrollView>
    )
}
