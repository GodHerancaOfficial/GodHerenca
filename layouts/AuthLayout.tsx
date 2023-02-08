import { ScrollView, StatusBar, Text, TouchableWithoutFeedback, View } from "react-native";
import { IntroText, ActionButtons, LoginWith } from "../components/Auth";
import { AuthLayout_Style } from "../styles/Auth";
import { Style } from "../styles/onboarding";

interface Props {
    children: any,
    section: string,
    navigate?: any,
    active?: boolean
};

export default function AuthLayout({ children, section, navigate, active }: Props): any {
    return (
        <View style={AuthLayout_Style.container}>
            {/* <StatusBar translucent={false} backgroundColor={'#ffffff'} barStyle={'dark-content'} /> */}
            <View style={AuthLayout_Style.container1}>
                <IntroText section={section} />
                {children}
                <ActionButtons active={active} section={section} navigate={navigate} />
                {(section == "Login") ?
                    <TouchableWithoutFeedback onPress={() => { navigate('Forgot') }}>
                        <Text style={[AuthLayout_Style.p, AuthLayout_Style.pBold]}>
                            Forgot Password? {'\n'}
                        </Text>
                    </TouchableWithoutFeedback>
                    : null}
                <Text style={AuthLayout_Style.p}>
                    {'\n'}Or Continue {'\n\n'}
                </Text>
                <LoginWith />
                {/**Footer section */}
                {((section == "Login") ?
                    <Text style={AuthLayout_Style.p}>
                        Don't have an account? <TouchableWithoutFeedback onPress={() => { navigate('Signup') }}>
                            <Text style={AuthLayout_Style.pBold}>Sign up</Text>
                        </TouchableWithoutFeedback>
                    </Text>
                    :
                    <Text style={AuthLayout_Style.p}>
                        Already have an account? <TouchableWithoutFeedback onPress={() => { navigate('Login') }}>
                            <Text style={AuthLayout_Style.pBold}>Login</Text>
                        </TouchableWithoutFeedback>
                    </Text>
                )}
            </View>
        </View>
    )
}