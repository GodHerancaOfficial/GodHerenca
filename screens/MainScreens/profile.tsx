import React from "react";
import { ProfileStyle } from "../../styles/MainScreens";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ProfileActions } from "../../components/common";

export default function Profile(): JSX.Element {
  const optionIcon = require("./../../assets/images/special-icons/option-icon.png");
  const profileImage = require("./../../assets/images/special-icons/dummy-profile.png");
  return (
    <React.Fragment>
      <SafeAreaView style={ProfileStyle.container}>
        <View style={ProfileStyle.profileHeaderContainer}>
          <Text style={ProfileStyle.profileHeaderText}>profile</Text>

          <TouchableWithoutFeedback>
            <Image
              source={optionIcon}
              style={ProfileStyle.optionIconImage}
            ></Image>
          </TouchableWithoutFeedback>
        </View>
        <View style={ProfileStyle.ProfileContainer}>
          <View style={ProfileStyle.profileImageContainer}>
            <Image source={profileImage}></Image>
            <TouchableWithoutFeedback>
              <MaterialIcons
                name="edit"
                size={20}
                color={"#FFD763"}
                style={ProfileStyle.editBtn}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={ProfileStyle.profileDetailsContainer}>
            <Text style={ProfileStyle.profileName}>Martinez Whites</Text>
            <Text style={ProfileStyle.profileContact}>+55 345 9058 44</Text>
          </View>
        </View>
        <View style={ProfileStyle.profileLineBreaker}></View>
        <ProfileActions
          mainIconName={"person"}
          text="Edit Profile"
          onPress={() => {
            console.log("hello world");
          }}
        />
        <ProfileActions
          mainIconName={"location-on"}
          text="Address"
          onPress={() => {
            console.log("hello world");
          }}
        />
        <ProfileActions
          mainIconName={"payments"}
          text="Payment Information"
          onPress={() => {
            console.log("hello world");
          }}
        />
        <ProfileActions
          mainIconName={"translate"}
          text="Language"
          onPress={() => {
            console.log("hello world");
          }}
        />
        <ProfileActions
          mainIconName={"lock"}
          text="Privacy and Policy"
          onPress={() => {
            console.log("hello world");
          }}
        />
        <ProfileActions
          mainIconName={"help-center"}
          text="Help Center"
          onPress={() => {
            console.log("hello world");
          }}
        />
        <ProfileActions
          mainIconName={"logout"}
          text="Logout"
          onPress={() => {
            console.log("hello world");
          }}
        />
      </SafeAreaView>
    </React.Fragment>
  );
}
