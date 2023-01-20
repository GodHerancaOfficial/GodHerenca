import { Text } from "react-native";
import { AuthLayout_Style } from "../../styles/Auth";

interface Prop{
    section: string,
}

export default function IntroText({section}:Prop):any{
    return (
        <Text style={AuthLayout_Style.introText}>
            {(section == "Login")?'Login to your account':'Create your account'}
        </Text>
    )
}
