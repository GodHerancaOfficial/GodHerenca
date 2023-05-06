import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  Image,
} from "react-native";
import { ProfileStyle } from "../../../styles/MainScreens";
import ProfileLayout from "../../../layouts/profileLayout";


interface EditProfileInterface
{
  navigation: any,
}
const EditProfile = ({navigation}: EditProfileInterface): JSX.Element => {
  return (
    <React.Fragment>
      <ProfileLayout headerText="Edit Profile">
        <Text>Hello edit profile</Text>
      </ProfileLayout>
    </React.Fragment>
  );
};


export default EditProfile;
