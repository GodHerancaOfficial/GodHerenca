import { View, TouchableWithoutFeedback, TextInput } from "react-native";
import { GeneralForm } from "../../components/accountSetup";
import DropDown from "../../components/dropdown/dropdown";
import { SetupStyle } from "../../styles/Auth";
import { MaterialIcons } from "@expo/vector-icons";
import { useState, useEffect, useContext, useRef } from "react";
import { AccountSetupLayout } from "../../layouts";
import SetupContext from "../../contexts/SetupContext";
import { Button } from "../../components/common";
import FlashMessage, { showMessage } from "react-native-flash-message";

interface Prop {
  navigation?: any;
}

export default function AccountSetup({ navigation }: Prop): any {
  const { detailsObj, setDetailsObj } = useContext(SetupContext);
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true);
  const { checkEmailInput } = useContext<any>(SetupContext);
  const { checkFullnameInput } = useContext<any>(SetupContext);
  // const [detailsObj, setDetailsObj] = useState<any>({});
  const flashMessageRef = useRef<any>();

  const [accountTypeList] = useState<any[]>([
    {
      id: 1,
      title: "Buyer",
    },
    {
      id: 2,
      title: "Rider",
    },
  ]);

  const [genderList] = useState<any[]>([
    {
      id: 1,
      title: "Male",
    },
    {
      id: 2,
      title: "Female",
    },
  ]);

  useEffect(() => {
    if (detailsObj?.fullname == "" || detailsObj?.contact_detail == "" || detailsObj?.cpf == "" || detailsObj?.gender == "" || detailsObj?.account_type == "") {
      setBtnDisabled(true);
      return;
    }

    setBtnDisabled(false);
  }, [
    detailsObj?.fullname, detailsObj?.contact_detail, detailsObj?.cpf, detailsObj?.gender, detailsObj?.account_type,]);

  const handleBtnPress = async (): Promise<null | void> => {
    //input validations
    const checkEmailValidity = checkEmailInput(detailsObj?.contact_detail);
    const fullNameValidity = checkFullnameInput(detailsObj?.fullname);

    if (!fullNameValidity) {
      flashMessageRef.current.showMessage({
        message: "Fullname can only be letters",
        type: "danger",
        titleStyle: SetupStyle.flashMessageText,
        style: SetupStyle.flashMessageContainer,
      });
      return;
    }
    if (!checkEmailValidity) {
      flashMessageRef.current.showMessage({
        message: "Invalid email address",
        type: "danger",
        titleStyle: SetupStyle.flashMessageText,
        style: SetupStyle.flashMessageContainer,
      });
      return;
    }

    navigation.navigate('Dob');
  };

  return (
    <AccountSetupLayout
      navigateBack={navigation.pop}
      setupFlashMessage={<FlashMessage ref={flashMessageRef} position="top" />}
    >
      {/**User Profile Picture */}

      <View style={SetupStyle.profileContainer}>
        <TouchableWithoutFeedback>
          <MaterialIcons
            name="edit"
            size={20}
            color={"#FFD763"}
            style={SetupStyle.editBtn}
          />
        </TouchableWithoutFeedback>
      </View>

      {/**Forms To fill out */}
      <TextInput
        placeholder="First Name"
        style={SetupStyle.formInputs}
        value={detailsObj?.first_name}
        onChangeText={(e) => {
          setDetailsObj((detailsObj: any) => ({
            ...detailsObj,
            'first_name': e,
          }));
        }}
      />

      <TextInput
        placeholder="Last Name"
        style={SetupStyle.formInputs}
        value={detailsObj?.last_name}
        onChangeText={(e) => {
          setDetailsObj((detailsObj: any) => ({
            ...detailsObj,
            'last_name': e,
          }));
        }}
      />

      <TextInput
        placeholder="Email"
        style={SetupStyle.formInputs}
        value={detailsObj?.contact_detail}
        keyboardType="email-address"
        onChangeText={(e) => {
          setDetailsObj((detailsObj: any) => ({
            ...detailsObj,
            'contact_type': "Email",
            'contact_detail': e,
          }));
        }}
      />

      <DropDown
        lists={genderList}
        onChange={(choice: string) => {
          setDetailsObj((detailsObj: any) => ({
            ...detailsObj,
            'gender': choice
          }));
        }}
        placeholder="Gender"
        value={detailsObj?.gender}
      />

      <TextInput
        placeholder="CPF"
        style={SetupStyle.formInputs}
        value={detailsObj?.cpf}
        onChangeText={(e) => {
          setDetailsObj((detailsObj: any) => ({
            ...detailsObj,
            'cpf': e,
          }));
        }}
        keyboardType="numeric"
      />

      <DropDown
        lists={accountTypeList}
        onChange={(choice: string) => {
          setDetailsObj((detailsObj: any) => ({
            ...detailsObj,
            'account_type': choice
          }))
        }}
        placeholder="Account Type"
        value={detailsObj?.account_type}
      />


      <Button
        style={SetupStyle.button}
        disabled={btnDisabled}
        onPress={() => handleBtnPress()}
      >
        {detailsObj.account_type == "Rider" ? "Next" : "Continue"}
      </Button>
    </AccountSetupLayout>
  );
}
