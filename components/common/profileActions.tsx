import { Text, TouchableWithoutFeedback, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ProfileStyle } from "../../styles/MainScreens";
interface Prop {
  mainIconName: any;
  text: string;
  onPress: () => any;
}

export default function ProfileActions({
  mainIconName,
  text,
  onPress,
}: Prop): any {
  return (
    <View style={ProfileStyle.profileActionContainer}>
      <View style={ProfileStyle.profileActionSubContainer}>
        <MaterialIcons
          name={mainIconName}
          size={27}
          color={mainIconName == "logout" ? "EB4335" : "#000"}
          style={ProfileStyle.mainIcon}
        />
        <TouchableWithoutFeedback onPress={onPress}>
          <Text
            style={
              text == "Logout"
                ? ProfileStyle.profileLogoutText
                : ProfileStyle.profileActionText
            }
          >
            {text && text}
          </Text>
        </TouchableWithoutFeedback>
      </View>

      {mainIconName !== "logout" && (
        <TouchableWithoutFeedback onPress={onPress}>
          <MaterialIcons
            name="chevron-right"
            size={27}
            color="#000000"
            style={ProfileStyle.profileActionIcon}
          />
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}
