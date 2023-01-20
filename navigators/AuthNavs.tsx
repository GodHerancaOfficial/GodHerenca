import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Signup } from '../screens/Auth';
import ForgotPwdNavs from './forgotPwdNavs';

const Stack = createNativeStackNavigator();

export default function AuthNavs(): any{
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false, animation: 'slide_from_bottom'}}>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Signup' component={Signup} />
                <Stack.Screen name='Forgot' component={ForgotPwdNavs} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
