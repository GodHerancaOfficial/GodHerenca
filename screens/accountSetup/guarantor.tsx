import { Text, TextInput, View, TouchableWithoutFeedback } from "react-native";
import { AccountSetupLayout } from "../../layouts";
import { SetupStyle } from "../../styles/Auth";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DropDown from "../../components/dropdown/dropdown";

export default function GuarantorScreen({ navigation }: any): any {
    const [guarantorName, setGuarantorName] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [relationship, setRelationShip] = useState<string>("");
    const [riderDetails, setRiderDetails] = useState({});
    const [btnActive, setBtnActive] = useState<boolean>(false);

    const [guarantorList] = useState<any[]>([
        {
            id: 1,
            title: 'Father',
        },
        {
            id: 2,
            title: 'Mother',
        },
        {
            id: 3,
            title: 'Brother',
        },
        {
            id: 4,
            title: 'Sister',
        },
        {
            id: 5,
            title: 'Other',
        },
    ]);

    (async (): Promise<void> => {
        const details = await AsyncStorage.getItem('riderDetails');
        if (details != null) {
            setRiderDetails((existingDetails) => ({ ...existingDetails, ...JSON.parse(details) }));
        }
    })();

    useEffect(() => {
        setRiderDetails((details) => ({
            ...details, ...{
                guarantorName: guarantorName,
                guarantorPhone: phoneNumber,
                guarantorRelationship: relationship
            }
        }));

        if (guarantorName == "" || phoneNumber == "" || relationship == "") {
            setBtnActive(false)
        }
        else {
            setBtnActive(true);
        }

    }, [guarantorName, phoneNumber, relationship]);

    return (
        <AccountSetupLayout navigateBack={navigation.pop}>
            <View style={SetupStyle.generalView}>
                <Text style={[SetupStyle.titleText, { fontSize: 25, marginBottom: 20 }]}>
                    Guarantor Details
                </Text>

                <Text style={[SetupStyle.titleText, { marginVertical: 15 }]}>
                    Guarantor Name
                </Text>

                <TextInput
                    placeholder="Guarantor Name"
                    style={SetupStyle.formInputs}
                    value={guarantorName}
                    onChangeText={(e) => { setGuarantorName(e) }}
                />

                <Text style={[SetupStyle.titleText, { marginVertical: 15 }]}>
                    Guarantor's Phone Number
                </Text>

                <TextInput
                    placeholder="Guarantor's Phone Number"
                    style={SetupStyle.formInputs}
                    value={phoneNumber}
                    onChangeText={(e) => { setPhoneNumber(e) }}
                    keyboardType='phone-pad'
                />

                

                <Text style={[SetupStyle.titleText, { marginVertical: 15 }]}>
                    Who is the Guarantor to you?
                </Text>

                <DropDown
                    placeholder="Guarantor Relationship"
                    lists={guarantorList}
                    setOption={setRelationShip}
                />

                <TouchableWithoutFeedback onPress={() => { btnActive ? navigation.navigate('Vehicle') : null }}>
                    <Text style={[SetupStyle.button, { marginVertical: 10, opacity: (btnActive) ? 1 : 0.5 }]}>
                        Next
                    </Text>
                </TouchableWithoutFeedback>
            </View>
            {/* <TouchableWithoutFeedback>
                <Text style={[SetupStyle.button, {marginVertical: 10, opacity: (btnActive)?1:0.5}]}>
                    Next
                </Text>
            </TouchableWithoutFeedback> */}
        </AccountSetupLayout>
    )
}