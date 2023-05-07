import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
    AccountSetup, DobScreen, OriginScreen,
    LegalScreen, GuarantorScreen, VehicleScreen, IdentityVerificationScreen
} from "../screens/accountSetup";
import { ContextProvider } from "../contexts/SetupContext";
import MainScreenNavs from "./MainScreens";
const Stack = createNativeStackNavigator();

export default function AccountSetupNavs(): any {
    return (
      <ContextProvider>
        <Stack.Navigator
          screenOptions={{ headerShown: false, animation: "slide_from_right" }}
        >
          <Stack.Screen name="General" component={AccountSetup} />
          <Stack.Screen name="Dob" component={DobScreen} />
          <Stack.Screen name="Origin" component={OriginScreen} />
          <Stack.Screen name="Guarantor" component={GuarantorScreen} />
          <Stack.Screen name="Vehicle" component={VehicleScreen} />
          <Stack.Screen name="Legal" component={LegalScreen} />
          <Stack.Screen name="IdentiyVerification" component={IdentityVerificationScreen} />
          <Stack.Screen name="mainscreens" component={MainScreenNavs} />
        </Stack.Navigator>
      </ContextProvider>
    );
}
