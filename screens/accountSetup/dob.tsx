import { Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { AccountSetupLayout } from "../../layouts";
import { SetupStyle } from "../../styles/Auth";
import { useEffect, useState, useContext, useRef } from "react";
import SetupContext from "../../contexts/SetupContext";
import { Button } from "../../components/common";
import FlashMessage, { showMessage } from 'react-native-flash-message';
// import { formatDateOfBirthInput } from '../../contexts/SetupContext';
interface Prop {
  navigation?: any;
}

export default function DobScreen({ navigation }: Prop): any {
  const [btnActive, setBtnActive] = useState<boolean>(true);
  const flashMessageRef = useRef<any>();
  // const [detailsObj, setDetailsObj] = useState<any>({
  //   dob: '',
  //   postal_code: '',
  // });
  const { detailsObj, setDetailsObj, checkRiderAgeInput, formatDateOfBirthInput } =
    useContext<any>(SetupContext);

  useEffect(() => {
    if (detailsObj.dob == "" || detailsObj.postal_code == "") {
      setBtnActive(true);
      return;
    }

    setBtnActive(false);
  }, [detailsObj.dob, detailsObj.postal_code]);

  const handleNextPress = (): void | null => {
    if(!checkRiderAgeInput(detailsObj.account_type, detailsObj.dob)){
      flashMessageRef.current.showMessage({
        message: "You are not up to 18 years",
        type: "danger",
        titleStyle: SetupStyle.flashMessageText,
        style: SetupStyle.flashMessageContainer,
      });
      return;
    }
    
    navigation.navigate("Origin");
  };


  return (
    <AccountSetupLayout
      navigateBack={navigation.pop}
      setupFlashMessage={<FlashMessage ref={flashMessageRef} position="top" />}
    >
      <View style={SetupStyle.generalView}>
        <Text style={SetupStyle.titleText}>Date Of Birth</Text>
        <TextInput
          placeholder="DD/MM/YYYY"
          style={SetupStyle.formInputs}
          keyboardType="phone-pad"
          value={formatDateOfBirthInput(detailsObj?.dob)}
          onChangeText={(e) => {
            setDetailsObj((detailsObj: any) => ({
              ...detailsObj,
              dob: e,
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
              postal_code: e,
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
