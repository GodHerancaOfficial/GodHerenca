import React, { useContext, useState } from "react";
import { SetupContext } from "../../../contexts";
import { TextInput } from "react-native";
import {
  View
} from "react-native";
import { ProfileStyle } from "../../../styles/MainScreens";
import ProfileLayout from "../../../layouts/profileLayout";
import ProfileDetails from "../../../components/common/profileDetails";
import { Button } from "../../../components/common";
interface EditProfileInterface {
  navigation: any;
}
const EditProfile = ({ navigation }: EditProfileInterface): JSX.Element => {
  const { detailsObj, setDetailsObj } = useContext(SetupContext);
  const [accountTypeList] = useState<any[]>([
    {
      id: 1,
      title: "Customer",
    },
    {
      id: 2,
      title: "Rider",
    },
  ]);
  return (
    <View>
      <ProfileLayout headerText="Edit Profile">
        <View style={{ marginTop: 20 }}></View>
        <ProfileDetails>
          <TextInput
            placeholder=""
            style={ProfileStyle.editProfileFormInput}
            value={"John Doe"}
            // onChangeText={(e) => {
            //   setDetailsObj((detailsObj: any) => ({
            //     ...detailsObj,
            //     fullname: e,
            //   }));
            // }}
          />
        </ProfileDetails>

        <ProfileDetails>
          <TextInput
            placeholder=""
            style={ProfileStyle.editProfileFormInput}
            value={"John123"}
            // onChangeText={(e) => {
            //   setDetailsObj((detailsObj: any) => ({
            //     ...detailsObj,
            //     email: e,
            //   }));
            // }}
          />
        </ProfileDetails>

        <ProfileDetails>
          <TextInput
            placeholder=""
            style={ProfileStyle.editProfileFormInput}
            value={"1293 0483 3948 384"}
            // onChangeText={(e) => {
            //   setDetailsObj((detailsObj: any) => ({
            //     ...detailsObj,
            //     phone: e,
            //   }));
            // }}
          />
        </ProfileDetails>

        <ProfileDetails>
          <TextInput
            placeholder=""
            style={ProfileStyle.editProfileFormInput}
            value={"+557 837 374 32"}
            // onChangeText={(e) => {
            //   setDetailsObj((detailsObj: any) => ({
            //     ...detailsObj,
            //     phone: e,
            //   }));
            // }}
          />
        </ProfileDetails>

        <ProfileDetails>
          <TextInput
            placeholder=""
            style={ProfileStyle.editProfileFormInput}
            value={"Driver"}
            // onChangeText={(e) => {
            //   setDetailsObj((detailsObj: any) => ({
            //     ...detailsObj,
            //     account_type: e,
            //   }));
            // }}
          />
        </ProfileDetails>

        <ProfileDetails>
          <TextInput
            placeholder=""
            style={ProfileStyle.editProfileFormInput}
            value={"RT567390K45"}
            // onChangeText={(e) => {
            //   setDetailsObj((detailsObj: any) => ({
            //     ...detailsObj,
            //     cpf: e,
            //   }));
            // }}
          />
        </ProfileDetails>
        <View style={ProfileStyle.updateProfileButtonContainer}>
          <Button>Update</Button>
        </View>
      </ProfileLayout>
    </View>
  );
};

export default EditProfile;
