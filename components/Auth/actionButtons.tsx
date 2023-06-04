import { useContext, useState } from "react";
import { AuthLayout_Style } from "../../styles/Auth";
import { Button } from "../common";
import { AppContext } from "../../contexts";
import { Post } from "../../utils/requests";
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
  const { username, password, setUsername, setPassword } = useContext<any>(AppContext);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignup = async (): Promise<void> => {
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
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  const handleLogin = async (): Promise<void> => {
    try {
      setLoading(true);
      let data = await Post('/user/login', JSON.stringify({
        "username": username,
        "password": password
      }))

      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  return (
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
  );
}
