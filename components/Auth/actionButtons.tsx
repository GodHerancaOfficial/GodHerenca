import { useContext, useRef, useState } from "react";
import { AuthLayout_Style, SetupStyle } from "../../styles/Auth";
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
    try {
      setLoading(true);
      let result = await Post('/user/create', JSON.stringify({
        "username": username,
        "password": password
      }), 'application/json');

      const status = result.status;
      const data = await result.data;
      console.log(data);

      switch (status) {
        case 201:
          if (!await saveToken(data.token)) {
            flashRef.current.showMessage({
              message: 'Error signing up',
              description: 'Your Account Has Been Created, We\'re Having Troubles Persisting Your Login.',
              floating: true,
              duration: 7000,
              type: 'danger',
              style: SetupStyle.flashMessageContainer
            });
            break;
          }
          navigate('Setup');
          break;

        case 400:
          flashRef.current.showMessage({
            message: 'An Error Occured',
            description: data.message,
            floating: true,
            duration: 7000,
            type: 'danger',
            style: SetupStyle.flashMessageContainer
          })
          break;

        case 409:
          flashRef.current.showMessage({
            message: 'User Already Exists',
            description: data.message + ', please login',
            floating: true,
            duration: 4000,
            type: 'danger',
            style: SetupStyle.flashMessageContainer
          });
          setTimeout(() => {
            navigate('Login');
          }, 4000)
          break;

        default:
          flashRef.current.showMessage({
            message: 'Unknown Error',
            description: 'An Unknown Error Occured, Please Contact Authors',
            floating: true,
            duration: 7000,
            type: 'danger',
            style: SetupStyle.flashMessageContainer
          })
      }

    } catch (error) {
      console.error(error);
      flashRef.current.showMessage({
        message: "Error Occured",
        duration: 4000,
        type: 'danger',
        hideStatusBar: true,
      });
    }

    setLoading(false);
  }

  const handleLogin = async (): Promise<any> => {
    try {
      setLoading(true);
      let result = await Post('/user/login', JSON.stringify({
        "username": username,
        "password": password
      }), 'application/json');

      const status = result.status;
      const data = await result.data;

      console.log(data);

      switch (status) {
        case 200:
          if (!await saveToken(data.token)) {
            console.error("Error Saving Token");
            flashRef.current.showMessage({
              message: "Error Saving Token",
              duration: 4000,
              type: 'danger',
              hideStatusBar: true,
            });
            break;
          }

          if (!data.data) {
            navigate('Setup');
            break;
          }
          setLoggedIn(true);
          break;

        case 401:
          flashRef.current.showMessage({
            message: data.message,
            duration: 4000,
            type: 'danger',
            hideStatusBar: true,
          });
          break;
        default:
          flashRef.current.showMessage({
            message: "Unknow Error",
            description: "Please Contact The Authors",
            duration: 4000,
            type: 'danger',
            hideStatusBar: true,
          });
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
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
