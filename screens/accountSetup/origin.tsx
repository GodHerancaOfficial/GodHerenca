import { Text, TextInput, View, TouchableWithoutFeedback } from "react-native";
import { AccountSetupLayout } from "../../layouts";
import { SetupStyle } from "../../styles/Auth";
import DropDown from "../../components/dropdown/dropdown";
import { useEffect, useState, useContext } from "react";
import SetupContext from "../../contexts/SetupContext";
import { Button } from "../../components/common";

export default function OriginScreen({ navigation }: any): any {
    const [btnActive, setBtnActive] = useState<boolean>(true);

    // const { state, city, address, setState, setCity, setAddress } = useContext(SetupContext);
    const { detailsObj, setDetailsObj } = useContext(SetupContext);

    useEffect(() => {
        if (detailsObj.state == "" || detailsObj.city == "" || detailsObj.address == "") {
            setBtnActive(true);
            return;
        }

        setBtnActive(false);
    }, [detailsObj.state, detailsObj.city, detailsObj.address]);

    const handleBtnPress = (): void | null => {
        console.log(detailsObj);

        ((detailsObj.accountType == "Rider") ? navigation.navigate('Guarantor') : null);
    }

    return (
        <AccountSetupLayout navigateBack={navigation.pop}>
            <View style={SetupStyle.generalView}>
                <Text style={SetupStyle.titleText}>
                    State
                </Text>

                <DropDown
                    placeholder="Select State"
                    lists={[{ id: 1, title: "Coming Soon!" }]}
                    onChange={(choice: string) => {
                        setDetailsObj((detailsObj: any) => ({
                            ...detailsObj,
                            'state': choice
                        }))
                    }}
                    value={detailsObj.state}
                />

                <Text style={SetupStyle.titleText}>
                    City
                </Text>

                <DropDown
                    placeholder="Select City"
                    lists={[{ id: 1, title: "Coming Soon!" }]}
                    onChange={(choice: string) => {
                        setDetailsObj((detailsObj: any) => ({
                            ...detailsObj,
                            'city': choice
                        }))
                    }}
                    value={detailsObj.city}
                />

                <Text style={SetupStyle.titleText}>
                    Address
                </Text>

                <TextInput
                    placeholder="Your Address"
                    style={SetupStyle.formInputs}
                    onChangeText={(e) => {
                        setDetailsObj((detailsObj: any) => ({
                            ...detailsObj,
                            'address': e
                        }));
                    }}
                    value={detailsObj.address}
                />

                <Button
                    style={SetupStyle.button}
                    onPress={() => handleBtnPress()}
                    disabled={btnActive}
                >
                    {(detailsObj.accountType == 'Rider') ? 'Next' : 'Finish'}
                </Button>
            </View>
        </AccountSetupLayout>
    )
}