import { Text, TouchableWithoutFeedback, View } from "react-native";
import { IntroText, ActionButtons } from "../components/Auth";
import { AuthLayout_Style } from "../styles/Auth";

interface Props{
    children: any,
    section: string,
    navigate?: any,
};

export default function AuthLayout({children, section, navigate}:Props): any{
    return (
        <View style={AuthLayout_Style.container}>
            <IntroText section={section} />
            {children}
            <ActionButtons section={section} />

            {/**Footer section */}
            {((section=="Login")?
                <Text style={AuthLayout_Style.p}>
                    Don't have an account? <TouchableWithoutFeedback onPress={()=>{navigate('Signup')}}>
                        <Text style={AuthLayout_Style.pBold}>Sign up</Text>
                    </TouchableWithoutFeedback>
                </Text>
                :
                <Text style={AuthLayout_Style.p}>
                    Already have an account? <TouchableWithoutFeedback onPress={()=>{navigate('Login')}}>
                        <Text style={AuthLayout_Style.pBold}>Login</Text>
                    </TouchableWithoutFeedback>
                </Text>
            )}
        </View>
    )
}