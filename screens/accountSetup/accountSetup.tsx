import { View, Text, TouchableWithoutFeedback } from "react-native";
import { GeneralForm } from "../../components/accountSetup";
import { SetupStyle } from "../../styles/Auth";
import { MaterialIcons } from "@expo/vector-icons";
import { useState, useEffect, useContext } from "react";
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

  useEffect(() => {
    if (
      detailsObj.fullname == "" ||
      detailsObj.email == "" ||
      detailsObj.cpf == "" ||
      detailsObj.phone == "" ||
      detailsObj.gender == "" ||
      detailsObj.accountType == ""
    ) {
      setBtnDisabled(true);
      return;
    }

    setBtnDisabled(false);
  }, [
    detailsObj.fullname,
    detailsObj.email,
    detailsObj.cpf,
    detailsObj.phone,
    detailsObj.gender,
    detailsObj.accountType,
  ]);

  const handleBtnPress = /*async (): Promise<void | null>*/() => {
    // console.log(detailsObj);

    // //input validations
    // const checkEmailValidity = checkEmailInput(detailsObj.email);
    // const fullNameValidity = checkFullnameInput(detailsObj.fullname);
    
    
    // console.log(`email is ${checkEmailValidity} fullname is ${fullNameValidity}`)
    // if (!fullNameValidity) {
    //   showMessage({
    //     message: "Fullname can only be letters",
    //     type: "danger",
    //     titleStyle: SetupStyle.flashMessageText,
    //     style: SetupStyle.flashMessageContainer,
    //   });
    // }
    // if (!checkEmailValidity) {
    //   showMessage({
    //     message: "Invalid email address",
    //     type: "danger",
    //     titleStyle: SetupStyle.flashMessageText,
    //     style: SetupStyle.flashMessageContainer,
    //   });
    // }
    
    // showMessage({
    //   message: "Invalid email address",
    //   type: "danger",
    //   titleStyle: SetupStyle.flashMessageText,
    //   style: SetupStyle.flashMessageContainer,
    // });

    // //only navigate the user to the next screen if there is no error
    // if (checkEmailValidity && fullNameValidity) {
    //   navigation.navigate("Dob");
    // }\
    
    showMessage({
      message: "you clicked me!",
      type: "success",
      titleStyle: SetupStyle.flashMessageText,
      style: SetupStyle.flashMessageContainer,
    });
    console.log("clicked");
  };
  


  return (
    <AccountSetupLayout navigateBack={navigation.pop}>
      {/**User Profile Picture */}
      <FlashMessage position="top" />

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
        {detailsObj.accountType == "Rider" ? "Next" : "Continue"}
      </Button>
    </AccountSetupLayout>
  );
}
