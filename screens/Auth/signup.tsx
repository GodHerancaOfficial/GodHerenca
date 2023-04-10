import { AuthLayout } from "../../layouts";
import { Form } from "../../components/Auth";
import { useState, useEffect, useContext } from "react";
import {checkEmailInput} from "../../contexts/SetupContext";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { SetupStyle } from "../../styles/Auth";

interface Prop {
  navigation?: any;
}

export default function Signup({ navigation }: Prop): any {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [active, setActive] = useState<boolean>(true);
  
  useEffect(() => {
   
    email == "" || password == ""
      ? setActive(true)
      : setActive(false);
  }, [email, password]);
  
  const handlePress = () => 
  {
    const checkEmailValidity = checkEmailInput(email);
    const checkPasswordValidity = password.length >= 8 ? true : false;
    if (!checkEmailValidity) 
    {
      showMessage({
        message: "Invalid email address",
        type: "danger",
        titleStyle: SetupStyle.flashMessageText,
        style: SetupStyle.flashMessageContainer,
      });
    }

    if (!checkPasswordValidity) 
    {
      showMessage({
        message: "Password must be at least 8 characters",
        type: "danger",
        titleStyle: SetupStyle.flashMessageText,
        style: SetupStyle.flashMessageContainer,
      });
    }

    //only navigate the user to the next screen if there is no error
    if (checkEmailValidity && checkPasswordValidity)
    {
      navigation.navigate("Setup");
    }
  }

  return (
    <AuthLayout
      active={active}
      section="Signup"
      navigate={navigation.navigate}
      handlePress={handlePress}
      flashMessage={<FlashMessage position="top" />}
    >

      <Form
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </AuthLayout>
  );
}
