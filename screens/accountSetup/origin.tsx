import { Text, TextInput, View, TouchableWithoutFeedback } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AccountSetupLayout } from "../../layouts";
import { SetupStyle } from "../../styles/Auth";
import DropDown from "../../components/dropdown/dropdown";
import { useEffect, useState, useContext } from "react";
import SetupContext from "../../contexts/SetupContext";
import { Button } from "../../components/common";
import { GeneralModal } from "../../components/modals";
import { ForgotLayoutStyle } from "./../../styles/Auth";
import { Post } from "../../utils/requests";

export default function OriginScreen({ navigation }: any): any {
  const [btnActive, setBtnActive] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const modalImageSource = require("./../../assets/images/modals/regSuccess.png");
  const { detailsObj, setDetailsObj } = useContext(SetupContext);
  const endPoint = "/user/addinfo";
  useEffect(() => {
    if (
      detailsObj.state == "" ||
      detailsObj.city == "" ||
      detailsObj.street_address == ""
    ) {
      setBtnActive(true);
      return;
    }

    setBtnActive(false);
  }, [detailsObj.state, detailsObj.city, detailsObj.street_address]);

  const handleBtnPress = (): void | null => {
    console.log(detailsObj);

    detailsObj.accountType == "Rider"
      ? navigation.navigate("Guarantor")
      : setModalVisible(!modalVisible);
  
    //const response = Post(endPoint, JSON.stringify(detailsObj), "dummytext");
    
    //console.log(response);
    //navigate the user to the main screen
    setTimeout(() => {
      setModalVisible(!modalVisible);
      navigation.navigate("mainscreens");
    }, 3000);
  };

  return (
    <AccountSetupLayout navigateBack={navigation.pop}>
      <GeneralModal
        visible={modalVisible}
        setVisible={setModalVisible}
        imageSource={modalImageSource}
      >
        <Text
          style={[
            ForgotLayoutStyle.text,
            {
              fontFamily: "Raleway-bold",
              fontSize: 24,
              textAlign: "center",
              paddingHorizontal: 20,
            },
          ]}
        >
          Congratulations! {"\n\n"}
          <Text
            style={[
              ForgotLayoutStyle.text,
              { fontSize: 16, paddingVertical: 15 },
            ]}
          >
            Your account is ready to use. you will will be redirected to your
            home page in a few seconds
          </Text>
        </Text>
      </GeneralModal>

      <View style={SetupStyle.generalView}>
        <Text style={SetupStyle.titleText}>State</Text>

        <DropDown
          placeholder="Select State"
          lists={[{ id: 1, title: "Coming Soon!" }]}
          onChange={(choice: string) => {
            setDetailsObj((detailsObj: any) => ({
              ...detailsObj,
              state: choice,
            }));
          }}
          value={detailsObj.state}
        />

        <Text style={SetupStyle.titleText}>City</Text>

        <DropDown
          placeholder="Select City"
          lists={[{ id: 1, title: "Coming Soon!" }]}
          onChange={(choice: string) => {
            setDetailsObj((detailsObj: any) => ({
              ...detailsObj,
              city: choice,
            }));
          }}
          value={detailsObj.city}
        />

        <Text style={SetupStyle.titleText}>Address</Text>

        <TextInput
          placeholder="Your Address"
          style={SetupStyle.formInputs}
          onChangeText={(e) => {
            setDetailsObj((detailsObj: any) => ({
              ...detailsObj,
              street_address: e,
            }));
          }}
          value={detailsObj.street_address}
        />

        <Button
          style={SetupStyle.button}
          onPress={() => handleBtnPress()}
          disabled={btnActive}
        >
          {detailsObj.accountType == "Rider" ? "Next" : "Finish"}
        </Button>
      </View>
    </AccountSetupLayout>
  );
}
