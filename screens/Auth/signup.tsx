import { AuthLayout } from "../../layouts";
import { useState, useEffect, useRef } from "react";
import { checkUsernameInput } from "../../contexts/SetupContext";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { SetupStyle } from "../../styles/Auth";
import { FormStyle } from '../../styles/Auth'
import { View } from "react-native";
import { Input } from "../../components/common";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

interface Prop {
  navigation?: any;
}

export default function Signup({ navigation }: Prop): any {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [active, setActive] = useState<boolean>(true);
  const flashMessageRef = useRef<any>();

  useEffect(() => {
    email == "" || password == ""
      ? setActive(true)
      : setActive(false);
  }, [email, password]);

  const handlePress = () => {
    const checkUsernameValidity = checkUsernameInput(email);
    const checkPasswordValidity = password.length >= 8 ? true : false;
    if (!checkUsernameValidity) {
      showMessage({
        message: "Invalid email address",
        type: "danger",
        titleStyle: SetupStyle.flashMessageText,
        style: SetupStyle.flashMessageContainer,
      });
    }

    if (!checkPasswordValidity) {
      flashMessageRef.current.showMessage({
        message: "Password must be at least 8 characters",
        type: "danger",
        titleStyle: SetupStyle.flashMessageText,
        style: SetupStyle.flashMessageContainer,
      });
    }

    //only navigate the user to the next screen if there is no error
    if (checkUsernameValidity && checkPasswordValidity) {
      navigation.navigate("Setup");
    }
  }

  return (
    <AuthLayout
      active={active}
      section="Signup"
      navigate={navigation.navigate}
      handlePress={handlePress}
      authFlashMessage={<FlashMessage ref={flashMessageRef} position="top" />}
    >
      <View style={FormStyle.container}>
        <Input
          placeholder="Username"
          onChangeText={(e: string) => { setEmail(e) }}
          keyboardType="default"
          icon={<FontAwesome5 name="user-alt" size={19} color="black" />}
        />

        <Input
          placeholder="Password"
          onChangeText={(e:string) => { setPassword(e) }}
          secureTextEntry={true}
          icon={<MaterialIcons name="lock" size={24} color="black" />}
        />
      </View>
    </AuthLayout>
  );
}
