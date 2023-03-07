import { OtpScreen, CreateNewPassword, ForgotPassword } from "../screens/Auth/forgotpassword";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function ForgotPwdNavs(): any{
    return (
        <Stack.Navigator screenOptions={{headerShown:false, animation: 'slide_from_right'}}>
            <Stack.Screen name="forgotPassword" component={ForgotPassword} />
            <Stack.Screen name="EnterOTP" component={OtpScreen} />
            <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
        </Stack.Navigator>
    )
}
