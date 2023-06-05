import React, { useContext } from "react";
import { ProfileStyle } from "../../../styles/MainScreens";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ProfileActions } from "../../../components/common";
import { AppContext } from "../../../contexts";

interface ProfileProps {
  navigation: any;
}
export default function Profile({ navigation }: ProfileProps): JSX.Element {
  const optionIcon = require("./../../../assets/images/special-icons/option-icon.png");
  const profileImage = require("./../../../assets/images/special-icons/dummy-profile.png");
  const { logout, setLoggedIn } = useContext<any>(AppContext);

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
            navigation.navigate("ProfileScreen", { screen: "EditProfile" });
          }}
        />
        <ProfileActions
          mainIconName={"location-on"}
          text="Address"
          onPress={() => {
            navigation.navigate("ProfileScreen", {
              screen: "Address",
            });
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
          onPress={async () => {
            if (!await logout?.()) {
              console.error('Error Logging Out');
              return;
            }
            console.log('Logged Out');
            setLoggedIn(false);
          }}
        />
      </SafeAreaView>
    </React.Fragment>
  );
}
