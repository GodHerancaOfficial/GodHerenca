import { Text, TextInput, View, TouchableWithoutFeedback } from "react-native";
import { AccountSetupLayout } from "../../layouts";
import { SetupStyle } from "../../styles/Auth";
import DropDown from "../../components/dropdown/dropdown";
import { useEffect, useState, useContext } from "react";
import SetupContext from "../../contexts/SetupContext";
import { Button } from "../../components/common";
import { GeneralModal } from "../../components/modals";
import { ForgotLayoutStyle } from "./../../styles/Auth";
import { PostAuth } from "../../utils/requests";
import { AppContext } from "../../contexts";

export default function OriginScreen({ navigation }: any): any {
  const [btnActive, setBtnActive] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const modalImageSource = require("../../assets/images/modals/regSuccess.png");
  const { detailsObj, setDetailsObj } = useContext(SetupContext);
  const { getToken } = useContext<any>(AppContext);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (detailsObj.state == "" || detailsObj.city == "" || detailsObj.street_address == "") {
      setBtnActive(true);
      return;
    }

    setBtnActive(false);
  }, [detailsObj.state, detailsObj.city, detailsObj.street_address]);

  const handleBtnPress = async (): Promise<void | null> => {
    // console.log(detailsObj);

    if(detailsObj.account_type !== 'Buyer'){
      navigation.navigate('Guarantor');
      return;
    }

    let formData = new FormData();
    let token = await getToken?.();
    

    try {
      for(let key in detailsObj){
        formData.append(key, detailsObj[key]);
      }
    } catch (error) {
      console.error(error);
      return;
    }
    console.log(formData);
    // console.log(token);

    try {
      setLoading(true);
      let data = await PostAuth('/user/addinfo', formData, 'multipart/form-data', token);

      console.log(await data.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
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
          onChange={(choice: string, id:any) => {
            setDetailsObj((detailsObj: any) => ({
              ...detailsObj,
              state: id,
            }));
            // console.log(id);
          }}
          value={detailsObj.state}
        />

        <Text style={SetupStyle.titleText}>City</Text>

        <DropDown
          placeholder="Select City"
          lists={[{ id: 1, title: "Coming Soon!" }]}
          onChange={(choice: string, id:any) => {
            setDetailsObj((detailsObj: any) => ({
              ...detailsObj,
              city: id,
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
          {
            (detailsObj.account_type == "Rider") ? "Next" : (loading)? "Loading..." : "Finish"
          }
        </Button>
      </View>
    </AccountSetupLayout>
  );
}
