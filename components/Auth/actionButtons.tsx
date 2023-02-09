import { Text, TouchableWithoutFeedback } from "react-native";
import { AuthLayout_Style } from "../../styles/Auth";

interface Prop{
    section: string,
    navigate?: any,
    active?: boolean,
}

export default function ActionButtons({section, navigate, active}:Prop):any {
    return (
        <TouchableWithoutFeedback onPress={()=>{
            (section == "Signup")?((active)?navigate('Setup'):null):null
        }}>
            <Text style={((active)?AuthLayout_Style.actionButton:[AuthLayout_Style.actionButton, AuthLayout_Style.InactiveBtn])}>
                {(section=="Login")?'LOG IN':'SIGN UP'}
            </Text>
        </TouchableWithoutFeedback>
    )
}