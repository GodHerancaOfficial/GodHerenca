import { View, Text } from "react-native";
import { SetupContext } from "../../contexts";
import React, { useContext } from "react";
import { TextInput } from "react-native";
import { ProfileStyle } from "../../styles/MainScreens";

interface ProfileDetailsProps {
  children: any | JSX.Element;
}
const ProfileDetails = ({ children }: ProfileDetailsProps) => {
  return (
    <View style={ProfileStyle.editProfileDetailsContainer}>
        {children && children}
    </View>
  );
};

export default ProfileDetails;
