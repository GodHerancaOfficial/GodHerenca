import { useContext } from "react";
import { AuthLayout_Style } from "../../styles/Auth";
import { Button } from "../common";
import { AppContext } from "../../contexts";
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
  const { setUsername, setPassword } = useContext<any>(AppContext);

  const handleSignup = async (): Promise<void> => {
    setUsername("");
    setPassword("");
    navigate('Setup')
  }

  const handleLogin = async (): Promise<void> => {
    setUsername("");
    setPassword("");
    navigate('Signup')
  }

  return (
    <Button
      onPress={() => {
        handlePress
          ? handlePress()
          : section == "Signup"
            ? handleSignup()
            : handleLogin();
      }}
      disabled={active}
      style={
        active
          ? AuthLayout_Style.actionButton
          : [AuthLayout_Style.actionButton, AuthLayout_Style.InactiveBtn]
      }
    >
      {section == "Login" ? "LOG IN" : "SIGN UP"}
    </Button>
  );
}
