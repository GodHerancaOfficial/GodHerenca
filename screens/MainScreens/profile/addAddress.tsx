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

const AddAddress = (): JSX.Element => {
  return (
    <React.Fragment>
      <ProfileLayout headerText="Add Address">
        <Text>Hello Add Address</Text>
      </ProfileLayout>
    </React.Fragment>
  );
};

export default AddAddress;
