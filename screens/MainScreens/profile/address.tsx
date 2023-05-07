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

const Address = (): JSX.Element => {
  return (
    <React.Fragment>
      <ProfileLayout headerText="Address">
        <Text>Hello Address</Text>
      </ProfileLayout>
    </React.Fragment>
  );
};

export default Address;
