import { OtpScreen, CreateNewPassword, ForgotPassword } from "../screens/Auth/forgotpassword";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function ForgotPwdNavs(): any{
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="forgot password" component={ForgotPassword} />
                <Stack.Screen name="Enter OTP" component={OtpScreen} />
                <Stack.Screen name="Create New Password" component={CreateNewPassword} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
