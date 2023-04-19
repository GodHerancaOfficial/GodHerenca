import { Text, TextInput, View, TouchableWithoutFeedback } from "react-native";
import { AccountSetupLayout } from "../../layouts";
import { SetupStyle } from "../../styles/Auth";
import DropDown from "../../components/dropdown/dropdown";
import { useEffect, useState, useContext } from "react";
import SetupContext from "../../contexts/SetupContext";
import { Button } from "../../components/common";
import { GeneralModal } from "../../components/modals";
import { ForgotLayoutStyle } from "./../../styles/Auth";

export default function OriginScreen({ navigation }: any): any {
  const [btnActive, setBtnActive] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const modalImageSource = require("./../../assets/images/modals/regSuccess.png");

  // const { state, city, address, setState, setCity, setAddress } = useContext(SetupContext);
  const { detailsObj, setDetailsObj } = useContext(SetupContext);

  useEffect(() => {
    if (
      detailsObj.state == "" ||
      detailsObj.city == "" ||
      detailsObj.address == ""
    ) {
      setBtnActive(true);
      return;
    }

    setBtnActive(false);
  }, [detailsObj.state, detailsObj.city, detailsObj.address]);

  const handleBtnPress = (): void | null => {
    console.log(detailsObj);

    detailsObj.accountType == "Rider"
      ? navigation.navigate("Guarantor")
      : setModalVisible(!modalVisible);
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
              address: e,
            }));
          }}
          value={detailsObj.address}
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
