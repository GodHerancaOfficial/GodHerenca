import { View, Text, TouchableWithoutFeedback } from "react-native";
import { GeneralForm } from "../../components/accountSetup";
import { SetupStyle } from "../../styles/Auth";
import { MaterialIcons } from "@expo/vector-icons";
import { useState, useEffect, useCallback } from "react";
import { AccountSetupLayout } from "../../layouts";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

    const storeRiderDetails = async (): Promise<void | boolean> => {
        const detailsObject: {fullName:string, username:string, cpf:string, phone:string, gender:string, accountType:string} = {
            fullName: fullName,
            username: username,
            cpf: cpf,
            phone: phone,
            gender: gender, 
            accountType: accountType,
        };

        try {
            await AsyncStorage.setItem('riderDetails', JSON.stringify(detailsObject));
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    const getDetails = async (): Promise<void | null> => {
        try {
            let riderDetails = await AsyncStorage.getItem('riderDetails');
            if(riderDetails != null){
                console.log(JSON.parse(riderDetails));
            }
            else{
                console.log("Nothing found");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleBtnPress = async ():Promise<void|null> => {
        if(!btnActive)
            return null;
        
        ((accountType=="Rider")?((await storeRiderDetails())?navigation.navigate('Dob'):null):getDetails())
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
