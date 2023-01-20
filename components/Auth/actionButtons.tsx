import { Text, TouchableWithoutFeedback } from "react-native";
import { AuthLayout_Style } from "../../styles/Auth";

interface Prop{
    section: string,
    navigate?: any,
}

export default function ActionButtons({section, navigate}:Prop):any {
    return (
        <TouchableWithoutFeedback onPress={()=>{
            (section=="Signup")?navigate('Setup'):null
        }}>
            <Text style={AuthLayout_Style.actionButton}>
                {(section=="Login")?'LOG IN':'SIGN UP'}
            </Text>
        </TouchableWithoutFeedback>
    )
}