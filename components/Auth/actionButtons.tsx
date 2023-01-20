import { Text, TouchableWithoutFeedback } from "react-native";
import { AuthLayout_Style } from "../../styles/Auth";

interface Prop{
    section: string,
}

export default function ActionButtons({section}:Prop):any {
    return (
        <TouchableWithoutFeedback>
            <Text style={AuthLayout_Style.actionButton}>
                {(section=="Login")?'LOG IN':'SIGN UP'}
            </Text>
        </TouchableWithoutFeedback>
    )
}