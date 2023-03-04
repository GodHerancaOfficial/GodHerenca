import { Text, TouchableWithoutFeedback } from "react-native";
import { AuthLayout_Style } from "../../styles/Auth";
import { Button } from "../common";
interface Prop {
    section: string,
    navigate?: any,
    active: boolean,
}

export default function ActionButtons({ section, navigate, active }: Prop): any {
    return (
        <Button
            onPress={() => {
                (section=="Signup")?navigate('Setup'):null
            }}
            disabled={active}
            style={((active)?AuthLayout_Style.actionButton:[AuthLayout_Style.actionButton, AuthLayout_Style.InactiveBtn])}
        >
            {(section == "Login") ? 'LOG IN' : 'SIGN UP'}
        </Button>
    )
}