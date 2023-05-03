import { View, Text, TouchableWithoutFeedback } from "react-native";
import { GeneralForm } from "../../components/accountSetup";
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
  const { detailsObj } = useContext(SetupContext);
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true);
  const { checkEmailInput } = useContext<any>(SetupContext);
  const { checkFullnameInput } = useContext<any>(SetupContext);
  const flashMessageRef = useRef<any>();

  useEffect(() => {
    if (
      detailsObj.fullname == "" ||
      detailsObj.email == "" ||
      detailsObj.cpf == "" ||
      detailsObj.phone == "" ||
      detailsObj.gender == "" ||
      detailsObj.account_type == ""
    ) {
      setBtnDisabled(true);

      return;
    }

    setBtnDisabled(false);
    console.log(detailsObj);
  }, [
    detailsObj.fullname,
    detailsObj.email,
    detailsObj.cpf,
    detailsObj.phone,
    detailsObj.gender,
    detailsObj.account_type,
  ]);
    console.log(detailsObj);

  const handleBtnPress = async (): Promise<null | void> => {
    console.log(detailsObj);

    // //input validations
    const checkEmailValidity = checkEmailInput(detailsObj.email);
    const fullNameValidity = checkFullnameInput(detailsObj.fullname);

    if (!fullNameValidity) {
      flashMessageRef.current.showMessage({
        message: "Fullname can only be letters",
        type: "danger",
        titleStyle: SetupStyle.flashMessageText,
        style: SetupStyle.flashMessageContainer,
      });
    }
    if (!checkEmailValidity) {
      flashMessageRef.current.showMessage({
        message: "Invalid email address",
        type: "danger",
        titleStyle: SetupStyle.flashMessageText,
        style: SetupStyle.flashMessageContainer,
      });
    }

    //only navigate the user to the next screen if there is no error
    if (checkEmailValidity && fullNameValidity) {
      navigation.navigate("Dob");
    }
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
      <GeneralForm />
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
