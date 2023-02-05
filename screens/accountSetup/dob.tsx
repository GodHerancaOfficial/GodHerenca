import { Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { AccountSetupLayout } from "../../layouts";
import { SetupStyle } from "../../styles/Auth";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Prop{
    navigation?: any,
}

export default function DobScreen({navigation}:Prop): any{
    const [riderDetails, setRiderDetails] = useState<any>({});

    const [btnActive, setBtnActive] = useState<boolean>(false);

    useEffect(()=>{
        (async(): Promise<void>=>{
            let details = await AsyncStorage.getItem('riderDetails');
            if(details != null){
                setRiderDetails({...riderDetails, ...JSON.parse(details)})
                // console.log(riderDetails);
            }
            else{
                console.log('Details are null');
            }
        })()
    },[]);

    const storeDetails = async (detailsObject:any): Promise<void | boolean> => {
        try {
            await AsyncStorage.setItem('riderDetails', JSON.stringify(detailsObject));
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    useEffect(()=>{
        if(riderDetails.dob=="" || riderDetails.postalCode==""){
            setBtnActive(false);
        }
        else{
            setBtnActive(true);
        }
    },[riderDetails])

    const handleNextPress = async (): Promise<void | null> => {
        if(!btnActive)
            return null;

        if(!await storeDetails(riderDetails)){
            return;
        }
        navigation.navigate('Origin');
    }

    return (
        <AccountSetupLayout navigateBack={navigation.pop}>
            <View style={SetupStyle.generalView}>
                <Text style={SetupStyle.titleText}>
                    Date Of Birth
                </Text>
                <TextInput 
                    placeholder="DD/MM/YYYY" 
                    style={SetupStyle.formInputs} 
                    keyboardType="phone-pad"
                    value={riderDetails.dob ? riderDetails.dob : ""}
                    onChangeText={(e)=>{
                        setRiderDetails({ ...riderDetails, ...{
                            "dob": e
                        } })
                    }}
                />

                <Text style={SetupStyle.p}>
                    You must be at least 18 years in other to apply as a rider{'\n'}
                </Text>

                <Text style={SetupStyle.titleText}>
                    Postal Code
                </Text>
                <TextInput 
                    placeholder="000000"
                    style={SetupStyle.formInputs}
                    keyboardType="number-pad"
                    value={riderDetails.postalCode ? riderDetails.postalCode : ""}
                    onChangeText={(e)=>{
                        setRiderDetails({
                            ...riderDetails,
                            ...{
                                "postalCode": e
                            }
                        })
                    }}
                />
                <TouchableWithoutFeedback onPress={()=>handleNextPress()}>
                <Text style={[SetupStyle.button, {marginVertical: 10, opacity: (btnActive)?1:0.5}]}>
                    Next
                </Text>
            </TouchableWithoutFeedback>
            </View>
            {/* <TouchableWithoutFeedback onPress={()=>handleNextPress()}>
                <Text style={[SetupStyle.button, {marginVertical: 10, opacity: (btnActive)?1:0.5}]}>
                    Next
                </Text>
            </TouchableWithoutFeedback> */}
        </AccountSetupLayout>
    )
}