import { Text, TextInput, View, TouchableWithoutFeedback } from "react-native";
import { AccountSetupLayout } from "../../layouts";
import { SetupStyle } from "../../styles/Auth";
import DropDown from "../../components/dropdown/dropdown";
import { useEffect, useState, useContext } from "react";
import SetupContext from "../../contexts/SetupContext";
import { Button } from "../../components/common";

export default function OriginScreen({ navigation }: any): any {
    const [btnActive, setBtnActive] = useState<boolean>(true);

    const { state, city, address, setState, setCity, setAddress } = useContext(SetupContext);

    useEffect(() => {
        if (state == "" || city == "" || address == "") {
            setBtnActive(true);
            return;
        }

        setBtnActive(false);
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
                    onChangeText={(e) => {
                        setAddress(e);
                    }}
                    value={address}
                />

                <Button
                    style={SetupStyle.button}
                    onPress={()=>navigation.navigate('Legal')}
                    disabled={btnActive}
                >
                    Next
                </Button>
            </View>
        </AccountSetupLayout>
    )
}