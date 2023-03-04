import { Text, TextInput, View, TouchableWithoutFeedback } from "react-native";
import { AccountSetupLayout } from "../../layouts";
import { SetupStyle } from "../../styles/Auth";
import { useEffect, useState, useContext } from "react";
import DropDown from "../../components/dropdown/dropdown";
import SetupContext from "../../contexts/SetupContext";
import { Button } from "../../components/common";

export default function GuarantorScreen({ navigation }: any): any {
    const [btnActive, setBtnActive] = useState<boolean>(true);
    const { guarantorName, setGuarantorName, guarantorPhone, setGuarantorPhone, guarantorRelationship, setGuarantorRelationship } = useContext(SetupContext);

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

    useEffect(() => {
        if (guarantorName == "" || guarantorPhone == "" || guarantorRelationship == "") {
            setBtnActive(true);
            return;
        }

        setBtnActive(false);
    }, [guarantorName, guarantorPhone, guarantorRelationship]);

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
                    value={guarantorPhone}
                    onChangeText={(e) => { setGuarantorPhone(e) }}
                    keyboardType='phone-pad'
                />



                <Text style={[SetupStyle.titleText, { marginVertical: 15 }]}>
                    Who is the Guarantor to you?
                </Text>

                <DropDown
                    placeholder="Guarantor Relationship"
                    lists={guarantorList}
                    setOption={setGuarantorRelationship}
                />

                <Button
                    style={SetupStyle.button}
                    disabled={btnActive}
                    onPress={()=>{navigation.navigate('Vehicle')}}
                >
                    Next
                </Button>
            </View>
        </AccountSetupLayout>
    )
}