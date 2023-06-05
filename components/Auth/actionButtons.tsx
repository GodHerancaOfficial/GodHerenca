import { useContext, useRef, useState } from "react";
import { AuthLayout_Style } from "../../styles/Auth";
import { Button } from "../common";
import { AppContext } from "../../contexts";
import { Post } from "../../utils/requests";
import FlashMessage, { showMessage } from "react-native-flash-message";

interface Prop {
  section: string;
  navigate?: any;
  active: boolean;
  handlePress?: () => void;
}

export default function ActionButtons({
  section,
  navigate,
  active,
  handlePress,
}: Prop): any {
  const { username, password, setUsername, setPassword, saveToken, setLoggedIn } = useContext<any>(AppContext);
  const [loading, setLoading] = useState<boolean>(false);
  const flashRef = useRef<any>();

  const handleSignup = async (): Promise<any> => {
    // setUsername("");
    // setPassword("");
    // // navigate('Setup');

    try {
      setLoading(true);
      let data = await Post('/user/create', JSON.stringify({
        "username": username,
        "password": password
      }))

      console.log(data);
      if(data.error){
        flashRef.current.showMessage({
          message: data.error,
          duration: 4000,
          type: 'danger',
          // hideStatusBar: true,
        });
        setLoading(false);
        return;
      }
      // if(!saveToken?.(data.accessToken)){
      //   showMessage({
      //     message: 'Error saving your login',
      //     duration: 4000,
      //     type: 'danger',
      //   });
      // }
      setLoading(false);
    } catch (error) {
      console.error(error);
      flashRef.current.showMessage({
        message: "Error Occured",
        duration: 4000,
        type: 'danger',
        hideStatusBar: true,
      });
      setLoading(false);
    }
  }

  const handleLogin = async (): Promise<any> => {
    try {
      setLoading(true);
      let data = await Post('/user/login', JSON.stringify({
        "username": username,
        "password": password
      }))

      console.log(data);
      if(data.error){
        flashRef.current.showMessage({
          message: data.error,
          duration: 4000,
          type: 'danger',
          hideStatusBar: true,
        });
        setLoading(false);
        return;
      }
      if(!await saveToken?.(data.access_token)){
        showMessage({
          message: 'Error saving your login',
          duration: 4000,
          type: 'danger',
        });
      }
      setLoggedIn(true);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  return (
    <>
    <FlashMessage position={'top'} ref={flashRef} />
    <Button
      onPress={() => {
        section == "Signup" ? handleSignup() : handleLogin();
      }}
      disabled={active}
      style={
        active
          ? AuthLayout_Style.actionButton
          : [AuthLayout_Style.actionButton, AuthLayout_Style.InactiveBtn]
      }
    >
      {(loading) ? 'Loading...' : section == "Login" ? "LOG IN" : "SIGN UP"}
    </Button>
    </>
  );
}
