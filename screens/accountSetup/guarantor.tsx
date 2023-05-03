import { Text, TextInput, View, TouchableWithoutFeedback } from "react-native";
import { AccountSetupLayout } from "../../layouts";
import { SetupStyle } from "../../styles/Auth";
import { useEffect, useState, useContext, useRef } from "react";
import DropDown from "../../components/dropdown/dropdown";
import SetupContext from "../../contexts/SetupContext";
import { Button } from "../../components/common";
import FlashMessage, { showMessage } from "react-native-flash-message";

export default function GuarantorScreen({ navigation }: any): any {
  const [btnActive, setBtnActive] = useState<boolean>(true);
  const { detailsObj, setDetailsObj, checkFullnameInput } =
    useContext<any>(SetupContext);
  const flashMessageRef = useRef<any>();

  const [guarantorList] = useState<any[]>([
    {
      id: 1,
      title: "Father",
    },
    {
      id: 2,
      title: "Mother",
    },
    {
      id: 3,
      title: "Brother",
    },
    {
      id: 4,
      title: "Sister",
    },
    {
      id: 5,
      title: "Other",
    },
  ]);

  useEffect(() => {
    if (
      detailsObj.guarantor_name == "" ||
      detailsObj.guarantor_phone == "" ||
      detailsObj.guarantor_relationship == ""
    ) {
      setBtnActive(true);
      return;
    }

    setBtnActive(false);
  }, [
    detailsObj.guarantor_name,
    detailsObj.guarantor_phone,
    detailsObj.guarantor_relationship,
  ]);

  const handleButtonPress = (): null | void => {
    //check the guarantor username if it contains numbers
    if(checkFullnameInput(detailsObj.guarantor_name))
    {
        navigation.navigate("Vehicle");
    }else{
        flashMessageRef.current.showMessage({
          message: "Guarantor username can only be lettters",
          type: "danger",
          titleStyle: SetupStyle.flashMessageText,
          style: SetupStyle.flashMessageContainer,
        });
    }
  };

  return (
    <AccountSetupLayout
      navigateBack={navigation.pop}
      setupFlashMessage={<FlashMessage ref={flashMessageRef} position="top" />}
    >
      <View style={SetupStyle.generalView}>
        <Text
          style={[SetupStyle.titleText, { fontSize: 25, marginBottom: 20 }]}
        >
          Guarantor Details
        </Text>

        <Text style={[SetupStyle.titleText, { marginVertical: 15 }]}>
          Guarantor Name
        </Text>

        <TextInput
          placeholder="Guarantor Name"
          style={SetupStyle.formInputs}
          value={detailsObj.guarantor_name}
          onChangeText={(e) => {
            setDetailsObj((detailsObj: any) => ({
              ...detailsObj,
              guarantor_name: e,
            }));
          }}
        />

        <Text style={[SetupStyle.titleText, { marginVertical: 15 }]}>
          Guarantor's Phone Number
        </Text>

        <TextInput
          placeholder="Guarantor's Phone Number"
          style={SetupStyle.formInputs}
          value={detailsObj.guarantor_phone}
          onChangeText={(e) => {
            setDetailsObj((detailsObj: any) => ({
              ...detailsObj,
              guarantor_phone: e,
            }));
          }}
          keyboardType="phone-pad"
        />

        <Text style={[SetupStyle.titleText, { marginVertical: 15 }]}>
          Who is the Guarantor to you?
        </Text>

        <DropDown
          placeholder="Guarantor Relationship"
          lists={guarantorList}
          onChange={(choice: string) => {
            setDetailsObj((detailsObj: any) => ({
              ...detailsObj,
              guarantor_relationship: choice,
            }));
          }}
        />

        <Button
          style={SetupStyle.button}
          disabled={btnActive}
          onPress={handleButtonPress}
        >
          Next
        </Button>
      </View>
    </AccountSetupLayout>
  );
}
