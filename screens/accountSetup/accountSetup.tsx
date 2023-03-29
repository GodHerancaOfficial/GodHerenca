import { View, Text, TouchableWithoutFeedback } from "react-native";
import { GeneralForm } from "../../components/accountSetup";
import { SetupStyle } from "../../styles/Auth";
import { MaterialIcons } from "@expo/vector-icons";
import { useState, useEffect, useContext } from "react";
import { AccountSetupLayout } from "../../layouts";
import SetupContext from "../../contexts/SetupContext";
import { Button } from "../../components/common";

interface Prop {
    navigation?: any,
}

export default function AccountSetup({ navigation }: Prop): any {
    const { detailsObj } = useContext(SetupContext);

    const [btnDisabled, setBtnDisabled] = useState<boolean>(true);

    useEffect(() => {
        if (detailsObj.fullname == "" || detailsObj.email == "" || detailsObj.cpf == "" || detailsObj.phone == "" ||
            detailsObj.gender == "" || detailsObj.accountType == "") {
            setBtnDisabled(true);
            return;
        }

        setBtnDisabled(false);
    }, [detailsObj.fullname, detailsObj.email, detailsObj.cpf, detailsObj.phone, detailsObj.gender, detailsObj.accountType]);

    const handleBtnPress = async (): Promise<void | null> => {
        console.log(detailsObj);
        navigation.navigate('Dob');
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
            <GeneralForm />

            <Button
                style={SetupStyle.button}
                disabled={btnDisabled}
                onPress={() => handleBtnPress()}
            >
                {(detailsObj.accountType == "Rider") ? 'Next' : 'Continue'}
            </Button>
        </AccountSetupLayout>
    )
}
