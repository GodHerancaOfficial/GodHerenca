import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
    AccountSetup, DobScreen, OriginScreen,
    LegalScreen, GuarantorScreen, VehicleScreen
} from "../screens/accountSetup";
import { ContextProvider } from "../contexts/SetupContext";

const Stack = createNativeStackNavigator();

export default function AccountSetupNavs(): any {
    return (
        <ContextProvider>
            <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
                <Stack.Screen name='General' component={AccountSetup} />
                <Stack.Screen name='Dob' component={DobScreen} />
                <Stack.Screen name='Origin' component={OriginScreen} />
                <Stack.Screen name='Guarantor' component={GuarantorScreen} />
                <Stack.Screen name='Vehicle' component={VehicleScreen} />
                <Stack.Screen name='Legal' component={LegalScreen} />
            </Stack.Navigator >
        </ContextProvider>
    )
}