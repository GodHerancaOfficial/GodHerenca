import { Text, TextInput, View, TouchableWithoutFeedback } from "react-native";
import { AccountSetupLayout } from "../../layouts";
import { SetupStyle } from "../../styles/Auth";
import { useEffect, useState, useContext } from "react";
import DropDown from "../../components/dropdown/dropdown";
import SetupContext from "../../contexts/SetupContext";
import { Button } from "../../components/common";

export default function GuarantorScreen({ navigation }: any): any {
    const [btnActive, setBtnActive] = useState<boolean>(true);
    const { detailsObj, setDetailsObj } = useContext(SetupContext);

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
        if (detailsObj.guarantorName == "" || detailsObj.guarantorPhone == "" || detailsObj.guarantorRelationship == "") {
            setBtnActive(true);
            return;
        }

        setBtnActive(false);
    }, [detailsObj.guarantorName, detailsObj.guarantorPhone, detailsObj.guarantorRelationship]);

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
                    value={detailsObj.guarantorName}
                    onChangeText={(e)=>{
                        setDetailsObj((detailsObj:any)=>({
                            ...detailsObj,
                            'guarantorName': e
                        }));
                    }}
                />

                <Text style={[SetupStyle.titleText, { marginVertical: 15 }]}>
                    Guarantor's Phone Number
                </Text>

                <TextInput
                    placeholder="Guarantor's Phone Number"
                    style={SetupStyle.formInputs}
                    value={detailsObj.guarantorPhone}
                    onChangeText={(e)=>{
                        setDetailsObj((detailsObj:any)=>({
                            ...detailsObj,
                            'guarantorPhone': e
                        }));
                    }}
                    keyboardType='phone-pad'
                />



                <Text style={[SetupStyle.titleText, { marginVertical: 15 }]}>
                    Who is the Guarantor to you?
                </Text>

                <DropDown
                    placeholder="Guarantor Relationship"
                    lists={guarantorList}
                    onChange={(choice:string)=>{
                        setDetailsObj((detailsObj:any)=>({
                            ...detailsObj,
                            'guarantorRelationship': choice
                        }));
                    }}
                />

                <Button
                    style={SetupStyle.button}
                    disabled={btnActive}
                    onPress={()=>{console.log(detailsObj);navigation.navigate('Vehicle')}}
                >
                    Next
                </Button>
            </View>
        </AccountSetupLayout>
    )
}