import { ScrollView, View } from "react-native";
import { Header } from "../components/common";
import { ForgotLayoutStyle } from "../styles/Auth";

interface ForgotPasswordProps {
    navigateBack: any,
    children: any,
}

const ForgotPasswordLayout = ({ navigateBack, children }: ForgotPasswordProps): any => {
    return (
        <View style={[ForgotLayoutStyle.container]}>
            <ScrollView>
                <Header goBack={navigateBack} text="Forgot Password" />

                {children}
            </ScrollView>
        </View>
    )
}

export default ForgotPasswordLayout;
