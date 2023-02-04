import { Text, TextInput, View, TouchableWithoutFeedback } from "react-native";
import { AccountSetupLayout } from "../../layouts";
import { SetupStyle } from "../../styles/Auth";
import DropDown from "../../components/dropdown/dropdown";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function OriginScreen({ navigation }: any): any {
    const [btnActive, setBtnActive] = useState<boolean>(false);
    const [state, setState] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [riderDetails, setRiderDetails] = useState({});

    (async ():Promise<void>=>{
        const details = await AsyncStorage.getItem('riderDetails');
        if(details != null){
            setRiderDetails({...riderDetails, ...JSON.parse(details)});
        }
    })();

    useEffect(()=>{
        setRiderDetails((details)=>({...details, ...{
            state: state,
            city: city, 
            address: address
        }}));

        if(state == "" || city == "" || address == ""){
            setBtnActive(false);
        }
        else{
            setBtnActive(true);
        }
    }, [state, city, address]);

    return (
        <AccountSetupLayout navigateBack={navigation.pop}>
            <View style={SetupStyle.generalView}>
                <Text style={SetupStyle.titleText}>
                    State
                </Text>

                <DropDown
                    placeholder="Select State"
                    lists={[{ id: 1, title: "Coming Soon!" }]}
                    setOption={setState}
                />

                <Text style={SetupStyle.titleText}>
                    City
                </Text>

                <DropDown
                    placeholder="Select City"
                    lists={[{ id: 1, title: "Coming Soon!" }]}
                    setOption={setCity}
                />

                <Text style={SetupStyle.titleText}>
                    Address
                </Text>

                <TextInput
                    placeholder="Your Address"
                    style={SetupStyle.formInputs}
                    onChangeText={(e)=>{
                        setAddress(e);
                    }}
                    value={address}
                />

                <TouchableWithoutFeedback onPress={()=>{btnActive?navigation.navigate('Legal'):null}}>
                    <Text style={[SetupStyle.button, { marginVertical: 10, opacity: (btnActive) ? 1 : 0.5 }]}>
                        Next
                    </Text>
                </TouchableWithoutFeedback>
            </View>
        </AccountSetupLayout>
    )
}