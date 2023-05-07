import { Text, TouchableWithoutFeedback, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SetupStyle } from "../../styles/Auth";

interface Prop {
  goBack: any;
  text: string;
}

export default function Header({ goBack, text }: Prop): any {
  return (
    <View style={SetupStyle.header}>
      <TouchableWithoutFeedback
        onPress={() => {
          goBack();
        }}
      >
        <MaterialIcons name="keyboard-backspace" size={30} color="#000000" />
      </TouchableWithoutFeedback>
      <Text style={SetupStyle.headerText}>{text}</Text>
      <View></View>
    </View>
  );
}
