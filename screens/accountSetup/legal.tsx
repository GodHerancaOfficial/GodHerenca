import { Text, View, TouchableWithoutFeedback } from "react-native";
import { AccountSetupLayout } from "../../layouts";
import { SetupStyle } from "../../styles/Auth";
import { useState, useContext } from "react";
import { Entypo } from "@expo/vector-icons";
import { Button } from "../../components/common";
import SetupContext from "../../contexts/SetupContext";

export default function LegalScreen({ navigation }: any): any {
    const [btnActive, setBtnActive] = useState<boolean>(true);
    const { detailsObj } = useContext(SetupContext);

    const handleNextPress = (): void => {
        navigation.navigate('Guarantor');
    }

    return (
        <AccountSetupLayout navigateBack={navigation.pop}>
            <View style={SetupStyle.generalView}>
                <Text style={SetupStyle.titleText}>
                    {(detailsObj.id_type != "") ? detailsObj.id_type : "Driver's License"}
                </Text>
                <View style={{ display: 'flex', width: '100%', backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={SetupStyle.uploadView}>
                        <Entypo name="upload-to-cloud" size={50} color={'#000'} />
                        <Text style={[SetupStyle.p, {
                            color: '#A5A5A5',
                            fontFamily: 'Raleway-bold',
                            fontSize: 19,
                            paddingHorizontal: 2.5,
                            textAlign: 'center'
                        }]}>
                            {'\n'}Upload your {(detailsObj.id_type != "") ? detailsObj.id_type : "driver's license"} here
                        </Text>
                        <Text style={[SetupStyle.p, { color: '#D9D9D9' }]}>
                            Files supported: JPG, PNG {'\n'}
                        </Text>

                        <TouchableWithoutFeedback>
                            <Text style={[SetupStyle.p, SetupStyle.browseBtn]}>
                                Browse Files
                            </Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>

                {/**These views will be used to display the front and back of the driver's licence*/}
                <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'transparent' }}>
                    <View style={[SetupStyle.displayBoxes]}></View>
                    <View style={[SetupStyle.displayBoxes, { marginHorizontal: 12 }]}></View>
                </View>

                <Text style={[SetupStyle.p, { color: '#737373', padding: 5 }]}>
                    Front and back of your {(detailsObj.id_type != "") ? detailsObj.id_type : "driver's license"} must be clear and captured {'\n\n'}
                </Text>

                <Button
                    style={SetupStyle.button}
                    onPress={() => handleNextPress()}
                    disabled={false}
                >
                    Next
                </Button>
            </View>
        </AccountSetupLayout>
    )
}
