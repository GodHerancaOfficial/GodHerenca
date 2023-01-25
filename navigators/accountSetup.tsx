import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountSetup, DobScreen, OriginScreen, 
    LegalScreen, GuarantorScreen, VehicleScreen } from "../screens/accountSetup";

const Stack = createNativeStackNavigator();

export default function AccountSetupNavs(): any{
    return(
        <Stack.Navigator screenOptions={{headerShown:false, animation:'slide_from_right'}}>
            <Stack.Screen name='General' component={AccountSetup} />
            <Stack.Screen name='Dob' component={DobScreen} />
            <Stack.Screen name='Origin' component={OriginScreen} />
            <Stack.Screen name='Legal' component={LegalScreen} />
            <Stack.Screen name='Guarantor' component={GuarantorScreen} />
            <Stack.Screen name='Vehicle' component={VehicleScreen} />
        </Stack.Navigator>
    )
}