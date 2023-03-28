import { Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { AccountSetupLayout } from "../../layouts";
import { SetupStyle } from "../../styles/Auth";
import { useEffect, useState, useContext } from "react";
import SetupContext from "../../contexts/SetupContext";
import { Button } from "../../components/common";

interface Prop {
  navigation?: any;
}

export default function DobScreen({ navigation }: Prop): any {
  const [btnActive, setBtnActive] = useState<boolean>(true);

  //const { dob, setDob, postalCode, setPostalCode } = useContext(SetupContext);
  const { detailsObj, setDetailsObj } = useContext(SetupContext);

  useEffect(() => {
    if (!(detailsObj.dob || detailsObj.postalCode)) {
      setBtnActive(true);
      return;
    }

    setBtnActive(false);
  }, [detailsObj.dob, detailsObj.postalCode]);

  const handleNextPress = (): void | null => {
    navigation.navigate("Origin");
  };


  return (
    <AccountSetupLayout navigateBack={navigation.pop}>
      <View style={SetupStyle.generalView}>
        <Text style={SetupStyle.titleText}>Date Of Birth</Text>
        <TextInput
          placeholder="DD/MM/YYYY"
          style={SetupStyle.formInputs}
          keyboardType="phone-pad"
          value={detailsObj.dob}
          onChangeText={(e) => {
            setDetailsObj((detailsObj: any) => ({
              ...detailsObj,
              "dob": e,
            }));
          }}
        />

        <Text style={SetupStyle.p}>
          You must be at least 18 years in other to apply as a rider{"\n"}
        </Text>

        <Text style={SetupStyle.titleText}>Postal Code</Text>
        <TextInput
          placeholder="000000"
          style={SetupStyle.formInputs}
          keyboardType="number-pad"
          value={detailsObj.postalCode}
          onChangeText={(e) => {
            setDetailsObj((detailsObj: any) => ({
              ...detailsObj,
              "postalCode": e,
            }));
          }}
        />

        <Button
          disabled={btnActive}
          style={SetupStyle.button}
          onPress={() => handleNextPress()}
        >
          Next
        </Button>
      </View>
    </AccountSetupLayout>
  );
}
