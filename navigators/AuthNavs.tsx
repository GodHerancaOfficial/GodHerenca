import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Signup } from '../screens/Auth';
import ForgotPwdNavs from './forgotPwdNavs';

const Stack = createNativeStackNavigator();

export default function AuthNavs(): any{
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='Login Screen' component={Login} />
                <Stack.Screen name='Signup Screen' component={Signup} />
                <Stack.Screen name='Forgot Password Navigator' component={ForgotPwdNavs} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
