import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Signup } from '../screens/Auth';
import ForgotPwdNavs from './forgotPwdNavs';
import AccountSetup from '../screens/accountSetup/accountSetup';

const Stack = createNativeStackNavigator();

export default function AuthNavs(): any{
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false, animation: 'fade', animationDuration: 20}}>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Signup' component={Signup} />
                <Stack.Screen name='Forgot' component={ForgotPwdNavs} />
                <Stack.Screen name='Setup' component={AccountSetup} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
