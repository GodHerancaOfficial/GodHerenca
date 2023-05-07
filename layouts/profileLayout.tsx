import { View, SafeAreaView, Text, ScrollView } from "react-native";
import React from "react";
import { Header } from "../components/common";
import { ProfileStyle } from "../styles/MainScreens";
interface ProfileLayoutProps {
  navigateBack?: any;
  children: any | JSX.Element;
  headerText: string;
  profileFlashMessage?: JSX.Element;

}
const ProfileLayout = ({
  children,
  headerText,
  profileFlashMessage,
  navigateBack,
}: ProfileLayoutProps): JSX.Element => {
  return (
    <React.Fragment>
      <SafeAreaView style={ProfileStyle.profileLayout}>
        {profileFlashMessage && profileFlashMessage}
        <ScrollView>
          <View>
            <Header goBack={navigateBack} text={headerText}></Header>
            <View>{children && children}</View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </React.Fragment>
  );
};

export default ProfileLayout;
